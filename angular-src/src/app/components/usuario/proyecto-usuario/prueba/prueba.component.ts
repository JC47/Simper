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

    var columns = [
    {title: "", dataKey: "cara"},
    {title: "Año Actual", dataKey: "actual"},
    {title: "Año Anterior", dataKey: "anterior"},
    {title: "Aplicación", dataKey: "aplicacion"},
    {title: "Origen", dataKey: "origen"}];


    var rows = [
    {"cara":"Amenos de un Año"},
    {"cara":"Caja Bancos"},
    {"cara":"Cuentas por Cobrar"},
    {"cara":"IVA Acreditable"},
    {"cara":"Almacen de Articulo Terminado"},
    {"cara":"Almacen de Materiales"},
    {"cara":"A más de un año"},
    {"cara":"Terrenos"},
    {"cara":"Edificios e Instalaciones" },
    {"cara":"Deprecicaicón Acumulada"},
    {"cara":"Maquinaria y  Equipo" },
    {"cara":"Depreciación Acumulada"},
    {"cara":"Muebles y Enseres"},
    {"cara":"Depresisción Acumulada"},
    {"cara":"Equipo de Transporte"},
    {"cara":"Depreciación Acumulada"},
    {"cara":"De Aplicación Diferida"},
    {"cara":"Pagos hechos por anticipado"},
    {"cara":"Gastos por Amortizar"},
    {"cara":"A menos de un año"},
    {"cara":"IVA por Enterar"},
    {"cara":"Impuestos por Pagar"},
    {"cara":"Poveedores"},
    {"cara":"PTU por Pagar"},
    {"cara":"Prestamos Bancarios"},
    {"cara":"A más de un año"},
    {"cara":"Prestamos Totales"},
    {"cara":"Capital Social"},
    {"cara":"Reserva Legal"},
    {"cara":"Utilidad Acumulada"},
    {"cara":"Utilidad del Ejercicio"},
    {"cara":"Total"},

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
      let aplicacion:any

      for(let balance of this.balanceFinal){
        anterior['cajaBancos']=balance.cajaBancos;
        anterior['cuentasPorCobrar']=balance.cuentasPorCobrar
        anterior['IVAAcreditable']=balance.IVAAcreditable
        anterior['almacenArtTerm']=balance.almacenArtTerm
        anterior['almacenMateriales']=balance.almacenMateriales
        anterior['terrenos']=balance.terrenos
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
        actual['terrenos']=balance.terrenos
        actual['edificios']=balance.edifInsta
        actual['depEdif']=balance.depEdif
        actual['maqEquipo']=balance.maqEquipo
        actual['depMaqEquipo']=balance.depMaqEquipo
        actual['mueblesEnseres']=balance.mueblesEnseres
        actual['depMueblesEnseres']=balance.depMueblesEnseres
        actual['equipoTrans']=balance.eqTrans
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
        {"cara":"Caja Bancos", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Cuentas por Cobrar", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"IVA Acreditable", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Almacen de Articulo Terminado", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Almacen de Materiales", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Terrenos", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Edificios e Instalaciones", "actual":"", "anterior":"", "aplicacion":"","origen":"" },
        {"cara":"Deprecicaicón Acumulada", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Maquinaria y  Equipo", "actual":"", "anterior":"", "aplicacion":"","origen":"" },
        {"cara":"Depreciación Acumulada", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Muebles y Enseres", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Depresisción Acumulada", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Equipo de Transporte", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Depreciación Acumulada", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"De Aplicación Diferida", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Pagos hechos por anticipado", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Gastos por Amortizar", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"A menos de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"IVA por Enterar", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Impuestos por Pagar", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Poveedores", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"PTU por Pagar", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Prestamos Bancarios", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"A más de un año", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Prestamos Totales", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Capital Social", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Reserva Legal", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Utilidad Acumulada", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Utilidad del Ejercicio", "actual":"", "anterior":"", "aplicacion":"","origen":""},
        {"cara":"Total", "actual":"", "anterior":"", "aplicacion":"","origen":""},
      ]
        new Angular2Csv(data, 'Posición Comparativa');
    }



}
