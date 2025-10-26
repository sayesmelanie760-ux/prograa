package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.entity.Proveedores;
import com.example.demo.model.repository.ProveedoresRepository;

@Service
public class ProveedoresService {

    private final ProveedoresRepository proveedoresRepository;

    public ProveedoresService(ProveedoresRepository proveedoresRepository){
        this.proveedoresRepository=proveedoresRepository;
    }

    public List<Proveedores> getProveedores(){
        return (List<Proveedores>) proveedoresRepository.findAll();
    }

    public Optional<Proveedores> findById(Integer par_id){
        return proveedoresRepository.findById(par_id);
    }

    public Proveedores save(Proveedores objProveedores){
        return proveedoresRepository.save(objProveedores);
    }

    public void delete(Proveedores proveedor){
        proveedoresRepository.delete(proveedor);
    }

}
