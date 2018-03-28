import { Injectable } from '@angular/core';
import {UsuariosService} from './usuarios.service';
import {BalanceService} from './balance.service';
import {OperacionService} from "./operacion.service";

@Injectable()
export class ResultadosService {
  balanceInicial:any=[];
  balanceFinal:any=[];

  constructor(private _usuariosService:UsuariosService, private _balanceService:BalanceService, private _operacionService:OperacionService)
   { }

  balanceInicialUsuario(){
    this.balanceInicial.length = 0;
    this._usuariosService.getBalanceCero().subscribe( data => {
      for(let p in data.datos){
        this.balanceInicial.push(data.datos[p]);
        break;
      }
    });
    return this.balanceInicial;
  }

  balanceInicialAnterior(){
    var periodoAnterior = parseInt(localStorage.getItem('numeroPeriodo')) - 1;
    this._balanceService.getBalanceByIds(localStorage.getItem('idProyecto'),periodoAnterior).subscribe( data => {
      Object.assign(this.balanceInicial,data.datos);
    });
    return this.balanceInicial;
  }

  getBalanceFinal(){
    this.balanceFinal.length = 0;
    this._balanceService.getBalance().subscribe(data => {
      for(let key in data.datos){
        this.balanceFinal.push(data.datos[key])
      }
    });
    return this.balanceFinal;
  }

  vender(){
    this._operacionService.getProductosV().subscribe( data => {
      console.log(data)
      for(let key$ in data.datos){
        this._operacionService.sell(data.datos[key$]).subscribe();
      }
    });
  }

}
