import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';

@Component({
  selector: 'app-integrales',
  templateUrl: './integrales.component.html'
})
export class IntegralesComponent implements OnInit {

  resultados = [];
  auxiliares=[];
  auxiliarC=[];
  productos=[];
  auxiliarT = [];
  intereses = [];
  maquinas = [];
  balanceFinal =[];

  constructor(private _operacionService:OperacionService,private _maqService:CompraMaquinariaService) {
    this.auxiliares=this._operacionService.returnAuxiliares();
    this.intereses = this._operacionService.returnInter();
    this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
    this.maquinas =this._maqService.returnMaquinasCompradas();
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
        console.log(m.costo,m.depAcum,m.Cantidad)
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
    return T;
  }

  getOtrosGastosTotal(){
    var x = 0;
    for(let a of this.auxiliarT){
      x+=a;
    }
    return x;
  }

  getIntereses(){
    var x = 0;
    for(let a of this.intereses){
      x+=a;
    }
    return x;
  }

  getUtilidadOperacion(){
    var i = 0;
    var x = 0;
    for(let a of this.auxiliarT){
      x+=a;
    }
    i = this.getUtilidadAntes() - x;
    return x
  }

  getUtilidad2(){
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












}
