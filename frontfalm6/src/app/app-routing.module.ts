import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclienteComponent } from './component/addcliente/addcliente.component';
import { AddproductoComponent } from './component/addproducto/addproducto.component';
import { AddproveedorComponent } from './component/addproveedor/addproveedor.component';
import { EditclientesComponent } from './component/editclientes/editclientes.component';
import { EditproductosComponent } from './component/editproductos/editproductos.component';
import { EditproveedoresComponent } from './component/editproveedores/editproveedores.component';
import { ListclientesComponent } from './component/listclientes/listclientes.component';
import { ListproductosComponent } from './component/listproductos/listproductos.component';
import { ListproveedoresComponent } from './component/listproveedores/listproveedores.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path:"principal", component: PrincipalComponent
  },
  {
    path:"menu", component: MenuComponent
  },
  {
    path:"addcliente", component: AddclienteComponent
  },
  {
    path:"addproducto", component: AddproductoComponent
  },
  {
    path:"addproveedor", component: AddproveedorComponent
  },
  {
    path:"editclientes", component: EditclientesComponent
  },
  {
    path:"editproductos", component: EditproductosComponent
  },
  {
    path:"editproveedores", component: EditproveedoresComponent
  },
  {
    path:"listclientes", component: ListclientesComponent
  },
  {
    path:"listproductos", component: ListproductosComponent
  },
  {
    path:"listproveedores", component: ListproveedoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
