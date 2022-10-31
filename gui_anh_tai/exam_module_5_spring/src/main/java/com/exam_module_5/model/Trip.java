package com.exam_module_5.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "trip")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_id")
    private Integer id;

    @Column(name = "address_come")
    private String addressCome;

    @Column(name = "address_back")
    private String addressBack;

    @Column(name = "time_come")
    private String timeCome;

    @Column(name = "time_back")
    private String timeBack;

    @JsonIgnore
    @OneToMany(mappedBy = "trip")
    Set<HouseCar> houseCarSet;

    public Trip() {
    }

    public Trip(Integer id, String addressCome, String addressBack, String timeCome, String timeBack, Set<HouseCar> houseCarSet) {
        this.id = id;
        this.addressCome = addressCome;
        this.addressBack = addressBack;
        this.timeCome = timeCome;
        this.timeBack = timeBack;
        this.houseCarSet = houseCarSet;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAddressCome() {
        return addressCome;
    }

    public void setAddressCome(String addressCome) {
        this.addressCome = addressCome;
    }

    public String getAddressBack() {
        return addressBack;
    }

    public void setAddressBack(String addressBack) {
        this.addressBack = addressBack;
    }

    public String getTimeCome() {
        return timeCome;
    }

    public void setTimeCome(String timeCome) {
        this.timeCome = timeCome;
    }

    public String getTimeBack() {
        return timeBack;
    }

    public void setTimeBack(String timeBack) {
        this.timeBack = timeBack;
    }

    public Set<HouseCar> getHouseCarSet() {
        return houseCarSet;
    }

    public void setHouseCarSet(Set<HouseCar> houseCarSet) {
        this.houseCarSet = houseCarSet;
    }
}
