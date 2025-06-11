package com.doctor.Online.Doctor.Application.controller;

import com.doctor.Online.Doctor.Application.dto.DoctorDto;
import com.doctor.Online.Doctor.Application.entity.Doctor;
import com.doctor.Online.Doctor.Application.service.DoctorService;
import com.doctor.Online.Doctor.Application.service.DoctorServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    DoctorService doctorService;
    @PostMapping("/save")
    public ResponseEntity<String> saveDoctorDetails(@RequestBody DoctorDto doctorDto){
        System.out.println(doctorDto.toString());
        doctorService.saveDoctor(doctorDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Doctor Successfully Added");
    }
    @GetMapping("/allDoctors")
    public ResponseEntity<List<DoctorDto>> getAllDoctorDetails(){
        List<DoctorDto> doctors =  doctorService.getAllDoctors();
        return ResponseEntity.status(HttpStatus.OK).body(doctors);
    }
}
