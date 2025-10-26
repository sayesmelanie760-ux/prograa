package com.example.demo.model.entity;

import lombok.Data;

@Data
public class LoginRequest {
    private String correo;
    private String password;
}