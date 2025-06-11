package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.LoginDto;



public interface AuthService {
    public Object login(LoginDto loginDto);
}
