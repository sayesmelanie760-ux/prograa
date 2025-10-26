import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../entity/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:9090/';

  listProductos(){
    return this.http.get<Producto[]>(this.url+"api/listaproductos");
  }
  searchProductoID(codigo:String)
  {
    return this.http.get<Producto>(this.url+"api/producto/"+codigo);
  }
  addProducto(producto:Producto){
    return this.http.post<Producto>(this.url+"api/addproducto",producto);
  }
  editProducto(producto:Producto){
    return this.http.put<Producto>(this.url+"api/updateproductos",producto);
  }
  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.url+"api/deleteproductos/"+producto.codigo,{ responseType: 'json' });
  }
}
