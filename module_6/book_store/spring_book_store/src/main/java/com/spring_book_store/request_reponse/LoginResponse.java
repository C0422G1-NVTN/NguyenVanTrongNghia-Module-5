package com.spring_book_store.request_reponse;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class LoginResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String userName;
    private List<String> roles;

    public LoginResponse(String jwt, String username, List<String> roles) {
        this.token = jwt;
        this.userName = username;
        this.roles = roles;
    }
}
