package com.doctor.Online.Doctor.Application.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@ToString
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long did;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Long mobileNumber;
    private String specialization;
    private String hospital;
    private int yearsOfExperience;
    @JsonIgnore
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
    private List<Slot> slots = new ArrayList<>();

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

    public Long getDid() {
        return did;
    }

    public void setDid(Long did) {
        this.did = did;
    }

    public List<Slot> getSlots() {
        return slots;
    }

    public void setSlots(List<Slot> slots) {
        this.slots = slots;
    }
}
