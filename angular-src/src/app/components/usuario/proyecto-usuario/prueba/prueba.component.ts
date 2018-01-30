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

  constructor(private _resultadosService:ResultadosService,
     private _balanceService:BalanceService,
    private cp: CurrencyPipe,
  private _proyectoService:ProyectosService) {
    this._proyectoService.ocultaCierrePeriodo()
    this._resultadosService.vender();
    this.aplicacion = 0;
    this.origen = 0;
  }

  ngOnInit() {
    setTimeout(() => {
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
    this.aplicacion += r;
    return r;
  }

  getOrigenCB(cbf,cbi){
    var r = 0;
    if(cbf < cbi){
      r = (cbi - cbf);
    }
    this.origen += r;
    return r;
  }



    descargaPDF(){
    var doc= new jsPDF({
    unit: 'mm',
    format: [279,215.9]



  });

    let anterior:any;
    let actual:any;
    let origen:any;
    let aplicacion:any;



    for(let balance of this.balanceFinal){
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

    for(let balance of this.balanceInicial){
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


    var columns = [
    {title: "", dataKey: "cara"},
    {title: "Año Actual", dataKey: "actual"},
    {title: "Año Anterior", dataKey: "anterior"},
    {title: "Aplicación", dataKey: "aplicacion"},
    {title: "Origen", dataKey: "origen"}];


    var rows = [
    {"cara":"Amenos de un Año", "actual":"","anterior":"","aplicacion":"", "origen":""},
    {"cara":"Amenos de un Año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
    {"cara":"Caja Bancos", "actual":actual.cajaBancos, "anterior":anterior.cajaBancos, "aplicacion":this.getAplicacionCB(actual.cajaBancos,anterior.cajaBancos),"origen":this.getOrigenCB(actual.cajaBancos,anterior.cajaBancos)},
    {"cara":"Cuentas por Cobrar", "actual":actual.cuentasPorCobrar, "anterior":anterior.cuentasPorCobrar, "aplicacion":this.getAplicacionCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar),"origen":this.getOrigenCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar)},
    {"cara":"IVA Acreditable", "actual":actual.IVAAcredita, "anterior":anterior.IVAAcreditable, "aplicacion":this.getAplicacionCB(actual.IVAAcreditable,anterior.IVAAcreditable),"origen":this.getOrigenCB(actual.IVAAcreditable,anterior.IVAAcreditable)},
    {"cara":"Almacen de Articulo Terminado", "actual":actual.almacenArtTerm, "anterior":anterior.almacenArtTerm, "aplicacion":this.getAplicacionCB(actual.almacenArtTerm,anterior.almacenArtTerm),"origen":this.getOrigenCB(actual.almacenArtTerm,anterior.almacenArtTerm)},
    {"cara":"Almacen de Materiales", "actual":actual.almacenMateriales, "anterior":anterior.almacenMateriales, "aplicacion":this.getAplicacionCB(actual.almacenMateriales,anterior.almacenMateriales),"origen":this.getOrigenCB(actual.almacenMateriales,anterior.almacenMateriales)},
    {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
    {"cara":"Terrenos", "actual":actual.terrenos, "anterior":anterior.terrenos, "aplicacion":this.getAplicacionCB(actual.terrenos,anterior.terrenos),"origen":this.getOrigenCB(actual.terrenos,anterior.terrenos)},
    {"cara":"Edificios e Instalaciones", "actual":actual.edificios, "anterior":anterior.edificios, "aplicacion":this.getAplicacionCB(actual.edificios,anterior.edificios),"origen":this.getOrigenCB(actual.edificios,anterior.edificios)},
    {"cara":"Deprecicaicón Acumulada", "actual":actual.depEdif, "anterior":anterior.depEdif, "aplicacion":this.getAplicacionCB(actual.depEdif,anterior.depEdif),"origen":this.getOrigenCB(actual.depEdif,anterior.depEdif)},
    {"cara":"Maquinaria y  Equipo", "actual":actual.maqEquipo, "anterior":anterior.maqEquipo, "aplicacion":this.getAplicacionCB(actual.maqEquipo,anterior.maqEquipo),"origen":this.getOrigenCB(actual.maqEquipo,anterior.maqEquipo) },
    {"cara":"Depreciación Acumulada", "actual":actual.depMaqEquipo, "anterior":anterior.depMaqEquipo, "aplicacion":this.getAplicacionCB(actual.depMaqEquipo,anterior.depMaqEquipo),"origen":this.getOrigenCB(actual.depMaqEquipo,anterior.depMaqEquipo)},
    {"cara":"Muebles y Enseres", "actual":actual.mueblesEnseres, "anterior":anterior.mueblesEnseres, "aplicacion":this.getAplicacionCB(actual.mueblesEnseres,anterior.mueblesEnseres),"origen":this.getOrigenCB(actual.mueblesEnseres,anterior.mueblesEnseres)},
    {"cara":"Depreciación Acumulada", "actual":actual.depMueblesEnseres, "anterior":anterior.depMueblesEnseres, "aplicacion":this.getAplicacionCB(actual.depMueblesEnseres,anterior.depMueblesEnseres),"origen":this.getOrigenCB(actual.depMueblesEnseres,anterior.depMueblesEnseres)},
    {"cara":"Equipo de Transporte", "actual":actual.eqTrans, "anterior":anterior.eqTrans, "aplicacion":this.getAplicacionCB(actual.eqTrans,anterior.eqTrans),"origen":this.getOrigenCB(actual.eqTrans,anterior.eqTrans)},
    {"cara":"Depreciación Acumulada", "actual":actual.depEqTrans, "anterior":anterior.depEqTrans, "aplicacion":this.getAplicacionCB(actual.depEqTrans,anterior.depEqTrans),"origen":this.getOrigenCB(actual.depEqTrans,anterior.depEqTrans)},
    {"cara":"De Aplicación Diferida", "actual":"", "anterior":"", "aplicacion":"","origen":""},
    {"cara":"Pagos hechos por anticipado", "actual":actual.pagosAnticipado, "anterior":anterior.pagosAnticipado, "aplicacion":this.getAplicacionCB(actual.pagosAnticipado,anterior.pagosAnticipado),"origen":this.getOrigenCB(actual.pagosAnticipado,anterior.pagosAnticipado)},
    {"cara":"Gastos por Amortizar", "actual":actual.gastosAmortizacion, "anterior":anterior.gastosAmortizacion, "aplicacion":this.getAplicacionCB(actual.gastosAmortizacion,anterior.gastosAmortizacion),"origen":this.getOrigenCB(actual.gastosAmortizacion,anterior.gastosAmortizacion)},
    {"cara":"A menos de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
    {"cara":"IVA por Enterar", "actual":actual.IVAPorEnterar, "anterior":anterior.IVAPorEnterar, "aplicacion":this.getAplicacionCB(actual.IVAPorEnterar,anterior.IVAPorEnterar),"origen":this.getOrigenCB(actual.IVAPorEnterar,anterior.IVAPorEnterar)},
    {"cara":"Impuestos por Pagar", "actual":actual.imptosPorPagar, "anterior":anterior.imptosPorPagar, "aplicacion":this.getAplicacionCB(actual.imptosPorPagar,anterior.imptosPorPagar),"origen":this.getOrigenCB(actual.imptosPorPagar,anterior.imptosPorPagar)},
    {"cara":"Poveedores", "actual":actual.proveedores, "anterior":anterior.proveedores, "aplicacion":this.getAplicacionCB(actual.proveedores,anterior.proveedores),"origen":this.getOrigenCB(actual.proveedores,anterior.proveedores)},
    {"cara":"PTU por Pagar", "actual":actual.proveedores, "anterior":anterior.proveedores, "aplicacion":this.getAplicacionCB(actual.proveedores,anterior.proveedores),"origen":this.getOrigenCB(actual.proveedores,anterior.proveedores)},
    {"cara":"Prestamos Bancarios", "actual":actual.prestamosMenosAnio, "anterior":anterior.prestamosMenosAnio, "aplicacion":this.getAplicacionCB(actual.prestamosMenosAnio,anterior.prestamosMenosAnio),"origen":this.getOrigenCB(actual.prestamosMenosAnio,anterior.prestamosMenosAnio)},
    {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
    {"cara":"Prestamos Totales", "actual":actual.prestamosMasAnio, "anterior":anterior.prestamosMasAnio, "aplicacion":this.getAplicacionCB(actual.prestamosMasAnio,anterior.prestamosMasAnio),"origen":this.getOrigenCB(actual.prestamosMasAnio,anterior.prestamosMasAnio)},
    {"cara":"Capital Social", "actual":actual.capitalSocial, "anterior":anterior.capitalSocial, "aplicacion":this.getAplicacionCB(actual.capitalSocial,anterior.capitalSocial),"origen":this.getOrigenCB(actual.capitalSocial,anterior.capitalSocial)},
    {"cara":"Reserva Legal", "actual":actual.reservaLegal, "anterior":anterior.reservaLegal, "aplicacion":this.getAplicacionCB(actual.reservaLegal,anterior.reservaLegal),"origen":this.getOrigenCB(actual.reservaLegal,anterior.reservaLegal)},
    {"cara":"Utilidad Acumulada", "actual":actual.utilidadAcum, "anterior":anterior.utilidadAcum, "aplicacion":this.getAplicacionCB(actual.utilidadAcum,anterior.utilidadAcum),"origen":this.getOrigenCB(actual.utilidadAcum,anterior.utilidadAcum)},
    {"cara":"Utilidad del Ejercicio", "actual":actual.utilidadEjercicio, "anterior":anterior.utilidadEjercicio, "aplicacion":this.getAplicacionCB(actual.utilidadEjercicio,anterior.utilidadEjercicio),"origen":this.getOrigenCB(actual.utilidadEjercicio,anterior.utilidadEjercicio)},
    {"cara":"Total", "actual":0, "anterior":0, "aplicacion":this.origen,"origen":this.origen},

    ];



    var t = {
      title:"Total",
      dataKey:"t"
    }



    doc.autoTable(columns, rows, {
    margin: {top: 40,
         left:15},
    tableWidth: 185,
    headerStyles: {fillColor:0},
    columnStyles: {
    cara: {halign:'left',columnWidth:65}
    },
    addPageContent: function(data) {
    doc.setFontSize(15);
    doc.setFontType("bold");
    doc.text(107.9, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
    doc.setFontSize(13);
    doc.text(107.9, 23, 'Posición Comparativa', null, null, 'center');
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
           }

       }






    });

    doc.save("Estado de Resultados.pdf");



    }

    descargaCSV(){
      let anterior:any;
      let actual:any;
      let origen:any;
      let aplicacion:any;

      for(let balance of this.balanceFinal){
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

      for(let balance of this.balanceInicial){
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
        {"cara":"","actual":"Año Actual","anterior":"Año Anterior","aplicacion":"Aplicación","origen":"Origen"},
        {"cara":"Amenos de un Año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Caja Bancos", "actual":actual.cajaBancos, "anterior":anterior.cajaBancos, "aplicacion":this.getAplicacionCB(actual.cajaBancos,anterior.cajaBancos),"origen":this.getOrigenCB(actual.cajaBancos,anterior.cajaBancos)},
        {"cara":"Cuentas por Cobrar", "actual":actual.cuentasPorCobrar, "anterior":anterior.cuentasPorCobrar, "aplicacion":this.getAplicacionCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar),"origen":this.getOrigenCB(actual.cuentasPorCobrar,anterior.cuentasPorCobrar)},
        {"cara":"IVA Acreditable", "actual":actual.IVAAcredita, "anterior":anterior.IVAAcreditable, "aplicacion":this.getAplicacionCB(actual.IVAAcreditable,anterior.IVAAcreditable),"origen":this.getOrigenCB(actual.IVAAcreditable,anterior.IVAAcreditable)},
        {"cara":"Almacen de Articulo Terminado", "actual":actual.almacenArtTerm, "anterior":anterior.almacenArtTerm, "aplicacion":this.getAplicacionCB(actual.almacenArtTerm,anterior.almacenArtTerm),"origen":this.getOrigenCB(actual.almacenArtTerm,anterior.almacenArtTerm)},
        {"cara":"Almacen de Materiales", "actual":actual.almacenMateriales, "anterior":anterior.almacenMateriales, "aplicacion":this.getAplicacionCB(actual.almacenMateriales,anterior.almacenMateriales),"origen":this.getOrigenCB(actual.almacenMateriales,anterior.almacenMateriales)},
        {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Terrenos", "actual":actual.terrenos, "anterior":anterior.terrenos, "aplicacion":this.getAplicacionCB(actual.terrenos,anterior.terrenos),"origen":this.getOrigenCB(actual.terrenos,anterior.terrenos)},
        {"cara":"Edificios e Instalaciones", "actual":actual.edificios, "anterior":anterior.edificios, "aplicacion":this.getAplicacionCB(actual.edificios,anterior.edificios),"origen":this.getOrigenCB(actual.edificios,anterior.edificios)},
        {"cara":"Deprecicaicón Acumulada", "actual":actual.depEdif, "anterior":anterior.depEdif, "aplicacion":this.getAplicacionCB(actual.depEdif,anterior.depEdif),"origen":this.getOrigenCB(actual.depEdif,anterior.depEdif)},
        {"cara":"Maquinaria y  Equipo", "actual":actual.maqEquipo, "anterior":anterior.maqEquipo, "aplicacion":this.getAplicacionCB(actual.maqEquipo,anterior.maqEquipo),"origen":this.getOrigenCB(actual.maqEquipo,anterior.maqEquipo) },
        {"cara":"Depreciación Acumulada", "actual":actual.depMaqEquipo, "anterior":anterior.depMaqEquipo, "aplicacion":this.getAplicacionCB(actual.depMaqEquipo,anterior.depMaqEquipo),"origen":this.getOrigenCB(actual.depMaqEquipo,anterior.depMaqEquipo)},
        {"cara":"Muebles y Enseres", "actual":actual.mueblesEnseres, "anterior":anterior.mueblesEnseres, "aplicacion":this.getAplicacionCB(actual.mueblesEnseres,anterior.mueblesEnseres),"origen":this.getOrigenCB(actual.mueblesEnseres,anterior.mueblesEnseres)},
        {"cara":"Depreciación Acumulada", "actual":actual.depMueblesEnseres, "anterior":anterior.depMueblesEnseres, "aplicacion":this.getAplicacionCB(actual.depMueblesEnseres,anterior.depMueblesEnseres),"origen":this.getOrigenCB(actual.depMueblesEnseres,anterior.depMueblesEnseres)},
        {"cara":"Equipo de Transporte", "actual":actual.eqTrans, "anterior":anterior.eqTrans, "aplicacion":this.getAplicacionCB(actual.eqTrans,anterior.eqTrans),"origen":this.getOrigenCB(actual.eqTrans,anterior.eqTrans)},
        {"cara":"Depreciación Acumulada", "actual":actual.depEqTrans, "anterior":anterior.depEqTrans, "aplicacion":this.getAplicacionCB(actual.depEqTrans,anterior.depEqTrans),"origen":this.getOrigenCB(actual.depEqTrans,anterior.depEqTrans)},
        {"cara":"De Aplicación Diferida", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Pagos hechos por anticipado", "actual":actual.pagosAnticipado, "anterior":anterior.pagosAnticipado, "aplicacion":this.getAplicacionCB(actual.pagosAnticipado,anterior.pagosAnticipado),"origen":this.getOrigenCB(actual.pagosAnticipado,anterior.pagosAnticipado)},
        {"cara":"Gastos por Amortizar", "actual":actual.gastosAmortizacion, "anterior":anterior.gastosAmortizacion, "aplicacion":this.getAplicacionCB(actual.gastosAmortizacion,anterior.gastosAmortizacion),"origen":this.getOrigenCB(actual.gastosAmortizacion,anterior.gastosAmortizacion)},
        {"cara":"A menos de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"IVA por Enterar", "actual":actual.IVAPorEnterar, "anterior":anterior.IVAPorEnterar, "aplicacion":this.getAplicacionCB(actual.IVAPorEnterar,anterior.IVAPorEnterar),"origen":this.getOrigenCB(actual.IVAPorEnterar,anterior.IVAPorEnterar)},
        {"cara":"Impuestos por Pagar", "actual":actual.imptosPorPagar, "anterior":anterior.imptosPorPagar, "aplicacion":this.getAplicacionCB(actual.imptosPorPagar,anterior.imptosPorPagar),"origen":this.getOrigenCB(actual.imptosPorPagar,anterior.imptosPorPagar)},
        {"cara":"Poveedores", "actual":actual.proveedores, "anterior":anterior.proveedores, "aplicacion":this.getAplicacionCB(actual.proveedores,anterior.proveedores),"origen":this.getOrigenCB(actual.proveedores,anterior.proveedores)},
        {"cara":"PTU por Pagar", "actual":actual.proveedores, "anterior":anterior.proveedores, "aplicacion":this.getAplicacionCB(actual.proveedores,anterior.proveedores),"origen":this.getOrigenCB(actual.proveedores,anterior.proveedores)},
        {"cara":"Prestamos Bancarios", "actual":actual.prestamosMenosAnio, "anterior":anterior.prestamosMenosAnio, "aplicacion":this.getAplicacionCB(actual.prestamosMenosAnio,anterior.prestamosMenosAnio),"origen":this.getOrigenCB(actual.prestamosMenosAnio,anterior.prestamosMenosAnio)},
        {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Prestamos Totales", "actual":actual.prestamosMasAnio, "anterior":anterior.prestamosMasAnio, "aplicacion":this.getAplicacionCB(actual.prestamosMasAnio,anterior.prestamosMasAnio),"origen":this.getOrigenCB(actual.prestamosMasAnio,anterior.prestamosMasAnio)},
        {"cara":"Capital Social", "actual":actual.capitalSocial, "anterior":anterior.capitalSocial, "aplicacion":this.getAplicacionCB(actual.capitalSocial,anterior.capitalSocial),"origen":this.getOrigenCB(actual.capitalSocial,anterior.capitalSocial)},
        {"cara":"Reserva Legal", "actual":actual.reservaLegal, "anterior":anterior.reservaLegal, "aplicacion":this.getAplicacionCB(actual.reservaLegal,anterior.reservaLegal),"origen":this.getOrigenCB(actual.reservaLegal,anterior.reservaLegal)},
        {"cara":"Utilidad Acumulada", "actual":actual.utilidadAcum, "anterior":anterior.utilidadAcum, "aplicacion":this.getAplicacionCB(actual.utilidadAcum,anterior.utilidadAcum),"origen":this.getOrigenCB(actual.utilidadAcum,anterior.utilidadAcum)},
        {"cara":"Utilidad del Ejercicio", "actual":actual.utilidadEjercicio, "anterior":anterior.utilidadEjercicio, "aplicacion":this.getAplicacionCB(actual.utilidadEjercicio,anterior.utilidadEjercicio),"origen":this.getOrigenCB(actual.utilidadEjercicio,anterior.utilidadEjercicio)},
        {"cara":"Total", "actual":0, "anterior":0, "aplicacion":this.origen,"origen":this.origen},
      ]
        new Angular2Csv(data, 'Posición Comparativa');
    }



}
