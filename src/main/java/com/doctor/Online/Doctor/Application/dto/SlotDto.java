package com.doctor.Online.Doctor.Application.dto;

import com.doctor.Online.Doctor.Application.entity.Doctor;

import java.sql.Time;
import java.time.LocalTime;

public class SlotDto {
    Doctor doctor;
    LocalTime startTime;
    LocalTime endTime;
    String status;

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

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    @Override
    public String toString() {
        return "SlotDto{" +
                "startTime=" + startTime +
                ", endTime=" + endTime +
                ", status='" + status + '\'' +
                ", doctor=" + doctor +
                '}';
    }
}
