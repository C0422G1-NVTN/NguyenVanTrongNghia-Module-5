package com.spring_book_store.dto;

public interface BookProjection {
    Long getID();

    String getTitle();

    String getImageUrl();

    Double getPrice();

    Integer getSold();
}
