package com.exam_module_5.controller;

import com.exam_module_5.model.HouseCar;
import com.exam_module_5.model.Trip;
import com.exam_module_5.service.ITripService;
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
@RequestMapping(value = "/tripRest")
public class RestTripController {
    @Autowired
    private ITripService iTripService;

    @GetMapping(value = "")
    public ResponseEntity<List<Trip>> getAll() {
        List<Trip> tripList = iTripService.findAll();
        if (tripList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(tripList, HttpStatus.OK);
    }


}
