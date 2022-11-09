package com.spring_book_store.model;

import javax.persistence.*;
import java.awt.print.Book;

public class InvoiceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantity;


    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "invoice_id",referencedColumnName = "id")
    private Invoice invoice;
}
