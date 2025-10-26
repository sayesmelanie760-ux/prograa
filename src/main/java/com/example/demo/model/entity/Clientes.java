package com.example.demo.model.entity;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "cliente")
@Entity
public class Clientes {
    @Id
    @GenericGenerator(name = "cliente", strategy = "enhanced-table", parameters = {
        @org.hibernate.annotations.Parameter(name = "cliente", value = "sequence_clientes")
    })
    @GeneratedValue(generator = "sequence_clientes", strategy = GenerationType.TABLE)
    @SequenceGenerator(name = "sequence_clientes", allocationSize = 1)  
    private int idCliente;
    @Column(nullable = false)
    private String nombre;
    private String password;
    private String nit;
    private String correo;
    private String telefono;

}
