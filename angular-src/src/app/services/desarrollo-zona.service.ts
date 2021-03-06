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

  undoTotal(x){
    var a = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo'),
      costoDes:x.costoDes,
      idProducto:x.idProducto
    }

    var b = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo'),
      idProducto:x.idProducto,
      idZona:x.idZona,
      idUsuario:localStorage.getItem('idUsuario')
    }

    this.undoBalance(a).subscribe();
    this.undoTabla(b).subscribe();

    return true;
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

  actualizarZonasDes(periodo){
    this.getTerminados(periodo).subscribe(data => {
      for(let key$ in data.datos){
        var x = {
          Producto_idProducto:data.datos[key$].Producto_idProducto,
          Zona_idZonas:data.datos[key$].Zona_idZonas,
          Proyecto_idProyecto:data.datos[key$].Proyecto_idProyecto,
          Proyecto_Usuario_idUsuario:data.datos[key$].Proyecto_Usuario_idUsuario,
          numeroPeriodo:parseInt(periodo),
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

  undoTabla(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/deshacer/',x, {headers}).map(res => res.json());
  }

  undoBalance(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/devolverpagardesarrollo/',x, {headers}).map(res => res.json());
  }

  zonaDesarrollada(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('productoszonasproyectos/desarrolladoproductozonaproyecto/',x, {headers}).map(res => res.json());
  }

  getTerminados(np){
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:np-1
    }
    return this.http.post('productoszonasproyectos/terminados/',x).map(res => res.json());
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
