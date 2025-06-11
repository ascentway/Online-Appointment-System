package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.DoctorDto;
import com.doctor.Online.Doctor.Application.entity.Doctor;
import com.doctor.Online.Doctor.Application.repository.DoctorRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public void saveDoctor(DoctorDto doctorDto){
        Doctor doctor = new Doctor();
    doctor.setFirstName(doctorDto.getFirstName());
    doctor.setLastName(doctorDto.getLastName());
    doctor.setEmail(doctorDto.getEmail());
    doctor.setPassword(doctorDto.getPassword());
    doctor.setMobileNumber(doctorDto.getMobileNumber());
    doctor.setSpecialization(doctorDto.getSpecialization());
    doctor.setHospital(doctorDto.getHospital());
    doctor.setYearsOfExperience(doctorDto.getYearsOfExperience());
         doctorRepository.save(doctor);
    }

    @Override
    public List<DoctorDto> getAllDoctors() {
        List<Doctor> doctorList = doctorRepository.findAll();
        ModelMapper model = new ModelMapper();

        List<DoctorDto> docs = doctorList.stream().map(doc -> model.map(doc,DoctorDto.class)).collect(Collectors.toList());
        return docs;
    }
}
