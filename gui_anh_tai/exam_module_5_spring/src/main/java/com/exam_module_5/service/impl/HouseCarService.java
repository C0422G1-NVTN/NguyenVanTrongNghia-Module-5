package com.exam_module_5.service.impl;

import com.exam_module_5.model.HouseCar;
import com.exam_module_5.repository.IHouseCarRepository;
import com.exam_module_5.service.IHouseCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HouseCarService implements IHouseCarService {
    @Autowired
    private IHouseCarRepository iHouseCarRepository;

    @Override
    public Page<HouseCar> findAllHouseCar(String nameHouseCar, Pageable pageable) {
        return iHouseCarRepository.findAllHouseCar(nameHouseCar,pageable);
    }

    @Override
    public void addHouseCar(HouseCar houseCar) {
       iHouseCarRepository.addHouseCar(houseCar.getEmail(), houseCar.getNameHouseCar(), houseCar.getPhone(), houseCar.getCar().getId(),houseCar.getTrip().getId());
    }

    @Override
    public void editHouseCar(HouseCar houseCar) {
        iHouseCarRepository.editHouseCar(houseCar.getEmail(),houseCar.getNameHouseCar(),houseCar.getPhone(),houseCar.getCar().getId(),houseCar.getTrip().getId(),houseCar.getId());
    }

    @Override
    public HouseCar findById(int id) {
        return iHouseCarRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteHouseCarById(Integer id) {
        iHouseCarRepository.deleteHouseCarById(id);
    }
}
