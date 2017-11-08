import { Component, OnInit } from '@angular/core';
import { DesarrolloProductoService } from '../../../../services/desarrollo-producto.service';
import { DesarrolloZonaService } from '../../../../services/desarrollo-zona.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import { ProductoService } from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {DashboardService} from '../../../../services/dashboard.service';

@Component({
  selector: 'app-balance-home',
  templateUrl: './balance-home.component.html',
  styleUrls: ['./balance-home.component.css']
})
export class BalanceHomeComponent implements OnInit {

  productosZonaDesarrollados:any[] =[];
  demanda = [];
  maquinas = [];
  productos = new Array();
  options:any;
  data:any;
  balanceFinal:any;
  selectedTabProd:any="Productos en Desarrollo";
  selectedTabZona:any="Zonas en Desarrollo";

   view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  single: any[];
    single2: any[];
  multi: any[];
  yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  colorScheme2 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single3:any;
  single4:any;
  productosDesarollados:any[] = [];
  productosEnDesarrollo:any[] = [];
  productosSinDesarrollar:any[] = [];
  productosDesGraf:any;





  constructor(private _desarrolloProducto:DesarrolloProductoService,
              private _desarrolloZonaService:DesarrolloZonaService,
              private _CompraMaquinariaService:CompraMaquinariaService,
              private _productosService:ProductoService,
              private _resultadosService:ResultadosService,
              private _dash:DashboardService) {
    this.productosSinDesarrollar = this._desarrolloProducto.returnProductosSinDesarrollar();
    this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
    this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
    setTimeout(()=>{
      this.grafProd(this.productosEnDesarrollo);
    }, 2000)

<<<<<<< HEAD
    this._dash.returnDemandas();
    console.log(this.productosDesarollados,this.productosEnDesarrollo,this.productosSinDesarrollar)

=======
>>>>>>> 86d068de3a1883f63e22bbbde48f3dc058d2d21b

    this.single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
  {
    "name": "Mexico",
    "value": 7200000
  },
  {
    "name": "U",
    "value": 5000000
  },
  {
    "name": "Uru",
    "value": 7200000
  }

];


this.single2 = [
{
"name": "Producto 1",
"value": 8940000
},
{
"name": "Producto 2",
"value": 5000000
},
{
"name": "Producto 3",
"value": 7200000
},
{
"name": "Producto 4",
"value": 7200000
},
{
"name": "Producto 5",
"value": 5000000
},
{
"name": "Producto 6",
"value": 7200000
}

];

this.single3 = [
  {
    "name": "Germany",
    "value": 8940000
  }
];


this.single4 = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];


  }

  ngOnInit() {
<<<<<<< HEAD

  }

  grafProd(productos){
    let data:any=[]

    for(let producto of productos){
      data.push({
        graf:[{
          "name":producto.nombreProd,
          "value":producto.periodosDes
        }],
        max:producto.tiempoDes
      })
    }

    console.log(data);

=======
    this.productos = this._productosService.returnProductos();
    this.maquinasCompradas = this._CompraMaquinariaService.returnMaquinasCompradas();
    this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
    this.productosZonaDesarrollados = this._desarrolloZonaService.returnProductosDeZonaDesarrollados();
    this.balanceFinal = this._resultadosService.getBalanceFinal();
    this.demanda = this._dash.returnDemandas();
    console.log("Componente Demanda",this.demanda)
    this.maquinas = this._dash.returnMaquinarias();
    console.log("Componente Maquinas",this.maquinas)
>>>>>>> 86d068de3a1883f63e22bbbde48f3dc058d2d21b
  }

  getNameById(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }

}
