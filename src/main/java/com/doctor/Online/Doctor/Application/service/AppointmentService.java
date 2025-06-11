package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.AppointmentsDto;
import com.doctor.Online.Doctor.Application.entity.Appointments;

import java.util.List;

public interface AppointmentService {
    Appointments scheduleAppointment(AppointmentsDto appointmentsDto);
//    ist<AppointmentsDto> getAppointmentsByPatientId(Long pid);
//    List<AppointmentsDto> getAppointmentsByDoctorId(Long did);
//    AppointmentsDto updateAppointmentStatus(Long aid, String status);
}
