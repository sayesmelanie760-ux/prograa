import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { AddclienteComponent } from './component/addcliente/addcliente.component';
import { AddproveedorComponent } from './component/addproveedor/addproveedor.component';
import { AddproductoComponent } from './component/addproducto/addproducto.component';
import { ListclientesComponent } from './component/listclientes/listclientes.component';
import { ListproductosComponent } from './component/listproductos/listproductos.component';
import { ListproveedoresComponent } from './component/listproveedores/listproveedores.component';
import { EditclientesComponent } from './component/editclientes/editclientes.component';
import { EditproductosComponent } from './component/editproductos/editproductos.component';
import { EditproveedoresComponent } from './component/editproveedores/editproveedores.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    AddclienteComponent,
    AddproveedorComponent,
    AddproductoComponent,
    ListclientesComponent,
    ListproductosComponent,
    ListproveedoresComponent,
    EditclientesComponent,
    EditproductosComponent,
    EditproveedoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
