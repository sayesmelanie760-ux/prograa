package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.LoginRequest;
import com.example.demo.model.entity.LoginResponse;
import com.example.demo.model.entity.Clientes;
import com.example.demo.service.ClientesService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9090"})
public class AuthController {
    
    @Autowired
    private ClientesService clientesService;
    
    @PostMapping("api/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        try {
            // Validar campos obligatorios
            if (loginRequest.getCorreo() == null || loginRequest.getCorreo().trim().isEmpty() ||
                loginRequest.getPassword() == null || loginRequest.getPassword().trim().isEmpty()) {
                return new LoginResponse(false, "Correo y contraseña son obligatorios");
            }
            
            // Buscar cliente por correo y contraseña
            Optional<Clientes> clienteOptional = clientesService.authenticateCliente(
                loginRequest.getCorreo().trim(), 
                loginRequest.getPassword()
            );
            
            if (clienteOptional.isPresent()) {
                Clientes cliente = clienteOptional.get();
                return new LoginResponse(true, "Login exitoso", cliente.getIdCliente(), cliente.getNombre());
            } else {
                return new LoginResponse(false, "Credenciales incorrectas");
            }
            
        } catch (Exception e) {
            return new LoginResponse(false, "Error interno del servidor");
        }
    }
    
    @PostMapping("api/register")
    public LoginResponse register(@RequestBody Clientes cliente) {
        try {
            // Validar campos obligatorios
            if (cliente.getNombre() == null || cliente.getNombre().trim().isEmpty() ||
                cliente.getCorreo() == null || cliente.getCorreo().trim().isEmpty() ||
                cliente.getPassword() == null || cliente.getPassword().trim().isEmpty()) {
                return new LoginResponse(false, "Nombre, correo y contraseña son obligatorios");
            }
            
            // Verificar si el correo ya existe
            if (clientesService.existsByCorreo(cliente.getCorreo().trim())) {
                return new LoginResponse(false, "El correo ya está registrado");
            }
            
            // Guardar nuevo cliente
            cliente.setCorreo(cliente.getCorreo().trim());
            cliente.setNombre(cliente.getNombre().trim());
            Clientes nuevoCliente = clientesService.save(cliente);
            
            return new LoginResponse(true, "Registro exitoso", nuevoCliente.getIdCliente(), nuevoCliente.getNombre());
            
        } catch (Exception e) {
            return new LoginResponse(false, "Error al registrar cliente");
        }
    }
}