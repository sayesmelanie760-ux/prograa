import { Component } from '@angular/core';
import { Producto } from '../../entity/producto';
import { Proveedor } from '../../entity/proveedor';
import { Router } from '@angular/router';
import { ProductoService } from '../../service/producto.service';
import { ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrl: './addproducto.component.css'
})
export class AddproductoComponent {
  producto=new Producto;
  myproveedor = new Proveedor;
  availableProveedores: any[] = []; // Lista de proveedores disponibles
  selectedProveedor: number=0;

  constructor (private service:ProductoService, private proveedorService:ProveedorService, private router:Router) {}
  ngOnInit(): void {
    this.loadAvailableProveedores();
  }

  loadAvailableProveedores() {
    this.proveedorService.listProveedores().subscribe(
      data => {
        this.availableProveedores = data;
      }
    );
  }

  save(producto:Producto)
  {

    if (typeof(producto.codigo) != "undefined")
    {
      if (typeof(producto.nombre) != "undefined")
      {


          if (typeof(this.selectedProveedor) !== "undefined") {
            this.proveedorService.searchProveedorID(this.selectedProveedor.toString().trim()).subscribe(adata=>{

          producto.proveedor=adata;
          this.service.addProducto(producto).subscribe(result=>
            {
            if (result!=null)
            {
                alert ("producto ingresado correctamente");
                this.router.navigate(["listproductos"]);
            }
            else
            {
              alert ("El producto con el código" + producto.codigo + "ya existe, verifique");
            }

            }
            );

        })

            // Resto del código del componente


            /*this.service.addBooks(book)
            .subscribe(data=>{
              this.router.navigate(["listbooks"]);
            });
            */

          }
        else
        {
          alert("Debe ingresar proveedor");
        }


      }
      else
      {
        alert("Debe ingresar nombre");
      }
    }
    else
    {
      alert("Debe ingresar codigo");

    }

  }
  cancel()
  {
    this.router.navigate(["listproveedores"]);
  }
}
