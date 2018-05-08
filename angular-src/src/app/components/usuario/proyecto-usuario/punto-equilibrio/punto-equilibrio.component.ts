import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import { CurrencyPipe } from '@angular/common';
import {DecimalPipe} from '@angular/common'
import {ProyectosService} from '../../../../services/proyectos.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';



declare var jsPDF: any;

@Component({
  selector: 'app-punto-equilibrio',
  templateUrl: './punto-equilibrio.component.html'
})
export class PuntoEquilibrioComponent implements OnInit {

  intereses=[];
  auxiliarT=[];
  equilibrio=[];
  auxiliarC=[];
  proyectos:any;
  proyectoActual:any;
  constructor(private _operacionService:OperacionService,
              private cp: CurrencyPipe,
              private dc:DecimalPipe,
              private _proyecto:ProyectosService
) {
    this.intereses = this._operacionService.returnInter();
    this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
    this.equilibrio = this._operacionService.returnEquilibrio();
    this.auxiliarC=this._operacionService.returnAuxiliarC();
    this.proyectos=this._proyecto.returnUsuarios();


    setTimeout(() => {
      this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'));
      }, 1500);
  }

  ngOnInit() {

    console.log(this.equilibrio);
    console.log(this.auxiliarC);
  }


  getMercado(){
    var i = 0;
    for(let a of this.auxiliarC){
      i += a.desarrolloMercado;
    }
    return i;
  }

  getProducto(){
    var i = 0;
    for(let a of this.auxiliarC){
      i += a.desarrolloProducto;
    }
    return i;
  }

  getTotales1(){
    var i = 0;
    for(let a of this.equilibrio){
      i += a.CFF;
      i += a.GDF;
      i += a.DEP;
      i += a.GAF;
    }
    for(let b of this.intereses){
      i += b;
    }
    for(let c of this.auxiliarT){
      i += c;
    }
    return i;
  }

  getTotales2(){
    var i = 0;
    for(let a of this.equilibrio){
      i += a.MP;
      i += a.CFV;
      i += a.GDV;
    }
    return i;
  }

  getMarginal(){
    var i = 0;
    for(let a of this.equilibrio){
      i += a.ventasTotales;
      i -= a.MP;
      i -= a.CFV;
      i -= a.GDV;
    }
    return i;
  }

  getMarginalP(){
    var i = 0;
    var d = 0;
    for(let a of this.equilibrio){
      d += a.ventasTotales;
    }
    if(d > 0){
      i = this.getMarginal() / d;
    }
    return i;
  }

  getPE(){
    var i = 0;
    var x = this.getMarginalP();
    if(x > 0){
      i = this.getTotales1() / x;
    }
    return i;
  }



        PDFequilibrio(){

        let actual=this.proyectoActual;
        var doc= new jsPDF({
        unit: 'mm',
        format: [279,215.9]


      });
        var columns = [
        {title: "", dataKey: "cara"},
        {title: "Costos Fijos", dataKey: "cFijos"},
        {title: "Costos Variables", dataKey: "cVariables"}];

        for(let aux of this.equilibrio){
        var rows = [
          {"cara":"MP","cFijos":"","cVariables":this.cp.transform(aux.MP,'USD',true,'1.0-0')},
          {"cara":"Costo de Fabricación","cFijos":this.cp.transform( aux.CFF,'USD',true,'1.0-0'),"cVariables":this.cp.transform(aux.CFV,'USD',true,'1.0-0')},
          {"cara":"Gasto de Distribución","cFijos":this.cp.transform(aux.GDF,'USD',true,'1.0-0'),"cVariables":this.cp.transform(aux.GDV,'USD',true,'1.0-0')},
          {"cara":"Gasto de Administración","cFijos":this.cp.transform(aux.GAF ,'USD',true,'1.0-0'),"cVariables":""},
          {"cara":"Depreciaciones","cFijos":this.cp.transform(aux.DEP ,'USD',true,'1.0-0'),"cVariables":""},
          {"cara":"Intereses","cFijos":"","cVariables":""},
          {"cara":"Desarrollo de Mercado","cFijos":this.cp.transform( this.getMercado(),'USD',true,'1.0-0'),"cVariables":""},
          {"cara":"Desarrollo de Producto","cFijos":this.cp.transform(this.getProducto() ,'USD',true,'1.0-0'),"cVariables":""},
          {"cara":"Participación de Mercado","cFijos":"-","cVariables":""},
          {"cara":"Totales","cFijos":this.cp.transform( this.getTotales1(),'USD',true,'1.0-0'),"cVariables":this.cp.transform(this.getTotales2(),'USD',true,'1.0-0')},
          {"cara":"","cFijos":"","cVariables":""},
          {"cara":"Ventas Totales","cFijos":"-","cVariables":this.cp.transform(aux.ventasTotales,'USD',true,'1.0-0')},
          {"cara":"Contribución Marginal","cFijos":this.cp.transform(this.getMarginal() ,'USD',true,'1.0-0'),"cVariables":""},
          {"cara":"% de Contribución Marginal","cFijos":this.dc.transform( this.getMarginalP()*100,'1.0-0'),"cVariables":""},
          {"cara":"Costos Fijos","cFijos":this.cp.transform(this.getTotales1() ,'USD',true,'1.0-0'),"cVariables":""},
          {"cara":"Puntos de Equilibrio en Ventas","cFijos":"-","cVariables":this.cp.transform(this.getPE(),'USD',true,'1.0-0')},
          {"cara":"Punto de Equilibrio","cFijos":"-","cVariables":this.cp.transform(this.getTotales1(),'USD',true,'1.0-0')},
          {"cara":"Costos Fijos","cFijos":"-","cVariables":this.cp.transform(this.getTotales1(),'USD',true,'1.0-0')},
          {"cara":"Utilidad","cFijos":"-","cVariables":""},


        ];
      }

      for(let aux of this.intereses){
        rows[5].cFijos=this.cp.transform( aux,'USD',true,'1.0-0') ;
      }


        doc.autoTable(columns, rows, {
        margin: {top: 40,
             left:15},
        tableWidth: 185,
        headerStyles: {fillColor:0,halign:'center'},
        columnStyles: {
        cara: {halign:'left',columnWidth:65},
        cFijos:{halign:'right'},
        cVariables:{halign:'right'}
        },
        addPageContent: function(data) {
        doc.setFontSize(15);
        doc.setFontType("bold");
        doc.text(107.9, 15, 'Proyecto '+actual, null, null, 'center');
        doc.setFontSize(13);
        doc.text(107.9, 23, 'Punto de Equilibrio del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
        doc.line(25, 27, 190, 27);
        }
           // drawCell: function (cell, data) {
           //     // Rowspan
           //     var rows = data.table.rows;
           //     if (data.row.index == 0) {
           //       doc.setFillColor(176, 176, 176);
           //       doc.setFontType("bold")
           //     }else if (data.row.index == 24) {
           //       doc.setFillColor(176, 176, 176);
           //       doc.setFontType("bold")
           //     }else if (data.row.index == 7) {
           //       doc.setFillColor(176, 176, 176);
           //       doc.setFontType("bold")
           //     }else if (data.row.index == 23) {
           //       doc.setFillColor(176, 176, 176);
           //       doc.setFontType("bold")
           //     };
           // }






        });


        doc.save("Punto de Equilibrio.pdf");



        }

        CSVequilibrio() {
          let actual=this.proyectoActual;
                  for(let aux of this.equilibrio){
                  var rows = [
                    {"cara":"Punto de Equilibrio del Periodo "+localStorage.getItem('numeroPeriodo'),"cFijos":"","cVariables":""},
                    {"cara":"Proyecto "+actual,"cFijos":"","cVariables":""},
                    {"cara":"","cFijos":"Costos Fijos","cVariables":"Costos Variables"},
                    {"cara":"MP","cFijos":"","cVariables":this.cp.transform(aux.MP,'USD',true,'1.0-0')},
                    {"cara":"Costo de Fabricación","cFijos":this.cp.transform( aux.CFF,'USD',true,'1.0-0'),"cVariables":this.cp.transform(aux.CFV,'USD',true,'1.0-0')},
                    {"cara":"Gasto de Distribución","cFijos":this.cp.transform(aux.GDF,'USD',true,'1.0-0'),"cVariables":this.cp.transform(aux.GDV,'USD',true,'1.0-0')},
                    {"cara":"Gasto de Administración","cFijos":this.cp.transform(aux.GAF ,'USD',true,'1.0-0'),"cVariables":""},
                    {"cara":"Depreciaciones","cFijos":this.cp.transform(aux.DEP ,'USD',true,'1.0-0'),"cVariables":""},
                    {"cara":"Intereses","cFijos":"","cVariables":""},
                    {"cara":"Desarrollo de Mercado","cFijos":this.cp.transform( this.getMercado(),'USD',true,'1.0-0'),"cVariables":""},
                    {"cara":"Desarrollo de Producto","cFijos":this.cp.transform(this.getProducto() ,'USD',true,'1.0-0'),"cVariables":""},
                    {"cara":"Participación de Mercado","cFijos":"-","cVariables":""},
                    {"cara":"Totales","cFijos":this.cp.transform( this.getTotales1(),'USD',true,'1.0-0'),"cVariables":this.cp.transform(this.getTotales2(),'USD',true,'1.0-0')},
                    {"cara":"","cFijos":"","cVariables":""},
                    {"cara":"Ventas Totales","cFijos":"-","cVariables":this.cp.transform(aux.ventasTotales,'USD',true,'1.0-0')},
                    {"cara":"Contribución Marginal","cFijos":this.cp.transform(this.getMarginal() ,'USD',true,'1.0-0'),"cVariables":""},
                    {"cara":"% de Contribución Marginal","cFijos":this.dc.transform( this.getMarginalP(),'1.0-0'),"cVariables":""},
                    {"cara":"Costos Fijos","cFijos":this.cp.transform(this.getTotales1() ,'USD',true,'1.0-0'),"cVariables":""},
                    {"cara":"Puntos de Equilibrio en Ventas","cFijos":"-","cVariables":this.cp.transform(this.getPE(),'USD',true,'1.0-0')},
                    {"cara":"Punto de Equilibrio","cFijos":"-","cVariables":this.cp.transform(this.getTotales1(),'USD',true,'1.0-0')},
                    {"cara":"Costos Fijos","cFijos":"-","cVariables":this.cp.transform(this.getTotales1(),'USD',true,'1.0-0')},
                    {"cara":"Utilidad","cFijos":"-","cVariables":""},


                  ];
                }

                for(let aux of this.intereses){
                  rows[8].cFijos=this.cp.transform( aux,'USD',true,'1.0-0') ;
                }

                new Angular2Csv(rows, 'Punto de Equilibrio');

        }






        getNameById(idProyecto){
          for(let proyecto of this.proyectos){
            if(proyecto.idProyecto==idProyecto)
              return proyecto.nombreProyecto
          }
            return "id NO encontrado"

        }


}
