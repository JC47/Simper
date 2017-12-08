import { Component, OnInit } from '@angular/core';
import {BalanceService} from '../../../../services/balance.service';
import {ResultadosService} from '../../../../services/resultados.service';
import { CurrencyPipe } from '@angular/common';

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
    private cp: CurrencyPipe) {
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

}
