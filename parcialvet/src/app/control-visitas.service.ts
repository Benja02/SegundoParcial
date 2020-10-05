import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlVisitasService {
  url='http://localhost:8080/ScriptParcial2Angular/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
    }
    add(consulta) {
    return this.http.post(`${this.url}add.php`, JSON.stringify(consulta));
    }
    delete(Idvisita:number) {
    return this.http.get(`${this.url}delete.php?Idvisita=${Idvisita}`);
    }
    seleccionar(Idvisita:number) {
    return this.http.get(`${this.url}seleccionar.php?Idvisita=${Idvisita}`);
    }
    update(consulta) {
      return this.http.post(`${this.url}update.php`, JSON.stringify(consulta));
    }
}
