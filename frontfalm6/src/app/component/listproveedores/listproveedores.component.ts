import { Component } from '@angular/core';
import { Proveedor } from '../../entity/proveedor';
import { ProveedorService } from '../../service/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproveedores',
  templateUrl: './listproveedores.component.html',
  styleUrl: './listproveedores.component.css'
})
export class ListproveedoresComponent {
  proveedores!:Proveedor[];

  constructor(private service:ProveedorService, private router:Router) {}

  ngOnInit(): void {
    this.service.listProveedores().subscribe(data=>{
      this.proveedores=data;
      console.log(this.proveedores);
    })
  }

  deleteProveedor(proveedor:Proveedor){
    var val=confirm("Está seguro que desea eliminar al proveedor " + proveedor.nombre)
    if (val==true){

      this.service.deleteProveedor(proveedor).subscribe({
        next: (result) => {
          this.proveedores = this.proveedores.filter(x => x !== proveedor);
          alert("El proveedor fue eliminado con éxito");
        },
        error: () => {
          alert("Ha ocurrido un error al eliminar el proveedor.")
        }
      })
    }
  }

  selectEdit(proveedor:Proveedor): void {
    localStorage.setItem("idProveedor",proveedor.idProveedor.toString().valueOf());
    this.router.navigate(["editproveedores"])
  }
}
