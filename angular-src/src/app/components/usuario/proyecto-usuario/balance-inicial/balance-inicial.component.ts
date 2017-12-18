import { Component, OnInit } from '@angular/core';
import {ResultadosService} from '../../../../services/resultados.service';
import {ProyectosService} from '../../../../services/proyectos.service';


@Component({
  selector: 'app-balance-inicial',
  templateUrl: './balance-inicial.component.html',
  styleUrls: ['./balance-inicial.component.css']
})
export class BalanceInicialComponent implements OnInit {
  balanceInicial:any;
  constructor(private _resultadosService:ResultadosService,
              private _proyectoService:ProyectosService) {
    this.balanceInicial = this._resultadosService.balanceInicialAnterior();
    console.log(this.balanceInicial)
    this._proyectoService.ocultaCierrePeriodo()

  }


  ngOnInit() {
  }


}
