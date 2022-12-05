package com.spring_book_store.repository;


import com.spring_book_store.dto.BookProjection;
import com.spring_book_store.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IBookRepository extends JpaRepository<Book, Long> {
    @Query(value = "SELECT \n" +
            "    b.id AS id,\n" +
            "    b.title AS title,\n" +
            "    b.image_url AS imageUrl,\n" +
            "    b.price AS price,\n" +
            "    COUNT(id.book_id) AS sold\n" +
            "FROM\n" +
            "    book AS b\n" +
            "        LEFT JOIN\n" +
            "    invoice_detail AS id ON id.book_id = b.id\n" +
            "        LEFT JOIN\n" +
            "    invoice AS i ON i.id = id.invoice_id\n" +
            "WHERE\n" +
            "    b.title LIKE CONCAT('%',?1, '%')\n" +
            "GROUP BY b.id\n" +
            "ORDER BY b.image_url DESC ", nativeQuery = true,
            countQuery = "select * from book where title like concat('%',?1,'%') ")
    Page<BookProjection> findByTitle(String name, Pageable pageable);

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    book_store.book\n" +
            "JOIN\n" +
            " author ON book.author_id = author.id\n" +
            "        JOIN\n" +
            "    book_detail ON book.id = book_detail.book_id\n" +
            "        JOIN\n" +
            "    category ON book_detail.category_id = category.id\n" +
            "WHERE\n" +
            "    book.id = :id", nativeQuery = true)
    Optional<Book> findBookById(@Param("id") Long id);
}
