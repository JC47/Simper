import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {BalanceService} from '../../../../services/balance.service';
import {CompraMaquinariaService} from '../../../../services/compra-maquinaria.service';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {
  balanceInicial:any;
  resultados = [];
  auxiliares=[];
  auxiliarC=[];
  productos=[];
  auxiliarT = [];
  intereses = [];
  maquinas = [];
  balanceFinal = [];
  auxiliaresAnteriores = [];

  constructor(private _operacionService:OperacionService,
              private _productoService:ProductoService,
              private _maqService:CompraMaquinariaService,
              private _balanceService:BalanceService,
              private _resultadosService:ResultadosService) {
    this._resultadosService.vender();
    setTimeout(() => {
        this.auxiliares=this._operacionService.returnAuxiliares();
        this.auxiliaresAnteriores=this._operacionService.returnAuxiliaresAnteriores();
        this.intereses = this._operacionService.returnInter();
        this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
        this.auxiliarC=this._operacionService.returnAuxiliarC();
        this.maquinas =this._maqService.returnMaquinasCompradas();
        this.balanceInicial = this._resultadosService.balanceInicialAnterior();
        this.balanceFinal = this._resultadosService.getBalanceFinal();
    }, 1500);
  }

  ngOnInit() {
  }


  getCobroVentas(){
    var r = 0;
    for(let a of this.auxiliaresAnteriores){
      r += a.VentasPorCobrar;
    }
    for(let b of this.auxiliares){
      r += b.VentasCobradas;
    }
    return r;
  }

}
