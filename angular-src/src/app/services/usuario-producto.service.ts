import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UsuarioProductoService {
  productosU:any=[];

  constructor(private http:Http) { }

  insertar(producto){
    this.add(producto).subscribe( data => {
      for(let key$ in data.datos){
        this.productosU[key$] = data.datos[key$];
      }
    });
  }

  returnProductosU(idUsuario){
    this.productosU.length = 0;
    this.getProductosU(idUsuario).subscribe(data => {
      for(let key$ in data.datos){
        this.productosU.push(data.datos[key$]);
      }
    });
    return this.productosU;
  }

  add(producto){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('usuariosproductos/register/',producto,headers).map(res => res.json());
  }

  getProductosU(idUsuario){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.get('usuariosproductos/'+idUsuario).map(res => res.json());
  }

  getProductosNU(idUsuario){
    return this.http.get('usuariosproductos/n/'+idUsuario).map(res => res.json());
  }

  eliminar(producto){
    for(let i=0;this.productosU.length>i;i++){
      if(this.productosU[i].idProducto==producto.idProducto){
        this.productosU.splice(i,1);
      }
    }
    this.delete(producto).subscribe();
  }

  delete(producto){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('usuariosproductos/delete/',producto,headers).map(res => res.json());
  }
}
