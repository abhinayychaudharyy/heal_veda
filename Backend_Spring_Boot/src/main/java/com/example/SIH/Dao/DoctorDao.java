package com.example.SIH.Dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.SIH.Entity.DoctorEntity;

@Repository
public class DoctorDao {

	@Autowired
	SessionFactory sf;

	public String insert_doc(DoctorEntity obj) {
		Session session = sf.openSession();
		try {
			session.beginTransaction();

			DoctorEntity existing = session.get(DoctorEntity.class, obj.getDocName());
			if (existing != null) {
				session.getTransaction().rollback();
				return "Error: Doctor with name '" + obj.getDocName() + "' already exists.";
			}

			session.save(obj);
			session.getTransaction().commit();
			return "Doctor inserted successfully";
		} catch (Exception e) {
			if (session.getTransaction().isActive()) {
				session.getTransaction().rollback();
			}
			return "Error while inserting doctor: " + e.getMessage();
		} finally {
			session.close();
		}
	}

	public DoctorEntity findByNameAndPassword(String name, String password) {
		Session session = sf.openSession();
		Criteria cr = session.createCriteria(DoctorEntity.class);
		cr.add(Restrictions.eq("docName", name));
		cr.add(Restrictions.eq("password", password));

		DoctorEntity user = (DoctorEntity) cr.uniqueResult();
		session.close();

		return user;
	}

	public List getClientsForDoctor(String docname) {
		Session session = sf.openSession();
		Criteria cr = session.createCriteria(DoctorEntity.class);
		cr.add(Restrictions.eq("DocName", docname));
		cr.setProjection(Projections.property("patient_info"));
		List clients = cr.list();
		session.close();

		return clients;
	}

	public DoctorEntity searchdoctorbyname(String docName) {
		Session session = sf.openSession();

		Criteria criteria = session.createCriteria(DoctorEntity.class);
		criteria.add(Restrictions.eq("docName", docName));
		criteria.setMaxResults(1);
		DoctorEntity doctor1 = (DoctorEntity) criteria.uniqueResult();

		return doctor1;
	}

	public List<DoctorEntity> getAllDoctors() {
		Session session = sf.openSession();
		try {
			Criteria criteria = session.createCriteria(DoctorEntity.class);
			return criteria.list();
		} finally {
			session.close();
		}
	}

}
