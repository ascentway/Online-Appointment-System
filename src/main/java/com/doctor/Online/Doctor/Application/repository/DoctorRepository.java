package com.doctor.Online.Doctor.Application.repository;

import com.doctor.Online.Doctor.Application.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    public Doctor findByEmailAndPassword(String email, String password);
}
