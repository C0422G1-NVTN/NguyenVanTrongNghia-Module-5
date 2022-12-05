package com.spring_book_store.service;

import com.spring_book_store.dto.BookProjection;
import com.spring_book_store.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IBookService {
    Page<BookProjection> findByTitle(String name, Pageable pageable);

    Optional<Book> findBookById(Long id);
}
