package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.PatientDto;
import com.doctor.Online.Doctor.Application.entity.Patient;
import com.doctor.Online.Doctor.Application.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public void savePatient(PatientDto patientDto){
        Patient patient = new Patient();
        patient.setFirstName(patientDto.getFirstName());
        patient.setLastName(patientDto.getLastName());
        patient.setEmail(patientDto.getEmail());
        patient.setPassword(patientDto.getPassword());
        patient.setMobileNumber(patientDto.getMobileNumber());
        patient.setCity(patientDto.getCity());
        patient.setState(patientDto.getState());
        patient.setHouseNumberOrName(patientDto.getHouseNumberOrName());
        patient.setStreetName(patientDto.getStreetName());

        patientRepository.save(patient);

    }
}
