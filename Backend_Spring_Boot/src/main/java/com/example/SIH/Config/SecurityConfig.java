package com.example.SIH.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Autowired
    private PatientDetailsService patientDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance(); // plain text (dev only)
    }

    @Bean
    public DaoAuthenticationProvider authProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(patientDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and() // Create a CorsFilter using the "corsConfigurationSource" bean or default
                          // config
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/insert_patient", "/insertingDoctor", "/login/**", "/getDoctornameByLocation/**",
                        "/doctorgo/**", "/getAllDoctors", "/clientsInfo/**", "/giveFeedback/**",
                        "/sendMail/**", "/schedule_mapping/**")
                .permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic(); // Basic Auth
        return http.build();
    }
}
