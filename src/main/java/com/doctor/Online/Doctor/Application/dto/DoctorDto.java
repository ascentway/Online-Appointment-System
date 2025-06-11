package com.doctor.Online.Doctor.Application.dto;

import com.doctor.Online.Doctor.Application.entity.Slot;

import java.util.ArrayList;
import java.util.List;

public class DoctorDto {
    Long did;
    String firstName;
    String lastName;
    String email;
    String password;
    Long mobileNumber;
    String specialization;
    String hospital;
    int yearsOfExperience;
    List<Slot> slots = new ArrayList<>();

    public Long getDid() {
        return did;
    }

    public void setDid(Long did) {
        this.did = did;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(Long mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public List<Slot> getSlots() {
        return slots;
    }

    public void setSlots(List<Slot> slots) {
        this.slots = slots;
    }

    @Override
    public String toString() {
        return "DoctorDto{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", mobileNumber=" + mobileNumber +
                ", specialization='" + specialization + '\'' +
                ", hospital='" + hospital + '\'' +
                ", yearsOfExperience=" + yearsOfExperience +
                '}';
    }
}
