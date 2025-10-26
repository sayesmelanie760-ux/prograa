package com.example.demo.model.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.entity.Clientes;

public interface ClientesRepository extends CrudRepository<Clientes, Integer>{

    Optional<Clientes> findByCorreo(String correo);
    Optional<Clientes> findByCorreoAndPassword(String correo, String password);
    
}

