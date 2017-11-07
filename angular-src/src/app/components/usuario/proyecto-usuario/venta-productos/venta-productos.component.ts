import { Component, OnInit,ViewChild } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ZonasService} from '../../../../services/zonas.service';
import {FormControl, FormGroup, Validators,FormArray} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.css']
})
export class VentaProductosComponent implements OnInit {
  productosOperacion = [];
  productos=[];
  zonas=[];
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

  vendiendo:boolean=false;
  produciendo:boolean=false;
  openConf:boolean=false;
  openLoad:boolean=false;
  formsVentas:FormArray[]=[];

  @ViewChild('modalProgressVenta') public modalProgressVenta:ModalDirective;

  constructor(private _operacionService:OperacionService,
              private _zonasService: ZonasService,
              private _productoService:ProductoService) {
    this.zonas=this._zonasService.returnZonasNormales();
    this.productos=this._productoService.returnProductos();
    this.productosOperacion = this._operacionService.returnProductosOperacion();
    this.ventas=this._operacionService.returnAllOperaciones();
    console.log(this.productosOperacion);







    this.ventasForm=new FormGroup({
      'idZona':new FormControl(),
      'cantidadVenta':new FormControl(),

    });

    this.almacenForm=new FormGroup({
      'cantidadAlmacen':new FormControl(),
    });



    console.log(this.formsVentas);
    setTimeout(() => {
      for(let producto of this.productosOperacion){
        console.log(producto)
        this.vendeForm.push(
          new FormGroup({
            idZona:new FormControl('6')
          })
        )
        // console.log(producto);
        // let array:FormControl[]=[];
        // console.log(producto)
        // for(let zona of producto.zonas){
        //   array.push(new FormControl(''))
        // }
        // this.formsVentas.push(new FormArray(array))

      }
      console.log(this.vendeForm)



   }, 500);


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

  progressAlmacen(){
      this.produciendo=true;
      this.vendiendo=false;
      this.openLoad=true;
      setTimeout(()=>this.openLoad=false, 2000);
      setTimeout(()=>{this.produciendo=false}, 2000);

  }

  cobrarVenta(){
    this.openConf=false;
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

  selectVenta(venta,idProducto){
    this.openConf=true;
    this.selectedVenta={
      venta:venta,
      idProducto:idProducto
    }

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
        this._operacionService.addAlmacen(x).subscribe();
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
}
