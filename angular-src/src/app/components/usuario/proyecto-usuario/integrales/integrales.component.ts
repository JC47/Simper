import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {DecimalPipe} from '@angular/common'
import {CurrencyPipe} from '@angular/common'
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-integrales',
  templateUrl: './integrales.component.html'
})


export class IntegralesComponent implements OnInit {

  integrales = [];
  tabla:any=[];

  constructor(private _operacionService:OperacionService,
              private dc:DecimalPipe,
              private cp: CurrencyPipe) {
    this.integrales = this._operacionService.returnIntegrales();
    console.log(this.integrales)

    setTimeout(() => {
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
      sec.push(this.cp.transform(periodo.costoVentas,'USD',true,'1.0-0') )
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
      sec.push(this.dc.transform((periodo.cDist+periodo.oGastos+periodo.cAdmin)/periodo.ventasNetas,'1.0-0')+"%")
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






}
