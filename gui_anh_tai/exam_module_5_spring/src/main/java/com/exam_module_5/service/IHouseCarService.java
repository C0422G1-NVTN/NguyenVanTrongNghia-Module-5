package com.exam_module_5.service;

import com.exam_module_5.model.HouseCar;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface IHouseCarService {
    Page<HouseCar>findAllHouseCar(String name, Pageable pageable);

    void addHouseCar(HouseCar houseCar);

    void editHouseCar(HouseCar houseCar);

    HouseCar findById(int id);

    void deleteHouseCarById(Integer id);
}
