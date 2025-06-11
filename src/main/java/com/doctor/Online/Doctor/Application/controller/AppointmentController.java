package com.doctor.Online.Doctor.Application.controller;

import com.doctor.Online.Doctor.Application.dto.AppointmentsDto;
import com.doctor.Online.Doctor.Application.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    public ResponseEntity<String> scheduleAppointment(@RequestBody AppointmentsDto appointmentsDto){
        Object object = appointmentService.scheduleAppointment(appointmentsDto);
        return ResponseEntity.status(HttpStatus.OK).body("Appointment Scheduled");
    }

//    @GetMapping("/patient/{pid}")
//    public ResponseEntity<String> getAppointmentsByPatient(@PathVariable Long pid){
//        List<AppointmentsDto> appointmentsDto1 =  appointmentService.getAppointmentsByPatientId(pid);
//        return ResponseEntity.status(HttpStatus.FOUND).body("Appointments are");
//    }
//
//    @GetMapping("/doctor/{did}")
//    public ResponseEntity<String> getAppointmentsByDoctor(@PathVariable Long did){
//        List<AppointmentsDto> appointmentsDto2 = appointmentService.getAppointmentsByDoctorId(did);
//        return ResponseEntity.status(HttpStatus.FOUND).body("Appointments Scheduled are");
//    }
//    @PutMapping("/{aid}/status")
//    public ResponseEntity<String> updateAppointmentStatus(
//        @PathVariable Long aid, @RequestParam String status){
//        AppointmentsDto updatedAppointment = appointmentService.updateAppointmentStatus(aid, status);
//        return ResponseEntity.status(HttpStatus.OK).body("Status Updated");
//    }
}
