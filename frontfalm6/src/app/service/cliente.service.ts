import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../entity/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http:HttpClient) { }
  url = 'http://localhost:9090/';

  listClientes(){
    return this.http.get<Cliente[]>(this.url+"api/listclientes");
  }
  searchClienteID(id:String)
  {
    return this.http.get<Cliente>(this.url+"api/clientebyid/"+id);
  }
  addCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.url+"api/createcliente",cliente);
  }
  editCliente(id:String,cliente:Cliente){
    return this.http.put<Cliente>(this.url+"api/updatecliente/"+id,cliente);
  }
  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.url+"api/deletecliente/"+cliente.idCliente,{ responseType: 'json' });
  }
}
