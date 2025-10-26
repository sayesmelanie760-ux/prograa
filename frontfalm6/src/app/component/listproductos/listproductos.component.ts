import { Component } from '@angular/core';
import { Producto } from '../../entity/producto';
import { ProductoService } from '../../service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproductos',
  templateUrl: './listproductos.component.html',
  styleUrl: './listproductos.component.css'
})
export class ListproductosComponent {
  productos!:Producto[];

  constructor(private service:ProductoService, private router:Router) {}

  ngOnInit(): void {
    this.service.listProductos().subscribe(data=>{
      this.productos=data;
      console.log(this.productos);
    })
  }

  deleteProducto(producto:Producto){
    var val=confirm("Está seguro que desea eliminar al producto " + producto.nombre)
    if (val==true){

      this.service.deleteProducto(producto).subscribe({
        next: (result) => {
          this.productos = this.productos.filter(x => x !== producto);
          alert("El producto fue eliminado con éxito");
        },
        error: () => {
          alert("Ha ocurrido un error al eliminar el producto.")
        }
      })
    }
  }

  selectEdit(producto:Producto): void {
    localStorage.setItem("codigo",producto.codigo.toString().valueOf());
    this.router.navigate(["editproductos"])
  }
}
