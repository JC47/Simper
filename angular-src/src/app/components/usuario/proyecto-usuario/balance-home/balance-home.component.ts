import { Component, OnInit } from '@angular/core';
import { DesarrolloProductoService } from '../../../../services/desarrollo-producto.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import { ProductoService } from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {DashboardService} from '../../../../services/dashboard.service';
import {DesarrolloZonaService} from '../../../../services/desarrollo-zona.service';
import {BalanceService} from '../../../../services/balance.service';
import {ZonasService} from '../../../../services/zonas.service';
import {ProyectosService} from '../../../../services/proyectos.service';



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
  balanceFinal:any=[];
  activos = [];
  pasivos = [];
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
  zonas:any=[];


  single3:any;
  single4:any;
  activo:any;
  pasivo:any;
  productosDesarollados:any[] = [];
  productosEnDesarrollo:any[] = [];
  productosSinDesarrollar:any[] = [];
  productosDesGraf:any;
  activosGraf = [];
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
              private _balanceService:BalanceService,
              private _demandaService:ZonasService,
            private _proyectoService:ProyectosService) {
    this.productos=this._productosService.returnProductos();
    this._resultadosService.vender();
    this.productosSinDesarrollar = this._desarrolloProducto.returnProductosSinDesarrollar();
    this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
    this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
    this.productosZonaSinDesarrollar = this._desarrolloZonaService.returnProductosDeZonaSinDesarrollar();
    this.productosZonaEnDesarrollo = this._desarrolloZonaService.returnProductosDeZonaEnDesarrollo();
    this.productosZonaDesarrollados = this._desarrolloZonaService.returnProductosDeZonaDesarrollados();
    this.demandas=this._dash.returnDemandas();
    this.maquinarias=this._dash.returnMaquinarias();
    this._proyectoService.ocultaCierrePeriodo()
    this.zonas=this._demandaService.returnZonasNormales();

    setTimeout(()=>{
      console.log("Maquinarias y demanda",this.maquinarias,this.demandas)
      console.log("prod des zONA",this.productosZonaEnDesarrollo)
      console.log("Des prod",this.productosEnDesarrollo)
      this.productosEnDesGraf=this.grafProd(this.productosEnDesarrollo);
      console.log( this.productosDesGraf);
      this.productosSinDesGraf=this.grafProdSin(this.productosSinDesarrollar);
      console.log("Productos SIn DesGraf",this.productosSinDesGraf);
      this.productosDesGraf=this.grafProdDes(this.productosDesarollados);
      this.demandasGraf=this.getGrafDemanda(this.demandas);
      this.maquinariasGraf=this.getGrafMaquinaria(this.maquinarias);
      this.productosZonaSinDesGraf=this.grafZonaSinDes(this.productosZonaSinDesarrollar);
      this.productosZonaEnDesGraf=this.grafZonaEnDes(this.productosZonaEnDesarrollo);
      this.productosZonaDesGraf=this.grafZonaDes(this.productosZonaDesarrollados);
      console.log("graf",this.productosZonaEnDesarrollo);
      console.log("Prtoductos2",this.productosDesarollados,this.productosEnDesarrollo)
      console.log(this.balanceFinal)

      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.balanceFinal = this._resultadosService.getBalanceFinal();
        }
      });
    }, 3000)

    this.activosGraf = this.grafActivos();

  }

  ngOnInit() {

  }

  grafActivos(){
    var act = [];
    console.log("Antes",this.activos)

    for(let key in this.activos){
      act.push({"name":"Activo","value":this.activos[key]});
    }
    console.log("Arreglo",act);
    return act;
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
        max:producto.tiempoDes,
        costoDes:producto.costoDes

      })
    }

  return data;

  }

  grafZonaEnDes(zonas){
    let data:any[]=[];


    for(let zona of zonas){
      let zonaTemp:any={
        nombreZona:zona.nombreZona,
        idZona:zona.idZona,
        productos:[]
      }


      for(let producto of zona.productosEnDes){
        zonaTemp.productos.push({
          graf:[{
            "name":this.getNameById(producto.idProducto),
            "value":producto.periodosDes
          }],
          max:producto.tiempoDes,
          idProducto:producto.idProducto
        })
      }

      data.push(zonaTemp);


    }
    console.log("GrafZona",data)
    return data;


  }

  getTiempo(idZona,idProducto){
    for(let zona of this.zonas){
      if(zona.idZona == idZona){
        for(let producto of zona.productos){
          if(producto.Producto_idProducto == idProducto){
            return producto.tiempoDes;
          }
        }
      }
    }
    return 0;
  }


  getCosto(idZona,idProducto){
    for(let zona of this.zonas){
      if(zona.idZona == idZona){
        for(let producto of zona.productos){
          if(producto.Producto_idProducto == idProducto){
            return producto.costoDes;
          }
        }
      }
    }
    return 0;
  }

  grafZonaSinDes(zonas){
    let data:any[]=[];


    for(let zona of zonas){
      let zonaTemp:any={
        nombreZona:zona.nombreZona,
        idZona:zona.idZona,
        productos:[]
      }


      for(let producto of zona.productosSinDes){
        zonaTemp.productos.push({
          graf:[{
            "name":this.getNameById(producto),
            "value":0
          }],
          max:2,
          idProducto:producto
        })
      }

      data.push(zonaTemp);


    }
    console.log("grafZona SIn Des",data)
    return data;

  }


  convertColor(color){
    return {domain:[color]}
  }


  getColorScheme(productos){

  }


  grafZonaDes(zonas){
    let data:any[]=[];


    for(let zona of zonas){
      let zonaTemp:any={
        nombreZona:zona.nombreZona,
        idZona:zona.idZona,
        productos:[]
      }


      for(let producto of zona.productosDes){
        zonaTemp.productos.push({
          graf:[{
            "name":this.getNameById(producto),
            "value":2
          }],
          idProducto:producto,
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
        max:producto.tiempoDes,
        costoDes:producto.costoDes
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
        max:producto.tiempoDes,
        costoDes:producto.costoDes
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


  getNameByIdZona(id:number){
    for(let zona of this.zonas){
      if(zona.idZona==id)
       return zona.nombreZona;
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
      item += this.balanceFinal[key].proveedores;
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
