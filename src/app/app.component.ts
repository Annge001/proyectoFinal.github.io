import { Component } from '@angular/core';
import {Alumnos} from "./components/models/alumnos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1pfPerez';
  alumno: any;

  editarAlumno($event: any) {
    this.alumno = $event;
    console.log(this.alumno)
  }
}
