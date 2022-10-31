package com.exam_module_5.service.impl;

import com.exam_module_5.model.Trip;
import com.exam_module_5.repository.ITripRepository;
import com.exam_module_5.service.ITripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripService implements ITripService {
    @Autowired
    private ITripRepository iTripRepository;

    @Override
    public List<Trip> findAll() {
        return iTripRepository.findAll();
    }
}
