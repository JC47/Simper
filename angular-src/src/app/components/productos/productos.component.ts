import { Component, OnInit,ViewChild } from '@angular/core';
import {usuario} from '../../app.interfaces';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductoService} from '../../services/producto.service';
import {producto,maquinaria,select} from '../../app.interfaces';
import {MaquinariaService} from '../../services/maquinaria.service';
import {SelectModule} from 'angular2-select';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']

})

export class ProductosComponent implements OnInit {

  @ViewChild('modalEdit') public modalEdit:ModalDirective;
  @ViewChild('modalNew') public modalNew:ModalDirective;
  @ViewChild('modalConfDelete') public modalConfDelete:ModalDirective;
  @ViewChild('modalCopia') public modalCopia:ModalDirective;

  public alerts: any = [];
  productos:producto[] = new Array();
  closeResult:string;
  newForm:FormGroup;
  editForm:FormGroup;
  imgDirec:string;
  color:any;



  productoDelete:producto={
    idProducto:0,
    nombreProd:"",
    costoDes:0,
    tiempoDes:0,
    precioVenta:0,
    costoFijoFabri:0,
    costosVarFabri:0,
    costosVarUniDist:0,
    gastosFijosAdim:0,
    costosMPPUniProd:0,
    uniMP:0,
    costoUni:0
  }

/// Propuedades de Select




  constructor(private _productoService:ProductoService,
              private modalService: NgbModal,
              private _flashMessagesService: FlashMessagesService) {


      this.newForm= new FormGroup({
        'nombreProd':new FormControl('',Validators.required),
        'costoDes':new FormControl('',Validators.required),
        'tiempoDes':new FormControl('',Validators.required),
        'precioVenta':new FormControl('',Validators.required),
        'costosFijosFabri':new FormControl('',Validators.required),
        'costoVarUniFabri':new FormControl('',Validators.required),
        'gastosFijosDist':new FormControl('',Validators.required),
        'depDistribucion':new FormControl('',Validators.required),
        'costoVarUniDist':new FormControl('',Validators.required),
        'depAdmon':new FormControl('',Validators.required),
        'gastosFijosAdmon':new FormControl('',Validators.required),
        'costosMPPUniProd':new FormControl('',Validators.required),
        'uniMP':new FormControl('',Validators.required),
        'costoUni':new FormControl('',Validators.required),
        'color':new FormControl('')

      });

      this.editForm= new FormGroup({
        'idProducto':new FormControl('',Validators.required),
        'nombreProd':new FormControl('',Validators.required),
        'costoDes':new FormControl('',Validators.required),
        'tiempoDes':new FormControl('',Validators.required),
        'precioVenta':new FormControl('',Validators.required),
        'costosFijosFabri':new FormControl('',Validators.required),
        'costoVarUniFabri':new FormControl('',Validators.required),
        'gastosFijosDist':new FormControl('',Validators.required),
        'depDistribucion':new FormControl('',Validators.required),
        'costoVarUniDist':new FormControl('',Validators.required),
        'depAdmon':new FormControl('',Validators.required),
        'gastosFijosAdmon':new FormControl('',Validators.required),
        'costosMPPUniProd':new FormControl('',Validators.required),
        'uniMP':new FormControl('',Validators.required),
        'costoUni':new FormControl('',Validators.required),
        'color':new FormControl('')

      });


      this.productos=this._productoService.returnProductos();
      console.log(this.productos)


  }

  ngOnInit(){

  }



  guarda(producto){

    producto["color"]=this.color
      console.log(producto)
    if(!this.buscaRepetidos(producto)){
      this._productoService.guardarProducto(producto);
      this.alerts.push({
        type: 'success',
        msg: `Producto "${(producto.nombreProd)}" agregado`,
        timeout: 2000
      });
    }
    else{
      alert("Rpetido")
    }
    this.modalNew.hide();



  }

  editaProducto(producto){
    producto.color=this.color;
    this._productoService.setProducto(producto).subscribe();
    this.modalEdit.hide();

    this.alerts.push({
      type: 'success',
      msg: `Producto "${(producto.nombreProd)}" editado`,
      timeout: 2000
    });

  }

  eliminaProducto(idProducto:number){
    this._productoService.deleteProducto(idProducto).subscribe();
    this.modalConfDelete.hide();

    this.alerts.push({
      type: 'danger',
      msg: `Producto Eliminado`,
      timeout: 2000
    });
  }

  copiaVariables(producto){
    this.newForm.get('costoDes').setValue(producto.costoDes)
    this.newForm.get('tiempoDes').setValue(producto.tiempoDes)
    this.newForm.get('precioVenta').setValue(producto.precioVenta)
    this.newForm.get('costosFijosFabri').setValue(producto.costosFijosFabri)
    this.newForm.get('costoVarUniFabri').setValue(producto.costoVarUniFabri)
    this.newForm.get('gastosFijosDist').setValue(producto.gastosFijosDist)
    this.newForm.get('depDistribucion').setValue(producto.depDistribucion)
    this.newForm.get('costoVarUniDist').setValue(producto.costoVarUniDist)
    this.newForm.get('depAdmon').setValue(producto.depAdmon)
    this.newForm.get('gastosFijosAdmon').setValue(producto.gastosFijosAdmon)
    this.newForm.get('costosMPPUniProd').setValue(producto.costosMPPUniProd)
    this.newForm.get('uniMP').setValue(producto.uniMP)
    this.newForm.get('costoUni').setValue(producto.costoUni)
    this.newForm.get('color').setValue(producto.color)
    this.modalCopia.hide();
  }




  openNew(){
    this.newForm.reset();
    this.editForm.reset();
    this.modalNew.show();


  }

//Abre formulario para editar un item
openEdit(producto){
  this.newForm.reset();
  this.editForm.reset();
  console.log("Edicion",producto)
  this.color = producto.color;
  this.editForm.controls["idProducto"].setValue(producto.idProducto);
  this.editForm.controls["nombreProd"].setValue(producto.nombreProd);
  this.editForm.controls["costoDes"].setValue(producto.costoDes);
  this.editForm.controls["tiempoDes"].setValue(producto.tiempoDes);
  this.editForm.controls["precioVenta"].setValue(producto.precioVenta);
  this.editForm.controls["costosFijosFabri"].setValue(producto.costosFijosFabri);
  this.editForm.controls["costoVarUniFabri"].setValue(producto.costoVarUniFabri);
  this.editForm.controls["gastosFijosDist"].setValue(producto.gastosFijosDist);
  this.editForm.controls["depDistribucion"].setValue(producto.depDistribucion);
  this.editForm.controls["costoVarUniDist"].setValue(producto.costoVarUniDist);
  this.editForm.controls["depAdmon"].setValue(producto.depAdmon);
  this.editForm.controls["gastosFijosAdmon"].setValue(producto.gastosFijosAdmon);
  this.editForm.controls["costosMPPUniProd"].setValue(producto.costosMPPUniProd);
  this.editForm.controls["uniMP"].setValue(producto.uniMP);
  this.editForm.controls["costoUni"].setValue(producto.costoUni);
  this.editForm.controls["color"].setValue(producto.color);
  this.color=producto.color;
  this.modalEdit.show();
}

confDelete(producto){
  this.productoDelete=producto;
  console.log(this.productoDelete);
  this.modalConfDelete.show();

}


buscaRepetidos(producto){
  for(let prod of this.productos){
    if(prod.nombreProd==producto.nombreProd){
      return true
    }


  }

}

}
