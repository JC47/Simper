import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DashboardService {
  maquinarias:any;
  demandas:any;


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


  returnDemandas(){
    this.getDemandas().subscribe(data=>{
      console.log(data.datos)
      for(let num in data.datos){
        console.log(data.datos[num])
        this.demandas[num]=data.datos[num]
      }
    })
    console.log(this.demandas);
  }

}
