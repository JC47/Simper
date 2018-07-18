import { Component, OnInit } from '@angular/core';
import {BalanceService} from '../../../../services/balance.service';
import {ResultadosService} from '../../../../services/resultados.service';
import { CurrencyPipe } from '@angular/common';
import {ProyectosService} from '../../../../services/proyectos.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

// import * as jsPDF from 'jspdf'
declare var jsPDF: any;

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  balanceFinal:any;
  balanceInicial:any;
  aplicacion;
  origen;
  proyectos:any;
  proyectoActual:any;

  constructor(private _resultadosService:ResultadosService,
     private _balanceService:BalanceService,
    private cp: CurrencyPipe,
  private _proyectoService:ProyectosService) {
    this._proyectoService.ocultaCierrePeriodo()
    this._resultadosService.vender();
    this.proyectos=this._proyectoService.returnUsuarios();
    this.aplicacion = 0;
    this.origen = 0;
  }

  ngOnInit() {
    setTimeout(() => {
      this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'));
      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.balanceFinal = this._resultadosService.getBalanceFinal();
          this.balanceInicial = this._resultadosService.balanceInicialAnterior();
        }
      });
    }, 1500);
  }

  getAplicacionCB(cbf,cbi){
    var r = 0;
    if(cbf > cbi){
      r = (cbf - cbi);
    }
    return r;
  }

  getOrigenCB(cbf,cbi){
    var r = 0;
    if(cbf < cbi){
      r = (cbi - cbf);
    }
    return r;
  }

  getAplicacionTotal(a,b){
    var r = 0;
    r += this.getAplicacionCB(b.cajaBancos,a.cajaBancos);
    r += this.getAplicacionCB(b.cuentasPorCobrar,a.cuentasPorCobrar);
    r += this.getAplicacionCB(b.almacenArtTerm,a.almacenArtTerm);
    r += this.getAplicacionCB(b.almacenMateriales,a.almacenMateriales);
    r += this.getAplicacionCB(b.terreno,a.terreno);
    r += this.getAplicacionCB(b.edifInsta,a.edifInsta);
    r += this.getAplicacionCB(-b.depEdif,-a.depEdif);
    r += this.getAplicacionCB(b.maqEquipo,a.maqEquipo);
    r += this.getAplicacionCB(-b.depMaqEquipo,-a.depMaqEquipo);
    r += this.getAplicacionCB(b.mueblesEnseres,a.mueblesEnseres);
    r += this.getAplicacionCB(-b.depMueblesEnseres,-a.depMueblesEnseres);
    r += this.getAplicacionCB(b.eqTrans,a.eqTrans);
    r += this.getAplicacionCB(-b.depEqTrans,-a.depEqTrans);
    r += this.getAplicacionCB(b.pagosAnticipado,a.pagosAnticipado);
    r += this.getAplicacionCB(b.gastosAmortizacion,a.gastosAmortizacion);
    r += this.getAplicacionCB(-b.IVAPorEnterar,-a.IVAPorEnterar);
    r += this.getAplicacionCB(-b.imptosPorPagar,-a.imptosPorPagar);
    r += this.getAplicacionCB(-b.proveedores,-a.proveedores);
    r += this.getAplicacionCB(-b.PTUPorPagar,-a.PTUPorPagar);
    r += this.getAplicacionCB(-b.prestamosMenosAnio,-a.prestamosMenosAnio);
    r += this.getAplicacionCB(-b.prestamosMasAnio,-a.prestamosMasAnio);
    r += this.getAplicacionCB(-b.capitalSocial,-a.capitalSocial);
    r += this.getAplicacionCB(-b.reservaLegal,-a.reservaLegal);
    r += this.getAplicacionCB(-b.utilidadAcum,(-a.utilidadAcum-a.utilidadEjercicio));
    r += this.getAplicacionCB(-b.utilidadEjercicio,0);
    return r;
  }

  getOrigenTotal(a,b){
    var r = 0;
    r += this.getOrigenCB(b.cajaBancos,a.cajaBancos);
    r += this.getOrigenCB(b.cuentasPorCobrar,a.cuentasPorCobrar);
    r += this.getOrigenCB(b.almacenArtTerm,a.almacenArtTerm);
    r += this.getOrigenCB(b.almacenMateriales,a.almacenMateriales);
    r += this.getOrigenCB(b.terreno,a.terreno);
    r += this.getOrigenCB(b.edifInsta,a.edifInsta);
    r += this.getOrigenCB(-b.depEdif,-a.depEdif);
    r += this.getOrigenCB(b.maqEquipo,a.maqEquipo);
    r += this.getOrigenCB(-b.depMaqEquipo,-a.depMaqEquipo);
    r += this.getOrigenCB(b.mueblesEnseres,a.mueblesEnseres);
    r += this.getOrigenCB(-b.depMueblesEnseres,-a.depMueblesEnseres);
    r += this.getOrigenCB(b.eqTrans,a.eqTrans);
    r += this.getOrigenCB(-b.depEqTrans,-a.depEqTrans);
    r += this.getOrigenCB(b.pagosAnticipado,a.pagosAnticipado);
    r += this.getOrigenCB(b.gastosAmortizacion,a.gastosAmortizacion);
    r += this.getOrigenCB(-b.IVAPorEnterar,-a.IVAPorEnterar);
    r += this.getOrigenCB(-b.imptosPorPagar,-a.imptosPorPagar);
    r += this.getOrigenCB(-b.proveedores,-a.proveedores);
    r += this.getOrigenCB(-b.PTUPorPagar,-a.PTUPorPagar);
    r += this.getOrigenCB(-b.prestamosMenosAnio,-a.prestamosMenosAnio);
    r += this.getOrigenCB(-b.prestamosMasAnio,-a.prestamosMasAnio);
    r += this.getOrigenCB(-b.capitalSocial,-a.capitalSocial);
    r += this.getOrigenCB(-b.reservaLegal,-a.reservaLegal);
    r += this.getOrigenCB(-b.utilidadAcum,(-a.utilidadAcum-a.utilidadEjercicio));
    r += this.getOrigenCB(-b.utilidadEjercicio,0);
    return r;
  }


  getNameById(idProyecto){
    for(let proyecto of this.proyectos){
      if(proyecto.idProyecto==idProyecto)
        return proyecto.nombreProyecto
    }
      return "id NO encontrado"

  }



    descargaPDF(){
      let actualP=this.proyectoActual;

      let anterior:any={
        cajaBancos:null
      };
      let actual:any={
        cajaBancos:null
      };
      let origen:any;
      let aplicacion:any

      for(let balance of this.balanceInicial){
        anterior["cajaBancos"]=balance.cajaBancos;
        anterior['cuentasPorCobrar']=balance.cuentasPorCobrar;
        anterior['IVAAcreditable']=balance.IVAAcreditable;
        anterior['almacenArtTerm']=balance.almacenArtTerm;
        anterior['almacenMateriales']=balance.almacenMateriales;
        anterior['terrenos']=balance.terreno;
        anterior['edificios']=balance.edifInsta;
        anterior['depEdif']=balance.depEdif;
        anterior['maqEquipo']=balance.maqEquipo;
        anterior['depMaqEquipo']=balance.depMaqEquipo;
        anterior['mueblesEnseres']=balance.mueblesEnseres;
        anterior['depMueblesEnseres']=balance.depMueblesEnseres;
        anterior['eqTrans']=balance.eqTrans;
        anterior['depEqTrans']=balance.depEqTrans;
        anterior['pagosAnticipado']=balance.pagosAnticipado;
        anterior['gastosAmortizacion']=balance.gastosAmortizacion;
        anterior['IVAPorEnterar']=balance.IVAPorEnterar;
        anterior['imptosPorPagar']=balance.imptosPorPagar;
        anterior['proveedores']=balance.proveedores;
        anterior['PTUPorPagar']=balance.PTUPorPagar;
        anterior['prestamosMenosAnio']=balance.prestamosMenosAnio;
        anterior['prestamosMasAnio']=balance.prestamosMasAnio;
        anterior['capitalSocial']=balance.capitalSocial;
        anterior['reservaLegal']=balance.reservaLegal;
        anterior['utilidadAcum']=balance.utilidadAcum;
        anterior['utilidadEjercicio']=balance.utilidadEjercicio;
        anterior['total']=0;
      }

      for(let balance of this.balanceFinal){
        actual['cajaBancos']=balance.cajaBancos;
        actual['cuentasPorCobrar']=balance.cuentasPorCobrar;
        actual['IVAAcreditable']=balance.IVAAcreditable;
        actual['almacenArtTerm']=balance.almacenArtTerm;
        actual['almacenMateriales']=balance.almacenMateriales;
        actual['terrenos']=balance.terreno;
        actual['edificios']=balance.edifInsta;
        actual['depEdif']=balance.depEdif;
        actual['maqEquipo']=balance.maqEquipo;
        actual['depMaqEquipo']=balance.depMaqEquipo;
        actual['mueblesEnseres']=balance.mueblesEnseres;
        actual['depMueblesEnseres']=balance.depMueblesEnseres;
        actual['eqTrans']=balance.eqTrans;
        actual['depEqTrans']=balance.depEqTrans;
        actual['pagosAnticipado']=balance.pagosAnticipado;
        actual['gastosAmortizacion']=balance.gastosAmortizacion;
        actual['IVAPorEnterar']=balance.IVAPorEnterar;
        actual['imptosPorPagar']=balance.imptosPorPagar;
        actual['proveedores']=balance.proveedores;
        actual['PTUPorPagar']=balance.PTUPorPagar;
        actual['prestamosMenosAnio']=balance.prestamosMenosAnio;
        actual['prestamosMasAnio']=balance.prestamosMasAnio;
        actual['capitalSocial']=balance.capitalSocial;
        actual['reservaLegal']=balance.reservaLegal;
        actual['utilidadAcum']=balance.utilidadAcum;
        actual['utilidadEjercicio']=balance.utilidadEjercicio;
        actual['total']=0;
      }


    var doc= new jsPDF({
    unit: 'mm',
    format: [279,215.9]


  });

    var columns = [
    {title: "", dataKey: "cara"},
    {title: "Año Actual", dataKey: "actual"},
    {title: "Año Anterior", dataKey: "anterior"},
    {title: "Aplicación", dataKey: "aplicacion"},
    {title: "Origen", dataKey: "origen"}];


    var rows = [
      {"cara":"Amenos de un Año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
      {"cara":"Caja Bancos", "actual": this.cp.transform(actual.cajaBancos,'USD',true,'1.0-0'), "anterior": this.cp.transform(anterior.cajaBancos,'USD',true,'1.0-0'), "aplicacion": this.cp.transform(this.getAplicacionCB(actual.cajaBancos,anterior.cajaBancos),'USD',true,'1.0-0'),"origen": this.cp.transform(this.getOrigenCB(actual.cajaBancos,anterior.cajaBancos),'USD',true,'1.0-0')},

      {"cara":"Cuentas por Cobrar",
        "actual": this.cp.transform(actual.cuentasPorCobrar,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.cuentasPorCobrar,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar),'USD',true,'1.0-0')},

      {"cara":"IVA Acreditable",
        "actual": this.cp.transform(actual.IVAAcreditable,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.IVAAcreditable,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.IVAAcreditable,anterior.IVAAcreditable),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.IVAAcreditable,anterior.IVAAcreditable),'USD',true,'1.0-0')},

      {"cara":"Almacen de Articulo Terminado",
        "actual": this.cp.transform(actual.almacenArtTerm,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.almacenArtTerm,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.almacenArtTerm,anterior.almacenArtTerm),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.almacenArtTerm,anterior.almacenArtTerm),'USD',true,'1.0-0')},

      {"cara":"Almacen de Materiales",
        "actual": this.cp.transform(actual.almacenMateriales,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.almacenMateriales,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.almacenMateriales,anterior.almacenMateriales),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.almacenMateriales,anterior.almacenMateriales),'USD',true,'1.0-0')},

      {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},


      {"cara":"Terrenos",
        "actual": this.cp.transform(actual.terrenos,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.terrenos,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.terrenos,anterior.terrenos),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.terrenos,anterior.terrenos),'USD',true,'1.0-0')},


      {"cara":"Edificios e Instalaciones",
        "actual": this.cp.transform(actual.edificios,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.edificios,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.edificios,anterior.edificios),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.edificios,anterior.edificios),'USD',true,'1.0-0')},

      {"cara":"Deprecicaicón Acumulada",
        "actual": this.cp.transform(-actual.depEdif,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.depEdif,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.depEdif,-anterior.depEdif),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.depEdif,-anterior.depEdif),'USD',true,'1.0-0')},

      {"cara":"Maquinaria y  Equipo",
        "actual": this.cp.transform(actual.maqEquipo,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.maqEquipo,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.maqEquipo,anterior.maqEquipo),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.maqEquipo,anterior.maqEquipo) ,'USD',true,'1.0-0')},

      {"cara":"Depreciación Acumulada",
        "actual": this.cp.transform(-actual.depMaqEquipo,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.depMaqEquipo,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.depMaqEquipo,-anterior.depMaqEquipo),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.depMaqEquipo,-anterior.depMaqEquipo),'USD',true,'1.0-0')},

      {"cara":"Muebles y Enseres",
        "actual": this.cp.transform(actual.mueblesEnseres,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.mueblesEnseres,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.mueblesEnseres,anterior.mueblesEnseres),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.mueblesEnseres,anterior.mueblesEnseres),'USD',true,'1.0-0')},

      {"cara":"Depreciación Acumulada",
        "actual": this.cp.transform(-actual.depMueblesEnseres,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.depMueblesEnseres,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.depMueblesEnseres,-anterior.depMueblesEnseres),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.depMueblesEnseres,-anterior.depMueblesEnseres),'USD',true,'1.0-0')},

      {"cara":"Equipo de Transporte",
        "actual": this.cp.transform(actual.eqTrans,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.eqTrans,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.eqTrans,anterior.eqTrans),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.eqTrans,anterior.eqTrans),'USD',true,'1.0-0')},

      {"cara":"Depreciación Acumulada",
        "actual": this.cp.transform(-actual.depEqTrans,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.depEqTrans,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.depEqTrans,-anterior.depEqTrans),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.depEqTrans,-anterior.depEqTrans),'USD',true,'1.0-0')},

      {"cara":"De Aplicación Diferida","actual":"", "anterior":"", "aplicacion":"","origen":""},

      {"cara":"Pagos hechos por anticipado",
        "actual": this.cp.transform(actual.pagosAnticipado,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.pagosAnticipado,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.pagosAnticipado,anterior.pagosAnticipado),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.pagosAnticipado,anterior.pagosAnticipado),'USD',true,'1.0-0')},

      {"cara":"Gastos por Amortizar",
        "actual": this.cp.transform(actual.gastosAmortizacion,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(anterior.gastosAmortizacion,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(actual.gastosAmortizacion,anterior.gastosAmortizacion),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(actual.gastosAmortizacion,anterior.gastosAmortizacion),'USD',true,'1.0-0')},

      {"cara":"A menos de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},

      {"cara":"IVA por Enterar",
        "actual": this.cp.transform(-actual.IVAPorEnterar,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.IVAPorEnterar,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.IVAPorEnterar,-anterior.IVAPorEnterar),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.IVAPorEnterar,-anterior.IVAPorEnterar),'USD',true,'1.0-0')},

      {"cara":"Impuestos por Pagar",
        "actual": this.cp.transform(-actual.imptosPorPagar,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.imptosPorPagar,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.imptosPorPagar,-anterior.imptosPorPagar),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.imptosPorPagar,-anterior.imptosPorPagar),'USD',true,'1.0-0')},

      {"cara":"Poveedores",
        "actual": this.cp.transform(-actual.proveedores,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.proveedores,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.proveedores,-anterior.proveedores),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.proveedores,-anterior.proveedores),'USD',true,'1.0-0')},

      {"cara":"PTU por Pagar",
        "actual": this.cp.transform(-actual.PTUPorPagar,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.PTUPorPagar,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.PTUPorPagar,-anterior.PTUPorPagar),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.PTUPorPagar,-anterior.PTUPorPagar),'USD',true,'1.0-0')},

      {"cara":"Prestamos Bancarios",
        "actual": this.cp.transform(-actual.prestamosMenosAnio,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.prestamosMenosAnio,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.prestamosMenosAnio,-anterior.prestamosMenosAnio),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.prestamosMenosAnio,-anterior.prestamosMenosAnio),'USD',true,'1.0-0')},

      {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},

      {"cara":"Prestamos Totales",
        "actual": this.cp.transform(-actual.prestamosMasAnio,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.prestamosMasAnio,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.prestamosMasAnio,-anterior.prestamosMasAnio),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.prestamosMasAnio,-anterior.prestamosMasAnio),'USD',true,'1.0-0')},

      {"cara":"Capital Social",
        "actual": this.cp.transform(-actual.capitalSocial,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.capitalSocial,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.capitalSocial,-anterior.capitalSocial),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.capitalSocial,-anterior.capitalSocial),'USD',true,'1.0-0')},

      {"cara":"Reserva Legal",
        "actual": this.cp.transform(-actual.reservaLegal,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.reservaLegal,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.reservaLegal,-anterior.reservaLegal),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.reservaLegal,-anterior.reservaLegal),'USD',true,'1.0-0')},

      {"cara":"Utilidad Acumulada",
        "actual": this.cp.transform(-actual.utilidadAcum,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(-anterior.utilidadAcum-anterior.utilidadEjercicio,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.utilidadAcum,anterior.utilidadAcum+anterior.utilidadAcum),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.utilidadAcum,-anterior.utilidadAcum-anterior.utilidadEjercicio),'USD',true,'1.0-0')},

      {"cara":"Utilidad del Ejercicio",
        "actual": this.cp.transform(-actual.utilidadEjercicio,'USD',true,'1.0-0'),
        "anterior": this.cp.transform(0,'USD',true,'1.0-0'),
        "aplicacion": this.cp.transform(this.getAplicacionCB(-actual.utilidadEjercicio,0),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenCB(-actual.utilidadEjercicio,0),'USD',true,'1.0-0')},

      {"cara":"Total",
        "actual":"$0",
        "anterior":"0",
        "aplicacion": this.cp.transform(this.getAplicacionTotal(anterior,actual),'USD',true,'1.0-0'),
        "origen": this.cp.transform(this.getOrigenTotal(anterior,actual),'USD',true,'1.0-0')},

    ];

    var t = {
      title:"Total",
      dataKey:"t"
    }



    doc.autoTable(columns, rows, {
    margin: {top: 40,
         left:15},
    tableWidth: 185,
    headerStyles: {fillColor:0,halign:'center'},
    columnStyles: {
    cara: {halign:'left',columnWidth:65},
    actual:{halign:'right'},
    anterior:{halign:'right'},
    origen:{halign:'right'},
    aplicacion:{halign:'right'}
    },
    addPageContent: function(data) {
    doc.setFontSize(15);
    doc.setFontType("bold");
    doc.text(107.9, 15, 'Proyecto '+actualP, null, null, 'center');
    doc.setFontSize(13);
    doc.text(107.9, 23, 'Posición Comparativa del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
    doc.line(25, 27, 190, 27);
    },


    drawRow: function (row, data) {
           // Colspan
           doc.setFontStyle('bold');
           doc.setFontSize(10);
           if (row.index === 0) {
               doc.rect(data.settings.margin.left, row.y, data.table.width, 7, 'S');
               doc.autoTableText("Derechos", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
                   halign: 'center',
                   valign: 'middle'
               });
               data.cursor.y += 7;
           } else if (row.index === 19) {
               doc.rect(data.settings.margin.left, row.y, data.table.width, 7, 'S');
               doc.autoTableText("Obligaciones", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
                   halign: 'center',
                   valign: 'middle'
               });
               data.cursor.y += 7;
           }else if (row.index === 27) {
               doc.rect(data.settings.margin.left, row.y, data.table.width, 7, 'S');
               doc.autoTableText("Con los Accionistas", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
                   halign: 'center',
                   valign: 'middle'
               });
               data.cursor.y += 7;
           }

           if (row.index % 5 === 0) {
               var posY = row.y + row.height * 6 + data.settings.margin.bottom;
               if (posY > doc.internal.pageSize.height) {
                   data.addPage();
               }
           }
       },
       drawCell: function (cell, data) {
           // Rowspan

           if (data.column.dataKey === 'id') {
               if (data.row.index % 5 === 0) {
                   doc.rect(cell.x, cell.y, data.table.width, cell.height * 5, 'S');
                   doc.autoTableText(data.row.index / 5 + 1 + '', cell.x + cell.width / 2, cell.y + cell.height * 5 / 2, {
                       halign: 'center',
                       valign: 'middle'
                   });
               }
               return false;
           }


           var rows = data.table.rows;
           if (data.row.index == 0) {
             doc.setFillColor(176, 176, 176);
             doc.setFontType("bold")
           }else if (data.row.index == 6) {
             doc.setFillColor(176, 176, 176);
             doc.setFontType("bold")
           }else if (data.row.index ==16) {
             doc.setFillColor(176, 176, 176);
             doc.setFontType("bold")
           }else if (data.row.index == 19) {
             doc.setFillColor(176, 176, 176);
             doc.setFontType("bold");
           }else if (data.row.index == 25) {
             doc.setFillColor(176, 176, 176);
             doc.setFontType("bold");
           }else if (data.row.index == 31) {
             doc.setFillColor(176, 176, 176);
             doc.setFontType("bold");
           }

       }






    });

    doc.save("Posición Comparativa.pdf");



    }

    descargaCSV(){
      let actualP=this.proyectoActual;
      let anterior:any={
        cajaBancos:null
      };
      let actual:any={
        cajaBancos:null
      };
      let origen:any;
      let aplicacion:any

      for(let balance of this.balanceInicial){
        anterior["cajaBancos"]=balance.cajaBancos;
        anterior['cuentasPorCobrar']=balance.cuentasPorCobrar
        anterior['IVAAcreditable']=balance.IVAAcreditable
        anterior['almacenArtTerm']=balance.almacenArtTerm
        anterior['almacenMateriales']=balance.almacenMateriales
        anterior['terrenos']=balance.terreno
        anterior['edificios']=balance.edifInsta
        anterior['depEdif']=balance.depEdif
        anterior['maqEquipo']=balance.maqEquipo
        anterior['depMaqEquipo']=balance.depMaqEquipo
        anterior['mueblesEnseres']=balance.mueblesEnseres
        anterior['depMueblesEnseres']=balance.depMueblesEnseres
        anterior['equipoTrans']=balance.eqTrans
        anterior['depEqTrans']=balance.depEqTrans
        anterior['pagosAnticipado']=balance.pagosAnticipado
        anterior['gastosAmortizacion']=balance.gastosAmortizacion
        anterior['IVAPorEnterar']=balance.IVAPorEnterar
        anterior['imptosPorPagar']=balance.imptosPorPagar
        anterior['proveedores']=balance.proveedores
        anterior['PTUPorPagar']=balance.PTUPorPagar
        anterior['prestamosMenosAnio']=balance.prestamosMenosAnio
        anterior['prestamosMasAnio']=balance.prestamosMasAnio
        anterior['capitalSocial']=balance.capitalSocial
        anterior['reservaLegal']=balance.reservaLegal
        anterior['utilidadAcum']=balance.utilidadAcum
        anterior['utilidadEjercicio']=balance.utilidadEjercicio
        anterior['total']=0
      }

      for(let balance of this.balanceFinal){
        actual['cajaBancos']=balance.cajaBancos;
        actual['cuentasPorCobrar']=balance.cuentasPorCobrar
        actual['IVAAcreditable']=balance.IVAAcreditable
        actual['almacenArtTerm']=balance.almacenArtTerm
        actual['almacenMateriales']=balance.almacenMateriales
        actual['terrenos']=balance.terreno
        actual['edificios']=balance.edifInsta
        actual['depEdif']=balance.depEdif
        actual['maqEquipo']=balance.maqEquipo
        actual['depMaqEquipo']=balance.depMaqEquipo
        actual['mueblesEnseres']=balance.mueblesEnseres
        actual['depMueblesEnseres']=balance.depMueblesEnseres
        actual['eqTrans']=balance.eqTrans
        actual['depEqTrans']=balance.depEqTrans
        actual['pagosAnticipado']=balance.pagosAnticipado
        actual['gastosAmortizacion']=balance.gastosAmortizacion
        actual['IVAPorEnterar']=balance.IVAPorEnterar
        actual['imptosPorPagar']=balance.imptosPorPagar
        actual['proveedores']=balance.proveedores
        actual['PTUPorPagar']=balance.PTUPorPagar
        actual['prestamosMenosAnio']=balance.prestamosMenosAnio
        actual['prestamosMasAnio']=balance.prestamosMasAnio
        actual['capitalSocial']=balance.capitalSocial
        actual['reservaLegal']=balance.reservaLegal
        actual['utilidadAcum']=balance.utilidadAcum
        actual['utilidadEjercicio']=balance.utilidadEjercicio
        actual['total']=0
      }

      let data=[
        {"cara":"Posición Comparativa del Periodo "+localStorage.getItem('numeroPeriodo'),anterior:"Proyecto "+actualP},
        {"cara":"","actual":"Año Actual","anterior":"Año Anterior","aplicacion":"Aplicación","origen":"Origen"},
        {"cara":"Amenos de un Año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Caja Bancos", "actual":actual.cajaBancos, "anterior":anterior.cajaBancos, "aplicacion":this.getAplicacionCB(actual.cajaBancos,anterior.cajaBancos),"origen":this.getOrigenCB(actual.cajaBancos,anterior.cajaBancos)},
        {"cara":"Cuentas por Cobrar", "actual":actual.cuentasPorCobrar, "anterior":anterior.cuentasPorCobrar, "aplicacion":this.getAplicacionCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar),"origen":this.getOrigenCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar)},
        {"cara":"IVA Acreditable",
          "actual":actual.IVAAcreditable,
          "anterior":anterior.IVAAcreditable,
          "aplicacion":this.getAplicacionCB(actual.IVAAcreditable,anterior.IVAAcreditable),
          "origen":this.getOrigenCB(actual.IVAAcreditable,anterior.IVAAcreditable)},

        {"cara":"Almacen de Articulo Terminado", "actual":actual.almacenArtTerm, "anterior":anterior.almacenArtTerm, "aplicacion":this.getAplicacionCB(actual.almacenArtTerm,anterior.almacenArtTerm),"origen":this.getOrigenCB(actual.almacenArtTerm,anterior.almacenArtTerm)},
        {"cara":"Almacen de Materiales", "actual":actual.almacenMateriales, "anterior":anterior.almacenMateriales, "aplicacion":this.getAplicacionCB(actual.almacenMateriales,anterior.almacenMateriales),"origen":this.getOrigenCB(actual.almacenMateriales,anterior.almacenMateriales)},
        {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Terrenos", "actual":actual.terrenos, "anterior":anterior.terrenos, "aplicacion":this.getAplicacionCB(actual.terrenos,anterior.terrenos),"origen":this.getOrigenCB(actual.terrenos,anterior.terrenos)},
        {"cara":"Edificios e Instalaciones", "actual":actual.edificios, "anterior":anterior.edificios, "aplicacion":this.getAplicacionCB(actual.edificios,anterior.edificios),"origen":this.getOrigenCB(actual.edificios,anterior.edificios)},
        {"cara":"Deprecicaicón Acumulada", "actual":-actual.depEdif, "anterior":-anterior.depEdif,
          "aplicacion":this.getAplicacionCB(-actual.depEdif,-anterior.depEdif),
          "origen":this.getOrigenCB(-actual.depEdif,-anterior.depEdif)},

        {"cara":"Maquinaria y  Equipo", "actual":actual.maqEquipo, "anterior":anterior.maqEquipo, "aplicacion":this.getAplicacionCB(actual.maqEquipo,anterior.maqEquipo),"origen":this.getOrigenCB(actual.maqEquipo,anterior.maqEquipo) },
        {"cara":"Depreciación Acumulada", "actual":-actual.depMaqEquipo,
          "anterior":-anterior.depMaqEquipo, "aplicacion":this.getAplicacionCB(-actual.depMaqEquipo,-anterior.depMaqEquipo),
          "origen":this.getOrigenCB(-actual.depMaqEquipo,-anterior.depMaqEquipo)},
        {"cara":"Muebles y Enseres", "actual":actual.mueblesEnseres, "anterior":anterior.mueblesEnseres, "aplicacion":this.getAplicacionCB(actual.mueblesEnseres,anterior.mueblesEnseres),"origen":this.getOrigenCB(actual.mueblesEnseres,anterior.mueblesEnseres)},
        {"cara":"Depreciación Acumulada", "actual":-actual.depMueblesEnseres,
          "anterior":-anterior.depMueblesEnseres, "aplicacion":this.getAplicacionCB(-actual.depMueblesEnseres,-anterior.depMueblesEnseres),
          "origen":this.getOrigenCB(-actual.depMueblesEnseres,-anterior.depMueblesEnseres)},
        {"cara":"Equipo de Transporte", "actual":actual.eqTrans, "anterior":anterior.eqTrans, "aplicacion":this.getAplicacionCB(actual.eqTrans,anterior.eqTrans),"origen":this.getOrigenCB(actual.eqTrans,anterior.eqTrans)},
        {"cara":"Depreciación Acumulada",
          "actual":-actual.depEqTrans, "anterior":-anterior.depEqTrans,
          "aplicacion":this.getAplicacionCB(-actual.depEqTrans,-anterior.depEqTrans),
          "origen":this.getOrigenCB(-actual.depEqTrans,-anterior.depEqTrans)},

        {"cara":"De Aplicación Diferida", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Pagos hechos por anticipado", "actual":actual.pagosAnticipado, "anterior":anterior.pagosAnticipado, "aplicacion":this.getAplicacionCB(actual.pagosAnticipado,anterior.pagosAnticipado),"origen":this.getOrigenCB(actual.pagosAnticipado,anterior.pagosAnticipado)},
        {"cara":"Gastos por Amortizar", "actual":actual.gastosAmortizacion, "anterior":anterior.gastosAmortizacion, "aplicacion":this.getAplicacionCB(actual.gastosAmortizacion,anterior.gastosAmortizacion),"origen":this.getOrigenCB(actual.gastosAmortizacion,anterior.gastosAmortizacion)},
        {"cara":"Obligaciones", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"A menos de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"IVA por Enterar",
          "actual":-actual.IVAPorEnterar,
          "anterior":-anterior.IVAPorEnterar,
          "aplicacion":this.getAplicacionCB(-actual.IVAPorEnterar,-anterior.IVAPorEnterar),
          "origen":this.getOrigenCB(-actual.IVAPorEnterar,-anterior.IVAPorEnterar)},

        {"cara":"Impuestos por Pagar",
          "actual":-actual.imptosPorPagar,
          "anterior":-anterior.imptosPorPagar,
          "aplicacion":this.getAplicacionCB(-actual.imptosPorPagar,-anterior.imptosPorPagar),
          "origen":this.getOrigenCB(-actual.imptosPorPagar,-anterior.imptosPorPagar)},

        {"cara":"Poveedores",
          "actual":-actual.proveedores,
          "anterior":-anterior.proveedores,
          "aplicacion":this.getAplicacionCB(-actual.proveedores,-anterior.proveedores),
          "origen":this.getOrigenCB(-actual.proveedores,-anterior.proveedores)},

        {"cara":"PTU por Pagar",
          "actual":-actual.PTUPorPagar,
          "anterior":-anterior.PTUPorPagar,
          "aplicacion":this.getAplicacionCB(-actual.PTUPorPagar,-anterior.PTUPorPagar),
          "origen":this.getOrigenCB(-actual.PTUPorPagar,-anterior.PTUPorPagar)},

        {"cara":"Prestamos Bancarios",
          "actual":-actual.prestamosMenosAnio,
          "anterior":-anterior.prestamosMenosAnio,
          "aplicacion":this.getAplicacionCB(-actual.prestamosMenosAnio,-anterior.prestamosMenosAnio),
          "origen":this.getOrigenCB(-actual.prestamosMenosAnio,-anterior.prestamosMenosAnio)},

        {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},

        {"cara":"Prestamos Totales",
          "actual":-actual.prestamosMasAnio,
          "anterior":-anterior.prestamosMasAnio,
          "aplicacion":this.getAplicacionCB(-actual.prestamosMasAnio,-anterior.prestamosMasAnio),
          "origen":this.getOrigenCB(-actual.prestamosMasAnio,-anterior.prestamosMasAnio)},


        {"cara":"Con los Accionistas", "actual":"", "anterior":"", "aplicacion":"","origen":""},

        {"cara":"Capital Social", "actual":-actual.capitalSocial, "anterior":-anterior.capitalSocial,
          "aplicacion":this.getAplicacionCB(-actual.capitalSocial,-anterior.capitalSocial),
          "origen":this.getOrigenCB(-actual.capitalSocial,-anterior.capitalSocial)},

        {"cara":"Reserva Legal",
          "actual":actual.reservaLegal,
          "anterior":anterior.reservaLegal,
          "aplicacion":this.getAplicacionCB(actual.reservaLegal,anterior.reservaLegal),
          "origen":this.getOrigenCB(actual.reservaLegal,anterior.reservaLegal)},

        {"cara":"Utilidad Acumulada",
          "actual":-actual.utilidadAcum, "anterior":-anterior.utilidadAcum-anterior.utilidadEjercicio,
          "aplicacion":this.getAplicacionCB(-actual.utilidadAcum,-anterior.utilidadAcum-anterior.utilidadEjercicio),
          "origen":this.getOrigenCB(-actual.utilidadAcum,-anterior.utilidadAcum-anterior.utilidadEjercicio)},

        {"cara":"Utilidad del Ejercicio",
          "actual":-actual.utilidadEjercicio,
          "anterior":0,
          "aplicacion":this.getAplicacionCB(actual.utilidadEjercicio,0),
          "origen":this.getOrigenCB(actual.utilidadEjercicio,0)},

        {"cara":"Total", "actual":0, "anterior":0, "aplicacion":this.getAplicacionTotal(anterior,actual),"origen":this.getOrigenTotal(anterior,actual)},
      ]
        new Angular2Csv(data, 'Posición Comparativa');
    }



}
