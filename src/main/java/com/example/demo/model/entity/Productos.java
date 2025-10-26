package com.example.demo.model.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "producto")
@Entity
public class Productos {
    @Id
    private String codigo;
    @Column(nullable = false)
    private String nombre;
    private String descripcion;
    private Double precio;
    private String categoria;
    private int cantidadDisponible;
    @ManyToOne
    @JoinColumn(name = "proveedor_idProveedor")
    private Proveedores proveedor;

}
