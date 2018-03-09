import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';

@Component({
  selector: 'app-punto-equilibrio',
  templateUrl: './punto-equilibrio.component.html'
})
export class PuntoEquilibrioComponent implements OnInit {

  intereses=[];
  auxiliarT=[];
  equilibrio=[];
  auxiliarC=[];

  constructor(private _operacionService:OperacionService) {
    this.intereses = this._operacionService.returnInter();
    this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
    this.equilibrio = this._operacionService.returnEquilibrio();
    this.auxiliarC=this._operacionService.returnAuxiliarC();
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





}
