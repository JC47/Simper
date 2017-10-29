import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { zona,productoPeriodo } from '../app.interfaces';
import { HttpModule } from '@angular/http';

@Injectable()
export class ZonasService {
  public zonas = new Array();
  public zonasN = [];
  constructor(private http:Http) {
  }




  establecerValores(){
    this.zonas.length = 0;
    this.getZonas().subscribe(data => {
      for(let key$ in data.datos){
          this.zonas.push(data.datos[key$]);
      }
      for(let key$ in this.zonas){
        this.zonas[key$]['productos'] = [];
        this.getProductos(this.zonas[key$].idZona).subscribe( data => {
          var producto = this.limpiarArreglo(data.datos);
          this.zonas[key$].productos=(producto);
        });
      }
    });
    return this.zonas;
  }

  addProducto(idZona, idProducto, tiempo, costo){
    var x = {
      Zona_idZona:idZona,
      Producto_idProducto:idProducto,
      costoDes:costo,
      tiempoDes:tiempo
    }
    var y = {
      Producto_idProducto:idProducto,
      costoDes:costo,
      tiempoDes:tiempo
    }
    for(let zona of this.zonasN){
      if(zona.idZona == idZona){
        zona.productos.push(y);
      }
    }
    this.agregarProducto(x).subscribe();
  }

  agregarProducto(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('zona/registerProducto/', x, {headers}).map( res => res.json());
  }

  returnZonas(){
    return this.establecerValores();
  }

  limpiarArreglo(datos){
    var ids = [];
    var productoPeriodo = [];
    for(let x in datos){
      ids.push(datos[x].Producto_idProducto);
    }
    var hash = {};
    ids= ids.filter(function(current) {
      var exists = !hash[current] || false;
      hash[current] = true;
      return exists;
    });

    for(let y in ids){
      var periodos = [];
      for(let z in datos){
        if(ids[y] == datos[z].Producto_idProducto){
          var objeto = {
            numero:datos[z].numPeriodo,
            cantidad:datos[z].cantidad
          }
          periodos.push(objeto);
        }
      }
      productoPeriodo.push(this.unir(ids[y],periodos));
    }
    //console.log("Objeto de envio",productoPeriodo);
    return productoPeriodo;
  }

  unir(id,array){
    var envio = new Object();
    envio['idProducto'] = id;
    envio['periodos'] = array;
    return envio;
  }

  returnZonasNormales(){
    this.zonasN.length = 0;
    this.getZonas().subscribe(data => {
      for(let key$ in data.datos){
        this.zonasN.push(data.datos[key$]);
      }
    });
    return this.zonasN;
  }



  getZonas(){
    return this.http.get('zona/').map(res => res.json());
  }

  getProductos(id){
    return this.http.get('zona/productoperiodozona/'+id).map(res => res.json());
  }
  addZona(zona){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('zona/register/', zona, {headers}).map( res => res.json());

  }

  guardarZona(zona){
    this.addZona(zona).subscribe( data => {
      if(data.success){
        this.getZonas().subscribe(data => {
          for(let key$ in data.datos){
            this.zonasN[key$] = data.datos[key$];
          }
        });
      }
    });
  }

  setZona(zona){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    for(let i=0;this.zonasN.length>i;i++){
      if(this.zonasN[i].idZona==zona.idZona){
        this.zonasN[i].nombreZona = zona.nombreZona;
      }
    }
    var x = {
      nombreZona:zona.nombreZona
    }
    return this.http.post('zona/modifynombrezona/'+zona.idZona,x , {headers}).map( res => res.json());
  }

  editProductoZona(zona){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    for(let i=0;this.zonasN.length>i;i++){
      if(this.zonasN[i].idZona==zona.idZona){
        for(let j=0;j < this.zonasN[i].productos.length;j++){
          if(this.zonasN[i].productos[j].Producto_idProducto == zona.idProducto){
            this.zonasN[i].productos[j].costoDes = zona.costoDes;
            this.zonasN[i].productos[j].tiempoDes = zona.tiempoDes;
            console.log("Penny",this.zonasN[i].productos[j]);
          }
        }
      }
    }
    return this.http.post('zona/modifyproductozona/', zona, {headers}).map( res => res.json());
  }

  deleteZona(id:number){
    for(let i=0;this.zonasN.length>i;i++){
      if(this.zonasN[i].idZona==id){
        this.zonasN.splice(i,1);
      }
    }
    return this.http.get('zona/delete/'+id).map(res => res.json());

  }

  deleteProducto(x){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    var id = x.idZona;
    for(let i=0;this.zonasN.length>i;i++){
      if(this.zonasN[i].idZona==id){
        for(let j=0;j < this.zonasN[i].productos.length;j++){
          if(this.zonasN[i].productos[j].Producto_idProducto == x.idProducto){
            this.zonasN[i].productos.splice(j,1);
          }
        }
      }
    }

    return this.http.post('zona/deleteProducto/', x, {headers}).map( res => res.json());
  }


}
