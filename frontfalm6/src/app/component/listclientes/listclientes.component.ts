import { Component } from '@angular/core';
import { Cliente } from '../../entity/cliente';
import { ClienteService } from '../../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listclientes',
  templateUrl: './listclientes.component.html',
  styleUrl: './listclientes.component.css'
})
export class ListclientesComponent {
  clientes!:Cliente[];

  constructor(private service:ClienteService, private router:Router) {}

  ngOnInit(): void {
    this.service.listClientes().subscribe(data=>{
      this.clientes=data;
      console.log(this.clientes);
    })
  }

  deleteCliente(cliente:Cliente){
    var val=confirm("Está seguro que desea eliminar al cliente " + cliente.nombre)
    if (val==true){

      this.service.deleteCliente(cliente).subscribe({
        next: (result) => {
          this.clientes = this.clientes.filter(x => x !== cliente);
          alert("El cliente fue eliminado con éxito");
        },
        error: () => {
          alert("Ha ocurrido un error al eliminar el cliente.")
        }
      })
    }
  }

  selectEdit(cliente:Cliente): void {
    localStorage.setItem("id",cliente.idCliente.toString().valueOf());
    this.router.navigate(["editclientes"])
  }
}
