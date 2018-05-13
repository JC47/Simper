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

  returnEquilibrio(){
    var eq = [];
    this.getEquilibrio().subscribe(data => {
      eq.push(data.datos);
    });
    return eq;
  }

  returnAlmacen(){
    var alma = [];
    this.getAlmacen().subscribe(data => {
      for(let key in data.datos){
        alma.push(data.datos[key]);
      }
    });
    return alma;
  }

  returnAlmacenAnterior(){
    var alma = [];
    this.getAlmacenAnterior().subscribe(data => {
      for(let key in data.datos){
        alma.push(data.datos[key]);
      }
    });
    return alma;
  }


  registerAlmacen(x){
    var alma = [];
    this.addAlmacen(x).subscribe(data => {
      for(let key in data.datos){
        alma.push(data.datos[key]);
      }
    });
    return alma;
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

  getAlmacen(){
    var x = {
      Balance_numeroPeriodo:localStorage.getItem('numeroPeriodo'),
      Proyecto_idProyecto:localStorage.getItem('idProyecto')
    }
    return this.http.post('operacion/getAlmacen/',x,this.headers).map(res => res.json());
  }

  getAlmacenAnterior(){
    var x = {
      Balance_numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))-1,
      Proyecto_idProyecto:localStorage.getItem('idProyecto')
    }
    return this.http.post('operacion/getAlmacen/',x,this.headers).map(res => res.json());
  }

  getInter(){
    var x = {
      "idProyecto":localStorage.getItem('idProyecto'),
      "numeroPeriodo":parseInt(localStorage.getItem('numeroPeriodo'))
    }
    return this.http.post('prestamo/getIntereses/',x,this.headers).map(res => res.json());
  }

  getEquilibrio(){
    var x = {
      "idProyecto":localStorage.getItem('idProyecto'),
      "numeroPeriodo":parseInt(localStorage.getItem('numeroPeriodo'))
    }
    return this.http.post('operacion/equilibrio/',x,this.headers).map(res => res.json());
  }

  prestamosPedidos(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('prestamo/getPrestamos',x,{headers}).map(res => res.json());
  }

  returnPrestamosActuales(){
    var p = [];
    this.prestamosPedidos().subscribe(data => {
      for(let key in data.datos){
        p.push(data.datos[key]);
      }
    });
    return p;
  }

  pagos(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('prestamo/getPagos',x,{headers}).map(res => res.json());
  }

  returnPagos(){
    var p = [];
    this.pagos().subscribe(data => {
      p.push(data.datos);
    });
    return p;
  }

  getIntegrales(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.get('operacion/integrales/'+localStorage.getItem('idProyecto'),{headers}).map(res => res.json());
  }

  getTendencias(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.get('operacion/tendencias/'+localStorage.getItem('idProyecto'),{headers}).map(res => res.json());
  }

  returnIntegrales(){
    var x = [];
    this.getIntegrales().subscribe(data => {
      for(let key in data.datos){
        x.push(data.datos[key]);
      }
    });
    return x;
  }

  returnTendencias(){
    var x = [];
    this.getTendencias().subscribe(data => {
      for(let key in data.datos){
        x.push(data.datos[key]);
      }
    });
    return x;
  }

  //Decisiones
  ventas(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('decisiones/getVentas/',x,{headers}).map(res => res.json());
  }

  maquinas(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('decisiones/getMaquinarias/',x,{headers}).map(res => res.json());
  }

  dproductos(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('decisiones/getDesarrollosP/',x,{headers}).map(res => res.json());
  }

  dzonas(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('decisiones/getDesarrollosZ/',x,{headers}).map(res => res.json());
  }

  creditos(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      numeroPeriodo:localStorage.getItem('numeroPeriodo')
    }
    return this.http.post('decisiones/getCreditos/',x,{headers}).map(res => res.json());
  }

  returnVentas(){
    var x = [];
    this.ventas().subscribe(data => {
      for(let key in data.datos){
        x.push(data.datos[key]);
      }
    });
    return x;
  }

  returnMaquinas(){
    var x = [];
    this.maquinas().subscribe(data => {
      for(let key in data.datos){
        x.push(data.datos[key]);
      }
    });
    return x;
  }

  returnDProductos(){
    var x = [];
    this.dproductos().subscribe(data => {
      for(let key in data.datos){
        x.push(data.datos[key]);
      }
    });
    return x;
  }

  returnDZonas(){
    var x = [];
    this.dzonas().subscribe(data => {
      for(let key in data.datos){
        x.push(data.datos[key]);
      }
    });
    return x;
  }

  returnCreditos(){
    var x = [];
    this.creditos().subscribe(data => {
      for(let key in data.datos){
        x.push(data.datos[key]);
      }
    });
    return x;
  }


}
