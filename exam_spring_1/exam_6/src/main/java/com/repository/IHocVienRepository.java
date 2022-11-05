package com.repository;

import com.dto.IHocVienDto;
import com.model.HocVien;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ILopHocRepository extends JpaRepository<HocVien, Integer> {

    @Query(nativeQuery = true, value =)
    Page<IHocVienDto> findAllHocVien(String tenLopHoc, Pageable pageable);
}
