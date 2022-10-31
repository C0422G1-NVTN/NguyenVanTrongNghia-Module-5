package com.exam_module_5.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "car_id")
    private Integer id;

    @Column(name = "number_car")
    private String numberCar;

    @Column(name = "type_car")
    private String typeCar;

    @JsonIgnore
    @OneToMany(mappedBy = "car")
    Set<HouseCar> houseCarSet;

    public Car() {
    }

    public Car(Integer id, String numberCar, String typeCar, Set<HouseCar> houseCarSet) {
        this.id = id;
        this.numberCar = numberCar;
        this.typeCar = typeCar;
        this.houseCarSet = houseCarSet;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumberCar() {
        return numberCar;
    }

    public void setNumberCar(String numberCar) {
        this.numberCar = numberCar;
    }

    public String getTypeCar() {
        return typeCar;
    }

    public void setTypeCar(String typeCar) {
        this.typeCar = typeCar;
    }

    public Set<HouseCar> getHouseCarSet() {
        return houseCarSet;
    }

    public void setHouseCarSet(Set<HouseCar> houseCarSet) {
        this.houseCarSet = houseCarSet;
    }
}
