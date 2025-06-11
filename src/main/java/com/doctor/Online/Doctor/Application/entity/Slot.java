package com.doctor.Online.Doctor.Application.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity(name = "slot")

public class Slot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sid;
    @ManyToOne
    @JoinColumn(name = "did")
    private Doctor doctor;
    private LocalTime startTime;
    private LocalTime endTime;
    private String status;

    public Slot(Long sid, Doctor doctor, LocalTime startTime, LocalTime endTime, String status) {
        this.sid = sid;
        this.doctor = doctor;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
    }

    public Slot() {
        super();
    }

    public Long getSid() {
        return sid;
    }

    public void setSid(Long sid) {
        this.sid = sid;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Slot{" +
                "sid=" + sid +
                ", doctor=" + doctor +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", status='" + status + '\'' +
                '}';
    }
}
