import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuxiliarService {
  auxiliar = [];
  headers = new Headers({
    'Content-Type':'application/json'
  });

  constructor(private http:Http) { }

  getAuxiliar(numeroPeriodo, idProyecto){
    var x = {
      Proyectos_idProyecto:idProyecto,
      Balance_numeroPeriodo:numeroPeriodo
    }
    return this.http.post('auxiliar/',x,this.headers).map(res => res.json());
  }

  returnAuxiliar(numeroPeriodo, idProyecto){
    this.auxiliar.length = 0;
    this.getAuxiliar(numeroPeriodo, idProyecto).subscribe(data => {
      for(let key$ in data.datos){
          this.auxiliar.push(data.datos);
      }
    });
    return this.auxiliar;
  }

  editarAuxiliar(data){
    return this.http.post('auxiliar/modify',data,this.headers).map(res => res.json());
  }

  addAuxiliar(data){
    return this.http.post('auxiliar/register',data,this.headers).map(res => res.json());
  }

}
