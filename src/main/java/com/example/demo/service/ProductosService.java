package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.entity.Productos;
import com.example.demo.model.repository.ProductosRepository;

@Service
public class ProductosService {
    private final ProductosRepository productosRepository;

    public ProductosService(ProductosRepository productosRepository){
        this.productosRepository=productosRepository;
    }

    public List<Productos> getAllProductos(){
        return (List<Productos>) productosRepository.findAll();
    }

    public Optional<Productos> findById(String codigo){
        return productosRepository.findById(codigo);
    }

    public Productos save(Productos objProductos){
        return productosRepository.save(objProductos);
    }

    public void delete(Productos productos){
        productosRepository.delete(productos);
    }
}
