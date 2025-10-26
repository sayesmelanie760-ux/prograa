import { Proveedor } from './../../entity/proveedor';
import { Component, ViewChild } from '@angular/core';
import { ProveedorService } from '../../service/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproveedores',
  templateUrl: './editproveedores.component.html',
  styleUrl: './editproveedores.component.css'
})
export class EditproveedoresComponent {
  constructor(private service:ProveedorService, private router:Router){}

  ngOnInit(): void{
    this.selectEdit();
  }
  proveedor= new Proveedor;
  @ViewChild('myFocus') myFocus: any;

  ngAfterViewInit(): void{
    this.myFocus.nativeElement.focus();
  }

  selectEdit(){
    let id=localStorage.getItem("id");
    if(id){
      this.service.searchProveedorID(id)
      .subscribe(result => {
        this.proveedor=result;
      })
    }
  }

  editProveedores(proveedor: Proveedor) {
    let id=localStorage.getItem("id");
    if(id){
      this.service.updateProveedor(proveedor)
      .subscribe(result => {
        this.proveedor=result;
        this.router.navigate(["listproveedores"]);
        alert("Datos del proveedor modificados con éxito.")
      })
    }
  }

  cancel() {
    this.router.navigate(["listproveedores"]);
  }
}
