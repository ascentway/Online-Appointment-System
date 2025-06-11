package com.doctor.Online.Doctor.Application.dto;

import com.doctor.Online.Doctor.Application.entity.Doctor;
import com.doctor.Online.Doctor.Application.entity.Patient;
import com.doctor.Online.Doctor.Application.entity.Slot;

import java.time.LocalTime;
import java.util.Date;

public class AppointmentsDto {
    Patient patient;
    Doctor doctor;
    Slot slot;
    LocalTime appointmentBooked;
    Date dateBooked;

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Slot getSlot() {
        return slot;
    }

    public void setSlot(Slot slot) {
        this.slot = slot;
    }

    public LocalTime getAppointmentBooked() {
        return appointmentBooked;
    }

    public void setAppointmentBooked(LocalTime appointmentBooked) {
        this.appointmentBooked = appointmentBooked;
    }

    public Date getDateBooked() {
        return dateBooked;
    }

    public void setDateBooked(Date dateBooked) {
        this.dateBooked = dateBooked;
    }

}
