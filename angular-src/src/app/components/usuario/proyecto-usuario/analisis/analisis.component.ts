import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import {ResultadosService} from '../../../../services/resultados.service';

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
              private _maqService:CompraMaquinariaService) {
    this.auxiliares=this._operacionService.returnAuxiliares();
    this.intereses = this._operacionService.returnInter();
    this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
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
    }
    return T;
  }

  getUtilidadBruta(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
    }
    return T;
  }

  getGastosDeOperacion(){
    var i = 0;
    i = this.getAdminTotal() + this.getOtrosGastosTotal() + this.getDistTotal();
    return i;
  }

  getUtilidadOperacion(){
    var i = 0;
    var x = 0;
    if(this.auxiliares.length == 0){
      for(let m of this.maquinas){
        i -= ((m.costo * (m.depAcum/100))*m.Cantidad);
      }
    }
    else{
      for(let aux of this.auxiliares){
        i += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
      }
    }
    for(let a of this.auxiliarT){
      x+=a;
    }
    i -= x;
    return i;
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
    if(this.auxiliares.length == 0){
      for(let m of this.maquinas){
        T -= ((m.costo * (m.depAcum/100))*m.Cantidad);
      }
    }
    else{
      for(let aux of this.auxiliares){
        T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
      }
    }
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



}
