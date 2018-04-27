import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../../services/producto.service';
import {ZonasService} from '../../../../services/zonas.service';
import {GraficasService} from '../../../../services/graficas.service';

@Component({
  selector: 'app-demanda-potencial',
  templateUrl: './demanda-potencial.component.html',
  styleUrls: ['./demanda-potencial.component.css']
})
export class DemandaPotencialComponent implements OnInit {



multi:any;
colorScheme:any;
zonas:any[]=[];
productos:any[]=[];
graficas:any[]=[];
scheme:any[]=[];

  constructor(private _demandaService:ZonasService,
  private _productosService:ProductoService,
  private _graficasService:GraficasService) {
    this.zonas=_graficasService.returnZonas();
    console.log("Zonas",this.zonas);
    this.productos=this._productosService.returnProductos();
    setTimeout(() => {
      this.scheme=this.createColorScheme(this.zonas);
      console.log(this.scheme)
     this.graficas=this.setGrafica(this.zonas);
     console.log(this.graficas);
   }, 700);
    console.log(this.zonas,this.productos)
    this.multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

this.colorScheme = {
   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
 };


   }

  ngOnInit() {
  }


  setGrafica(zonas){
    let zonasTemp:any=[]

    for(let zona of zonas){
      let zonaTemp:any={
        nombreZona:zona.nombreZona,
        graf:this.getProductos(zona.productos)
      }
      zonasTemp.push(zonaTemp);

    }
    return zonasTemp;

  }

  getProductos(productos){
    let productosTemp:any[]=[];
    for(let producto of productos){
      let productoTemp:any={
        name:this.getNameById(producto.idProducto),
        series:this.getSeries(producto.periodos)
      }
      productosTemp.push(productoTemp);
    }
    return productosTemp
  }

  getSeries(periodos){
    let series:any=[];
    for(let periodo of periodos){
      if (periodo.numPeriodo<=localStorage.getItem('periodos')) {
        let serieTemp:any={
          name:periodo.numPeriodo,
          value:periodo.cantidad
        }
        series.push(serieTemp)
      }

    }
    return series

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


  createColorScheme(zonas){
    let scheme:any[]=[]

    for(let zona of this.zonas){
      let tempScheme=[]
      for(let prod of zona.productos){
        tempScheme.push(prod.color);
      }

      scheme.push({domain:tempScheme})

    }
    return scheme;

  }

}
