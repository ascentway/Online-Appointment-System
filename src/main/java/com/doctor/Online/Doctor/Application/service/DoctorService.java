package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.DoctorDto;
import com.doctor.Online.Doctor.Application.entity.Doctor;

import java.util.List;

public interface DoctorService {
    void saveDoctor(DoctorDto doctorDto);
    List<DoctorDto> getAllDoctors();
}
