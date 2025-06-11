package com.doctor.Online.Doctor.Application.repository;

import com.doctor.Online.Doctor.Application.entity.Slot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SlotRepository extends JpaRepository<Slot, Long> {

}
