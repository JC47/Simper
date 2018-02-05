import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class DesarrolloZonaService {
  productosZonaSinDesarrollar:any[] = [];
  productosZonaEnDesarrollo: any[] = [];
  productosZonaDesarrollados: any[] = [];

  constructor(private http:Http) { }

  comenzarDesarrolloZona(x){
    this.addZona(x).subscribe();
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
    var x = []
    this.getProductosDeZonaSinDesarrollar().subscribe(data => {
      for(let key$ in data.datos){
        x.push(data.datos[key$]);
      }
    });
    return x;
  }

  returnProductosDeZonaEnDesarrollo(){
    var x =[];
    this.getProductosDeZonaEnDesarrollo().subscribe(data => {
      for(let key$ in data.datos){
        x.push(data.datos[key$]);
      }
    });
    return x;
  }

  returnProductosDeZonaDesarrollados(){
    var x = []
    this.getProductosDeZonaDesarrollados().subscribe(data => {
      for(let key$ in data.datos){
        x.push(data.datos[key$]);
      }
    });
    return x;
  }

  getProductosDeZonaSinDesarrollar(){
    var x = {
      Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
      Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/productossindesarrollar/',x, {headers}).map(res => res.json());
  }

  getProductosDeZonaEnDesarrollo(){
    var x = {
      Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
      Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
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
          Proyecto_Usuario_idUsuario:data.datos[key$].Proyecto_Usuario_idUsuario,
          numeroPeriodo:(parseInt(localStorage.getItem('numeroPeriodo'))+1),
          desarrollado:2,
          periodoInicio:data.datos[key$].periodoInicio,
          periodosDes:data.datos[key$].periodosDes
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
      Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario')),
      numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo'))
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/productosdesarrollados/',x, {headers}).map(res => res.json());
  }

}
