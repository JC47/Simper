import { Injectable } from '@angular/core';
import {credito} from '../app.interfaces';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreditosService {
  creditos=new Array();

  constructor(private http:Http) { }

   establecerValores(){
     var creditos = [];
     this.getCreditos().subscribe(data => {
       for(let key$ in data.datos){
           creditos.push(data.datos[key$]);
       }
     });
     return creditos;
   }

   getCreditos(){
     return this.http.get('prestamo/getcredito').map(res => res.json());
   }

  setCreditos(credito){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('prestamo/modifycredito/', credito, {headers}).map( res => res.json());
  }



  addCredito(credito){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('prestamo/addcredito', credito, {headers}).map( res => res.json());

  }

  editarCredito(x){
    var a = [];
    this.setCreditos(x).subscribe(data2 => {
      if(data2.success){
        this.getCreditos().subscribe(data => {
          for(let key$ in data.datos){
              a.push(data.datos[key$]);
          }
        });
      }
    });
    return a;
  }

  eliminarCredito(id){
    var a = [];
    this.deleteCredito(id).subscribe(data2 => {
      if(data2.success){
        this.getCreditos().subscribe(data => {
          for(let key$ in data.datos){
              a.push(data.datos[key$]);
          }
        });
      }
    });
    return a;
  }

  guardarCredito(credito){
    var creditos = [];
    this.addCredito(credito).subscribe(data => {
      if(data.success){
        this.getCreditos().subscribe(data2 => {
          for(let key$ in data2.datos){
              creditos.push(data2.datos[key$]);
          }
        });
      }
    });
    return creditos;
  }

  deleteCredito(id){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.get('prestamo/deletecredito/'+id,{headers}).map(res => res.json());
  }


}
