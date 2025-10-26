package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.entity.Clientes;
import com.example.demo.model.repository.ClientesRepository;

@Service
public class ClientesService {
    
    private final ClientesRepository clientesRepository;

    public ClientesService(ClientesRepository clientesRepository)
    {
        this.clientesRepository=clientesRepository;
    }
    public List<Clientes> getAllClientes()
    {
        return(List<Clientes>) clientesRepository.findAll();
    }
    public Optional<Clientes> findById(Integer par_id)
    {
        return clientesRepository.findById(par_id);
    }
    public Clientes save(Clientes par_id)
    {
        return clientesRepository.save(par_id);
    }
    public void delete(Clientes par_id)
    {
        clientesRepository.delete(par_id);
    }

    public Optional<Clientes> findByCorreo(String correo) {
        return clientesRepository.findByCorreo(correo);
    }
    
    public Optional<Clientes> authenticateCliente(String correo, String password) {
        return clientesRepository.findByCorreoAndPassword(correo, password);
    }
    
    public boolean existsByCorreo(String correo) {
        return clientesRepository.findByCorreo(correo).isPresent();
    }
}
