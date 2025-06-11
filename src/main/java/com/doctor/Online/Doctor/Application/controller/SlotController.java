package com.doctor.Online.Doctor.Application.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.doctor.Online.Doctor.Application.dto.SlotDto;
import com.doctor.Online.Doctor.Application.service.SlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/slot")
public class SlotController {
    @Autowired
    SlotService slotService;
    @PostMapping("/save")
    public ResponseEntity<String> saveSlot(@RequestBody SlotDto slotDto){
        System.out.println(slotDto.toString());
        slotService.saveSlot(slotDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Slot Successfully Created");
    }
}
