package com.doctor.Online.Doctor.Application.dto;

public class PatientDto {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Long mobileNumber;
    private String city;
    private String state;
    private String houseNumberOrName;
    private String streetName;

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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getHouseNumberOrName() {
        return houseNumberOrName;
    }

    public void setHouseNumberOrName(String houseNumberOrName) {
        this.houseNumberOrName = houseNumberOrName;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public PatientDto(String firstName, String lastName, String email, String password, Long mobileNumber, String city, String state, String houseNumberOrName, String streetName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.city = city;
        this.state = state;
        this.houseNumberOrName = houseNumberOrName;
        this.streetName = streetName;
    }

    @Override
    public String toString() {
        return "PatientDto{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", mobileNumber=" + mobileNumber +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", houseNumberOrName='" + houseNumberOrName + '\'' +
                ", streetName='" + streetName + '\'' +
                '}';
    }
}
