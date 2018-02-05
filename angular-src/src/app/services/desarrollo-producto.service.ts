import { Injectable } from '@angular/core';
import {ProductoService} from './producto.service';
import {producto} from '../app.interfaces';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DesarrolloProductoService {

  constructor(private http:Http) { }

  returnProductosSinDesarrollar(){
    var x = [];
    this.getProductosNoDesarrollados().subscribe(data => {
      for(let i in data.datos){
        x.push(data.datos[i]);
      }
    });
    return x;
  }

  returnProductosEnDesarrollo(){
    var x = [];
    this.getProductosEnDesarrollo().subscribe(data => {
      for(let i in data.datos){
        x.push(data.datos[i]);
      }
    });
    console.log("Consulta",x)
    return x;
  }

  returnProductosDesarrollados(){
    var x = [];
    this.getProductosDesarrollados().subscribe(data => {
      for(let i in data.datos){
        x.push(data.datos[i]);
      }
    });
    return x;
  }

  getProductosNoDesarrollados(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('proyectoproducto/getproductossindesarrollar/',x,{headers}).map(res => res.json());
  }

  getProductosEnDesarrollo(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('proyectoproducto/jsonendes/',x,{headers}).map(res => res.json());
  }

  getProductosDesarrollados(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('proyectoproducto/getproductosdesarrollados/',x,{headers}).map(res => res.json());
  }

  getTerminados(){
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('proyectoproducto/getterminados/',x).map(res => res.json());
  }

  setDesarrollado(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/desarrollado/',x, {headers}).map(res => res.json());
  }

  actualizarPD(){
    this.getTerminados().subscribe(data => {
      for(let key$ in data.datos){
        var x = {
          numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
          idProyecto:localStorage.getItem('idProyecto'),
          idProducto:data.datos[key$].idProducto
        }
        this.setDesarrollado(x).subscribe();
      }
    });
  }

  comenzarDesarrollo(id, costo){
    var x = {
      Proyectos_idProyecto:parseInt(localStorage.getItem('idProyecto')),
      Productos_idProducto:id,
      desarrollado:1,
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      periodoInicio:parseInt(localStorage.getItem('numeroPeriodo'))
    }

    var y = {
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      idProducto:id,
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      costoDes:costo
    }
    this.desarrollar(x).subscribe();

    this.pagoBalance(y).subscribe();

    return true;
  }

  deshacerDesarrollo(id, costo){
    var x = {
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      idProducto:id,
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      costoDes:costo
    }

    var y = {
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      idProducto:id,
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
    }

    this.undoBancos(x).subscribe();
    this.undoTabla(y).subscribe();

    return true;
  }

  pagoBalance(y){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/operacionespagardesarrollo/',y, {headers}).map(res => res.json());
  }

  undoBancos(y){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/devolverpagardesarrollo/',y, {headers}).map(res => res.json());
  }

  undoTabla(y){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/deshacerperiododesarrollado/',y, {headers}).map(res => res.json());
  }

  desarrollar(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/desarrolloproducto/',x, {headers}).map(res => res.json());
  }

  pagarDesarrollo(id, costo){
    var x = {
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      idProducto:id,
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
    }

    var y = {
      idProducto:id,
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      costoDes:costo
    }
    this.pagoBalance(y).subscribe();
    this.pd(x).subscribe();

    return true;
  }

  pd(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/pagardesarrollo/',x, {headers}).map(res => res.json());
  }

}
