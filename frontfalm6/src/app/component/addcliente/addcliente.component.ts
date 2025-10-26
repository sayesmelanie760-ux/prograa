import { Component } from '@angular/core';
import { Cliente } from '../../entity/cliente';
import { ClienteService } from '../../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrl: './addcliente.component.css'
})
export class AddclienteComponent {
cliente=new Cliente;

constructor(private service:ClienteService, private router:Router){}

ngOnInit(): void {

}

save(cliente: Cliente) {
  if(typeof(cliente.correo) != "undefined"){
      this.service.addCliente(cliente).subscribe(result=>
        {
          if(result!=null){
            alert("Cliente ingresado exitosamente!")
            this.router.navigate(["listclientes"]);
          }
          else{
            ("El correo del cliente ya ha sido registrado, verifique");
          }
        });
    } else{
      alert("Debe ingresar un correo válido")
    }
}

cancel() {
  this.router.navigate(["listclientes"]);
}

}
