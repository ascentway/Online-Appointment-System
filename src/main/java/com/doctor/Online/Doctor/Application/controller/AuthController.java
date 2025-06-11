package com.doctor.Online.Doctor.Application.controller;

import com.doctor.Online.Doctor.Application.dto.LoginDto;
import com.doctor.Online.Doctor.Application.service.AuthService;
import com.doctor.Online.Doctor.Application.service.AuthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/")
    public ResponseEntity<String> loginUser(@RequestBody LoginDto loginDto){
        Object object = authService.login(loginDto);
        if (object != null){
            return ResponseEntity.status(HttpStatus.OK).body("User Logged in Successfully");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad Credentials. Please Try login back with correct Credentials");
    }
}
