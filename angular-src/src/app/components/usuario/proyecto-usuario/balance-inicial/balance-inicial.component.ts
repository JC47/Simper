import { Component, OnInit } from '@angular/core';
import {ResultadosService} from '../../../../services/resultados.service';


@Component({
  selector: 'app-balance-inicial',
  templateUrl: './balance-inicial.component.html',
  styleUrls: ['./balance-inicial.component.css']
})
export class BalanceInicialComponent implements OnInit {
  balanceInicial:any;
  constructor(private _resultadosService:ResultadosService) {
    this.balanceInicial = this._resultadosService.balanceInicialAnterior();
    console.log(this.balanceInicial)
  }


  ngOnInit() {
  }


}
