import { Component, OnInit } from '@angular/core';
import { DesarrolloProductoService } from '../../../../services/desarrollo-producto.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import { ProductoService } from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {DashboardService} from '../../../../services/dashboard.service';
import {DesarrolloZonaService} from '../../../../services/desarrollo-zona.service';
import {BalanceService} from '../../../../services/balance.service';


@Component({
  selector: 'app-balance-home',
  templateUrl: './balance-home.component.html',
  styleUrls: ['./balance-home.component.css']
})
export class BalanceHomeComponent implements OnInit {

  productosZonaSinDesarrollar:any[] = [];
  productosZonaEnDesarrollo: any[] = [];
  productosZonaDesarrollados: any[] = [];
  productos:any;
  options:any;
  demandas:any;
  maquinarias:any;
  demandasGraf:any[]=[];
  maquinariasGraf:any;
  data:any;
  balanceFinal:any;
  selectedTabProd:any="Productos en Desarrollo";
  selectedTabZona:any="Zonas en Desarrollo";

   view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  grafDemanda:any;
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
  activo:any;
  pasivo:any;
  productosDesarollados:any[] = [];
  productosEnDesarrollo:any[] = [];
  productosSinDesarrollar:any[] = [];
  productosDesGraf:any;
  productosEnDesGraf:any;
productosSinDesGraf:any;

productosZonaDesGraf:any;
productosZonaEnDesGraf:any;
productosZonaSinDesGraf:any;



  constructor(private _desarrolloProducto:DesarrolloProductoService,
              private _desarrolloZonaService:DesarrolloZonaService,
              private _CompraMaquinariaService:CompraMaquinariaService,
              private _productosService:ProductoService,
              private _resultadosService:ResultadosService,
              private _dash:DashboardService,
              private _balanceService:BalanceService) {
    this.productos=this._productosService.returnProductos();
    console.log("productos para ID",this.productos)
    this.productosSinDesarrollar = this._desarrolloProducto.returnProductosSinDesarrollar();
    this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
    this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
    this.productosZonaSinDesarrollar = this._desarrolloZonaService.returnProductosDeZonaSinDesarrollar();
    this.productosZonaEnDesarrollo = this._desarrolloZonaService.returnProductosDeZonaEnDesarrollo();
    console.log("zonas mercado",this.productosZonaEnDesarrollo)
    this.productosZonaDesarrollados = this._desarrolloZonaService.returnProductosDeZonaDesarrollados();
    this.demandas=this._dash.returnDemandas();
    this.balanceFinal = this._resultadosService.getBalanceFinal();
    this.maquinarias=this._dash.returnMaquinarias();
    this.balanceFinal=this._balanceService.returnBalance();
    console.log("Balance",this.balanceFinal)
    console.log(this.demandas,this.maquinarias);
    console.log("Productos Zona",this.productosZonaDesarrollados,
                this.productosZonaEnDesarrollo, this.productosZonaSinDesarrollar)
    setTimeout(()=>{

      this.productosEnDesGraf=this.grafProd(this.productosEnDesarrollo);
      console.log( this.productosDesGraf);
      this.productosSinDesGraf=this.grafProdSin(this.productosSinDesarrollar);
      console.log( this.productosSinDesGraf);
      this.productosDesGraf=this.grafProdDes(this.productosDesarollados);
      this.demandasGraf=this.getGrafDemanda(this.demandas);
      this.maquinariasGraf=this.getGrafMaquinaria(this.maquinarias);
      this.productosZonaSinDesGraf=this.grafZonaSinDes(this.productosZonaSinDesarrollar);
      this.productosZonaEnDesGraf=this.grafZonaEnDes(this.productosZonaEnDesarrollo);
      console.log("hola",this.productosZonaEnDesGraf)
      console.log("Hola2",this.productosZonaSinDesGraf)
      this.activo= [
        {
          "name": "Caja y Bancos",
          "value": this.getCajaBancos()
        },
        {
          "name": "Cuentas por Cobrar",
          "value": this.getCuentasPorCobrar()
        },
        {
          "name": "IVA Acreditable",
          "value": 0
        },
        {
          "name": "Almacen de Articulo Terminado",
          "value": this.getAlmacenDeArticuloTermindo()
        },
        {
          "name": "Total",
          "value": this.getAlmacenDeArticuloTermindo()+this.getCuentasPorCobrar()+this.getCajaBancos()
        }
      ];

      console.log("Activo",this.activo)


      this.pasivo= [
        {
          "name": "IVA por Enterar",
          "value": this.getIVAporEnterar()
        },
        {
          "name": "Impuestos por Pagar",
          "value": this.getImpuestosPorPagar()
        },
        {
          "name": "Prestamos Más de un Año",
          "value": this.getPrestamosMas()
        },
        {
          "name": "Prestamos Menos de un Año",
          "value": this.getPrestamosMenos()
        }

      ];




    }, 3000)












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

  }

  grafProd(productos){
    let data:any=[]
    console.log(productos)

    for(let producto of productos){
      console.log(producto);
      data.push({
        graf:[{
          "name":producto.nombreProd,
          "value":producto.periodosDes
        }],
        max:producto.tiempoDes
      })
    }

  return data;

  }

  grafZonaEnDes(zonas){
    let data:any[]=[];


    for(let zona of zonas){
      let zonaTemp:any={
        nombreZona:zona.nombreZona,
        productos:[]
      }


      for(let producto of zona.productosEnDes){
        zonaTemp.productos.push({
          graf:[{
            "name":producto.idProducto,
            "value":1
          }],
          max:3
        })
      }

      data.push(zonaTemp);


    }
    console.log("GrafZona",data)
    return data;


  }


  grafZonaSinDes(zonas){
    let data:any[]=[];


    for(let zona of zonas){
      let zonaTemp:any={
        nombreZona:zona.nombreZona,
        productos:[]
      }


      for(let producto of zona.productosEnDes){
        zonaTemp.productos.push({
          graf:[{
            "name":producto.idProducto,
            "value":0
          }],
          max:2
        })
      }

      data.push(zonaTemp);


    }
    console.log("grafZona SIn Des",data)
    return data;

  }

  grafProdSin(productos){
    let data:any=[]
    console.log(productos)

    for(let producto of productos){
      console.log(producto);
      data.push({
        graf:[{
          "name":producto.nombreProd,
          "value":0
        }],
        max:producto.tiempoDes
      })
    }

  return data;

  }



  getGrafDemanda(demandas){
    let data:any[]=[];

    for(let prod of demandas){
      let demandaTotal:number=0;
      for(let zona of prod.zonas){
        demandaTotal=demandaTotal+zona.demanda
      }
      data.push({
        "name":this.getNameById(prod.idProducto),
        "value":demandaTotal
      });

    }
    return data;

  }




    getGrafMaquinaria(productos){
      let data:any[]=[];

      for(let prod of productos){
        let produccionTotal:number=0;
        for(let maquina of prod.maquinas){
          produccionTotal=produccionTotal+maquina.cantidadProd
        }
        data.push({
          "name":this.getNameById(prod.idProducto),
          "value":produccionTotal
        });

      }
      return data;

    }





  grafProdDes(productos){
    let data:any=[]
    console.log(productos)

    for(let producto of productos){
      console.log(producto);
      data.push({
        graf:[{
          "name":producto.nombreProd,
          "value":producto.tiempoDes
        }],
        max:producto.tiempoDes
      })
    }

  return data;

  }

  getNameById(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }

  getCajaBancos(){
    let cajaBancos = 0;
    for(let key in this.balanceFinal){
      cajaBancos += this.balanceFinal[key].cajaBancos;
    }
    return cajaBancos;
  }


  getCuentasPorCobrar(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].cuentasPorCobrar;
    }
    return item;
  }

  getAlmacenDeArticuloTermindo(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].almacenArtTerm;
    }
    return item;
  }


  getIVAporEnterar(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].IVAPorEnterar;
    }
    return item;
  }

  getImpuestosPorPagar(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].imptosPorPagar;
    }
    return item;
  }

  getProvedores(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].imptosPorPagar;
    }
    return item;
  }


  getPTUporPagar(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].PTUporPagar;
    }
    return item;
  }

  getPrestamosMenos(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].prestamosMenosAnio;
    }
    return item;
  }


  getPrestamosMas(){
    let item = 0;
    for(let key in this.balanceFinal){
      item += this.balanceFinal[key].prestamosMenosAnio;
    }
    return item;
  }

}
