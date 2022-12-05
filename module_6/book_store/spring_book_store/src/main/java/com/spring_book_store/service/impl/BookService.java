package com.spring_book_store.service.impl;


import com.spring_book_store.dto.BookProjection;
import com.spring_book_store.model.Book;
import com.spring_book_store.repository.IBookRepository;
import com.spring_book_store.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository iBookRepository;


    @Override
    public Page<BookProjection> findByTitle(String name, Pageable pageable) {
        return iBookRepository.findByTitle(name, pageable);
    }

    @Override
    public Optional<Book> findBookById(Long id) {
        return iBookRepository.findBookById(id);
    }
}
