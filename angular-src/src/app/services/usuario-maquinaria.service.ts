import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UsuarioMaquinariaService {
  maquinariaU:any = [];

  constructor(private http:Http) { }

  returnMaquinariasU(idUsuario){
    this.maquinariaU.length = 0;
    this.getMaquinariasU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        this.maquinariaU.push(data.datos[key$]);
      }
    });
    return this.maquinariaU;
  }

  agregarMaquinariaU(x){
    this.addMaquinariaU(x).subscribe(data => {
      for(let key$ in data.datos){
        this.maquinariaU[key$] = data.datos[key$];
      }
    });
  }

  deleteMaquinaria(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    for(let i=0;this.maquinariaU.length>i;i++){
      if(this.maquinariaU[i].idMaquinaria==x.idMaquinaria){
        this.maquinariaU.splice(i,1);
      }
    }
    return this.http.post('usuariosmaquinarias/delete/',x,headers).map(res => res.json());

  }

  getMaquinariasU(idUsuario){
    return this.http.get('usuariosmaquinarias/'+idUsuario).map(res => res.json());
  }


  addMaquinariaU(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('usuariosmaquinarias/register/',x,headers).map(res => res.json());
  }

}
