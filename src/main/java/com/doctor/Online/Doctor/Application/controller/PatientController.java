package com.doctor.Online.Doctor.Application.controller;


import com.doctor.Online.Doctor.Application.dto.PatientDto;
import com.doctor.Online.Doctor.Application.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    PatientService patientService;
    @PostMapping("/save")
    public ResponseEntity<String> savePatientDetails(@RequestBody PatientDto patientDto){
        System.out.println(patientDto.toString());
        patientService.savePatient(patientDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Patient Added Successfully");
    }
}
