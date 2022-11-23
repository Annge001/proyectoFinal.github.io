import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaUsuariosComponent} from "./components/lista-usuarios/lista-usuarios.component";

const routes: Routes = [
  { path: 'usuarios', component: ListaUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
