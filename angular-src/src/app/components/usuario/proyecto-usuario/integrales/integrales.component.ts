import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {DecimalPipe} from '@angular/common'
import {CurrencyPipe} from '@angular/common'
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {ProyectosService} from '../../../../services/proyectos.service';


declare var jsPDF: any;


@Component({
  selector: 'app-integrales',
  templateUrl: './integrales.component.html'
})







export class IntegralesComponent implements OnInit {

  integrales = [];
  tabla:any=[];
  proyectos:any;
  proyectoActual:any;
  constructor(private _operacionService:OperacionService,
              private dc:DecimalPipe,
              private _proyectoService:ProyectosService,
              private cp: CurrencyPipe) {
    this.integrales = this._operacionService.returnIntegrales();
    console.log(this.integrales)
    this.proyectos=this._proyectoService.returnUsuarios();
    setTimeout(() => {
    this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'));
    this.tabla=this.acomoda(this.integrales);
    console.log(this.tabla);
  },2000);
  }

  ngOnInit() {
  }

acomoda(integrales){
    let arrelgo=[];
    let sec=[];

    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.ventasNetas,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pventasNetas,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.costoVentas,'USD',true,'1.0-0'))
      sec.push(this.dc.transform(periodo.pcostoVentas,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadBruta,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadBruta,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.cDist,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pcDist,'1.0-0')+"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){

      sec.push(this.cp.transform(periodo.oGastos,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.poGastos,'1.0-0') +"%")

    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.cAdmin,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pcAdmin,'1.0-0') +"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.cDist+periodo.oGastos+periodo.cAdmin,'USD',true,'1.0-0')  )
      sec.push(this.dc.transform(this.getSuma(periodo.cDist+periodo.oGastos+periodo.cAdmin,periodo.ventasNetas),'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadOperacion,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadOperacion,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.intereses,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pintereses,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadAntesImptos,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadAntesImptos,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push( this.cp.transform(periodo.ISR,'USD',true,'1.0-0'))
      sec.push(this.dc.transform(periodo.pISR,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push( this.cp.transform(periodo.PTU,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pPTU,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadEjercicio,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadEjercicio,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    return arrelgo;
}

getSuma(n1,n2){
  var r = 0;
  if(n2 != 0){
    r = (n1/n2)*100;
  }
  return r;
}


PDFintegrales(){
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
                      doc.text(139.5, 23, 'Integrales', null, null, 'center');
                      doc.line(50, 27, 228, 27);
                    },
                    }


      let rows=[
        {cara: "Ventas Netas"},
        {cara: "Costo de Ventas"},
        {cara: "Utilidad Bruta"},
        {cara: ""},
        {cara: "Costo de Distribución"},
        {cara: "Otros Gastos"},
        {cara: "Costo de Administración"},
        {cara: ""},
        {cara: ""},
        {cara: "Utilidad en Operación"},
        {cara: "Intereses"},
        {cara: "Utilidad Antes de Impuestos"},
        {cara: "ISR"},
        {cara: "PTU"},
        {cara: "Utilidad del Ejercicio"},
      ]

      for(let inte of this.integrales){
        cols.push({
          title:"Periodo "+inte.numeroPeriodo,
          dataKey:"periodo"+inte.numeroPeriodo
        })
        cols.push({
          title:"",
          dataKey:"periodo"+inte.numeroPeriodo+"p"
        })



        rows[0]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ventasNetas,'USD',true,'1.0-0');
        rows[0]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

        rows[1]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.costoVentas,'USD',true,'1.0-0') ;
        rows[1]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

        rows[2]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadBruta,'USD',true,'1.0-0');
        rows[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

        rows[4]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist,'USD',true,'1.0-0') ;
        rows[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

        rows[5]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.oGastos,'USD',true,'1.0-0') ;
        rows[5]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

        rows[6]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cAdmin,'USD',true,'1.0-0') ;
        rows[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

        rows[7]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist+inte.oGastos+inte.cAdmin,'USD',true,'1.0-0') ;
        rows[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

        rows[9]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadOperacion,'USD',true,'1.0-0');
        rows[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

        rows[10]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.intereses,'USD',true,'1.0-0');
        rows[10]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


        rows[11]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadAntesImptos,'USD',true,'1.0-0') ;
        rows[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

        rows[12]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ISR,'USD',true,'1.0-0')
        rows[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

        rows[13]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.PTU,'USD',true,'1.0-0') ;
        rows[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

        rows[14]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadEjercicio,'USD',true,'1.0-0');
        rows[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


        options.columnStyles["periodo"+inte.numeroPeriodo]={halign:"right"}
        options.columnStyles["periodo"+inte.numeroPeriodo+"p"]={halign:"center"}

      }




      doc.autoTable(cols, rows, options);


      doc.save("Integrales.pdf");

}


PDFintegrales2(){
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
                headerStyles: {fillColor:0,halign:'center',fontSize:8},
                bodyStyles:{
                  fontSize:8
                },
                columnStyles: {
                },
                addPageContent: function(data) {
                  doc.setFontSize(15);
                  doc.setFontType("bold");
                  doc.text(139.5, 15, 'Proyecto '+proyecto, null, null, 'center');
                  doc.setFontSize(13);
                  doc.text(139.5, 23, 'Integrales', null, null, 'center');
                  doc.line(50, 27, 228, 27);
                },
                }


  let rows=[
    {cara: "Ventas Netas"},
    {cara: "Costo de Ventas"},
    {cara: "Utilidad Bruta"},
    {cara: ""},
    {cara: "Costo de Distribución"},
    {cara: "Otros Gastos"},
    {cara: "Costo de Administración"},
    {cara: ""},
    {cara: ""},
    {cara: "Utilidad en Operación"},
    {cara: "Intereses"},
    {cara: "Utilidad Antes de Impuestos"},
    {cara: "ISR"},
    {cara: "PTU"},
    {cara: "Utilidad del Ejercicio"},
  ]

  for(let inte of this.integrales){
    cols.push({
      title:"Periodo "+inte.numeroPeriodo,
      dataKey:"periodo"+inte.numeroPeriodo+"p"
    });



    rows[0]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

    rows[1]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

    rows[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

    rows[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

    rows[5]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

    rows[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

    rows[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

    rows[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

    rows[10]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


    rows[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

    rows[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

    rows[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

    rows[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


    options.columnStyles["periodo"+inte.numeroPeriodo+"p"]={halign:"center"}

  }




  doc.autoTable(cols, rows, options);


  doc.save("Integrales Porcentajes.pdf");



}



CSVintegrales(){

    let data=[
      {cara:"Integrales del Proyecto "+this.proyectoActual},
      {cara:""},
      {cara: "Ventas Netas"},
      {cara: "Costo de Ventas"},
      {cara: "Utilidad Bruta"},
      {cara: ""},
      {cara: "Costo de Distribución"},
      {cara: "Otros Gastos"},
      {cara: "Costo de Administración"},
      {cara: ""},
      {cara: ""},
      {cara: "Utilidad en Operación"},
      {cara: "Intereses"},
      {cara: "Utilidad Antes de Impuestos"},
      {cara: "ISR"},
      {cara: "PTU"},
      {cara: "Utilidad del Ejercicio"},
    ]


          for(let inte of this.integrales){



            data[1]["periodo"+inte.numeroPeriodo]="Periodo "+inte.numeroPeriodo;
            data[1]["periodo"+inte.numeroPeriodo+"p"]="";


            data[2]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ventasNetas,'USD',true,'1.0-0');
            data[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

            data[3]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.costoVentas,'USD',true,'1.0-0') ;
            data[3]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

            data[4]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadBruta,'USD',true,'1.0-0');
            data[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

            data[6]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist,'USD',true,'1.0-0') ;
            data[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

            data[7]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.oGastos,'USD',true,'1.0-0') ;
            data[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

            data[8]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cAdmin,'USD',true,'1.0-0') ;
            data[8]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

            data[9]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist+inte.oGastos+inte.cAdmin,'USD',true,'1.0-0') ;
            data[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

            data[11]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadOperacion,'USD',true,'1.0-0');
            data[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

            data[12]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.intereses,'USD',true,'1.0-0');
            data[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


            data[13]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadAntesImptos,'USD',true,'1.0-0') ;
            data[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

            data[14]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ISR,'USD',true,'1.0-0')
            data[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

            data[15]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.PTU,'USD',true,'1.0-0') ;
            data[15]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

            data[16]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadEjercicio,'USD',true,'1.0-0');
            data[16]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


          }

          new Angular2Csv(data, 'Integrales');

}




CSVintegrales2(){

    let data=[
      {cara:"Integrales del Proyecto "+this.proyectoActual},
      {cara:""},
      {cara: "Ventas Netas"},
      {cara: "Costo de Ventas"},
      {cara: "Utilidad Bruta"},
      {cara: ""},
      {cara: "Costo de Distribución"},
      {cara: "Otros Gastos"},
      {cara: "Costo de Administración"},
      {cara: ""},
      {cara: ""},
      {cara: "Utilidad en Operación"},
      {cara: "Intereses"},
      {cara: "Utilidad Antes de Impuestos"},
      {cara: "ISR"},
      {cara: "PTU"},
      {cara: "Utilidad del Ejercicio"},
    ]


          for(let inte of this.integrales){



            data[1]["periodo"+inte.numeroPeriodo+"p"]="Periodo "+inte.numeroPeriodo;


            data[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

            data[3]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

            data[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

            data[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

            data[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

            data[8]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

            data[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

            data[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

            data[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


            data[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

            data[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

            data[15]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

            data[16]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


          }

          new Angular2Csv(data, 'Integrales2');

}

getNameById(idProyecto){
  for(let proyecto of this.proyectos){
    if(proyecto.idProyecto==idProyecto)
      return proyecto.nombreProyecto
  }
    return "id NO encontrado"

}



}
