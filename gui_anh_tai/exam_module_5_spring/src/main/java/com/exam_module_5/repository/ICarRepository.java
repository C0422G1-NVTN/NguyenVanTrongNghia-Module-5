package com.exam_module_5.repository;

import com.exam_module_5.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarRepository extends JpaRepository<Car,Integer> {
}
