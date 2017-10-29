import { Injectable } from '@angular/core';
import {producto, maquinaria,select} from '../app.interfaces';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import {MaquinariaService} from './maquinaria.service';

@Injectable()
export class ProductoService {
  productos:producto[]=[];


  constructor(private http:Http) {

   }

   establecerValores(){
     this.productos.length = 0;
     this.getProductos().subscribe(data => {
       for(let key$ in data.datos){
           this.productos.push(data.datos[key$]);
       }
     });
     return this.productos;
   }

deleteProducto(id:number){
  console.log("Eliminando",id);
  for(let i=0;this.productos.length>i;i++){
    if(this.productos[i].idProducto==id){
      console.log(this.productos[i].idProducto);
      this.productos.splice(i,1);
      console.log("producto: ",id,"eliminado");
    }
  }
  console.log('producto/delete/'+id);
  return this.http.get('producto/delete/'+id).map(res => res.json());

}

  getProductos(){
    return this.http.get('producto/').map(res => res.json());
  }

  returnProductos(){
    this.productos= this.establecerValores();
    return this.productos;
  }


  guardarProducto(producto:producto){
    this.addProducto(producto).subscribe(data => {
      for(let key$ in data.datos){
          this.productos[key$] = data.datos[key$];
      }
    });
  }

  addProducto(producto:producto){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('producto/register', producto, {headers}).map( res => res.json());

  }


  setProducto(producto:producto){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    for(let i=0;this.productos.length>i;i++){
      console.log(this.productos[i].idProducto, producto.idProducto)
      if(this.productos[i].idProducto==producto.idProducto){
        this.productos.splice(i,1);
        this.productos.push(producto);
      }
    }
    return this.http.post('producto/modify/'+producto.idProducto, producto, {headers}).map( res => res.json());
  }

}
