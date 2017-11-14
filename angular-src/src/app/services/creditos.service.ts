import { Injectable } from '@angular/core';
import {credito} from '../app.interfaces';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreditosService {
  creditos=new Array();

  constructor(private http:Http) { }

   establecerValores(){
     this.creditos.length = 0;
     this.getCreditos().subscribe(data => {
       for(let key$ in data.datos){
           this.creditos.push(data.datos[key$]);
       }
     });
     return this.creditos;
   }

   getCreditos(){
     return this.http.get('prestamo/getcredito').map(res => res.json());
   }

  setCreditos(credito:credito){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    console.log(credito.idPrestamos,"Modificandose");
    for(let i=0;this.creditos.length>i;i++){
      if(this.creditos[i].idPrestamos==credito.idPrestamos){
        this.creditos.splice(i,1);
        this.creditos.push(credito);
        console.log("credito: ",this.creditos[i].idPrestamos,"modificado");


      }
    }
    return this.http.post('prestamo/modify/'+credito.idPrestamos, credito, {headers}).map( res => res.json());
  }



  addCredito(credito){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('prestamo/addcredito', credito, {headers}).map( res => res.json());

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
    this.creditos = creditos;
    return creditos;
  }

  deleteCredito(id){
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    for(let i=0;this.creditos.length>i;i++){
      if(this.creditos[i].idCredito==id){
        this.creditos.splice(i,1);
      }
    }
    return this.http.get('prestamo/deletecredito/'+id,{headers}).map(res => res.json());
  }


}
