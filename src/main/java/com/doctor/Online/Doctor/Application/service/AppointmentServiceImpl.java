package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.AppointmentsDto;
import com.doctor.Online.Doctor.Application.entity.Appointments;
import com.doctor.Online.Doctor.Application.repository.AppointmentRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService{
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public Appointments scheduleAppointment(AppointmentsDto appointmentsDto) {
        Appointments appointments= modelMapper.map(appointmentsDto, Appointments.class);
        return appointmentRepository.save(appointments);

    }

//    public List<Appointments> getAppointmentsByPatientId(Long pid){
//        return appointmentRepository.findByPatientId(pid);
//    }
//    public List<Appointments> getAppointmentsByDoctorId(Long did){
//        return appointmentRepository.findByDoctorId(did);
//    }

//    @Override
//    public AppointmentsDto updateAppointmentStatus(Long aid, String status) {
//        return null;
//    }
//
//    public Appointments updateAppointmentStatus(long aid, String status){
//        Appointments appointments = appointmentRepository.findById(aid)
//                .orElseThrow(()-> new RuntimeException("Appointment Not Found"));
//        appointments.setStatus(status);
//        return appointmentRepository.save(appointments);
//    }
//

}
