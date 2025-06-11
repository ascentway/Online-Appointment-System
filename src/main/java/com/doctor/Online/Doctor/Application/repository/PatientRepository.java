package com.doctor.Online.Doctor.Application.repository;

import com.doctor.Online.Doctor.Application.entity.Doctor;
import com.doctor.Online.Doctor.Application.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    public Patient findByEmailAndPassword(String email, String password);
}
