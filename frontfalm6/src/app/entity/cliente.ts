export class Cliente{
  filter(arg0: (x: any) => boolean): Cliente {
    throw new Error('Method not implemented.')
  }
  idCliente!:Number
  nombre!: String
  password!: String
  nit!:String
  correo!: String
  telefono!:String
}
