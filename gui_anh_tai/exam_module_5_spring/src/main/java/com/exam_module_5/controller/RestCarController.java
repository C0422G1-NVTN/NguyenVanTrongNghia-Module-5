package com.exam_module_5.controller;

import com.exam_module_5.model.Car;
import com.exam_module_5.model.HouseCar;
import com.exam_module_5.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/carRest")
public class RestCarController {
    @Autowired
    private ICarService iCarService;

    @GetMapping(value = "")
    public ResponseEntity<List<Car>> getAll() {
        List<Car> carList = iCarService.findAll();
        if (carList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }
}
