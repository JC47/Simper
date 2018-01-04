import { Component, OnInit,ElementRef, ViewChild,Output,EventEmitter } from '@angular/core';
import {BalanceService} from '../../../../services/balance.service';
import {ResultadosService} from '../../../../services/resultados.service';
import { CurrencyPipe } from '@angular/common';
import {ProyectosService} from '../../../../services/proyectos.service';
import {DesarrolloProductoService} from '../../../../services/desarrollo-producto.service';
import {DesarrolloZonaService} from '../../../../services/desarrollo-zona.service';
import {AuxiliarService} from '../../../../services/auxiliar.service';
import { UsuarioCreditoService} from '../../../../services/usuario-credito.service';
import { Router } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


// import * as jsPDF from 'jspdf'
declare var jsPDF: any;
@Component({
  selector: 'app-balance-final',
  templateUrl: './balance-final.component.html',
  styleUrls: ['./balance-final.component.css']
})
export class BalanceFinalComponent implements OnInit {
  balanceFinal:any;
  openConf:boolean=false;
  openBien:boolean=false;
  openLoad:boolean=false;
  alert:boolean=false;
  opciones:boolean=false;
  periodo:number;
  periodos = [];




  constructor(private _resultadosService:ResultadosService,
    private cp: CurrencyPipe,
    private _proyectoService:ProyectosService,
    private _balanceService:BalanceService,
    private _auxiliarService:AuxiliarService,
    private _desarrolloZona:DesarrolloZonaService,
    private router:Router,
    private _creditoService:UsuarioCreditoService,
    private _desarrolloProducto:DesarrolloProductoService) {
    this._resultadosService.vender();
    this._proyectoService.muestraCierrePeriodo();


  }

  ngOnInit() {
    setTimeout(() => {
      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.balanceFinal = this._resultadosService.getBalanceFinal();
        }
      });
    }, 1500);
  }



descargaCSV(){

  let cajaBancos,
      cuentasPorCobrar,
      IVAAcreditable,
      almacenArtTerm,
      almacenMateriales,
      terreno,
      maqEquipo,
      edificios,
      mueblesEnseres,
      equipoTrans,
      pagosAnticipado,
      gastosAmortizacion,
      IVAPorEnterar,
      imptosPorPagar,
      proveedores,
      PTUPorPagar,
      prestamosMenosAnio,
      prestamosMasAnio,
      capitalSocial,
      reservaLegal,
      utilidadAcum,
      depMaqEquipo,
      depEdif,
      depTerreno,
      depEqTrans,
      depMueblesEnseres,
      utilidadEjercicio;
      let total1=cajaBancos + cuentasPorCobrar + IVAAcreditable + almacenArtTerm + almacenMateriales
      let total2=terreno + edificios + mueblesEnseres + equipoTrans + maqEquipo - depMaqEquipo - depEdif - depMueblesEnseres -depEqTrans
      let sumaDerechos=pagosAnticipado + gastosAmortizacion + terreno
        + edificios + mueblesEnseres + equipoTrans + maqEquipo
        + cajaBancos + cuentasPorCobrar + IVAAcreditable + almacenArtTerm
        + almacenMateriales - depMaqEquipo - depEdif - depMueblesEnseres -depEqTrans;
    let total3=IVAPorEnterar + imptosPorPagar + proveedores + PTUPorPagar + prestamosMenosAnio




  for(let balance of this.balanceFinal){
    cajaBancos=balance.cajaBancos;
    cuentasPorCobrar=balance.cuentasPorCobrar;
    IVAAcreditable=balance.IVAAcreditable;
    almacenArtTerm=balance.almacenArtTerm;
    almacenMateriales=balance.almacenMateriales
    terreno=balance.terreno;
    edificios=balance.edifInsta;
    maqEquipo=balance.maqEquipo;
    mueblesEnseres=balance.mueblesEnseres;
    equipoTrans=balance.eqTrans;
    pagosAnticipado=balance.pagosAnticipado;
    gastosAmortizacion=balance.gastosAmortizacion;
    IVAPorEnterar=balance.IVAPorEnterar;
    imptosPorPagar=balance.imptosPorPagar;
    proveedores=balance.proveedores;
    PTUPorPagar=balance.PTUPorPagar;
    prestamosMenosAnio=balance.prestamosMenosAnio;
    prestamosMasAnio=balance.prestamosMasAnio;
    capitalSocial=balance.capitalSocial;
    reservaLegal=balance.reservaLegal;
    utilidadAcum=balance.utilidadAcum;
    utilidadEjercicio=balance.utilidadEjercicio;
    depMaqEquipo=balance.depMaqEquipo;
    depEdif=balance.depEdif;
    depTerreno=balance.depTerreno;
    depEqTrans=balance.depEqTrans;
    depMueblesEnseres=balance.depMueblesEnseres;
  }

  let data:any=[
    {cara1:"A menos de un Año",             io:"", depAcum:"",  neto:"",    valor1:"",                                       cara2:"A menos de un año", valor2:""},
    {cara1:"Caja Bancos",                   io:"", depAcum:"",  neto:"",    valor1:cajaBancos,                               cara2:"IVA por Enterar", valor2:IVAPorEnterar},
    {cara1:"Cuentas por Cobrar",            io:"", depAcum:"",  neto:"",    valor1:cuentasPorCobrar,                         cara2:"Impuesto por Pagar", valor2:imptosPorPagar},
    {cara1:"IVA Acreditable",               io:"", depAcum:"",  neto:"",    valor1:IVAAcreditable,                           cara2:"Proveedores", valor2:proveedores},
    {cara1:"Almacen de Artículo Terminado", io:"", depAcum:"",  neto:"",    valor1:almacenArtTerm,                           cara2:"PTU por Pagar", valor2:PTUPorPagar},
    {cara1:"Almacen de Materiales",         io:"", depAcum:"",  neto:"",    valor1:almacenMateriales,                        cara2:"Prestamos Bancarios", valor2:prestamosMenosAnio},
    {cara1:"Total",                         io:"", depAcum:"",  neto:"",    valor1:total1,                                   cara2:"Total", valor2:total3},
    {cara1:"A mas de un año",               io:"", depAcum:"",  neto:"",    valor1:"",                                       cara2:"A más de un Año", valor2:""},
    {cara1:"",                              io:"", depAcum:"",  neto:"",    valor1:"",                                       cara2:"", valor2:""},
    {cara1:"Terrenos",                      io:"", depAcum:"",  neto:"",    valor1:terreno,                                  cara2:"Prestamos Totales", valor2:prestamosMasAnio},
    {cara1:"Edificios e Instalaciones",     io:"", depAcum:"",  neto:"",    valor1:edificios,                                cara2:"", valor2:""},
    {cara1:"Maquinaria y Equipo",           io:"", depAcum:"",  neto:"",    valor1:maqEquipo,                                cara2:"", valor2:""},
    {cara1:"Muebles y Enseres",             io:"", depAcum:"",  neto:"",    valor1:mueblesEnseres,                           cara2:"", valor2:""},
    {cara1:"Equipo de Transporte",          io:"", depAcum:"",  neto:"",    valor1:equipoTrans,                              cara2:"", valor2:""},
    {cara1:"Total",                         io:"", depAcum:"",  neto:"",    valor1:total2,                                   cara2:"Total", valor2:prestamosMasAnio},
    {cara1:"De Aplicacion Difereida",       io:"", depAcum:"",  neto:"",    valor1:"",                                       cara2:"Con los Accionistas", valor2:""},
    {cara1:"Pagos Hechos por Anticipado",   io:"", depAcum:"",  neto:"",    valor1:pagosAnticipado,                          cara2:"Capital Social", valor2:capitalSocial},
    {cara1:"Gastos Por Amortizar",          io:"", depAcum:"",  neto:"",    valor1:gastosAmortizacion,                       cara2:"Reserva Legal", valor2:reservaLegal},
    {cara1:"",                              io:"", depAcum:"",  neto:"",    valor1:"",                                       cara2:"Utilidad Acumulada", valor2:utilidadAcum},
    {cara1:"",                              io:"", depAcum:"",  neto:"",    valor1:"",                                       cara2:"Utilidad del Ejercicio", valor2:utilidadEjercicio},

    {cara1:"Total",                         io:"", depAcum:"",  neto:"",    valor1:pagosAnticipado + gastosAmortizacion,     cara2:"Total", valor2:""},
    {cara1:"Suma de los Derechos",          io:"", depAcum:"",  neto:"",    valor1:sumaDerechos,                             cara2:"Suma de las Obligaciones", valor2:""}
  ]

    new Angular2Csv(data, 'Balance Final');



}



  descargaPDF(){
    let cajaBancos,
        cuentasPorCobrar,
        IVAAcreditable,
        almacenArtTerm,
        almacenMateriales,
        terreno,
        maqEquipo,
        edificios,
        mueblesEnseres,
        equipoTrans,
        pagosAnticipado,
        gastosAmortizacion,
        IVAPorEnterar,
        imptosPorPagar,
        proveedores,
        PTUPorPagar,
        prestamosMenosAnio,
        prestamosMasAnio,
        capitalSocial,
        reservaLegal,
        utilidadAcum,
        depMaqEquipo,
        depEdif,
        depTerreno,
        depEqTrans,
        depMueblesEnseres,
        utilidadEjercicio;



    for(let balance of this.balanceFinal){
      cajaBancos=balance.cajaBancos;
      cuentasPorCobrar=balance.cuentasPorCobrar;
      IVAAcreditable=balance.IVAAcreditable;
      almacenArtTerm=balance.almacenArtTerm;
      almacenMateriales=balance.almacenMateriales
      terreno=balance.terreno;
      edificios=balance.edifInsta;
      maqEquipo=balance.maqEquipo;
      mueblesEnseres=balance.mueblesEnseres;
      equipoTrans=balance.eqTrans;
      pagosAnticipado=balance.pagosAnticipado;
      gastosAmortizacion=balance.gastosAmortizacion;
      IVAPorEnterar=balance.IVAPorEnterar;
      imptosPorPagar=balance.imptosPorPagar;
      proveedores=balance.proveedores;
      PTUPorPagar=balance.PTUPorPagar;
      prestamosMenosAnio=balance.prestamosMenosAnio;
      prestamosMasAnio=balance.prestamosMasAnio;
      capitalSocial=balance.capitalSocial;
      reservaLegal=balance.reservaLegal;
      utilidadAcum=balance.utilidadAcum;
      utilidadEjercicio=balance.utilidadEjercicio;
      depMaqEquipo=balance.depMaqEquipo;
      depEdif=balance.depEdif;
      depTerreno=balance.depTerreno;
      depEqTrans=balance.depEqTrans;
      depMueblesEnseres=balance.depMueblesEnseres;
    }
    var total1 = cajaBancos+cuentasPorCobrar+IVAAcreditable+almacenArtTerm+almacenMateriales;
    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [215.9,279]});

      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Posición Financiera Final del Periodo '+ localStorage.getItem('numeroPeriodo'), null, null, 'center');
      doc.line(50, 27, 228, 27);
      doc.setFontSize(7);
      let mar=45;
      let anchCell=4;





  //Activo
      doc.text(10, 40, 'A menos de un año');
      doc.line(10, 45, 120, 45);
          doc.setFontType("normal");
      doc.text(12, 48, 'Caja y Bancos');
      doc.line(10, mar+anchCell*1, 120, mar+anchCell*1);
      doc.text(120, 48, this.cp.transform(cajaBancos,'USD',true,'1.0-0') , null, null, 'right');

      doc.text(12, 44+anchCell*2, 'Cuentas por Cobrar');
doc.line(10, mar+anchCell*2, 120, mar+anchCell*2);
doc.text(120, 44+anchCell*2, this.cp.transform(cuentasPorCobrar,'USD',true,'1.0-0'), null, null, 'right');

doc.text(12, 44+anchCell*3, 'IVA Acreditable');
doc.line(10, mar+anchCell*3, 120, mar+anchCell*3);
doc.text(120, 44+anchCell*3, this.cp.transform(IVAAcreditable,'USD',true,'1.0-0'), null, null, 'right');

doc.text(12, 44+anchCell*4, 'Almacén de Artículo Terminado');
doc.line(10, mar+anchCell*4, 120, mar+anchCell*4);
doc.text(120, 44+anchCell*4, this.cp.transform(almacenArtTerm,'USD',true,'1.0-0'), null, null, 'right');

doc.text(12, 44+anchCell*5, 'Almacen de Materiales');
doc.line(10, mar+anchCell*5, 120, mar+anchCell*5);
doc.text(120, 44+anchCell*5, this.cp.transform(almacenMateriales,'USD',true,'1.0-0'), null, null, 'right');

doc.setFontSize(8);
doc.setFontType("bold");
doc.text(12, 44+anchCell*6, 'Total');
doc.text(140, 44+anchCell*6, this.cp.transform(total1,'USD',true,'1.0-0'), null, null, 'right');


doc.text(10, 85, 'A más de un año');
doc.setFontType("normal");
doc.setFontSize(7);
doc.text(62, 44+anchCell*7+17, 'I.O.');
doc.text(82, 44+anchCell*7+17, 'Dep. Acum');
doc.line(10, 90, 120, 90);

var r = terreno-depTerreno;
doc.text(12, 44+anchCell*7+21, 'Terreno');
doc.line(10, mar+0+anchCell*7+21, 120, mar+anchCell*7+21);
doc.text(120, 44+anchCell*7+21, this.cp.transform(r,'USD',true,'1.0-0'), null, null, 'right');
doc.text(70, 44+anchCell*7+21, this.cp.transform(terreno,'USD',true,'1.0-0'), null, null, 'right');
doc.text(95, 44+anchCell*7+21, this.cp.transform(depTerreno,'USD',true,'1.0-0'), null, null, 'right');

var r1 = edificios-depEdif;
doc.text(12, 44+anchCell*8+21, 'Edificios e Instalaciones');
doc.line(10, mar+0+anchCell*8+21, 120, mar+anchCell*8+21);
doc.text(120, 44+anchCell*8+21, this.cp.transform(r1,'USD',true,'1.0-0'), null, null, 'right');
doc.text(70, 44+anchCell*8+21, this.cp.transform(edificios,'USD',true,'1.0-0'), null, null, 'right');
doc.text(95, 44+anchCell*8+21, this.cp.transform(depEdif,'USD',true,'1.0-0'), null, null, 'right');

var r2 = maqEquipo-depMaqEquipo;
doc.text(12, 44+anchCell*9+21, 'Maquinaria y Equipo');
doc.line(10, mar+0+anchCell*9+21, 120, mar+anchCell*9+21);
doc.text(120, 44+anchCell*9+21, this.cp.transform(r2,'USD',true,'1.0-0'), null, null, 'right');
doc.text(70, 44+anchCell*9+21, this.cp.transform(maqEquipo,'USD',true,'1.0-0'), null, null, 'right');
doc.text(95, 44+anchCell*9+21, this.cp.transform(depMaqEquipo,'USD',true,'1.0-0'), null, null, 'right');

var r3 = mueblesEnseres-depMueblesEnseres;
doc.text(12, 44+anchCell*10+21, 'Muebles y Enseres');
doc.line(10, mar+0+anchCell*10+21, 120, mar+anchCell*10+21);
doc.text(120, 44+anchCell*10+21, this.cp.transform(r3,'USD',true,'1.0-0'), null, null, 'right');
doc.text(70, 44+anchCell*10+21, this.cp.transform(mueblesEnseres,'USD',true,'1.0-0'), null, null, 'right');
doc.text(95, 44+anchCell*10+21, this.cp.transform(depMueblesEnseres,'USD',true,'1.0-0'), null, null, 'right');

var r4 = equipoTrans-depEqTrans;
doc.text(12, 44+anchCell*11+21, 'Equipo de Transportes');
doc.line(10, mar+0+anchCell*11+21, 120, mar+anchCell*11+21);
doc.text(120, 44+anchCell*11+21,  this.cp.transform(r4,'USD',true,'1.0-0'), null, null, 'right');
doc.text(70, 44+anchCell*11+21,  this.cp.transform(equipoTrans,'USD',true,'1.0-0'), null, null, 'right');
doc.text(95, 44+anchCell*11+21,  this.cp.transform(depEqTrans,'USD',true,'1.0-0'), null, null, 'right');

var rt = r+r1+r2+r3+r4;
var rn = equipoTrans+mueblesEnseres+maqEquipo+edificios+terreno;
var rdep = depEdif+depMaqEquipo+depTerreno+depMueblesEnseres+depEqTrans;
doc.setFontSize(8);
doc.setFontType("bold");
doc.text(12, 44+anchCell*12+21, 'Total');
doc.text(140, 44+anchCell*12+21,  this.cp.transform(rt,'USD',true,'1.0-0'), null, null, 'right');
doc.text(70, 44+anchCell*12+21,  this.cp.transform(rn,'USD',true,'1.0-0'), null, null, 'right');
doc.text(95, 44+anchCell*12+21,  this.cp.transform(rdep,'USD',true,'1.0-0'), null, null, 'right');

doc.setFontSize(7);

doc.text(10, 130, 'De Aplicación Difereida');
doc.line(10, 135, 120, 135);
doc.setFontType("normal");

doc.text(12, 44+anchCell*12+46, 'Pagos Hechos por Anticipado');
doc.line(10, mar+0+anchCell*12+46, 120, mar+anchCell*12+46);
doc.text(120, 44+anchCell*12+46,  this.cp.transform(pagosAnticipado,'USD',true,'1.0-0'), null, null, 'right');

doc.text(12, 44+anchCell*13+46, 'Gastos por Amortizar');
doc.line(10, mar+0+anchCell*13+46, 120, mar+anchCell*13+46);
doc.text(120, 44+anchCell*13+46,  this.cp.transform(gastosAmortizacion,'USD',true,'1.0-0'), null, null, 'right');

doc.setFontSize(8);
doc.setFontType("bold");
doc.text(12, 44+anchCell*14+46, 'Total');
doc.text(140, 44+anchCell*14+46, this.cp.transform((total1+rt+pagosAnticipado+gastosAmortizacion),'USD',true,'1.0-0'), null, null, 'right');

doc.text(12, 44+anchCell*18+46, 'Suma de los Derechos');
doc.text(140, 44+anchCell*18+46, this.cp.transform((total1+rt+pagosAnticipado+gastosAmortizacion),'USD',true,'1.0-0'), null, null, 'right');
doc.line(120, mar+0+anchCell*18+46, 140, mar+anchCell*18+46);

//Pasivo
  doc.text(165, 40, 'A menos de un año');
doc.line(165, 45, 235, 45);
doc.setFontType("normal");

doc.text(167, 44+anchCell*1, 'IVA por enterar');
doc.text(235, 44+anchCell*1,  this.cp.transform(IVAPorEnterar,'USD',true,'1.0-0'), null, null, 'right');
doc.line(165, mar+anchCell*1, 235, mar+anchCell*1);

doc.text(167, 44+anchCell*2, 'Impuestos por Pagar');
doc.text(235, 44+anchCell*2,  this.cp.transform(imptosPorPagar,'USD',true,'1.0-0'), null, null, 'right');
doc.line(165, mar+anchCell*2, 235, mar+anchCell*2);

doc.text(167, 44+anchCell*3, 'Proveedores');
doc.text(235, 44+anchCell*3,  this.cp.transform(proveedores,'USD',true,'1.0-0'), null, null, 'right');
doc.line(165, mar+anchCell*3, 235, mar+anchCell*3);

doc.text(167, 44+anchCell*4, 'PTU por Pagar');
doc.text(235, 44+anchCell*4,  this.cp.transform(PTUPorPagar,'USD',true,'1.0-0'), null, null, 'right');
doc.line(165, mar+anchCell*4, 235, mar+anchCell*4);

doc.text(167, 44+anchCell*5, 'Prestamos Bancarios');
doc.text(235, 44+anchCell*5,  this.cp.transform(prestamosMenosAnio,'USD',true,'1.0-0'), null, null, 'right');
doc.line(165, mar+anchCell*5, 235, mar+anchCell*5);

var t1 = IVAPorEnterar+imptosPorPagar+PTUPorPagar+proveedores+prestamosMenosAnio;
doc.setFontSize(8);
doc.setFontType("bold");
doc.text(167, 44+anchCell*6, 'Total');
doc.text(255, 44+anchCell*6, this.cp.transform(t1,'USD',true,'1.0-0'), null, null, 'right');

doc.setFontSize(7);

doc.text(165, 85, 'A más de un año');
doc.setFontType("normal");
doc.setFontSize(7);
doc.line(165, 90, 235, 90);


doc.text(167, 44+anchCell*7+21, 'Prestamos Bancarios');
doc.line(165, mar+0+anchCell*7+21, 235, mar+anchCell*7+21);
doc.text(235, 44+anchCell*7+21,  this.cp.transform(prestamosMasAnio,'USD',true,'1.0-0'), null, null, 'right');


doc.setFontSize(8);
doc.setFontType("bold");
doc.text(167, 44+anchCell*8+21, 'Total');
doc.text(255, 44+anchCell*8+21,  this.cp.transform(prestamosMasAnio,'USD',true,'1.0-0'), null, null, 'right');

doc.text(165, 115, 'Con los Accionistas');
doc.line(165, 122, 235, 122);

doc.setFontType("normal");
doc.setFontSize(7);

doc.text(167, 44+anchCell*9+45, 'Capital Social');
doc.line(165, mar+0+anchCell*9+45, 235, mar+anchCell*9+45);
doc.text(235, 44+anchCell*9+45,  this.cp.transform(capitalSocial,'USD',true,'1.0-0'), null, null, 'right');

doc.text(167, 44+anchCell*10+45, 'Reserva Legal');
doc.line(165, mar+0+anchCell*10+45, 235, mar+anchCell*10+45);
doc.text(235, 44+anchCell*10+45, this.cp.transform(reservaLegal,'USD',true,'1.0-0'), null, null, 'right');


doc.text(167, 44+anchCell*11+45, 'Utilidad Acumulada');
doc.line(165, mar+0+anchCell*11+45, 235, mar+anchCell*11+45);
doc.text(235, 44+anchCell*11+45,  this.cp.transform(utilidadAcum,'USD',true,'1.0-0'), null, null, 'right');


doc.text(167, 44+anchCell*12+45, 'Utilidad del Ejercicio');
doc.line(165, mar+0+anchCell*12+45, 235, mar+anchCell*12+45);
doc.text(235, 44+anchCell*12+45,  this.cp.transform(utilidadEjercicio,'USD',true,'1.0-0'), null, null, 'right');
doc.setFontSize(8);
doc.setFontType("bold");
var tr = t1+prestamosMasAnio+capitalSocial+reservaLegal+utilidadAcum+utilidadEjercicio;
doc.text(167, 44+anchCell*13+45, 'Total');
doc.text(255, 44+anchCell*13+45,  this.cp.transform(tr,'USD',true,'1.0-0'), null, null, 'right');

doc.text(165, 44+anchCell*18+46, 'Suma de los Derechos');
doc.text(255, 44+anchCell*18+46,  this.cp.transform(tr,'USD',true,'1.0-0'), null, null, 'right');
doc.line(235, mar+0+anchCell*18+46, 255, mar+anchCell*18+46);

doc.save("Balance Final.pdf")
  }




}
