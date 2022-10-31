package com.exam_module_5.repository;

import com.exam_module_5.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITripRepository extends JpaRepository<Trip,Integer> {
}
