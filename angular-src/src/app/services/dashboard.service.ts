import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DashboardService {

  constructor(private http:Http) {


  }

  getDemandas(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let datos:any={
      "Proyecto_Usuario_idUsuario":localStorage.getItem('idUsuario'),
      "Proyecto_idProyecto":localStorage.getItem('idProyecto'),
      "numPeriodo":localStorage.getItem('numeroPeriodo')

    }

    return this.http.post('dashboard/productoszonademandadesarrollados',datos,{headers}).map(res => res.json());
  }

  getMaquinarias(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let datos:any={
      "Proyecto_idProyecto":localStorage.getItem('idProyecto')
    }
    return this.http.post('dashboard/productomaquinaria',datos,{headers}).map(res => res.json());
  }


  returnDemandas(){
    var demandas = [];
    this.getDemandas().subscribe(data=>{
      for(let num in data.datos){
        demandas.push(data.datos[num]);
      }
    })
    console.log("Servicio",demandas);
    return demandas;
  }

  returnMaquinarias(){
    var maquinas = [];
    this.getMaquinarias().subscribe(data=>{
      for(let num in data.datos){
        maquinas.push(data.datos[num]);
      }
    })
    console.log("Servicio",maquinas);
    return maquinas;
  }

}
