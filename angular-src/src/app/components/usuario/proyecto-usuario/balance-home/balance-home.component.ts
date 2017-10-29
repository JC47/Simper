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

    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "Producto X" ,
            "value" : 20
          } ,
          {
            "label" : "Producto c" ,
            "value" : 30
          } ,
          {
            "label" : "Producto B" ,
            "value" : 50
          } ,
          {
            "label" : "Producto A" ,
            "value" : 20
          } ,
          {
            "label" : "Producto Z" ,
            "value" : 30
          } ,
          {
            "label" : "Producto l" ,
            "value" : 10
          } ,
          {
            "label" : "Producto Q" ,
            "value" : 50
          } ,
          {
            "label" : "Producto R" ,
            "value" : 30
          }
        ]
      }
    ];
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
