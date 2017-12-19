import { Component, OnInit } from '@angular/core';
import {BalanceService} from '../../../../services/balance.service';
import {ResultadosService} from '../../../../services/resultados.service';
import { CurrencyPipe } from '@angular/common';
import {ProyectosService} from '../../../../services/proyectos.service';


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



    PDFposicionComparativa(){
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

}
