import { Injectable } from '@angular/core';
import {ProductoService} from './producto.service';
import {producto} from '../app.interfaces';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DesarrolloProductoService {
  productosDesarollados:any[] = [];
  productosEnDesarrollo:any[] = [];
  productosSinDesarrollar:any[] = [];

  constructor(private http:Http) { }

  returnProductosSinDesarrollar(){
    this.productosSinDesarrollar.length = 0;
    this.getProductosNoDesarrollados().subscribe(data => {
      for(let i in data.datos){
        this.productosSinDesarrollar.push(data.datos[i]);
      }
    });
    return this.productosSinDesarrollar;
  }

  returnProductosEnDesarrollo(){
    this.productosEnDesarrollo.length = 0;
    this.getProductosEnDesarrollo().subscribe(data => {
      for(let i in data.datos){
        this.productosEnDesarrollo.push(data.datos[i]);
      }
    });
    return this.productosEnDesarrollo;
  }

  returnProductosDesarrollados(){
    this.productosDesarollados.length = 0;
    this.getProductosDesarrollados().subscribe(data => {
      for(let i in data.datos){
        this.productosDesarollados.push(data.datos[i]);
      }
    });
    return this.productosDesarollados;
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
    return this.http.post('proyectoproducto/getproductosendesarrollo/',x,{headers}).map(res => res.json());
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
    return this.http.get('proyectoproducto/getterminados/'+localStorage.getItem('idProyecto')).map(res => res.json());
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
          Proyectos_idProyecto:localStorage.getItem('idProyecto'),
          Productos_idProducto:data.datos[key$].idProducto
        }
        this.setDesarrollado(x).subscribe();
      }
    });
  }

  comenzarDesarrollo(id, costo){
    var x = {
      Proyectos_idProyecto:parseInt(localStorage.getItem('idProyecto')),
      Productos_idProducto:id,
      periodoInicio:parseInt(localStorage.getItem('numeroPeriodo')),
      ultimoPeriodoDes:parseInt(localStorage.getItem('numeroPeriodo'))
    }
    for(let i=0;this.productosSinDesarrollar.length>i;i++){
      if(this.productosSinDesarrollar[i].idProducto==id){
        this.productosSinDesarrollar.splice(i,1);
      }
    }

    var y = {
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      idProducto:id,
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      costoDes:costo
    }
    this.desarrollar(x).subscribe(data => {
      for(let i in data.datos) {
          this.productosEnDesarrollo[i] = data.datos[i];
      }
    });

    this.pagoBalance(y).subscribe();

  }

  pagoBalance(y){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/operacionespagardesarrollo/',y, {headers}).map(res => res.json());
  }

  desarrollar(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/desarrolloproducto/',x, {headers}).map(res => res.json());
  }

  pagarDesarrollo(id, costo){
    var x = {
      Proyectos_idProyecto:parseInt(localStorage.getItem('idProyecto')),
      Productos_idProducto:id,
      ultimoPeriodoDes:parseInt(localStorage.getItem('numeroPeriodo'))
    }

    var y = {
      idProducto:id,
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      costoDes:costo
    }
    this.pd(x).subscribe( data => {
      for(let i in data.datos) {
          this.productosEnDesarrollo[i] = data.datos[i];
      }
    });
    this.pagoBalance(y).subscribe();
  }

  pd(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyectoproducto/pagardesarrollo/',x, {headers}).map(res => res.json());
  }

}
