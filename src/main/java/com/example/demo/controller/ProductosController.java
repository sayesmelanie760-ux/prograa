package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.Productos;
import com.example.demo.service.ProductosService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9090"})
public class ProductosController {
    @Autowired
    ProductosService productosService;

    @GetMapping("api/listaproductos")
    public List<Productos> getAllProductos(){
        return productosService.getAllProductos();
    }

    @GetMapping("api/producto/{codigo}")
    public Productos getProductoByCodigo(@PathVariable("codigo") String codigo){
        Optional<Productos> productoOptional = productosService.findById(codigo);
        return productoOptional.orElse(null);
    }

    @PostMapping(path = "api/addproducto")
    public Productos addProducto(@RequestBody Productos newProducto){
        String tmp_codigo = newProducto.getCodigo();
        if(productosService.findById(tmp_codigo).isPresent()){
            return null;
        }
        else{
            return productosService.save(newProducto);
        }
    }

    @PutMapping(path = "api/updateproductos")
    public Productos updateProductos(@RequestBody Productos par_Productos){
        String tmp_codigo = par_Productos.getCodigo();
        if (productosService.findById(tmp_codigo).isPresent()){
            return productosService.save(par_Productos);
        } else {
            return null;
        }
    }

    @DeleteMapping(path = "api/deleteproductos/{id}")
    public void delete(@PathVariable("id") String codigo){
        Optional<Productos> productoOptional = productosService.findById(codigo);
        productoOptional.ifPresent(productosService::delete);
    }
}
