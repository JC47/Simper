import { Component, OnInit } from '@angular/core';
import { DesarrolloProductoService } from '../../../../services/desarrollo-producto.service';
import { DesarrolloZonaService } from '../../../../services/desarrollo-zona.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import { ProductoService } from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';

@Component({
  selector: 'app-balance-home',
  templateUrl: './balance-home.component.html',
  styleUrls: ['./balance-home.component.css']
})
export class BalanceHomeComponent implements OnInit {
  maquinasCompradas:any[]=[];
  productosDesarollados:any[] = [];
  productosZonaDesarrollados:any[] =[];
  productos = new Array();
  options:any;
  data:any;
  balanceFinal:any;
  selectedTabProd:any="Productos en Desarrollo";
  selectedTabZona:any="Zonas en Desarrollo";

  view: any[] = [300];
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






  constructor(private _desarrolloProducto:DesarrolloProductoService,
              private _desarrolloZonaService:DesarrolloZonaService,
              private _CompraMaquinariaService:CompraMaquinariaService,
              private _productosService:ProductoService,
              private _resultadosService:ResultadosService) {
                this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    };

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

    // this.data = [
    //   {
    //     key: "Cumulative Return",
    //     values: [
    //       {
    //         "label" : "Producto X" ,
    //         "value" : 20
    //       } ,
    //       {
    //         "label" : "Producto c" ,
    //         "value" : 30
    //       } ,
    //       {
    //         "label" : "Producto B" ,
    //         "value" : 50
    //       } ,
    //       {
    //         "label" : "Producto A" ,
    //         "value" : 20
    //       } ,
    //       {
    //         "label" : "Producto Z" ,
    //         "value" : 30
    //       } ,
    //       {
    //         "label" : "Producto l" ,
    //         "value" : 10
    //       } ,
    //       {
    //         "label" : "Producto Q" ,
    //         "value" : 50
    //       } ,
    //       {
    //         "label" : "Producto R" ,
    //         "value" : 30
    //       }
    //     ]
    //   }
    // ];
  }

  ngOnInit() {
    this.productos = this._productosService.returnProductos();
    this.maquinasCompradas = this._CompraMaquinariaService.returnMaquinasCompradas();
    this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
    this.productosZonaDesarrollados = this._desarrolloZonaService.returnProductosDeZonaDesarrollados();
    this.balanceFinal = this._resultadosService.getBalanceFinal();
  }

  getNameById(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }

}
