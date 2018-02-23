import { Injectable } from '@angular/core';
import {ZonasService} from './zonas.service';
import {ProductoService} from './producto.service';
import {zona} from '../app.interfaces';

import { HttpModule } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class GraficasService {
  graficas = [];
  zonas = [];
  productos:any[];
  constructor(private _productosService:ProductoService,
              private _zonasService:ZonasService,
              private http:Http) {
                this.productos=this._productosService.returnProductos();
               }


  getZonas(){
    return this.http.get('demanda/grafica/').map(res => res.json());
  }


  deletePeriodo(idZonaA,idProductoA){
    let headers = new Headers({
      'Content-Type':'application/json'
    });



    return this.http.post('demanda/delete/',
    {  idZona:idZonaA,
	     idProducto:idProductoA
      },
     {headers}).map( res => res.json());

  }

  eliminaPeriodo(idZona,idProducto){
    this.zonas.length = 0;
    this.deletePeriodo(idZona,idProducto).subscribe(data=>{
      if(data.success){
        this.getZonas().subscribe(data=>{
          for(let num in data.datos){
            this.zonas.push(data.datos[num]);
          }
        })
      }
    })
    return this.zonas;
  }

  setPeriodo(producto){
    console.log(producto)
    let headers = new Headers({
      'Content-Type':'application/json'
    });



    return this.http.post('demanda/modify/',
    {  idZona:producto.idZona,
	     idProducto:producto.idProducto,
       numPeriodo:producto.numPeriodo,
       cantidad:producto.cantidad
      },
     {headers}).map( res => res.json());
  }


  editaPeriodo(producto){
    this.zonas.length = 0;
    this.setPeriodo(producto).subscribe(data=>{
      if(data.success){
        this.getZonas().subscribe(data=>{
          for(let num in data.datos){
            this.zonas.push(data.datos[num]);
          }
        });
      }
    });
    return this.zonas;
  }



  addPeriodo(producto){
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    console.log("Servicio",producto)


    return this.http.post('demanda/registerdemanda/',
    {  idZona:producto.idZona,
	     idProducto:producto.idProducto,
       cantidad:producto.cantidad
      },
     {headers}).map( res => res.json());


  }

  returnGraficas(){
    return this.setGraficas();
  }


  agregaPeriodo(producto){
    this.zonas.length = 0;
    this.addPeriodo(producto).subscribe(data =>{
      if(data.success){
        this.getZonas().subscribe(data=>{
          for(let num in data.datos){
            this.zonas.push(data.datos[num]);
          }
        })
      }
    });
    return this.zonas;
  }

  returnZonas(){
    this.zonas.length = 0;
    this.getZonas().subscribe(data => {
      for(let key$ in data.datos){
        this.zonas.push(data.datos[key$]);
      }
    })
    return this.zonas;
  }

  setGraficas(){
    let graficas = [];

    this.getZonas().subscribe(data=>{
      for(let num in data.datos){
        graficas.push(this.setProductos(data.datos[num]))
      }
    })

    return graficas;


  }


  setProductos(zona){
    let data:any[]=[];

    for(let producto of zona.productos){
      data.push({
        values:this.setPeriodos(producto),
        key:this.getNameById(producto.idProducto),
        color:producto.color
      })
    }
    return data
  }


setPeriodos(producto){
  let data:any[]=[];
  for(let periodo of producto.periodos){
    data.push({x:periodo.numPeriodo,y:periodo.cantidad})
  }

  return data;

}






  getNameById(id:number){

    //console.log(this.productos)
    for(let producto of this.productos){
      //console.log(producto.idProducto);
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }






}
