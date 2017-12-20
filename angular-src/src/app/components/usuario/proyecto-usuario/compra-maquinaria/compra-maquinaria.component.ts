import { Component, OnInit,Pipe, ViewChild } from '@angular/core';
import {maquinaria} from '../../../../app.interfaces';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import { MaquinariaService } from '../../../../services/maquinaria.service';
import { ProductoService } from '../../../../services/producto.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {ProyectosService} from '../../../../services/proyectos.service';



@Component({
  selector: 'app-compra-maquinaria',
  templateUrl: './compra-maquinaria.component.html',
  styleUrls: ['./compra-maquinaria.component.css']
})
export class CompraMaquinariaComponent implements OnInit {
  maquinas = new Array();
  directional: boolean = false;
  openLoad: boolean;
  openConf:boolean;
  productos = new Array();
  maquinasCompradas:any[]=[];
  maqSelectedAdd:any={
    idMaquinaria:null,
    Producto_idProducto:null,
    cantidadProd:null,
    costo:null,
    depAcum:null,
    nombreMaq:null

  };

  maqSelectedLess:any={
    idMaquinaria:null,
    Producto_idProducto:null,
    cantidadProd:null,
    costo:null,
    cantidad:null,
    Proyectos_idProyecto:null,
    Maquinaria_idMaquinaria:null,
    depAcum:null,
    nombreMaq:null,
    imgMaq:null

  };




  @ViewChild('modalConfCompra') public modalConfCompra:ModalDirective;
  @ViewChild('modalLoadCompra') public modalLoadCompra:ModalDirective;


  constructor(private _CompraMaquinariaService:CompraMaquinariaService,
    private _productosService:ProductoService,
    private _maquinariaService:MaquinariaService,
  private _proyectoService:ProyectosService){
    this._proyectoService.ocultaCierrePeriodo()
    this.productos = this._productosService.returnProductos();
    this.maquinas = this._maquinariaService.returnMPC();
    this.maquinasCompradas = this._CompraMaquinariaService.returnMaquinasCompradas();
    console.log(this.maquinasCompradas)
    setTimeout(() => {
     this.maqSelectedAdd=this.maquinas[0];
   }, 900);

   setTimeout(() => {
    this.maqSelectedLess=this.maquinasCompradas[0];
  }, 800);
    console.log(this.maqSelectedAdd);
  }

  ngOnInit() {
  }


  selectMaquinariaAdd(maquina:any){
    this.maqSelectedAdd=maquina;
    console.log(this.maqSelectedAdd)
  }

  selectMaquinariaLess(maquina){
    this.maqSelectedLess=maquina;
    console.log(this.maqSelectedLess);
  }


  getNameById(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }

comprar(){
    this.openConf=false;
    this.openLoad=true;
    setTimeout(()=>this.openLoad=false, 2000);
    var x = {
      Balance_numeroPeriodo:localStorage.getItem('numeroPeriodo'),
      Maquinaria_idMaquinaria:this.maqSelectedAdd.idMaquinaria,
      Producto_idProducto :this.maqSelectedAdd.Producto_idProducto,
      Proyectos_idProyecto:parseInt(localStorage.getItem('idProyecto'))
    }

    var y = {
      Balance_numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      Proyectos_idProyecto:parseInt(localStorage.getItem('idProyecto')),
      idProducto :this.maqSelectedAdd.Producto_idProducto,
      costo:this.maqSelectedAdd.costo,
      dep:this.maqSelectedAdd.depAcum
    }
    this.maquinasCompradas = this._CompraMaquinariaService.compraMaquinaria(x,y);

  }

  regresar(){
    var x = {
      Maquinaria_idMaquinaria:this.maqSelectedLess.idMaquinaria,
      Balance_numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      Proyectos_idProyecto:parseInt(localStorage.getItem('idProyecto'))
    }
    var y = {
      Balance_numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
      Proyectos_idProyecto:parseInt(localStorage.getItem('idProyecto')),
      idProducto :this.maqSelectedLess.Producto_idProducto,
      costo:this.maqSelectedLess.costo,
      dep:this.maqSelectedLess.depAcum
    }

    this._CompraMaquinariaService.validar(x).subscribe(data => {
      if(data.success){
        this.maquinasCompradas = this._CompraMaquinariaService.regresarMaquinaria(x,y);
      }
      else{
        alert(data.msg);
      }
    });
  }



}
