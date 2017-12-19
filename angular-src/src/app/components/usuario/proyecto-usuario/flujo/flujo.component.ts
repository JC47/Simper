import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {BalanceService} from '../../../../services/balance.service';
import {CompraMaquinariaService} from '../../../../services/compra-maquinaria.service';
import {ProyectosService} from '../../../../services/proyectos.service';


@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {
  balanceInicial:any;
  auxiliares=[];
  auxiliarC=[];
  auxiliarT = [];
  pagos = [];
  intereses = [];
  maquinas = [];
  balanceFinal = [];
  auxiliaresAnteriores = [];
  prestamos = [];

  constructor(private _operacionService:OperacionService,
              private _productoService:ProductoService,
              private _maqService:CompraMaquinariaService,
              private _balanceService:BalanceService,
              private _resultadosService:ResultadosService,
            private _proyectoService:ProyectosService) {
              this._proyectoService.ocultaCierrePeriodo()
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
        this.prestamos = this._operacionService.returnPrestamosActuales();
        this.pagos = this._operacionService.returnPagos();
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

  getCajaBancos(){
    var  r = 0;
    for(let b of this.balanceInicial){
      r+=b.cajaBancos;
    }
    return r;
  }

  getPAcuales(){
    var r = 0;
    for(let p of this.prestamos){
      r+= p.monto;
    }
    return r;
  }

  getDisponible(){
    var d = 0;
    d = this.getCajaBancos() + this.getCobroVentas() + this.getPAcuales();
    return d;
  }

  getCostoDeTransformacion(){
    var r = 0;
    for(let aux of this.auxiliares){
      r += aux.costoTransformacionVentas;
      r -= aux.IVATrans;
    }
    return r;
  }

  getCostoDeDistribucion(){
    var r = 0;
    for(let aux of this.auxiliares){
      r += aux.costoDistDep;
      r -= aux.IVADist;
    }
    return r;
  }

  getCostoAdministrativo(){
    var r = 0;
    for(let aux of this.auxiliares){
      r += aux.costoAdminDep;
      r -= aux.IVAAdmon;
    }
    return r;
  }

  getCompras(){
    var r = 0;
    for(let b of this.auxiliares){
      r += b.comprasPagadas;
    }
    for(let b2 of this.auxiliaresAnteriores){
      r += b2.ComprasPorPagar;
    }
    return r;
  }

  getIntereses(){
    var r = 0;
    for(let b of this.intereses){
      r += b;
    }
    return r;
  }


  getPagos(){
    var r = 0;
    for(let b of this.pagos){
      r += b;
    }
    return r;
  }

  getGastosVenta(){
    var r = 0;
    for(let b of this.auxiliarC){
      r += b.desarrolloMercado + b.desarrolloProducto - b.IVAGastosVenta;
    }
    return r;
  }

  getCompraMaquinaria(){
    var r = 0;
    for(let b of this.auxiliarC){
      r += b.compraMaquinaria;
    }
    return r;
  }

  getIVA(){
    var r = 0;
    for(let b of this.balanceFinal){
      r += (b.IVAPorEnterar*11);
    }
    for(let b2 of this.balanceInicial){
      r += b2.IVAPorEnterar;
    }
    return r;
  }

  getPTU(){
    var r = 0;
    for(let b of this.balanceInicial){
      r += b.PTUPorPagar;
    }
    return r;
  }

  getISR(){
    var r = 0;
    for(let b of this.balanceFinal){
      r += b.imptosPorPagar * 11;
    }
    return r;
  }

  getSalidas(){
    var s = 0;
    s = this.getCostoDeTransformacion() + this.getCostoDeDistribucion() + this.getCostoAdministrativo() + this.getCompras() + this.getIntereses() + this.getPagos() + this.getGastosVenta() + this.getCompraMaquinaria() + this.getIVA();
    return s;
  }

}
