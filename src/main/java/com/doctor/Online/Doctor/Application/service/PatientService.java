package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.PatientDto;
import org.springframework.stereotype.Service;

public interface PatientService{
    void savePatient(PatientDto patientDto);
}
