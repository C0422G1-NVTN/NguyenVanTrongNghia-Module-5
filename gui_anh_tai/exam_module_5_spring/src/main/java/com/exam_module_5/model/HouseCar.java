package com.exam_module_5.model;

import javax.persistence.*;

@Entity
@Table(name = "house_car")
public class HouseCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "car_id", referencedColumnName = "car_id")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id")
    private Trip trip;

    @Column(name = "name_house_car")
    private String nameHouseCar;

    private String phone;

    private String email;

    public HouseCar() {
    }

    public HouseCar(Integer id, Car car, Trip trip, String nameHouseCar, String phone, String email) {
        this.id = id;
        this.car = car;
        this.trip = trip;
        this.nameHouseCar = nameHouseCar;
        this.phone = phone;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public String getNameHouseCar() {
        return nameHouseCar;
    }

    public void setNameHouseCar(String nameHouseCar) {
        this.nameHouseCar = nameHouseCar;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
