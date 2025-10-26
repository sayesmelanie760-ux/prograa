import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../entity/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:9090/';

  listProveedores(){
    return this.http.get<Proveedor[]>(this.url+"api/listaproveedores");
  }
  searchProveedorID(idProveedor:String)
  {
    return this.http.get<Proveedor>(this.url+"api/proveedorid/"+idProveedor);
  }
  addProveedor(proveedor:Proveedor){
    return this.http.post<Proveedor>(this.url+"api/createproveedor",proveedor);
  }
  updateProveedor(proveedor:Proveedor){
    return this.http.put<Proveedor>(this.url+"api/updateproveedor", proveedor);
  }
  deleteProveedor(proveedor:Proveedor){
    return this.http.delete<Proveedor>(this.url+"api/deleteproveedor/"+proveedor.idProveedor, { responseType: 'json' });
  }
}
