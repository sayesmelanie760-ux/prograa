import { Component, ViewChild } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../../entity/producto';
import { Proveedor } from '../../entity/proveedor';
import { ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-editproductos',
  templateUrl: './editproductos.component.html',
  styleUrl: './editproductos.component.css'
})
export class EditproductosComponent {

  producto=new Producto;
  myproveedor = new Proveedor;
  availableProveedores: any[] = []; // Lista de proveedores disponibles
  selectedProveedor: number=0;

  constructor (private service:ProductoService, private proveedorService:ProveedorService, private router:Router) {}
  ngOnInit(): void {
    this.loadAvailableProveedores();
    this.selectEdit();
  }

  loadAvailableProveedores() {
    this.proveedorService.listProveedores().subscribe(
      data => {
        this.availableProveedores = data;
      }
    );
  }
  @ViewChild('myFocus') myFocus: any;

  ngAfterViewInit(): void{
    this.myFocus.nativeElement.focus();
  }

  selectEdit(){
    let codigo=localStorage.getItem("codigo");
    if(codigo){
      this.service.searchProductoID(codigo)
      .subscribe(result => {
        this.producto=result;
      })
    }
  }

  editProductos(producto: Producto) {
    let id=localStorage.getItem("id");
    if(id){
      this.service.editProducto(producto)
      .subscribe(result => {
        this.producto=result;
        this.router.navigate(["listproductos"]);
        alert("Datos del producto modificados con éxito.")
      })
    }
  }

  cancel() {
    this.router.navigate(["listproductos"]);
  }
}
