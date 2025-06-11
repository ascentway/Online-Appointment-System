package com.doctor.Online.Doctor.Application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class OnlineDoctorApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineDoctorApplication.class, args);
	}

}
