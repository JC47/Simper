import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UsuarioCreditoService {
  creditosU:any = [];

  constructor(private http:Http) { }

  insertar(credito){
    this.add(credito).subscribe( data => {
      for(let key$ in data.datos){
        this.creditosU[key$] = data.datos[key$];
      }
    });
  }

  returnCreditosU(idUsuario){
    this.creditosU.length = 0;
    this.getCreditosU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        this.creditosU.push(data.datos[key$]);
      }
    });
    return this.creditosU;
  }

  add(credito){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('usuarioscreditos/register/',credito,headers).map(res => res.json());
  }

  getCreditosU(idUsuario){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.get('usuarioscreditos/'+idUsuario).map(res => res.json());
  }

  eliminar(credito){
    for(let i=0;this.creditosU.length>i;i++){
      if(this.creditosU[i].idCredito==credito.idCredito){
        this.creditosU.splice(i,1);
      }
    }
    this.delete(credito).subscribe();
  }

  delete(credito){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('usuarioscreditos/delete/',credito,headers).map(res => res.json());
  }

  solicitarCredito(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('prestamo/amortizacioncreditobalance/',x,headers).map(res => res.json());
  }

  eliminarCredito(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('prestamo/deletecreditobalance/',x,headers).map(res => res.json());
  }

  visualizarTabla(idCredito){
    var x = {
      idCredito:idCredito,
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
    }
    var tabla = [];
    this.verTabla(x).subscribe(data => {
      console.log("Consulta Tabla",data.success,data.datos)
      for(let i = 0; i < (data.datos.length-1); i++){
        tabla.push(data.datos[i]);
      }
    });
    return tabla
  }

  verTabla(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('prestamo/veramortizacion/',x,headers).map(res => res.json());
  }

  verPagosR(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('prestamo/getAmortizacion/',x,headers).map(res => res.json());
  }

  verPagosP(idCredito){
    var x = {
      idCredito:idCredito,
      idProyecto:parseInt(localStorage.getItem('idProyecto'))
    };
    var tabla = [];
    this.verPagosR(x).subscribe( data=> {
      console.log("Consulta Tabla 2",data.success,data.datos)
      for(let i in data.datos){
        if(data.datos[i].numeroPeriodo > parseInt(localStorage.getItem('numeroPeriodo'))){
          tabla.push(data.datos[i]);
        }
      }
    });
    return tabla;
  }



}