import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {LateralNavbarComponent} from "./components/lateral-navbar/lateral-navbar.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrincipalComponent} from "./components/principal/principal.component";
import {TamanoLetraDirective} from "./directivas/tamano-letra.directive";
import {CursoService} from "./modulos/cursos/services/curso.service";
import {AlumnosService} from "./modulos/alumnos/services/alumnos.service";
import {CursosModule} from "./modulos/cursos/cursos.module";
import {AutenticacionModule} from "./modulos/autenticacion/autenticacion.module";
import {CoreModule} from "./core/core.module";
import {AlumnosModule} from "./modulos/alumnos/alumnos.module";


@NgModule({
  declarations: [
    AppComponent,
    LateralNavbarComponent,
    PrincipalComponent,
    TamanoLetraDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    FormsModule,
    AutenticacionModule,
    ReactiveFormsModule,
    CoreModule,
    CursosModule,
    AlumnosModule

  ],
  providers: [CursoService, AlumnosService],
  exports: [
    TamanoLetraDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
