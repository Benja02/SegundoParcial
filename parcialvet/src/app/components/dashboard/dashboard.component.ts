import { Component, OnInit } from '@angular/core';
import { ControlVisitasService } from '../../control-visitas.service';

import { ToastrModule } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

//Service
import { AuthService } from "../../services/auth.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filtercampos = '';
  consulta = null;

  campos = {
  Idvisita: 0,
  NombreCliente: null,
  Dui: null,
  NombreMascota: null,
  Tratamiento: null,
  Medicamento: null,
  Costo: null,
  visitas: 0
}
constructor(private controlServicios: ControlVisitasService, public authService: AuthService, public toastr: ToastrService) { }
ngOnInit() {
this.recuperarTodos();
}
recuperarTodos() {
this.controlServicios.recuperarTodos().subscribe(result => this.consulta = result);
}
add() {
this.controlServicios.add(this.campos).subscribe(datos => {
if (datos['resultado'] == 'OK') {
//alert(datos['mensaje']);
this.toastr.success('Sucessful Operation', 'Registered');
this.recuperarTodos();
this.campos = {Idvisita: 0, NombreCliente: null, Dui: null, NombreMascota: null , Tratamiento: null, Medicamento: null,Costo: null,visitas: 0};
}
});
}
delete(Idvisita) {
if (confirm('¿Esta seguro de elimiar el Registro?')) {
this.controlServicios.delete(Idvisita).subscribe(datos => {
if (datos['resultado'] == 'OK') {
  this.toastr.success('Sucessful Operation', 'Register Updated');
this.recuperarTodos();
}
});
}
}
update() {
this.controlServicios.update(this.campos).subscribe(datos => {
  if (datos['resultado'] == 'OK') {
    //alert(datos['mensaje']);
    this.toastr.success('Sucessful Operation', 'Register Deleted');
    this.recuperarTodos();
    this.campos = {Idvisita: 0, NombreCliente: null, Dui: null, NombreMascota: null , Tratamiento: null, Medicamento: null,Costo: null,visitas: 0};
    }
    });
}
    seleccionar(Idvisita) {
    this.controlServicios.seleccionar(Idvisita).subscribe(result => this.campos = result[0]);
    }
    hayRegistros() {
    return true;
    }
    filtrar(event: Event) {
      const filtro = (event.target as HTMLInputElement).value;
      this.consulta.filter = filtro.trim().toLowerCase();
    }  
  //constructor(public authService: AuthService) { }

  //ngOnInit(): void {
  //}

}
