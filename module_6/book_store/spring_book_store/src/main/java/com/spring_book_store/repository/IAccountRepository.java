package com.spring_book_store.repository;

import com.spring_book_store.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account, Long> {
Account findAccountByUsername(String username);
}
