import { Component, OnInit, ViewChild } from '@angular/core';
import {MaquinariaService} from '../../services/maquinaria.service';
import {maquinaria,producto,select} from '../../app.interfaces';
import {NgbModal, ModalDismissReasons,NgbActiveModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductoService} from '../../services/producto.service';
import {SelectModule} from 'angular2-select';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-maquinarias',
  templateUrl: './maquinarias.component.html',
  styleUrls: ['./maquinarias.component.css']
})
export class MaquinariasComponent implements OnInit {
//Variables Locales

@ViewChild('modalEdit') public modalEdit:ModalDirective;
@ViewChild('modalNew') public modalNew:ModalDirective;
@ViewChild('modalConfDelete') public modalConfDelete:ModalDirective;


public alerts: any = [];
maquinas:maquinaria[] = new Array();
closeResult: string;
editForm:FormGroup;
newForm:FormGroup;
productos:producto[] = new Array();
selectValue:select[] = new Array();
selected:select;
maquinaDelete:maquinaria={
  idMaquinaria:0,
  nombreMaq:"",
  costo:0,
  cantidadProd:0,
  depAcum:0,
  Producto_idProducto:0
}


//Contructor Incializació de los Servicios de Maquinaria y de Modales
  constructor( private _maquinariasService:MaquinariaService,
                private modalService: NgbModal,
                private _productosService:ProductoService,
                private ngbactivemodal:NgbActiveModal,
                private _flashMessagesService: FlashMessagesService) {
    this.selectValue=[
      {
        value:0,
        label:""
      }
    ]
    this.maquinas=this._maquinariasService.returnMaquinas();
    this.productos = this._productosService.returnProductos();
    this.iniciaSelect();
    this.selectValue.splice(0,1);
   }

  ngOnInit() {
    //Obteneiendo las maquinarias de base de dato
    this.selected={value:0,label:""};
    this.editForm=new FormGroup({
      'idMaquinaria':new FormControl('',Validators.required),
      'nombreMaq': new FormControl('',Validators.required),
      'costo': new FormControl('',Validators.required),
      'cantidadProd': new FormControl('',Validators.required),
      'depAcum':new FormControl('',Validators.required),
      'Producto_idProducto':new FormControl('',[Validators.required])
    });

    this.newForm=new FormGroup({
      'nombreMaq': new FormControl('',Validators.required),
      'costo': new FormControl('',Validators.required),
      'cantidadProd': new FormControl('',Validators.required),
      'depAcum':new FormControl('',Validators.required),
      'Producto_idProducto':new FormControl('',Validators.required)

    });

  }

  iniciaSelect(){
    this._productosService.getProductos().subscribe(data => {
      for(let key$ in data.datos){
          this.selectValue.push({value:data.datos[key$].idProducto,label:data.datos[key$].nombreProd});
      }
    });
  }



//Abre formulario para agrear nuevo item
  openNew(){
    this.modalNew.show()
    this.newForm.reset();

  }

//Abre formulario para editar un item
  openEdit(maquina){
    this.modalEdit.show();

    this.editForm.controls['idMaquinaria'].setValue(maquina.idMaquinaria);
    this.editForm.controls['nombreMaq'].setValue(maquina.nombreMaq);
    this.editForm.controls['costo'].setValue(maquina.costo);
    this.editForm.controls['cantidadProd'].setValue(maquina.cantidadProd);
    this.editForm.controls['depAcum'].setValue(maquina.depAcum);
    this.editForm.controls['Producto_idProducto'].setValue(maquina.Producto_idProducto);
    this.initSelected(maquina.Producto_idProducto);
    console.log("Id Prodcuto: ",maquina.Producto_idProducto,this.selected);
  }

  initSelected(id:number){
    for(let select of this.selectValue)
      if(id==select.value)
        this.selected=select;
  }

 guarda(maquina:maquinaria){
   if(!this.buscaRepetidos(maquina)){
     this._maquinariasService.guardarMaquina(maquina);
     this.modalNew.hide();

     this.alerts.push({
       type: 'success',
       msg: `Maquina "${(maquina.nombreMaq)}" agregada`,
       timeout: 2000
     });
   }else{
     alert("Repetidos")
   }



 }

 buscaRepetidos(maquinaS){
   console.log("Bus")
   for(let maquina of this.maquinas){
     if(maquina.nombreMaq==maquinaS.nombreMaq){
       console.log(true)
       return true
     }
     else{
       console.log(false)
     }
   }
 }

 editaMaquina(maquina:maquinaria){
   console.log(maquina.Producto_idProducto);
   this._maquinariasService.setMaquina(maquina).subscribe();
   this.modalEdit.hide();

   this.alerts.push({
     type: 'success',
     msg: `Maquina "${(maquina.nombreMaq)}" editada`,
     timeout: 2000
   });
 }

 noCero(control:FormControl):{[s:string]:boolean}{
   if(control.value==0){
     return{
       nocero:false
     }
   }
   return null;
 }


 getNameById(id:number){
   for(let producto of this.productos){
     if(producto.idProducto==id)
      return producto.nombreProd;
   }
   return "id no encontrado";

 }

 onSelected($event){
   this.selected.label=this.getNameById(this.editForm.controls['Producto_idProducto'].value);
   this.selected.value=this.editForm.controls['Producto_idProducto'].value;
   console.log(this.selected);

 }

 borraMaquina(id:number){
   console.log(id);
   this._maquinariasService.deleteMauqina(id).subscribe();
   this.modalConfDelete.hide();

   this.alerts.push({
     type: 'danger',
     msg: `Maquina eliminada`,
     timeout: 2000
   });
 }

 confDelete(maquina:maquinaria){
   this.maquinaDelete=maquina;
   console.log(this.maquinaDelete);
   this.modalConfDelete.show();

 }

}
