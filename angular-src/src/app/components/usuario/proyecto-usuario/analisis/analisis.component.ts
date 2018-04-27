import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import {ResultadosService} from '../../../../services/resultados.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {CurrencyPipe} from '@angular/common'
import {DecimalPipe} from '@angular/common'

declare var jsPDF: any;

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html'
})
export class AnalisisComponent implements OnInit {
  resultados = [];
  auxiliares=[];
  auxiliarC=[];
  productos=[];
  auxiliarT = [];
  intereses = [];
  maquinas = [];
  balanceFinal =[];
  balanceInicial = [];

  constructor(private _operacionService:OperacionService,
              private _resultadosService:ResultadosService,
              private _maqService:CompraMaquinariaService,
              private cp: CurrencyPipe,
              private dc:DecimalPipe) {
    this.auxiliares=this._operacionService.returnAuxiliares();
    this.intereses = this._operacionService.returnInter();
    this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
    this.resultados = this._operacionService.returnProductoResultados();
    this.maquinas =this._maqService.returnMaquinasCompradas();
    this.balanceFinal = this._resultadosService.getBalanceFinal();
    this.balanceInicial = this._resultadosService.balanceInicialAnterior();
  }

  ngOnInit() {
  }

  getTotalVentas(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.IVAxVentas;
    }
    return T;
  }

  getTotalCostosVentas(){
    var T = 0;
    if(this.auxiliares.length == 0){
      for(let m of this.maquinas){
        T += ((m.costo * (m.depAcum/100))*m.Cantidad);
      }
    }
    else{
      for(let aux of this.auxiliares){
        T += aux.costoVentas;
      }
      T += this.existenciaTotal();
    }

    return T;
  }

  getUtilidadBruta(){
    var T = 0;
    T += this.getTotalVentas() - this.getTotalCostosVentas();
    return T;
  }

  getGastosDeOperacion(){
    var i = 0;
    i = this.getAdminTotal() + this.getOtrosGastosTotal() + this.getDistTotal();
    return i;
  }

  getUtilidadOperacion(){
    var T = 0;

    T+=this.getUtilidadBruta() - this.getDistTotal() - this.getAdminTotal();

    for(let a of this.auxiliarT){
      T-=a;
    }

    return T;
  }

  getIntereses(){
    var x = 0;
    for(let a of this.intereses){
      x+=a;
    }
    return x;
  }

  getUtilidadAntes(){
    var T = 0;

    T += this.getUtilidadOperacion();

    for(let i of this.auxiliarT){
      T -= i
    }
    for(let i2 of this.intereses){
      T -= i2;
    }
    return T;
  }

  getImpuestos(){
    var i =0;
    for(let balance of this.balanceFinal){
      i += (balance.imptosPorPagar*12) + balance.PTUPorPagar;
    }
    return i;
  }

  getUtilidadNeta(){
    var i =0;
    for(let balance of this.balanceFinal){
      i += balance.utilidadEjercicio;
    }
    return i;
  }

  getMargenNeto(){
    var i = 0;
    var x = this.getUtilidadNeta();
    var y = this.getTotalVentas();
    if(y > 0){
      i = x / y;
    }
    return i;
  }

  getRotacionActivos(){
    var i = 0;
    i = this.getTotalVentas() / this.getActivoTotal();
    return i;
  }

  getRentabilidadSobreActivos(){
    var i = this.getMargenNeto() * this.getRotacionActivos();
    return i;
  }

  getPalancaFinanciera(){
    //getActivoCapitalTotal()
  }

  getRentabilidadSobreCapital(){
    var i = this.getRentabilidadSobreActivos() * this.getActivoCapitalTotal();
    return i;
  }

  getActivoCirculante(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i+= balance.cajaBancos + balance.cuentasPorCobrar + balance.IVAAcreditable + balance.almacenArtTerm + balance.almacenMateriales;
    }
    return i;
  }

  getActivoFijo(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i+= balance.terreno + balance.edifInsta + balance.maqEquipo + balance.mueblesEnseres + balance.eqTrans;
      i-= balance.depTerreno + balance.depEdif + balance.depMaqEquipo + balance.depMueblesEnseres + balance.depEqTrans;
    }
    return i;
  }

  getActivoTotal(){
    var i = this.getActivoCirculante() + this.getActivoFijo();
    return i;
  }

  getPasivoCirculante(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i+= balance.IVAPorEnterar + balance.imptosPorPagar + balance.proveedores + balance.PTUPorPagar + balance.prestamosMenosAnio;
    }
    return i;
  }

  getPasivoLP(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i+= balance.prestamosMasAnio;
    }
    return i;
  }

  getPasivoTotal(){
    var i = this.getPasivoCirculante() + this.getPasivoLP();
    return i;
  }

  getSolvencia(){
    var i = 0;
    var x = this.getActivoCirculante();
    var y = this.getPasivoCirculante();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getActivoDisponible(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i+= balance.cajaBancos + balance.cuentasPorCobrar;
    }
    return i;
  }

  getSolvenciaInmediata(){
    var i = 0;
    var x = this.getActivoDisponible();
    var y = this.getPasivoCirculante();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getVentasACredito(){
    var i = this.getTotalVentas() * 1.15;
    return i;
  }

  getPromedioCC(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i += balance.cuentasPorCobrar;
    }
    for(let balance of this.balanceInicial){
      i += balance.cuentasPorCobrar;
    }
    i = i/2;
    return i;
  }

  getRotacionCC(){
    var i = 0;
    var x = this.getVentasACredito();
    var y = this.getPromedioCC();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getDiasPPromedioDeCartera(){
    var i = 365/this.getRotacionCC();
    return i;
  }

  getComprasNetasCredito(){
    var i = 0;
    for(let aux of this.auxiliares){
      i+=aux.materiaCosumida;
    }
    i = i*1.15;
    return i;
  }

  getPromedioCP(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i += balance.proveedores;
    }
    for(let balance of this.balanceInicial){
      i += balance.proveedores;
    }
    i = i/2;
    return i;
  }

  getRotacionCP(){
    var i = 0;
    var x = this.getComprasNetasCredito();
    var y = this.getPromedioCP();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getDiasPPromedio(){
    var i = 365/this.getRotacionCP();
    return i;
  }

  getPromedioInvArtTerm(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i += balance.almacenArtTerm;
    }
    for(let balance of this.balanceInicial){
      i += balance.almacenArtTerm;
    }
    i = i/2;
    return i;
  }

  getRotacionIAT(){
    var i = 0;
    var x = this.getTotalCostosVentas();
    var y = this.getPromedioInvArtTerm();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getDiasPromedioIAT(){
    var i = 0;
    var y = this.getRotacionIAT();
    if(y > 0){
      i = 365/y;
    }
    return i;
  }

  getCostoMPEmpleada(){
    var i = 0;
    for(let aux of this.auxiliares){
      i+=aux.materiaCosumida;
    }
    return i;
  }

  getPromIMP(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i += balance.almacenMateriales;
    }
    for(let balance of this.balanceInicial){
      i += balance.almacenMateriales;
    }
    i = i/2;
    return i;
  }

  getRotacionMP(){
    var i = 0;
    var x = this.getCostoMPEmpleada();
    var y = this.getPromIMP();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getDiasPromedioIMP(){
    var i = 0;
    var y = this.getRotacionMP();
    if(y > 0){
      i = 365/y;
    }
    return i;
  }

  getMargenNetoUtilidad(){
    var i = 0;
    var x = this.getUtilidadNeta();
    var y = this.getTotalVentas();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getMargenBrutoUtilidad(){
    var i = 0;
    var x = this.getUtilidadOperacion();
    var y = this.getTotalVentas();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getCapitalContable(){
    var i = 0;
    for(let balance of this.balanceFinal){
      i += balance.capitalSocial + balance.reservaLegal + balance.utilidadAcum + balance.utilidadEjercicio;
    }
    return i;
  }

  getEndeudamiento(){
    var i = 0;
    var x = this.getPasivoTotal();
    var y = this.getCapitalContable();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getPasivoActivoTotal(){
    var i = 0;
    var x = this.getPasivoTotal();
    var y = this.getActivoTotal();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getActivoCapitalTotal(){
    var i = 0;
    var x = this.getActivoTotal();
    var y = this.getCapitalContable();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  getCoberturaIntereses(){
    var i = 0;
    var x = this.getUtilidadOperacion();
    var y = this.getIntereses();
    if(y > 0){
      i = x/y;
    }
    return i;
  }

  validarExistencia(id){
    var t = true;
    for(let a of this.auxiliares){
      if(a.Producto_idProducto == id){
        t = false;
        break;
      }
    }
    return t;
  }

  existenciaTotal(){
  var T = 0;
    for(let p of this.resultados){
      if(this.validarExistencia(p)){
        for(let m of this.maquinas){
          if(m.Producto_idProducto == p){
            T += ((m.costo * (m.depAcum/100))*m.Cantidad);
          }
        }
      }
    }
  return T;
  }










  //Funciones usadas pero no para mostrar
  getDistTotal(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoDistribucion;
    }
    return T;
  }
  getAdminTotal(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoAdministrativo;
    }
    return T;
  }
  getOtrosGastosTotal(){
    var x = 0;
    for(let a of this.auxiliarT){
      x+=a;
    }
    return x;
  }





    PDFestadoDeResultados(){

      var doc= new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [215.9,279]});

      var columns = [
      {title: "", dataKey: "signo"},
      {title: "Estado de Resultados", dataKey: "concepto"},
      {title: "", dataKey: "cantidad"}];

      var rows = [
      {"signo":"","concepto":"Ventas","cantidad":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0')},
      {"signo":"-","concepto":"Costos","cantidad":this.cp.transform(this.getTotalCostosVentas(),'USD',true,'1.0-0')},
      {"signo":"=","concepto":"Utilidad Bruta","cantidad":this.cp.transform(this.getUtilidadBruta(),'USD',true,'1.0-0')},
      {"signo":"-","concepto":"Gastos de Operación","cantidad":this.cp.transform(this.getGastosDeOperacion(),'USD',true,'1.0-0')},
      {"signo":"=","concepto":"Utilidad de Operación","cantidad":this.cp.transform(this.getUtilidadOperacion(),'USD',true,'1.0-0')},
      {"signo":"-","concepto":"Intereses","cantidad":this.cp.transform(this.getIntereses(),'USD',true,'1.0-0')},
      {"signo":"=","concepto":"Utilidad antes de Impuestos","cantidad":this.cp.transform(this.getUtilidadAntes(),'USD',true,'1.0-0')},
      {"signo":"-","concepto":"Impuestos","cantidad":this.cp.transform(this.getImpuestos(),'USD',true,'1.0-0')},
      {"signo":"=","concepto":"Utilidad Neta","cantidad":this.cp.transform(this.getUtilidadNeta(),'USD',true,'1.0-0')},
      {"signo":"/","concepto":"Ventas","cantidad":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0')},
      {"signo":"=","concepto":"Margen Neto(%)","cantidad":this.dc.transform(this.getMargenNeto()*10,'1.0-0')},
      {"signo":"*","concepto":"Rotación de Activos","cantidad":this.dc.transform(this.getRotacionActivos(),'1.0-0')},
      {"signo":"=","concepto":"Rentabilidad de Activos(%)","cantidad":this.dc.transform(this.getRentabilidadSobreActivos()*100,'1.0-0')},
      {"signo":"*","concepto":"Placa Financiera","cantidad":this.dc.transform(this.getActivoCapitalTotal(),'1.0-0')},
      {"signo":"=","concepto":"Rentabilidad s/Capital Contable","cantidad":this.dc.transform(this.getRentabilidadSobreCapital(),'1.0-0')}

      ];


      doc.autoTable(columns, rows, {
        drawRow: function (row) {
              if (row.index == 9) {
                  doc.setFillColor(254,0,0);
              }
        },
      margin: {top: 40,
               left:40},
       tableWidth: 200,
      headerStyles: {fillColor:0,halign:'center'

      },
      columnStyles: {
      	signo: {halign:'center',columnWidth:20},
        concepto:{halign:'left'},
        cantidad:{halign:'right'},

      },
      addPageContent: function(data) {
        doc.setFontSize(15);
        doc.setFontType("bold");
        doc.text(139.5, 15, 'Proyecto ' , null, null, 'center');
        doc.setFontSize(13);
        doc.text(139.5, 23, 'Análisis de la Rentabilidad Sobre el Capital Contable del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
        doc.line(50, 27, 228, 27);
      },






      });

      doc.save("Analisis Balance General.pdf");



      }


    CSVestadoDeResultados(){
      let data:any=[
        {signo:"Proyecto", concepto:"Periodo"+localStorage.getItem('numeroPeriodo')},
        {signo:"",
         concepto:"Estado de Resutlados",
         cantidad:""
       },
       {"signo":"","concepto":"Ventas","cantidad":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0')},
       {"signo":"-","concepto":"Costos","cantidad":this.cp.transform(this.getTotalCostosVentas(),'USD',true,'1.0-0')},
       {"signo":"=","concepto":"Utilidad Bruta","cantidad":this.cp.transform(this.getUtilidadBruta(),'USD',true,'1.0-0')},
       {"signo":"-","concepto":"Gastos de Operación","cantidad":this.cp.transform(this.getGastosDeOperacion(),'USD',true,'1.0-0')},
       {"signo":"=","concepto":"Utilidad de Operación","cantidad":this.cp.transform(this.getUtilidadOperacion(),'USD',true,'1.0-0')},
       {"signo":"-","concepto":"Intereses","cantidad":this.cp.transform(this.getIntereses(),'USD',true,'1.0-0')},
       {"signo":"=","concepto":"Utilidad antes de Impuestos","cantidad":this.cp.transform(this.getUtilidadAntes(),'USD',true,'1.0-0')},
       {"signo":"-","concepto":"Impuestos","cantidad":this.cp.transform(this.getImpuestos(),'USD',true,'1.0-0')},
       {"signo":"=","concepto":"Utilidad Neta","cantidad":this.cp.transform(this.getUtilidadNeta(),'USD',true,'1.0-0')},
       {"signo":"/","concepto":"Ventas","cantidad":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0')},
       {"signo":"=","concepto":"Margen Neto(%)","cantidad":this.dc.transform(this.getMargenNeto()*10,'1.0-0')},
       {"signo":"*","concepto":"Rotación de Activos","cantidad":this.dc.transform(this.getRotacionActivos(),'1.0-0')},
       {"signo":"=","concepto":"Rentabilidad de Activos(%)","cantidad":this.dc.transform(this.getRentabilidadSobreActivos()*100,'1.0-0')},
       {"signo":"*","concepto":"Placa Financiera","cantidad":this.dc.transform(this.getActivoCapitalTotal(),'1.0-0')},
       {"signo":"=","concepto":"Rentabilidad s/Capital Contable","cantidad":this.dc.transform(this.getRentabilidadSobreCapital(),'1.0-0')}

      ];


      new Angular2Csv(data, ' Analisis Estado de Resultados');
    }



        PDFbalanceGeneral(){

          var doc= new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: [215.9,279]});

          var columns = [
          {title: "", dataKey: "signo"},
          {title: "Balance General", dataKey: "concepto"},
          {title: "", dataKey: "cantidad"}];

          var rows = [
          {"signo":"","concepto":"Activo Circulante","cantidad":this.cp.transform(this.getActivoCirculante(),'USD',true,'1.0-0')},
          {"signo":"+","concepto":"Activo Fijo","cantidad":this.cp.transform(this.getActivoFijo(),'USD',true,'1.0-0')},
          {"signo":"+","concepto":"Otros Activos","cantidad":"-"},
          {"signo":"=","concepto":"Activo Total","cantidad":this.cp.transform(this.getActivoTotal(),'USD',true,'1.0-0')},
          {"signo":"","concepto":"","cantidad":""},
          {"signo":"-","concepto":"Ventas","cantidad":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0')},
          {"signo":"/","concepto":"Activo Total Promedio","cantidad":this.cp.transform(this.getActivoTotal(),'USD',true,'1.0-0')},
          {"signo":"-","concepto":"Rotación de Activos","cantidad":this.dc.transform(this.getRotacionActivos(),'1.0-0')},
          {"signo":"","concepto":"","cantidad":""},
          {"signo":"","concepto":"Pasivo Circulante","cantidad":this.cp.transform(this.getPasivoCirculante(),'USD',true,'1.0-0')},
          {"signo":"+","concepto":"Pasivo a Largo Plazo","cantidad":this.cp.transform(this.getPasivoLP(),'USD',true,'1.0-0')},
          {"signo":"=","concepto":"Pasivo Total","cantidad":this.dc.transform(this.getPasivoTotal(),'1.0-0')},
          {"signo":"","concepto":"","cantidad":""},
          {"signo":"","concepto":"Activo Total","cantidad":this.dc.transform(this.getActivoTotal(),'1.0-0')},
          {"signo":"-","concepto":"Pasivo Total","cantidad":this.dc.transform(this.getPasivoTotal(),'1.0-0')},
          {"signo":"/","concepto":"Capital Contable","cantidad":this.dc.transform(this.getCapitalContable(),'1.0-0')},
          {"signo":"","concepto":"","cantidad":""},
          {"signo":"=","concepto":"Placa Financiera","cantidad":this.dc.transform(this.getActivoCapitalTotal(),'1.0-0')}

          ];


          doc.autoTable(columns, rows, {
            drawRow: function (row) {
                  if (row.index == 9) {
                      doc.setFillColor(254,0,0);
                  }
            },
          margin: {top: 40,
                   left:40},
           tableWidth: 200,
          headerStyles: {fillColor:0,halign:'center'

          },
          columnStyles: {
          	signo: {halign:'center',columnWidth:20},
            concepto:{halign:'left'},
            cantidad:{halign:'right'},

          },
          addPageContent: function(data) {
            doc.setFontSize(15);
            doc.setFontType("bold");
            doc.text(139.5, 15, 'Proyecto ' , null, null, 'center');
            doc.setFontSize(13);
            doc.text(139.5, 23, 'Análisis de la Rentabilidad Sobre el Capital Contable del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
            doc.line(50, 27, 228, 27);
          },






          });

          doc.save("Analisis Balance General.pdf");



          }

          CSVbalanceGeneral(){
            let data:any=[
              {signo:"Proyecto", concepto:"Periodo"+localStorage.getItem('numeroPeriodo')},
              {signo:"",
               concepto:"Balance General",
               cantidad:""
             },
             {"signo":"","concepto":"Activo Circulante","cantidad":this.cp.transform(this.getActivoCirculante(),'USD',true,'1.0-0')},
             {"signo":"+","concepto":"Activo Fijo","cantidad":this.cp.transform(this.getActivoFijo(),'USD',true,'1.0-0')},
             {"signo":"+","concepto":"Otros Activos","cantidad":"-"},
             {"signo":"=","concepto":"Activo Total","cantidad":this.cp.transform(this.getActivoTotal(),'USD',true,'1.0-0')},
             {"signo":"","concepto":"","cantidad":""},
             {"signo":"-","concepto":"Ventas","cantidad":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0')},
             {"signo":"/","concepto":"Activo Total Promedio","cantidad":this.cp.transform(this.getActivoTotal(),'USD',true,'1.0-0')},
             {"signo":"-","concepto":"Rotación de Activos","cantidad":this.dc.transform(this.getRotacionActivos(),'1.0-0')},
             {"signo":"","concepto":"","cantidad":""},
             {"signo":"","concepto":"Pasivo Circulante","cantidad":this.cp.transform(this.getPasivoCirculante(),'USD',true,'1.0-0')},
             {"signo":"+","concepto":"Pasivo a Largo Plazo","cantidad":this.cp.transform(this.getPasivoLP(),'USD',true,'1.0-0')},
             {"signo":"=","concepto":"Pasivo Total","cantidad":this.dc.transform(this.getPasivoTotal(),'1.0-0')},
             {"signo":"","concepto":"","cantidad":""},
             {"signo":"","concepto":"Activo Total","cantidad":this.dc.transform(this.getActivoTotal(),'1.0-0')},
             {"signo":"-","concepto":"Pasivo Total","cantidad":this.dc.transform(this.getPasivoTotal(),'1.0-0')},
             {"signo":"/","concepto":"Capital Contable","cantidad":this.dc.transform(this.getCapitalContable(),'1.0-0')},
             {"signo":"","concepto":"","cantidad":""},
             {"signo":"=","concepto":"Placa Financiera","cantidad":this.dc.transform(this.getActivoCapitalTotal(),'1.0-0')}

            ];


            new Angular2Csv(data, ' Analisis Estado de Resultados');
          }



                  PDFratios(){

                    var doc= new jsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: [215.9,279]});

                    var columns = [
                    {title: "Ratios", dataKey: "grupo"},
                    {title: "", dataKey: "concepto"},
                    {title: "", dataKey: "cantidad"},
                    {title: "", dataKey: "numero"}];

                    var rows = [
                      {"grupo":"Solvencia","concepto":"Activo Circulante","cantidad":this.getActivoCirculante(),"numero":this.getSolvencia()},
                      {"grupo":"","concepto":"Pasivo Circulante","cantidad":this.getPasivoCirculante(),"numero":""},
                      {"grupo":"Solvencia Inmediata","concepto":"Activo Disponible","cantidad":this.getActivoDisponible(),"numero":this.getSolvenciaInmediata()},
                      {"grupo":"","concepto":"Pasivo Circulante","cantidad":this.getPasivoCirculante(),"numero":""},
                      {"grupo":"Rotación de Activos","concepto":"Ventas a Crédito","cantidad":this.getVentasACredito(),"numero":this.getRotacionCC()},
                      {"grupo":"","concepto":"Promedio c x c","cantidad":this.getPromedioCC(),"numero":""},
                      {"grupo":"Días Promedio de Cartera","concepto":"Días del Periodo","cantidad":365,"numero":this.getDiasPPromedioDeCartera()},
                      {"grupo":"","concepto":"Rotación de c x c","cantidad":this.getRotacionCC(),"numero":""},
                      {"grupo":"Rotación de Cuentas Por Pagar","concepto":"Compras Netas A Crédito","cantidad":this.getComprasNetasCredito(),"numero":this.getRotacionCP()},
                      {"grupo":"","concepto":"Promedio de Cuentas Por Pagar","cantidad":this.getPromedioCP(),"numero":""},
                      {"grupo":"Días Promedio de c x p","concepto":"Días del Periodo","cantidad":365,"numero":this.getDiasPPromedio()},
                      {"grupo":"","concepto":"Rotación de c x p","cantidad":this.getRotacionCP(),"numero":""},
                      {"grupo":"Rotación de I.A.T.","concepto":"Costo de lo Vendido","cantidad":this.getTotalCostosVentas(),"numero":this.getRotacionIAT()},
                      {"grupo":"","concepto":"Promedio de inv art term","cantidad":this.getPromedioInvArtTerm(),"numero":""},
                      {"grupo":"Días Promedios","concepto":"Días del Periodo","cantidad":365,"numero":this.getDiasPromedioIAT()},
                      {"grupo":"","concepto":"Promedio de inv art term","cantidad":this.getPromedioInvArtTerm(),"numero":""},


                    ];


                    doc.autoTable(columns, rows, {
                      drawRow: function (row) {
                            if (row.index == 9) {
                                doc.setFillColor(254,0,0);
                            }
                      },
                    margin: {top: 40,
                             left:40},
                     tableWidth: 200,
                    headerStyles: {fillColor:0,halign:'center'

                    },
                    columnStyles: {
                    	signo: {halign:'center',columnWidth:20},
                      concepto:{halign:'left'},
                      cantidad:{halign:'right'},

                    },
                    addPageContent: function(data) {
                      doc.setFontSize(15);
                      doc.setFontType("bold");
                      doc.text(139.5, 15, 'Proyecto ' , null, null, 'center');
                      doc.setFontSize(13);
                      doc.text(139.5, 23, 'Análisis de la Rentabilidad Sobre el Capital Contable del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
                      doc.line(50, 27, 228, 27);
                    },






                    });

                    doc.save("Analisis Balance General.pdf");



                    }









}
