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

import com.example.demo.model.entity.Clientes;
import com.example.demo.service.ClientesService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9090"})
public class ClientesController {
    @Autowired
    private ClientesService clientesService;

    //http://localhost:9090/api/listclientes    <-------------------   EJEMPLO: ->[GET] <-  http://localhost:9090/api/listclientes
    //
    @GetMapping("api/listclientes")
    public List<Clientes> getAllClientes(){
        return clientesService.getAllClientes();
    }


    //http://localhost:9090/api/clientebyid/{idCliente}   <-------------------       EJEMPLO: ->[GET] <-  http://localhost:9090/api/clientebyid/{idCliente}
    //
    @GetMapping("api/clientebyid/{idCliente}")
    public Clientes getClienteByID(@PathVariable("idCliente") int idCliente){
        Optional<Clientes> clientesOptional = clientesService.findById(idCliente);
        return clientesOptional.orElse(null);
    }

    //http://localhost:9090/api/createcliente <----------------------------  EJEMPLO: ->[POST] <-  http://localhost:9090/api/listclientes
    @PostMapping("api/createcliente")
    public Clientes createCliente(@RequestBody Clientes cliente){
        return clientesService.save(cliente);
    }

    //http://localhost:9090/api/updatecliente/1 <----------------------------  EJEMPLO: ->[PUT] <-  http://localhost:9090/api/updatecliente/1
    @PutMapping("api/updatecliente/{idCliente}")
    public Clientes updateCliente(@PathVariable("idCliente") int id, @RequestBody Clientes updatedCliente){
        Optional<Clientes> clienteOptional = clientesService.findById(id);
        if(clienteOptional.isPresent()){
            Clientes cliente = clienteOptional.get();
            cliente.setNombre(updatedCliente.getNombre());
            cliente.setCorreo(updatedCliente.getCorreo());
            cliente.setNombre(updatedCliente.getNit());
            cliente.setTelefono(updatedCliente.getTelefono());
            return clientesService.save(updatedCliente);
        }else{
            return null;
        }
    }
    //http://localhost:9090/api/deletecliente/1 <----------------------------  EJEMPLO: ->[DELETE] <-  http://localhost:9090/api/deletecliente/1
    @DeleteMapping("api/deletecliente/{id}")
    public void deleteCliente(@PathVariable("id") int id){
        Optional<Clientes> clientesOptional = clientesService.findById(id);
        clientesOptional.ifPresent(clientesService::delete);
    }
}
