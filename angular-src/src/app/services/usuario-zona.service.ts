import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UsuarioZonaService {
  zonasU:any = [];
  constructor(private http:Http) { }

  returnZonasU(idUsuario){
    this.zonasU.length = 0;
    this.getZonasU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        this.zonasU.push(data.datos[key$]);
      }
    });
    return this.zonasU;
  }

  agregarZonaU(x){
    this.addZonaU(x).subscribe(data => {
      for(let key$ in data.datos){
        this.zonasU[key$] = data.datos[key$];
      }
    });
  }

  deleteZona(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    for(let i=0;this.zonasU.length>i;i++){
      if((this.zonasU[i].idZona==x.idZona) && (this.zonasU[i].idProducto == x.idProducto)){
        this.zonasU.splice(i,1);
      }
    }
    return this.http.post('usuariosproductoszonas/delete/',x,headers).map(res => res.json());

  }

  getZonasU(idUsuario){
    return this.http.get('usuariosproductoszonas/'+idUsuario).map(res => res.json());
  }



  addZonaU(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('usuariosproductoszonas/register/',x,headers).map(res => res.json());
  }
}
