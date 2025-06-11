package com.doctor.Online.Doctor.Application.repository;

import com.doctor.Online.Doctor.Application.entity.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointments, Long> {
//    List<Appointments> findByPatientId(Long patientId);
//    List<Appointments> findByDoctorId(Long doctorId);
}
