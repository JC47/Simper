import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class DesarrolloZonaService {
  productosZonaSinDesarrollar:any[] = [];
  productosZonaEnDesarrollo: any[] = [];
  productosZonaDesarrollados: any[] = [];

  constructor(private http:Http) { }

  comenzarDesarrolloZona(x){
    this.addZona(x).subscribe(data => {
      if(data.success){
        this.getProductosDeZonaEnDesarrollo().subscribe(data => {
          for(let key$ in data.datos){
            this.productosZonaEnDesarrollo[key$] = data.datos[key$];
          }
        });
      }
    });
  }

  addZona(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/desarrollozona/',x, {headers}).map(res => res.json());
  }

  returnDemanda(nP, idZ, idP){
    this.getDemanda(nP, idZ, idP).subscribe(data => {
      return data.datos[0];
    });
  }

  getDemanda(nP, idZ, idP){
    var x = {
      numPeriodo:nP,
      idZona:idZ,
      idProducto:idP
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('demanda/getdemanda',x, {headers}).map(res => res.json());
  }

  cobrarDesarrollo(costoDes,idProducto){
    var x = {
      idProducto:idProducto,
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo'),
      costoDes:costoDes
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/operacionespagardesarrollo/',x, {headers}).map(res => res.json());
  }

  returnProductosDeZonaSinDesarrollar(){
    this.productosZonaSinDesarrollar.length = 0;
    this.getProductosDeZonaSinDesarrollar().subscribe(data => {
      for(let key$ in data.datos){
        this.productosZonaSinDesarrollar.push(data.datos[key$]);
      }
    });
    return this.productosZonaSinDesarrollar;
  }

  returnProductosDeZonaEnDesarrollo(){
    this.productosZonaEnDesarrollo.length = 0;
    this.getProductosDeZonaEnDesarrollo().subscribe(data => {
      for(let key$ in data.datos){
        this.productosZonaEnDesarrollo.push(data.datos[key$]);
      }
    });
    return this.productosZonaEnDesarrollo;
  }

  returnProductosDeZonaDesarrollados(){
    this.productosZonaDesarrollados.length = 0;
    this.getProductosDeZonaDesarrollados().subscribe(data => {
      for(let key$ in data.datos){
        this.productosZonaDesarrollados.push(data.datos[key$]);
      }
    });
    return this.productosZonaDesarrollados;
  }

  getProductosDeZonaSinDesarrollar(){
    var x = {
      Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
      Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario'))
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/productossindesarrollar/',x, {headers}).map(res => res.json());
  }

  getProductosDeZonaEnDesarrollo(){
    var x = {
      Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
      Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario'))
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/productosendesarrollo/',x, {headers}).map(res => res.json());
  }

  actualizarZonasDes(){
    this.getTerminados().subscribe(data => {
      for(let key$ in data.datos){
        var x = {
          Producto_idProducto:data.datos[key$].Producto_idProducto,
          Zona_idZonas:data.datos[key$].Zona_idZonas,
          Proyecto_idProyecto:data.datos[key$].Proyecto_idProyecto,
          Proyecto_Usuario_idUsuario:data.datos[key$].Proyecto_Usuario_idUsuario
        }
        this.zonaDesarrollada(x).subscribe();
      }
    });
  }


  Desarrollar(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/pagardesarrollozona/',x, {headers}).map(res => res.json());
  }

  zonaDesarrollada(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/desarrolladoproductozonaproyecto/',x, {headers}).map(res => res.json());
  }

  getTerminados(){
    return this.http.get('productoszonasproyectos/terminados/'+localStorage.getItem('idProyecto')).map(res => res.json());
  }

  getProductosDeZonaDesarrollados(){
    var x = {
      Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
      Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario'))
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/productosdesarrollados/',x, {headers}).map(res => res.json());
  }

}
