package com.doctor.Online.Doctor.Application.service;

import com.doctor.Online.Doctor.Application.dto.SlotDto;
import com.doctor.Online.Doctor.Application.entity.Slot;
import com.doctor.Online.Doctor.Application.repository.SlotRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SlotServiceImpl implements SlotService{
    @Autowired
    private SlotRepository slotRepository;
    public void saveSlot(SlotDto slotDto){
        ModelMapper model = new ModelMapper();
        Slot slot = model.map(slotDto, Slot.class);
        System.out.println(slot);
        slotRepository.save(slot);
    }
}
