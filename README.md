# HealVeda – Smart Panchakarma Management System

### A Next-Generation Ayurvedic Care Platform

HealVeda is a comprehensive web platform designed to streamline the **Panchakarma therapy management process** for Ayurvedic practitioners and patients.

---

## 🧠 Key Highlights
- 🚀 Smart AI-powered scheduling for Panchakarma treatments
- 💡 Real-world application designed to improve operational efficiency for doctors and patients
- 🔒 Backed by a secure architecture with **Spring Boot (backend)**, **React + Vite (frontend)**, and **MySQL database**

---

## 🏗️ System Architecture

### Overview
- Layered structure ensures modularity and maintainability:
  - **Controller Layer:** Handles HTTP requests/responses via REST APIs.
  - **Service Layer:** Contains core business logic and validation.
  - **DAO / Repository Layer:** Manages database operations through JPA/Hibernate.
- **Database:** MySQL for relational data management.
- **Security:** Spring Security authentication.
- **Build Tool:** Maven.
- **Frontend:** Responsive UI for patients and practitioners with seamless API integration using Axios/Fetch.

---

## ⚙️ Core Features

- **Smart Scheduling** – Auto-manages appointments for pre- and post-Panchakarma treatments.
- **Medication Tracking** – Keeps logs of medicines, dosages, and durations for each phase.
- **Feedback System** – Collects patient feedback at every stage to improve service quality.
- **Treatment Roadmap View** – Visual representation of the complete therapy lifecycle.
- **Centralized Medical Reports** – Stores prescriptions, test reports, and summaries securely.
- **Smart Notifications** – Sends timely updates and reminders through email.

---

## Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React JS • Vite • TypeScript • TailwindCSS |
| **Backend** | Java 17 • Spring Boot • Spring Data JPA • Hibernate |
| **Database** | MySQL |
| **Build Tools** | Maven • npm |
| **Version Control** | Git • GitHub |

---

## Run the Application

### 💻 Frontend (React + Vite)
```bash
# Navigate to the frontend directory
cd AyurSutra

# Install dependencies
npm install

# Start the development server
npm run dev
```

### ☕ Backend (Spring Boot)
```bash
# Navigate to backend directory
cd Backend_Spring_Boot

# Run with Maven wrapper
./mvnw spring-boot:run
# On Windows:
mvnw.cmd spring-boot:run
```

### 🗄️ Database Setup
- Make sure MySQL is running on port 3306
- Create database: `CREATE DATABASE Healdata;`
- Update `application.properties` with your MySQL credentials

---

```
HealVeda/
│
├── Backend_Spring_Boot/
│   ├── src/main/java/com/example/SIH/controller/
│   ├── src/main/java/com/example/SIH/service/
│   ├── src/main/java/com/example/SIH/dao/
│   ├── src/main/resources/application.properties
│   └── pom.xml
│
├── AyurSutra/            ← Frontend (React + Vite)
│   ├── src/components/
│   ├── src/api/
│   └── package.json
│
└── README.md
```

---

## Developer

Built with ❤️ for Ayurveda and modern healthcare technology.

📧 **Contact:** abhinaychaudhary07@gmail.com | 📞 +91 6350136550

## License
This project is licensed under the MIT License.
