import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {BalanceService} from './balance.service';
import {ProductoService} from './producto.service';

@Injectable()
export class OperacionService {
  opAnterior = [];
  opActual = [];
  headers = new Headers({
    'Content-Type':'application/json'
  });
  productosOperacion = [];
  auxiliares = [];
  auxiliaresAnteriores = [];
  auxiliarC = [];

  constructor(private http:Http, private balanceService:BalanceService,
              private productoService:ProductoService) { }

  returnProductosOperacion(){
    this.productosOperacion.length = 0;
    this.getProductosOperacion().subscribe(data => {
      for(let key$ in data.datos){
        this.productosOperacion.push(data.datos[key$]);
      }
    });
    return this.productosOperacion;
  }

  registerOperacion(x){
    let operaciones:any[]=[];
    this.addOperacion(x).subscribe(data => {
      for(let key in data.datos){
        operaciones.push(data.datos[key]);
      }
    });
    return operaciones;
  }

  //Peticiones

  getProductosOperacion(){
    var x = {
      "idProyecto":localStorage.getItem('idProyecto'),
      "idUsuario":localStorage.getItem('idUsuario')
    }
    return this.http.post('productoszonasproyectos/zonasporproducto/',x,this.headers).map(res => res.json());
  }

  sell(x){
    return this.http.post('operacion/selling/',x,this.headers).map(res => res.json());
  }

  getAllOperaciones(){
    var x = {
      "numeroPeriodo":localStorage.getItem('numeroPeriodo'),
      "idProyecto":localStorage.getItem('idProyecto'),
      "idUsuario":localStorage.getItem('idUsuario')
    }
    return this.http.post('operacion/getAll/',x,this.headers).map(res => res.json());
  }

  returnAllOperaciones(){
    let operaciones:any[]=[];
    this.getAllOperaciones().subscribe(data=>{

      for(let key in data.datos){
        operaciones.push(data.datos[key]);
      }

    });
    return operaciones;
  }

  getProductosV(){
    var x = {
      "numeroPeriodo":localStorage.getItem('numeroPeriodo'),
      "idProyecto":localStorage.getItem('idProyecto'),
      "idUsuario":localStorage.getItem('idUsuario')
    }
    return this.http.post('operacion/productosventa/',x,this.headers).map(res=>res.json());
  }

  returnProductoResultados(){
    var resul = [];
    this.getProductosResultados().subscribe(data => {
      for(let key in data.datos){
        resul.push(data.datos[key]);
      }
    });
    return resul;
  }

  returnAuxiliares(){
    this.auxiliares.length = 0;
    this.getAuxiliares().subscribe(data => {
      console.log("Auxes Acutuales",data)
      for(let key in data.datos) {
          this.auxiliares.push(data.datos[key]);
      }
    });
    return this.auxiliares;
  }

  returnAuxiliaresAnteriores(){
    this.auxiliaresAnteriores.length = 0;
    this.getAuxiliaresAnteriores().subscribe(data => {
      console.log("Auxes Anteriores",data)
      for(let key in data.datos) {
          this.auxiliaresAnteriores.push(data.datos[key]);
      }
    });
    return this.auxiliaresAnteriores;
  }

  returnAuxiliarC(){
    this.auxiliarC.length = 0;
    this.getAuxiliarC().subscribe(data => {
      for(let key in data.datos) {
          this.auxiliarC.push(data.datos[key]);
      }
    });
    return this.auxiliarC;
  }

  returnInter(){
    var intereses = [];
    this.getInter().subscribe(data => {
      for(let key in data.datos){
        intereses.push(data.datos[key]);
      }
    });
    return intereses;
  }

  returnAuxiliarCTotal(){
    var auxiliarT = [];
    var T = 0;
    this.getAuxiliarC().subscribe(data => {
      for(let key in data.datos) {
          T += data.datos[key].desarrolloMercado + data.datos[key].desarrolloProducto;
      }
      auxiliarT.push(T);
    });
    return auxiliarT;
  }

  getAuxiliares(){
    var x = {
      "Proyectos_idProyecto":localStorage.getItem('idProyecto'),
      "Balance_numeroPeriodo":localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('operacion/getventas/',x,this.headers).map(res => res.json());
  }

  getAuxiliarC(){
    var x = {
      "Proyectos_idProyecto":localStorage.getItem('idProyecto'),
      "Balance_numeroPeriodo":localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('operacion/getauxiliar/',x,this.headers).map(res => res.json());
  }

  getProductosResultados(){
    var x = {
      "idProyecto":localStorage.getItem('idProyecto'),
      "numeroPeriodo":localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('operacion/resultados/',x,this.headers).map(res => res.json());
  }

  getAuxiliaresAnteriores(){
    var x = {
      "Proyectos_idProyecto":localStorage.getItem('idProyecto'),
      "Balance_numeroPeriodo":parseInt(localStorage.getItem('numeroPeriodo')) -1
    }
    return this.http.post('operacion/getventas/',x,this.headers).map(res => res.json());
  }

  validarOperacion(x){
    return this.http.post('operacion/validate/',x,this.headers).map(res => res.json());
  }

  validarAlmacen(x){
    return this.http.post('operacion/validateAlmacen/',x,this.headers).map(res => res.json());
  }

  addOperacion(x){
    return this.http.post('operacion/register/',x,this.headers).map(res => res.json());
  }

  addAlmacen(x){
    return this.http.post('operacion/registerAlmacen/',x,this.headers).map(res => res.json());
  }

  getInter(){
    var x = {
      "idProyecto":localStorage.getItem('idProyecto'),
      "numeroPeriodo":parseInt(localStorage.getItem('numeroPeriodo'))
    }
    return this.http.post('prestamo/getIntereses/',x,this.headers).map(res => res.json());
  }

}
