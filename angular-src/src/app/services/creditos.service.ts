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
    console.log("Producto: ",credito.nombrePrestamo,"Agregado" );
    return this.http.post('prestamo/addcredito', credito, {headers}).map( res => res.json());

  }

  guardarCredito(credito){
    this.addCredito(credito).subscribe(data => {
      for(let key$ in data.datos){
          this.creditos[key$] = data.datos[key$];
      }
    });
  }

  deleteCredito(id:number){
    console.log("Eliminando",id);
    for(let i=0;this.creditos.length>i;i++){
      if(this.creditos[i].idPrestamos==id){
        console.log(this.creditos[i].idPrestamos);
        this.creditos.splice(i,1);
        console.log("credito: ",id,"eliminado");
      }
    }
    console.log('prestamo/delete/'+id);
    return this.http.get('prestamo/delete/'+id).map(res => res.json());


  }


}
