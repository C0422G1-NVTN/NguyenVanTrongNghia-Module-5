package com.exam_module_5.controller;

import com.exam_module_5.model.Car;
import com.exam_module_5.model.HouseCar;
import com.exam_module_5.service.ICarService;
import com.exam_module_5.service.IHouseCarService;
import com.exam_module_5.service.ITripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(value = "/houseCarRest")
public class RestHouseCarController {
    @Autowired
    private IHouseCarService iHouseCarService;

    @GetMapping(value = "")
    public ResponseEntity<Page<HouseCar>> getAll(@RequestParam Optional<String> nameHouseCar,
                                                 @PageableDefault(size = 4) Pageable pageable) {
        String name1 = nameHouseCar.orElse("");
        Page<HouseCar> houseCarPage = iHouseCarService.findAllHouseCar("%" + name1 + "%", pageable);
        if (!houseCarPage.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(houseCarPage, HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> deleteHouseCarById(@PathVariable Integer id) {
        this.iHouseCarService.deleteHouseCarById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<HouseCar> findById(@PathVariable Integer id) {
        HouseCar houseCar = this.iHouseCarService.findById(id);
        if (houseCar == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(houseCar,HttpStatus.OK);
    }

    @PostMapping(value = "")
    public ResponseEntity<HouseCar> addHouseCar(@RequestBody HouseCar houseCar) {
        iHouseCarService.addHouseCar(houseCar);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "")
    public ResponseEntity<Void> editHouseCar(@RequestBody HouseCar houseCar) {
        iHouseCarService.editHouseCar(houseCar);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
