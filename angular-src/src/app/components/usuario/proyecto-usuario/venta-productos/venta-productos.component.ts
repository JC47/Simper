import { Component, OnInit,ViewChild } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ZonasService} from '../../../../services/zonas.service';
import {FormControl, FormGroup, Validators,FormArray} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {GraficasService} from '../../../../services/graficas.service';

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
  vendeForm:FormGroup[]=[];
  openVenta:boolean=false;
  vendiendo:boolean=false;
  produciendo:boolean=false;
  openConf:boolean=false;
  openLoad:boolean=false;
  prueba:any=[];
  formsVentas:FormArray[]=[];
  graficas:any[]=[];
  colorScheme:any;
  zonaSelected:any={graf:null,nombreZona:null};

  @ViewChild('modalProgressVenta') public modalProgressVenta:ModalDirective;

  constructor(private _operacionService:OperacionService,
              private _zonasService: ZonasService,
              private _productoService:ProductoService,
              private _graficasService:GraficasService) {
    this.zonas=this._graficasService.returnZonas();
    this.productos=this._productoService.returnProductos();
    this.productosOperacion = this._operacionService.returnProductosOperacion();
    this.ventas=this._operacionService.returnAllOperaciones();
    this.almacen = this._operacionService.returnAlmacen();
    console.log(this.productosOperacion);


    this.colorScheme = {
       domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
     };


    setTimeout(() => {
     this.graficas=this.setGrafica(this.zonas);
     console.log(this.graficas);
   }, 800);


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
      setTimeout(()=>this.openLoad=false, 2000);
      setTimeout(()=>{this.produciendo=false}, 2000);
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
        alert(data.msg);
      }
    });
  }

  selectVenta(venta){
    this.openConf=true;
    this.selectedVenta={
      venta:{
        idZona:venta.idZona,
        cantidadVenta:venta.cantidadVenta
      },
      idProducto:venta.idProducto
    }

    console.log(this.selectedVenta)

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
        alert(data.msg);
        this.openConfAlmacen=false;
      }
    });

  }

  getNameByIdZona(id:number){
    for(let zona of this.zonas){
      if(zona.idZona==id)
       return zona.nombreZona;
    }
    return "id no encontrado";

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







}
