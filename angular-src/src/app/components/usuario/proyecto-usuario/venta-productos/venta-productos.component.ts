import { Component, OnInit,ViewChild } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ZonasService} from '../../../../services/zonas.service';
import {FormControl, FormGroup, Validators,FormArray} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {GraficasService} from '../../../../services/graficas.service';
import {DashboardService} from '../../../../services/dashboard.service';
import { Router } from '@angular/router';
import {ProyectosService} from '../../../../services/proyectos.service';



@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.css']
})
export class VentaProductosComponent implements OnInit {
  productosOperacion = [];
  productos=[];
  zonas=[];
  almacen = [];
  ventasForm:FormGroup;
  almacenForm:FormGroup;
  valueBar:number
  ventaO:any={
    idZona:null,
    cantiadVenta:null
  }
  selectedVenta:any={
    venta:this.ventaO,
    idProducto:null
  };

  selectedAlmacen={
    almacen:null,
    idProducto:null
  }
  openConfAlmacen:boolean=false;

  ventas:any;
  mensaje:any;
  modalAlerta:any=false;
  modalAlerta2:any=false;
  modalAlerta3:any=false;
  vendeForm:FormGroup[]=[];
  openVenta:boolean=false;
  vendiendo:boolean=false;
  produciendo:boolean=false;
  openConf:boolean=false;
  openLoad:boolean=false;
  prueba:any=[];
  modalAlertaAlma:boolean=false;
  formsVentas:FormArray[]=[];
  graficas:any[]=[];
  colorScheme:any;
  demandas= [];
  maquinarias:any;
  produccionSelected:any;
  demandaSelected:any;
  zonaSelected:any={graf:null,nombreZona:null};
  almacenAnterior=[];

  @ViewChild('modalProgressVenta') public modalProgressVenta:ModalDirective;

  constructor(private _operacionService:OperacionService,
              private _zonasService: ZonasService,
              private router:Router,
              private _productoService:ProductoService,
              private _graficasService:GraficasService,
              private _dash:DashboardService,
            private _proyectoService:ProyectosService) {
    this._proyectoService.ocultaCierrePeriodo()
    this.zonas=this._graficasService.returnZonas();
    this.productos=this._productoService.returnProductos();
    this.productosOperacion = this._operacionService.returnProductosOperacion();
    this.ventas=this._operacionService.returnAllOperaciones();
    this.maquinarias=this._dash.returnMaquinarias();
    this.demandas=this._zonasService.returnDemandaPPeriodo();
    this.almacen = this._operacionService.returnAlmacen();
    this.almacenAnterior = this._operacionService.returnAlmacenAnterior();



    this.colorScheme = {
       domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
     };


    setTimeout(() => {
     this.graficas=this.setGrafica(this.zonas);
     console.log(this.graficas);
   }, 500);


    this.ventasForm=new FormGroup({
      'idProducto':new FormControl(),
      'idZona':new FormControl(),
      'cantidadVenta':new FormControl(),

    });

    this.almacenForm=new FormGroup({
      'cantidadAlmacen':new FormControl(),
    });
  }



  ngOnInit() {
    console.log(this.ventas);


  }

  progressVenta(){
    this.vendiendo=false;
    this.openLoad=true;
    this.produciendo=true;
    setTimeout(()=>{this.produciendo=false;this.vendiendo=true;}, 1000);
    setTimeout(()=>this.openLoad=false, 1000);
  }

openModalVenta(idZona,idProducto){
  this.ventasForm.reset();
  this.selectProduccion(idProducto);
  this.selectDemanda(idZona,idProducto);
  console.log(this.demandaSelected)
  console.log(this.produccionSelected);
  for(let zona of this.graficas){
    if(this.getNameByIdZona(idZona)==zona.nombreZona){
      this.zonaSelected=zona;
    }
  }
  console.log(this.zonaSelected)
  this.ventasForm.controls['idProducto'].setValue(idProducto)
  this.ventasForm.controls['idZona'].setValue(idZona)
  this.openVenta=true;
}


  progressAlmacen(){
      this.produciendo=true;
      this.vendiendo=false;
      this.openLoad=true;
      setTimeout(()=>this.openLoad=false, 1000);
      setTimeout(()=>{this.produciendo=false}, 1000);
  }

  cobrarVenta(){
    this.openConf=false;
    this.openVenta=false;
    var p = this.selectedVenta.idProducto;
    var idZ = this.selectedVenta.venta.idZona;
    var cv = this.selectedVenta.venta.cantidadVenta;
    var x = {
      "Producto_idProducto":p,
      "Zona_idZonas":idZ,
      "Proyecto_idProyecto":parseInt(localStorage.getItem('idProyecto')),
      "Usuario_idUsuario":parseInt(localStorage.getItem('idUsuario')),
      "numeroPeriodo":parseInt(localStorage.getItem('numeroPeriodo')),
      "unidadesVendidas":cv
    }

    this._operacionService.validarOperacion(x).subscribe(data => {
      if(data.success){
        this.progressVenta();
        this.ventas = this._operacionService.registerOperacion(x);
      }
      else{
        if(data.m){
          this.mensaje=data.msg;
          this.modalAlerta=true;
        }
        else{
          this.mensaje=data.msg;
          this.modalAlerta2=true;
        }
      }
    });
  }

  paso(){
    this.modalAlerta=false;
    this.router.navigate(['Usuario/proyecto/compraMaquinaria']);
  }

  selectVenta(venta){
    console.log(venta)

    if (venta.cantidadVenta   ) {
      this.openConf=true;
      this.openVenta=false;
    }else{
      this.modalAlerta3=true;
      this.openVenta=false;
    }

    this.selectedVenta={
      venta:{
        idZona:venta.idZona,
        cantidadVenta:venta.cantidadVenta
      },
      idProducto:venta.idProducto
    }

    console.log("Selected venta",this.selectedVenta)

  }


  selectAlmacen(almacen,idProducto){
    this.openConfAlmacen=true;
    this.selectedAlmacen.idProducto=idProducto;
    this.selectedAlmacen.almacen=almacen.cantidadAlmacen;
  }

  getNameByIdProducto(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }

  cobrarAlmacen(){

    var x = {
      Producto_idProducto:this.selectedAlmacen.idProducto,
      unidadesAlmacenadas:this.selectedAlmacen.almacen,
      Balance_numeroPeriodo:localStorage.getItem('numeroPeriodo'),
      Proyecto_idProyecto:localStorage.getItem('idProyecto')
    }



    this._operacionService.validarAlmacen(x).subscribe(data => {
      if(data.success){
        this.openConfAlmacen=false;
        this.progressAlmacen();
        this.almacen = this._operacionService.registerAlmacen(x);
      }
      else{
        this.openConfAlmacen=false;
        this.mensaje=data.msg
        this.modalAlertaAlma=true;
      }
    });


      setTimeout(()=>{this.almacen=this._operacionService.returnAlmacen()}, 1000);

  }

  getNameByIdZona(id:number){
    for(let zona of this.zonas){
      if(zona.idZona==id)
       return zona.nombreZona;
    }
    return "id no encontrado";

  }

  selectProduccion(idProducto){
    let cantProdTem:number=0;
    for(let produccion of this.maquinarias){
      if(produccion.idProducto==idProducto){
        for(let maquina of produccion.maquinas){
          cantProdTem+=maquina.cantidadProd;
        }
      }
    }
    this.produccionSelected=cantProdTem;
  }


  getProduccion(idProducto){
    let cantProdTem:number=0;
    let cantVendTem:number=0;
    for(let produccion of this.maquinarias){
      if(produccion.idProducto==idProducto){
        for(let maquina of produccion.maquinas){
          cantProdTem+=maquina.cantidadProd;
        }
      }
    }

    for(let venta of this.ventas){
      if (venta.Producto_idProducto==idProducto) {
        cantVendTem+=venta.unidadesVendidas;
      }
    }

    for(let alma of this.almacen){
      if (alma.Producto_idProducto==idProducto) {
        cantVendTem+=alma.unidadesAlmacenadas;
      }
    }

    for(let alma of this.almacenAnterior){
      if (alma.Producto_idProducto==idProducto) {
        cantProdTem+=alma.unidadesAlmacenadas;
      }
    }



    return cantProdTem-cantVendTem;
  }

  selectDemanda(idZona,idProducto){
    for(let a of this.demandas){
      if(a.Zona_idZonas == idZona && a.Producto_idProducto == idProducto){
        this.demandaSelected = a.cantidad;
        break;
      }
    }
  }

  getProducto(id){
    var prod = null;
    for(let producto of this.productos){
      if(producto.idProducto == id){
        prod = producto;
        break;
      }
    }
    return prod;
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
          name:this.getNameByIdProducto(producto.idProducto),
          series:this.getSeries(producto.periodos)
        }
        productosTemp.push(productoTemp);
      }
      return productosTemp
    }

    getSeries(periodos){
      let series:any=[];
      for(let periodo of periodos){
        let serieTemp:any={
          name:periodo.numPeriodo,
          value:periodo.cantidad
        }
        series.push(serieTemp)
      }
      return series

    }

    validaVi(){
      if(localStorage.getItem('numeroPeriodo')==localStorage.getItem('numeroRPeriodos'))
        return false
      else
        return true
    }





}
