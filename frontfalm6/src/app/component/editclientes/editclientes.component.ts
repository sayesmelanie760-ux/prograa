import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../entity/cliente';

@Component({
  selector: 'app-editclientes',
  templateUrl: './editclientes.component.html',
  styleUrl: './editclientes.component.css'
})
export class EditclientesComponent {
  constructor(private service:ClienteService, private router:Router){}

  ngOnInit(): void{
    this.selectEdit();
  }
  cliente= new Cliente;
  @ViewChild('myFocus') myFocus: any;

  ngAfterViewInit(): void{
    this.myFocus.nativeElement.focus();
  }

  selectEdit(){
    let id=localStorage.getItem("id");
    if(id){
      this.service.searchClienteID(id)
      .subscribe(result => {
        this.cliente=result;
      })
    }
  }

  editClientes(cliente: Cliente) {
    let id=localStorage.getItem("id");
    if(id){
      this.service.editCliente(id, cliente)
      .subscribe(result => {
        this.cliente=result;
        this.router.navigate(["listclientes"]);
        alert("Datos del cliente modificados con éxito.")
      })
    }
  }

  cancel() {
    this.router.navigate(["listclientes"]);
  }

}
