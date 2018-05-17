import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {DecimalPipe} from '@angular/common'
import {CurrencyPipe} from '@angular/common'
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
   import {ProyectosService} from '../../../../services/proyectos.service';


declare var jsPDF: any;










@Component({
    selector: 'app-tendencias',
  templateUrl: './tendencias.component.html'
})
export class TendenciasComponent implements OnInit {

  tendencias = [];
  graf1:any[]=[];
  graf2:any[]=[];
  graf3:any[]=[];
  graf4:any[]=[];
  graf5:any[]=[];
  graf6:any[]=[];
  proyectos:any;
  proyectoActual:any;
  colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };








  constructor(private _operacionService:OperacionService,
              private dc:DecimalPipe,
               private _proyectoService:ProyectosService,
              private cp: CurrencyPipe) {
    this.tendencias = this._operacionService.returnTendencias();
    console.log(this.tendencias);
    this.proyectos=this._proyectoService.returnUsuarios();
    setTimeout(() => {
    this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'));
    this.graf1=this.getGraf1();
    this.graf2=this.getGraf2();
    this.graf3=this.getGraf3();
    this.graf4=this.getGraf4();
    this.graf5=this.getGraf5();
    this.graf6=this.getGraf6();
    console.log("Grafica 1",this.graf1)
  },2000);
  }

  ngOnInit() {
  }

  getTotal(n1,n2){
    if(n1 == 1){
      return 100;
    }
    else{
      return n2;
    }
  }


  getGraf1(){
    let data=[];
    for(let periodo of this.tendencias){
      let gTemp={
        name:"Periodo "+periodo.numeroPeriodo,
        series:[
          {name:"Activo Circulante",
          value:Math.trunc(periodo.pactivoCirculante)},
          {name:"Pasivo a Corto Plazo",
          value:Math.trunc(periodo.ppasivoCortoPlazo)}
        ]
      }
      data.push(gTemp)
    }
    return data
  }


  getNameById(idProyecto){
    for(let proyecto of this.proyectos){
      if(proyecto.idProyecto==idProyecto)
        return proyecto.nombreProyecto
    }
      return "id NO encontrado"

  }


  getGraf2(){
    let data=[];
    for(let periodo of this.tendencias){
      let gTemp={
        name:"Periodo "+periodo.numeroPeriodo,
        series:[
          {name:"Activo Fijo",
          value:Math.trunc(periodo.pactivoFijo)},
          {name:"Pasivo Pasivo Total",
          value:Math.trunc(periodo.ppasivoTotal)},
          {name:"Capital Contable",
          value:Math.trunc(periodo.pcapitalContable)}
        ]
      }
      data.push(gTemp)
    }
    return data
  }


    getGraf3(){
      let data=[];
      for(let periodo of this.tendencias){
        let gTemp={
          name:"Periodo "+periodo.numeroPeriodo,
          series:[
            {name:"Cuentas por Cobrar",
            value:Math.trunc(periodo.pcuentasPCobrar)},
            {name:"Almacen de Materia Prima",
            value:Math.trunc(0)},
            {name:"Almacen de PT",
            value:Math.trunc(periodo.palmacenPT)},
            {name:"Ventas",
            value:Math.trunc(periodo.pventasNetas)}
          ]
        }
        data.push(gTemp)
      }
      return data
    }



      getGraf4(){
        let data=[];
        for(let periodo of this.tendencias){
          let gTemp={
            name:"Periodo "+periodo.numeroPeriodo,
            series:[
              {name:"Ventas",
              value:Math.trunc(periodo.pventasNetas)},
              {name:"Costo de Ventas",
              value:Math.trunc(periodo.pcostoVentas)},
              {name:"Utilidad Neta",
              value:Math.trunc(periodo.putilidadNeta)},
              {name:"Total de Gastos de Operación",
              value:Math.trunc(periodo.pcDist+periodo.pcAdmin+periodo.poGastos)}
            ]
          }
          data.push(gTemp)
        }
        return data
      }


      getGraf5(){
        let data=[];
        for(let periodo of this.tendencias){
          let gTemp={
            name:"Periodo "+periodo.numeroPeriodo,
            series:[
              {name:"Total de Gastos de Operación",
              value:Math.trunc(periodo.pcDist+periodo.pcAdmin+periodo.poGastos)},
              {name:"Gastos de Distribución",
              value:Math.trunc(periodo.pcDist)},
              {name:"Gastos de Administración",
              value:Math.trunc(periodo.pcAdmin)},
              {name:"Otros Gastos",
              value:Math.trunc(periodo.poGastos)}
            ]
          }
          data.push(gTemp)
        }
        return data
      }



            getGraf6(){
              let data=[];
              for(let periodo of this.tendencias){
                let gTemp={
                  name:"Periodo "+periodo.numeroPeriodo,
                  series:[
                    {name:"Utilidad Bruta",
                    value:Math.trunc(periodo.putilidadBruta)},
                    {name:"Utilidad Neta",
                    value:Math.trunc(periodo.putilidadNeta)}
                  ]
                }
                data.push(gTemp)
              }
              return data
            }







            PDFtendencias(){
              let proyecto=this.proyectoActual;
              var doc= new jsPDF({
              orientation: 'landscape',
              unit: 'mm',
              format: [215.9,279]});

              let cols=[
                {title: "", dataKey: "cara"},
              ]


                            let options={
                            margin: {top: 40,
                                     left:10},
                             tableWidth: 259,
                            headerStyles: {fillColor:0,halign:'center',fontSize:6},
                            bodyStyles:{
                              fontSize:5
                            },
                            columnStyles: {
                            },
                            addPageContent: function(data) {
                              doc.setFontSize(15);
                              doc.setFontType("bold");
                              doc.text(139.5, 15, 'Proyecto '+proyecto, null, null, 'center');
                              doc.setFontSize(13);
                              doc.text(139.5, 23, 'Tendencias', null, null, 'center');
                              doc.line(50, 27, 228, 27);
                            },
                            }




                                  let rows=[
                                  {cara:"Efectivo"},
                                  {cara:"Cuentas Por Cobrar"},
                                  {cara:"Almacen de Material Prima"},
                                  {cara:"Almacen de P.T."},
                                  {cara:"Activo Criculante"},
                                  {cara:"Acrivo Fijo"},
                                  {cara:"Pasivo A Corto Plazo"},
                                  {cara:"Pasivo Total"},
                                  {cara:"Capital Contable"},
                                  {cara:"Ventas"},
                                  {cara:"Costo de Ventas"},
                                  {cara:"Utilidad Bruta"},
                                  {cara:"Gastos de Distribución"},
                                  {cara:"Gastos de Administración"},
                                  {cara:"Otros Gastos"},
                                  {cara:"Total de Gastos de Operación"},
                                  {cara:"Utilidad Neta"}]


                          for(let ten of this.tendencias ){
                              cols.push({
                                dataKey:"periodo"+ten.numeroPeriodo,
                                title:"Periodo "+ten.numeroPeriodo
                              });


                              rows[0]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.efectivo,'USD',true,'1.0-0')
                              rows[1]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cuentasPCobrar,'USD',true,'1.0-0')
                              rows[2]["periodo"+ten.numeroPeriodo]=this.cp.transform(0,'USD',true,'1.0-0')
                              rows[3]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.almacenPT,'USD',true,'1.0-0')
                              rows[4]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.activoCirculante,'USD',true,'1.0-0')
                              rows[5]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.activoFijo,'USD',true,'1.0-0')
                              rows[6]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.pasivoCortoPlazo,'USD',true,'1.0-0')
                              rows[7]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.pasivoTotal,'USD',true,'1.0-0')
                              rows[8]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.capitalContable,'USD',true,'1.0-0')
                              rows[9]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.ventasNetas,'USD',true,'1.0-0')
                              rows[10]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.costoVentas,'USD',true,'1.0-0')
                              rows[11]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.utilidadBruta,'USD',true,'1.0-0')
                              rows[12]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cDist,'USD',true,'1.0-0')
                              rows[13]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cAdmin,'USD',true,'1.0-0')
                              rows[14]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.oGastos,'USD',true,'1.0-0')
                              rows[15]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cDist+ten.cAdmin+ten.oGastos,'USD',true,'1.0-0')
                              rows[16]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.utilidadNeta,'USD',true,'1.0-0')

                              options.columnStyles["periodo"+ten.numeroPeriodo]={halign:"right"}

                             }

                              doc.autoTable(cols, rows, options);


                              doc.save("Tendencias.pdf");


                            }




                                        CSVtendencias(){


                                                              let rows=[
                                                              {cara:"Tendencias del Proyecto "+this.proyectoActual},
                                                              {cara:""},
                                                              {cara:"Efectivo"},
                                                              {cara:"Cuentas Por Cobrar"},
                                                              {cara:"Almacen de Material Prima"},
                                                              {cara:"Almacen de P.T."},
                                                              {cara:"Activo Criculante"},
                                                              {cara:"Acrivo Fijo"},
                                                              {cara:"Pasivo A Corto Plazo"},
                                                              {cara:"Pasivo Total"},
                                                              {cara:"Capital Contable"},
                                                              {cara:"Ventas"},
                                                              {cara:"Costo de Ventas"},
                                                              {cara:"Utilidad Bruta"},
                                                              {cara:"Gastos de Distribución"},
                                                              {cara:"Gastos de Administración"},
                                                              {cara:"Otros Gastos"},
                                                              {cara:"Total de Gastos de Operación"},
                                                              {cara:"Utilidad Neta"}]


                                                      for(let ten of this.tendencias ){

                                                          rows[1]["periodo"+ten.numeroPeriodo]="Periodo "+ten.numeroPeriodo;
                                                          rows[2]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.efectivo,'USD',true,'1.0-0')
                                                          rows[3]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cuentasPCobrar,'USD',true,'1.0-0')
                                                          rows[4]["periodo"+ten.numeroPeriodo]=this.cp.transform(0,'USD',true,'1.0-0')
                                                          rows[5]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.almacenPT,'USD',true,'1.0-0')
                                                          rows[6]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.activoCirculante,'USD',true,'1.0-0')
                                                          rows[7]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.activoFijo,'USD',true,'1.0-0')
                                                          rows[8]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.pasivoCortoPlazo,'USD',true,'1.0-0')
                                                          rows[9]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.pasivoTotal,'USD',true,'1.0-0')
                                                          rows[10]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.capitalContable,'USD',true,'1.0-0')
                                                          rows[11]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.ventasNetas,'USD',true,'1.0-0')
                                                          rows[12]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.costoVentas,'USD',true,'1.0-0')
                                                          rows[13]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.utilidadBruta,'USD',true,'1.0-0')
                                                          rows[14]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cDist,'USD',true,'1.0-0')
                                                          rows[15]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cAdmin,'USD',true,'1.0-0')
                                                          rows[16]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.oGastos,'USD',true,'1.0-0')
                                                          rows[17]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.cDist+ten.cAdmin+ten.oGastos,'USD',true,'1.0-0')
                                                          rows[18]["periodo"+ten.numeroPeriodo]=this.cp.transform(ten.utilidadNeta,'USD',true,'1.0-0')


                                                         }

                                                         new Angular2Csv(rows, 'Tendencias');



                                                        }

                                                        CSVtendenciasIndices(){


                                                                              let rows=[
                                                                              {cara:"Tendencias del Proyecto "+this.proyectoActual},
                                                                              {cara:""},
                                                                              {cara:"Efectivo"},
                                                                              {cara:"Cuentas Por Cobrar"},
                                                                              {cara:"Almacen de Material Prima"},
                                                                              {cara:"Almacen de P.T."},
                                                                              {cara:"Activo Criculante"},
                                                                              {cara:"Acrivo Fijo"},
                                                                              {cara:"Pasivo A Corto Plazo"},
                                                                              {cara:"Pasivo Total"},
                                                                              {cara:"Capital Contable"},
                                                                              {cara:"Ventas"},
                                                                              {cara:"Costo de Ventas"},
                                                                              {cara:"Utilidad Bruta"},
                                                                              {cara:"Gastos de Distribución"},
                                                                              {cara:"Gastos de Administración"},
                                                                              {cara:"Otros Gastos"},
                                                                              {cara:"Total de Gastos de Operación"},
                                                                              {cara:"Utilidad Neta"}]


                                                                      for(let ten of this.tendencias ){

                                                                          rows[1]["periodo"+ten.numeroPeriodo]="Periodo "+ten.numeroPeriodo;
                                                                          rows[2]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pefectivo,'1.0-0')
                                                                          rows[3]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcuentasPCobrar,'1.0-0')
                                                                          rows[4]["periodo"+ten.numeroPeriodo]=this.dc.transform(0,'1.0-0')
                                                                          rows[5]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.palmacenPT,'1.0-0')
                                                                          rows[6]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pactivoCirculante,'1.0-0')
                                                                          rows[7]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pactivoFijo,'1.0-0')
                                                                          rows[8]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.ppasivoCortoPlazo,'1.0-0')
                                                                          rows[9]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.ppasivoTotal,'1.0-0')
                                                                          rows[10]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcapitalContable,'1.0-0')
                                                                          rows[11]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pventasNetas,'1.0-0')
                                                                          rows[12]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcostoVentas,'1.0-0')
                                                                          rows[13]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.putilidadBruta,'1.0-0')
                                                                          rows[14]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcDist,'1.0-0')
                                                                          rows[15]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcAdmin,'1.0-0')
                                                                          rows[16]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.poGastos,'1.0-0')
                                                                          rows[17]["periodo"+ten.numeroPeriodo]=this.dc.transform(this.getTotal(ten.numeroPeriodo,ten.pcDist+ten.pcAdmin+ten.poGastos),'1.0-0')
                                                                          rows[18]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.putilidadNeta,'1.0-0')


                                                                         }

                                                                         new Angular2Csv(rows, 'Tendencias Indices');



                                                                        }






                                        PDFtendenciasIndices(){
                                          let proyecto=this.proyectoActual;
                                          var doc= new jsPDF({
                                          orientation: 'landscape',
                                          unit: 'mm',
                                          format: [215.9,279]});

                                          let cols=[
                                            {title: "", dataKey: "cara"},
                                          ]


                                                        let options={
                                                        margin: {top: 40,
                                                                 left:10},
                                                         tableWidth: 259,
                                                        headerStyles: {fillColor:0,halign:'center',fontSize:6},
                                                        bodyStyles:{
                                                          fontSize:5
                                                        },
                                                        columnStyles: {
                                                        },
                                                        addPageContent: function(data) {
                                                          doc.setFontSize(15);
                                                          doc.setFontType("bold");
                                                          doc.text(139.5, 15, 'Proyecto '+proyecto, null, null, 'center');
                                                          doc.setFontSize(13);
                                                          doc.text(139.5, 23, 'Tendencias Indices', null, null, 'center');
                                                          doc.line(50, 27, 228, 27);
                                                        },
                                                        }




                                                              let rows=[
                                                              {cara:"Efectivo"},
                                                              {cara:"Cuentas Por Cobrar"},
                                                              {cara:"Almacen de Material Prima"},
                                                              {cara:"Almacen de P.T."},
                                                              {cara:"Activo Criculante"},
                                                              {cara:"Acrivo Fijo"},
                                                              {cara:"Pasivo A Corto Plazo"},
                                                              {cara:"Pasivo Total"},
                                                              {cara:"Capital Contable"},
                                                              {cara:"Ventas"},
                                                              {cara:"Costo de Ventas"},
                                                              {cara:"Utilidad Bruta"},
                                                              {cara:"Gastos de Distribución"},
                                                              {cara:"Gastos de Administración"},
                                                              {cara:"Otros Gastos"},
                                                              {cara:"Total de Gastos de Operación"},
                                                              {cara:"Utilidad Neta"}]


                                                      for(let ten of this.tendencias ){
                                                          cols.push({
                                                            dataKey:"periodo"+ten.numeroPeriodo,
                                                            title:"Periodo "+ten.numeroPeriodo
                                                          });


                                                          rows[0]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pefectivo,'1.0-0')
                                                          rows[1]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcuentasPCobrar,'.0-0')
                                                          rows[2]["periodo"+ten.numeroPeriodo]=this.dc.transform(0,'1.0-0')
                                                          rows[3]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.palmacenPT,'1.0-0')
                                                          rows[4]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pactivoCirculante,'1.0-0')
                                                          rows[5]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pactivoFijo,'1.0-0')
                                                          rows[6]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.ppasivoCortoPlazo,'1.0-0')
                                                          rows[7]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.ppasivoTotal,'1.0-0')
                                                          rows[8]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcapitalContable,'1.0-0')
                                                          rows[9]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pventasNetas,'1.0-0')
                                                          rows[10]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcostoVentas,'1.0-0')
                                                          rows[11]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.putilidadBruta,'1.0-0')
                                                          rows[12]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcDist,'1.0-0')
                                                          rows[13]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcAdmin,'1.0-0')
                                                          rows[14]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.poGastos,'1.0-0')
                                                          rows[15]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.pcDist+ten.pcAdmin+ten.poGastos,'1.0-0')
                                                          rows[16]["periodo"+ten.numeroPeriodo]=this.dc.transform(ten.putilidadNeta,'1.0-0')

                                                          options.columnStyles["periodo"+ten.numeroPeriodo]={halign:"right"}

                                                         }

                                                          doc.autoTable(cols, rows, options);


                                                          doc.save("Tendencias.pdf");


                                                        }





}
