package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.LoginDto;
import com.doctor.Online.Doctor.Application.entity.Doctor;
import com.doctor.Online.Doctor.Application.entity.Patient;
import com.doctor.Online.Doctor.Application.repository.DoctorRepository;
import com.doctor.Online.Doctor.Application.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Object login(LoginDto loginDto) {
        if (loginDto.getRole().equals("doctor")) {
            Doctor doctor = doctorRepository.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
            if (doctor != null && doctor.getPassword().equals(loginDto.getPassword())) ;
            return doctor;
        } else if (loginDto.getRole().equals("patient")) {
            Patient patient = patientRepository.findByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword());
            if(patient != null && patient.getPassword().equals(loginDto.getPassword()));
            return patient;
        }
        return null;
    }


}
