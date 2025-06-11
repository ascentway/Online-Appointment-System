package com.doctor.Online.Doctor.Application.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import java.sql.Date;
import java.time.LocalTime;

@Entity(name = "Appointments")
public class Appointments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;

    @OneToOne
    @JoinColumn(name="pid")
    private Patient patient;
    @OneToOne
    @JoinColumn(name = "did")
    private Doctor doctor;
    @OneToOne
    @JoinColumn(name = "sid")
    private Slot slot;

    @CreationTimestamp
    private LocalTime appointmentBooked;
    private Date dateBooked;

    public Appointments() {
        super();
    }

    public Long getAid() {
        return aid;
    }

    public void setAid(Long aid) {
        this.aid = aid;
    }

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


    public Appointments(Long aid, Patient patient, Doctor doctor, Slot slot, LocalTime appointmentBooked, LocalTime appointmentTime, Date dateBooked, String status) {
        this.aid = aid;
        this.patient = patient;
        this.doctor = doctor;
        this.slot = slot;
        this.appointmentBooked = appointmentBooked;
        this.dateBooked = dateBooked;
            }
}
