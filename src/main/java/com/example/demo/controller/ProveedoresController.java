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

import com.example.demo.model.entity.Proveedores;
import com.example.demo.service.ProveedoresService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9090"})
public class ProveedoresController {
    @Autowired
    ProveedoresService proveedoresService;
    @GetMapping("api/listaproveedores")
    public List<Proveedores> getProveedores(){
        return proveedoresService.getProveedores();
    }

    @GetMapping("api/proveedorid/{id}")
    public Proveedores getProveedorById(@PathVariable("id") Integer id){
        Optional<Proveedores> proveedorOptional = proveedoresService.findById(id);
        return proveedorOptional.orElse(null);
    }

    @PostMapping("api/createproveedor")
    public Proveedores addProveedor(@RequestBody Proveedores proveedor){
        int tmp_proveedor = proveedor.getIdProveedor();
        if(proveedoresService.findById(tmp_proveedor).isPresent()){
            return null;
        } else{
            return proveedoresService.save(proveedor);
        }
    }

    @PutMapping(path = "api/updateproveedor")
    public Proveedores updateProveedor(@RequestBody Proveedores proveedor){
        int tmp_proveedor = proveedor.getIdProveedor();
        if(proveedoresService.findById(tmp_proveedor).isPresent()){
            return proveedoresService.save(proveedor);
        } else{
            return null;
        }
    }

    @DeleteMapping("api/deleteproveedor/{id}")
    public void deleteProveedor(@PathVariable("id") Integer id){
        Optional<Proveedores> proveedorOptional = proveedoresService.findById(id);
        proveedorOptional.ifPresent(proveedoresService::delete);
    }

}
