package com.exam_module_5.repository;

import com.exam_module_5.model.HouseCar;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IHouseCarRepository extends JpaRepository<HouseCar, Integer> {
    @Query(nativeQuery = true, value = "select * from house_car where name_house_car like ?1",
            countQuery = "select * from house_car where name_house_car like ?1")
    Page<HouseCar> findAllHouseCar(String nameHouseCar, Pageable pageable);

    @Modifying
    @Query(value = "delete from house_car where id=:id", nativeQuery = true)
    void deleteHouseCarById(@Param("id") Integer id);

    @Modifying
    @Query(value = "insert into house_car(email,name_house_car,phone,trip_id,car_id)" + "values(?1,?2,?3,?4,?5)", nativeQuery = true)
    void addHouseCar(String email,
                     String name_house_car,
                     String phone,
                     Integer car_id,
                     Integer trip_id
    );

    @Modifying
    @Query(value = "update house_car set email= ?1,name_house_car= ?2,phone= ?3,trip_id= ?4,car_id= ?5 where id= ?6", nativeQuery = true)
    void editHouseCar(String email,
                      String name_house_car,
                      String phone,
                      Integer car_id,
                      Integer trip_id,
                      Integer id);
}
