package com.example.demo.model.entity;

import lombok.Data;

@Data
public class LoginResponse {
    private boolean success;
    private String message;
    private int idCliente;
    private String nombre;
    
    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
    
    public LoginResponse(boolean success, String message, int idCliente, String nombre) {
        this.success = success;
        this.message = message;
        this.idCliente = idCliente;
        this.nombre = nombre;
    }
}