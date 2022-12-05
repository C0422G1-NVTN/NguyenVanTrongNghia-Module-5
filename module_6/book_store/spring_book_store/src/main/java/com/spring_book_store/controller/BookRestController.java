package com.spring_book_store.controller;

import com.spring_book_store.dto.BookProjection;
import com.spring_book_store.model.Book;
import com.spring_book_store.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/public")
public class BookRestController {
    @Autowired
    private IBookService iBookService;

    @GetMapping("/book")
    public ResponseEntity<Page<BookProjection>> getBook(@RequestParam Optional<String> bookTitle,
                                                        @PageableDefault Pageable pageable) {
        Page<BookProjection> bookPage;
        if (bookTitle.isPresent()) {
            bookPage = iBookService.findByTitle(bookTitle.get(), pageable);
        } else {
            bookPage = iBookService.findByTitle("", pageable);
        }
        return new ResponseEntity<>(bookPage, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Book> findBookById(@PathVariable Long id) {
        Book book = this.iBookService.findBookById(id).orElse(null);
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(book, HttpStatus.OK);
        }
    }

}
