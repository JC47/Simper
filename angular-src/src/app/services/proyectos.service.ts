import { Injectable } from '@angular/core';
import {proyecto} from '../app.interfaces';
import {Router}  from '@angular/router';
import {UsuarioMaquinariaService} from './usuario-maquinaria.service';
import {UsuarioProductoService} from './usuario-producto.service';
import {UsuarioZonaService} from './usuario-zona.service';
import {DesarrolloProductoService} from './desarrollo-producto.service';
import {AuxiliarService} from './auxiliar.service';
import {DesarrolloZonaService} from './desarrollo-zona.service';
import {CompraMaquinariaService} from './compra-maquinaria.service';
import { BalanceService} from './balance.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

@Injectable()
export class ProyectosService {

  proyectos:proyecto[]=new Array();
  periodo:any;
  periodos=[];
  muestraPeriodo:boolean=false;
  muestraPeriodoCorriendo:boolean=false;
  constructor(private http:Http, private _balanceService:BalanceService,
              private _usuarioMaquinariaService:UsuarioMaquinariaService,
              private _usuarioProductoService:UsuarioProductoService,
              private router:Router,
              private _auxiliarService:AuxiliarService,
              private _desarrolloProductoService:DesarrolloProductoService,
              private _desarrolloZonaService:DesarrolloZonaService,
              private _usuarioZonaService:UsuarioZonaService,
              private _CompraMaquinariaService:CompraMaquinariaService,
              private _usuarioZona:UsuarioZonaService) {




          }

  establecerValores(){
    this.proyectos.length = 0;
    this.getProyectos().subscribe(data => {
      for(let key$ in data){
          this.proyectos.push(data[key$]);
      }

    });
    return this.proyectos;
  }

returnUsuarios(){
 return this.establecerValores();
}

  setProyecto(proyecto:proyecto){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    for(let i=0;this.proyectos.length>i;i++){
      if(this.proyectos[i].idProyecto==proyecto.idProyecto){
        this.proyectos.splice(i,1);
        this.proyectos.push(proyecto);
      }
    }
    return this.http.post('proyecto/modify/'+proyecto.idProyecto, proyecto, {headers}).map( res => res.json());
  }

  eliminaProyecto(id:number){
    for(let i=0;this.proyectos.length>i;i++){
      if(this.proyectos[i].idProyecto==id){
        this.proyectos.splice(i,1);
      }
    }
    return this.http.get('proyecto/delete/'+id).map(res => res.json());

  }

  buscarPeriodos(idProyecto){
    return this.http.get('balance/'+idProyecto).map(res => res.json());
  }


  muestraCierrePeriodo(){
    this.muestraPeriodo=false;
    console.log(this.muestraPeriodo)
  }

  muestraPCorriendo(){
    this.muestraPeriodoCorriendo=true;
  }

  oculataPCorriendo(){
    this.muestraPeriodoCorriendo=false;
  }

  ocultaCierrePeriodo(){
    this.muestraPeriodo=true;
  }

  changePeriodo(){
    this.periodos.length = 0;
    this.buscarPeriodos(localStorage.getItem('idProyecto')).subscribe(data => {
      if(data.datos.length == 0){
        this.periodo=0;
      }
      else{
        this.periodo = parseInt(data.datos.length) - 1;
        for(let key$ in data.datos){
          if(data.datos[key$].numeroPeriodo != 0){
            var y = {
              nombre:"Periodo "+(data.datos[key$].numeroPeriodo),
              numero:(data.datos[key$].numeroPeriodo)
            }
            this.periodos.push(y);
          }
        }
      }
    });
  }

  ver(numero){
    this.periodo = numero;
    localStorage.setItem('numeroPeriodo', numero);
    this.router.navigate(['Usuario/proyecto/home']);
  }

  editar(numero){
    this.periodo = numero;
    this.deletePeriodos(numero).subscribe();
    setTimeout(() => {
      this.buscarPeriodos(localStorage.getItem('idProyecto')).subscribe(data =>{
        this.periodos.length = 0;
        for(let key$ in data.datos){
          if(data.datos[key$].numeroPeriodo != 0){
            var y = {
              nombre:"Periodo "+(data.datos[key$].numeroPeriodo),
              numero:(data.datos[key$].numeroPeriodo)
            }
            this.periodos.push(y);
          }
        }
      });
      localStorage.setItem('numeroPeriodo', numero);
      localStorage.setItem('numeroRPeriodos', numero);
      this.router.navigate(['Usuario/proyecto/home']);
    },300);

  }

  asignarBalance(idProyecto){
    this.buscarPeriodos(idProyecto).subscribe(data => {
      if(data.datos.length == 0){
        var x = this.asginarPeriodoCero(idProyecto);
        console.log("Retorno",x)
        setTimeout(()=>{
          localStorage.setItem('numeroPeriodo','1');
          localStorage.setItem('numeroRPeriodos','1');
          this.asignarTodo(idProyecto);
        }, 500);
      }
      else{
        var num = parseInt(data.datos.length) - 1;
        localStorage.setItem('numeroPeriodo',num.toString());
        localStorage.setItem('numeroRPeriodos',num.toString());
      }
    });
  }

  asignarTodo(idProyecto){
    this.asignarMaquinaria(idProyecto,localStorage.getItem('idUsuario'));
    this.asginarProductos(idProyecto,localStorage.getItem('idUsuario'));
    this.asignarProductos2(idProyecto,localStorage.getItem('idUsuario'));
    this.asignarTZ(idProyecto);
  }

  asignarTZ(idProyecto){
    this.asignarZonas2(idProyecto,localStorage.getItem('idUsuario'));
    this.asignarZonas(idProyecto,localStorage.getItem('idUsuario'));
  }

  asginarProductos(idProyecto, idUsuario){
    this._usuarioProductoService.getProductosU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        var x = {
          Proyectos_idProyecto:idProyecto,
          Productos_idProducto:data.datos[key$].idProducto,
          desarrollado:2,
          periodoInicio:0,
          periodosDes:0
        }
        this._desarrolloProductoService.desarrollar(x).subscribe();
      }
    });
  }

  setTerminado(idProyecto){
    return this.http.get('proyecto/terminado/'+idProyecto).map(res => res.json());
  }

  asignarProductos2(idProyecto, idUsuario){
    this._usuarioProductoService.getProductosNU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        var x = {
          Proyectos_idProyecto:idProyecto,
          Productos_idProducto:data.datos[key$].idProducto,
          desarrollado:0,
          periodoInicio:0,
          periodosDes:0
        }
        this._desarrolloProductoService.desarrollar(x).subscribe();
      }
    });
  }

  entrar(){
    this.router.navigate(['Usuario/proyecto']);
  }

  asignarZonas(idProyecto, idUsuario){
    this._usuarioZonaService.getZonasU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        var x = {
          Producto_idProducto:data.datos[key$].idProducto,
          Zona_idZonas:data.datos[key$].idZona,
          Proyecto_idProyecto:idProyecto,
          Proyecto_Usuario_idUsuario:idUsuario,
          numeroPeriodo:0,
          desarrollado:2,
          periodoInicio:0,
          periodosDes:0
        }
        this._desarrolloZonaService.addZona(x).subscribe();
      }
    });
  }

  asignarZonas2(idProyecto, idUsuario){
    this._usuarioZonaService.getZonasNU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        var x = {
          Producto_idProducto:data.datos[key$].Producto_idProducto,
          Zona_idZonas:data.datos[key$].Zona_idZona,
          Proyecto_idProyecto:idProyecto,
          Proyecto_Usuario_idUsuario:idUsuario,
          numeroPeriodo:0,
          desarrollado:0,
          periodoInicio:0,
          periodosDes:0
        }
        this._desarrolloZonaService.addZona(x).subscribe();
      }
    });
  }

  asignarMaquinaria(idProyecto, idUsuario){
      this._usuarioMaquinariaService.getMaquinariasU(idUsuario).subscribe(data => {
        for(let key$ in data.datos){
          var x = {
            Balance_numeroPeriodo:0,
            Maquinaria_idMaquinaria:data.datos[key$].idMaquinaria,
            Maquinaria_idProducto:data.datos[key$].Producto_idProducto,
            Proyectos_idProyecto:idProyecto,
            Cantidad:data.datos[key$].cantidad
          }
          this._CompraMaquinariaService.asingar(x).subscribe();
        }
      });
    }

  asginarPeriodoCero(idProyecto){
    var r = [];
    this.buscarDatosUsuario().subscribe(data => {
      for(let key$ in data){
        if(data[key$].idUsuario == localStorage.getItem('idUsuario')){
          this.crearBalanceCero(idProyecto,data[key$],0).subscribe(data => {
            r.push(data.datos);
          }
          );
          this.crearBalanceUno(idProyecto,data[key$],1).subscribe();
          break;
        }
      }
    });
    return r;
  }

  buscarDatosUsuario(){
    return this.http.get('usuario/').map(res => res.json());
  }

  crearBalanceUno(idProyecto,data,num){
    var Balance = {
    "IVAPorEnterar":data.IVAPorEnterar,
    "numeroPeriodo":num,
    "imptosPorPagar" :data.imptosPorPagar,
    "proveedores":data.proveedores,
    "PTUPorPagar":data.PTUPorPagar,
    "prestamosMenosAnio":data.prestamosMenosAnio,
    "prestamosMasAnio":data.prestamosMasAnio,
    "cajaBancos":data.cajaBancos,
    "cuentasPorCobrar":data.cuentasPorCobrar,
    "IVAAcreditable":data.IVAAcreditable,
    "almacenArtTerm":data.almacenArtTerm,
    "almacenMateriales":data.almacenMateriales,
    "terreno":data.terreno,
    "edifInsta":data.edifInsta,
    "maqEquipo":data.maqEquipo,
    "mueblesEnseres":data.mueblesEnseres,
    "pagosAnticipado":data.pagosAnticipado,
    "gastosAmortizacion":data.gastosAmortizacion,
    "capitalSocial":data.capitalSocial,
    "reservaLegal":data.reservaLegal,
    "utilidadAcum":data.utilidadAcum,
    "depEdif":0,
    "depMueblesEnseres":0,
    "eqTrans":data.eqTrans,
    "Proyectos_idProyecto":idProyecto,
    "depTerreno":0,
    "depMaqEquipo":0,
    "depEqTrans":0,
    "porAmortizar":0
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('balance/register/', Balance, {headers}).map( res => res.json());
  }

  crearBalanceCero(idProyecto,data,num){
    var Balance = {
    "IVAPorEnterar":data.IVAPorEnterar,
    "numeroPeriodo":num,
    "imptosPorPagar" :data.imptosPorPagar,
    "proveedores":data.proveedores,
    "PTUPorPagar":data.PTUPorPagar,
    "prestamosMenosAnio":data.prestamosMenosAnio,
    "prestamosMasAnio":data.prestamosMasAnio,
    "cajaBancos":data.cajaBancos,
    "cuentasPorCobrar":data.cuentasPorCobrar,
    "IVAAcreditable":data.IVAAcreditable,
    "almacenArtTerm":data.almacenArtTerm,
    "almacenMateriales":data.almacenMateriales,
    "terreno":data.terreno,
    "edifInsta":data.edifInsta,
    "maqEquipo":data.maqEquipo,
    "mueblesEnseres":data.mueblesEnseres,
    "pagosAnticipado":data.pagosAnticipado,
    "gastosAmortizacion":data.gastosAmortizacion,
    "capitalSocial":data.capitalSocial,
    "reservaLegal":data.reservaLegal,
    "utilidadAcum":data.utilidadAcum,
    "depEdif":0,
    "depMueblesEnseres":0,
    "eqTrans":data.eqTrans,
    "Proyectos_idProyecto":idProyecto,
    "depTerreno":0,
    "depMaqEquipo":0,
    "depEqTrans":0,
    "porAmortizar":0
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('balance/register/', Balance, {headers}).map( res => res.json());
  }

  deletePeriodos(m){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var x = {
      idProyecto:localStorage.getItem('idProyecto'),
      periodoMenor:m,
      periodoMayor:localStorage.getItem('numeroRPeriodos')
    }
    return this.http.post('balance/eliminarperiodos/', x, {headers}).map( res => res.json());
  }

  addProyecto(proyecto:proyecto){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('proyecto/register/'+localStorage.getItem('idUsuario'), proyecto, {headers}).map( res => res.json());
  }

  agregaProyecto(proyecto:proyecto){
    this.addProyecto(proyecto).subscribe( data => {
      for(let key$ in data.datos){
          this.proyectos[key$] = data.datos[key$];
      }
    });
  }



  getProyectos(){
    return this.http.get('proyecto/'+localStorage.getItem('idUsuario')).map(res => res.json());
  }

}
