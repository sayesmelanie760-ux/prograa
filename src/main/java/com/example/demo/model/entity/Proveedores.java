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
@Table(name = "proveedor")
@Entity
public class Proveedores {
    @Id
    @GenericGenerator(name = "proveedor", strategy = "enhanced-table", parameters = {
        @org.hibernate.annotations.Parameter(name = "proveedor", value = "sequence_proveedores")
    })
    @GeneratedValue(generator = "sequence_proveedores", strategy = GenerationType.TABLE)
    @SequenceGenerator(name = "sequence_proveedores", allocationSize = 1)
    private int idProveedor;
    @Column(nullable = false)
    private String nombre;
    private String detalleProveedor;
    private String direccion;
    private String telefono;
    
}
