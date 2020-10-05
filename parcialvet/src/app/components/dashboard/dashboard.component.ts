import { Component, OnInit } from '@angular/core';
import { ControlVisitasService } from '../../control-visitas.service';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

//Service
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  consulta = null;

  campos = {
  Idvisita: 0,
  NombreCliente: null,
  Dui: null,
  NombreMascota: null,
  Tratamiento: null,
  Medicamento: null,
  Precio: null
}
constructor(private controlServicios: ControlVisitasService, public authService: AuthService) { }
ngOnInit() {
this.recuperarTodos();
}
recuperarTodos() {
this.controlServicios.recuperarTodos().subscribe(result => this.consulta = result);
}
add() {
this.controlServicios.add(this.campos).subscribe(datos => {
if (datos['resultado'] == 'OK') {
alert(datos['mensaje']);
this.recuperarTodos();
this.campos = {Idvisita: 0, NombreCliente: null, Dui: null, NombreMascota: null , Tratamiento: null, Medicamento: null,Precio: null};
}
});
}
delete(Idvisita) {
if (confirm('¿Esta seguro de elimiar el Registro?')) {
this.controlServicios.delete(Idvisita).subscribe(datos => {
if (datos['resultado'] == 'OK') {
alert(datos['mensaje']);
this.recuperarTodos();
}
});
}
}
update() {
this.controlServicios.update(this.campos).subscribe(datos => {
  if (datos['resultado'] == 'OK') {
    alert(datos['mensaje']);
    this.recuperarTodos();
    this.campos = {Idvisita: 0, NombreCliente: null, Dui: null, NombreMascota: null , Tratamiento: null, Medicamento: null,Precio: null};
    }
    });
}
    seleccionar(Idvisita) {
    this.controlServicios.seleccionar(Idvisita).subscribe(result => this.campos = result[0]);
    }
    hayRegistros() {
    return true;
    }

  //constructor(public authService: AuthService) { }

  //ngOnInit(): void {
  //}

}
