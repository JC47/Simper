import { Component, OnInit, ViewChild } from '@angular/core';
import { DesarrolloProductoService } from '../../../../services/desarrollo-producto.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {ProyectosService} from '../../../../services/proyectos.service';


@Component({
  selector: 'app-desarrollo-producto',
  templateUrl: './desarrollo-producto.component.html',
  styleUrls: ['./desarrollo-producto.component.css']
})
export class DesarrolloProductoComponent implements OnInit {
  productosDesarollados:any[] = [];
  productosEnDesarrollo:any[] = [];
  productosSinDesarrollar:any[] = [];
  productoDeleted:any;
  productoSelectedAdd:any={
    costoDes:null,
    costoUni:null,
    costoVarUniDist:null,
    costoVarUniFabri:null,
    costosFijosFabri:null,
    costosMPPUniProd:null,
    depAdmon:null,
    depDistribucion:null,
    gastosFijosAdmon:null,
    gastosFijosDist:null,
    idProducto:null,
    nombreProd:null,
    precioVenta:null,
    tiempoDes:null,
    uniMP:null
  };
  productoSelectedPago:any={

  };
  openConf:boolean=false;
  openLoad:boolean=false;
  openPago:boolean=false;
  openLoadPago:boolean=false;

  constructor(private _desarrolloProducto:DesarrolloProductoService,
  private _proyectoService:ProyectosService) {
    this._proyectoService.ocultaCierrePeriodo()
    this.productosSinDesarrollar = this._desarrolloProducto.returnProductosSinDesarrollar();
    this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
    this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
    console.log("array en desarrolloo",this.productosDesarollados);
    setTimeout(()=>{
      if(this.productosSinDesarrollar.length==0){
        console.log("ARREGLO VACIO");
        this.productoSelectedAdd={
          costoDes:null,
          costoUni:null,
          costoVarUniDist:null,
          costoVarUniFabri:null,
          costosFijosFabri:null,
          costosMPPUniProd:null,
          depAdmon:null,
          depDistribucion:null,
          gastosFijosAdmon:null,
          gastosFijosDist:null,
          idProducto:null,
          nombreProd:null,
          precioVenta:null,
          tiempoDes:null,
          uniMP:null
        };
      }else{
        console.log("ARREGLO LLENO")
        this.productoSelectedAdd=this.productosSinDesarrollar[0];
      }
    }, 2000)


   }

  ngOnInit() {
  }

  desarrollar(){
      this.openConf=false;
      this.openLoad=true;
      setTimeout(()=>{this.openLoad=false;
      }, 2000);
      var z = this._desarrolloProducto.comenzarDesarrollo(this.productoSelectedAdd.idProducto,this.productoSelectedAdd.costoDes);
      if(z){
        this.actualizar();
      }
  }

  pagarDesarrollo(){
    var z = this._desarrolloProducto.pagarDesarrollo(this.productoSelectedPago.Productos_idProducto,this.productoSelectedPago.costoDes);
    this.openPago=false;
    this.openLoadPago=true;
    setTimeout(()=>{
      this.openLoadPago=false;
      if(z){
        this.actualizar2();
      }
    }, 2000);
  }

  deshacer(producto){
    var z = this._desarrolloProducto.deshacerDesarrollo(producto.Productos_idProducto,producto.costoDes);
    setTimeout(()=>{
      if(z){
        this.actualizar();
      }
    }, 500);
  }


  revisaPeriodo(producto){
    console.log(producto.numeroPeriodo==localStorage.getItem('numeroPeriodo'));
    return producto.numeroPeriodo==localStorage.getItem('numeroPeriodo');
  }



  confPago(producto){
    this.productoSelectedPago=producto;
    this.openPago=true;
  }



  selectProducto(producto){
    console.log(producto)
    this.productoSelectedAdd=producto;


  }

  selectProductoDelete(){

  }

  actualizar(){
    this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
    this.productosSinDesarrollar = this._desarrolloProducto.returnProductosSinDesarrollar();
  }

  actualizar2(){
    this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
  }


  validaVi(){
    if(localStorage.getItem('numeroPeriodo')==localStorage.getItem('numeroRPeriodos'))
      return false
    else
      return true
  }

}
