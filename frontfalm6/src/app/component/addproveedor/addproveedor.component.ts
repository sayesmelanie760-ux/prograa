import { Component } from '@angular/core';
import { ProveedorService } from '../../service/proveedor.service';
import { Router } from '@angular/router';
import { Proveedor } from '../../entity/proveedor';

@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrl: './addproveedor.component.css'
})
export class AddproveedorComponent {

  proveedor= new Proveedor;
  constructor(private service:ProveedorService, private router:Router){}

  ngOnInit(): void {

  }

  cancel() {
    this.router.navigate(["listproveedores"]);
  }

  save(proveedor: Proveedor) {
    if(typeof(proveedor.nombre) != "undefined"){
        this.service.addProveedor(proveedor).subscribe(result=>
          {
            if(result!=null){
              alert("Proveedor ingresado exitosamente!")
              this.router.navigate(["listproveedores"]);
            }
            else{
              ("El proveedor ya ha sido registrado, verifique");
            }
          });
      } else{
        alert("Debe ingresar un nombre válido")
      }
  }

}
