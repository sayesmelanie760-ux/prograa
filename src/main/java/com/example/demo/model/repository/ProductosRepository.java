package com.example.demo.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.entity.Productos;

public interface ProductosRepository extends CrudRepository<Productos, String>{
    
}
