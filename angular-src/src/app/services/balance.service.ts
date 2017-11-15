import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BalanceService {
balancesArray:any[] = [];
balances:any[]=[];
periodoActual=localStorage.getItem('numeroPeriodo');


  constructor(private http:Http) { }

  getBalance(){
    var x = {
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
    };
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('balance/',x,{headers}).map(res => res.json());
  }

  returnBalance(){
    let balanceF =[];
    this.getBalance().subscribe(data =>{
      for(let key in data.datos){
        balanceF.push(data.datos[key]);
      }
    });
    console.log("Balance Actuarl",balanceF);
    return balanceF;
  }

  getBalanceFinal(){
    var x = {
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')) - 1
    };
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('balance/final',x,{headers}).map(res => res.json());
  }


  getBalanceByIds(idProyecto,numeroPeriodo){
    var x = {
      idProyecto:parseInt(idProyecto),
      numeroPeriodo:numeroPeriodo
    };
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('balance/',x,{headers}).map(res => res.json());
  }

  editarBalance(id, data): Observable<Response>{
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('balance/modify/'+id, data, {headers}).map(res => res.json());
  }

  getAll(){
    return this.http.get('balance/'+localStorage.getItem('idProyecto')).map(res => res.json());
  }

  crearBalance(idProyecto,data, numPeriodo){
    var Balance = {
    "IVAPorEnterar":data.IVAPorEnterar,
    "numeroPeriodo":numPeriodo,
    "imptosPorPagar" :data.imptosPorPagar,
    "proveedores":data.proveedores,
    "PTUPorPagar":data.PTUPorPagar,
    "prestamosMenosAnio":data.prestamosMenosAnio,
    "prestamosMasAnio":data.prestamosMasAnio,
    "cajaBancos":data.cajaBancos,
    "cuentasPorCobrar":data.cuentasPorCobrar,
    "IVAAcreditable":data.IVAAcreditable,
    "almacenArtTerm":data.almacenArtTerm,
    "almacenMateriales":data.almacenMateriales,
    "terreno":data.terreno,
    "edifInsta":data.edifInsta,
    "maqEquipo":data.maqEquipo,
    "mueblesEnseres":data.mueblesEnseres,
    "pagosAnticipado":data.pagosAnticipado,
    "gastosAmortizacion":data.gastosAmortizacion,
    "capitalSocial":data.capitalSocial,
    "reservaLegal":data.reservaLegal,
    "utilidadAcum":data.utilidadAcum,
    "depEdif":data.depEdif,
    "depMueblesEnseres":data.depMueblesEnseres,
    "eqTrans":data.eqTrans,
    "Proyectos_idProyecto":idProyecto,
    "depTerreno":data.depTerreno,
    "depMaqEquipo":data.depMaqEquipo,
    "depEqTrans":data.depEqTrans
    }
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('balance/register/', Balance, {headers}).map( res => res.json());
  }

  returnTodosBalances(){
    this.balancesArray.length = 0;
    this.getAll().subscribe( data => {
      for(let key$ in data.datos){
        this.balancesArray.push(data.datos[key$]);
      }
    });
    return this.balancesArray;
  }
}
