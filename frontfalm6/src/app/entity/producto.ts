import { Proveedor } from "./proveedor"

export class Producto {
  codigo!:String
  nombre!:String
  descripcion!:String
  precio!:Number
  categoria!:String
  cantidadDisponible!:Number
  proveedor!:Proveedor
}
