import { Injectable } from '@angular/core';
import {maquinaria} from '../app.interfaces';
import {Http, Headers} from '@angular/http';
import {MaquinariaService} from './maquinaria.service';
import {BalanceService} from './balance.service';
import 'rxjs/Rx';

@Injectable()
export class CompraMaquinariaService {
  maqCompradas:any[]=new Array();
  maquinas:maquinaria[]=new Array();
  maquinasCompradas:any[]=[];
  balanceTemporal:any;



  constructor(private _maquinariaService:MaquinariaService,
              private _balanceService:BalanceService,
              private http:Http) {
   }

   establecerValores(){
     var m = [];
     this.getMaquinariaC().subscribe( data => {
       for(let key$ in data.datos){
           m.push(data.datos[key$]);
       }
     });
     return m;
   }

   returnMaquinasCompradas(){
     return this.establecerValores();
   }


   getMaquinariaC(){
     let headers = new Headers({
       'Content-Type':'application/json'
     });
     var x = {
       idProyecto:localStorage.getItem('idProyecto'),
       numeroPeriodo:localStorage.getItem('numeroPeriodo')
     }
    return this.http.post('maquinariacomprada/',x,{headers}).map(res => res.json());
   }

  compraMaquinaria(x,y){
    console.log(x,y,"CUERPO")
    this.cobrar(y).subscribe();
    var z = [];
    this.comprar(x).subscribe(d => {
      this.getMaquinariaC().subscribe( data => {
        for(let key$ in data.datos){
            z.push(data.datos[key$]);
        }
      });
    });
    console.log("Retorno",z)
    return z;
  }

  regresarMaquinaria(x,y){
    this.undo(y).subscribe();
    var z = [];
    this.vuelta(x).subscribe(d => {
      this.getMaquinariaC().subscribe( data => {
        for(let key$ in data.datos){
            z.push(data.datos[key$]);
        }
      });
    });
    return z;
  }

  cobrar(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('maquinariacomprada/cobrar/', x, {headers}).map( res => res.json());
  }

  comprar(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('maquinariacomprada/compra/', x, {headers}).map( res => res.json());
  }

  asingar(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    console.log(x)
    return this.http.post('maquinariacomprada/asignar/', x, {headers}).map( res => res.json());
  }

  vuelta(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('maquinariacomprada/vuelta/', x, {headers}).map( res => res.json());
  }

  undo(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('maquinariacomprada/undo/', x, {headers}).map( res => res.json());
  }

  validar(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('maquinariacomprada/validatecompra/', x, {headers}).map( res => res.json());
  }
}
