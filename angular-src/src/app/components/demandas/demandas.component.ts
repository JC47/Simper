import { Component, OnInit, ViewChild } from '@angular/core';
import {ZonasService} from '../../services/zonas.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';
import {zona,producto,select,productoPeriodo} from '../../app.interfaces';
import {ProductoService} from '../../services/producto.service';
import {Router} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-demandas',
  templateUrl: './demandas.component.html',
  styleUrls: ['./demandas.component.css']
})
export class DemandasComponent implements OnInit {

  @ViewChild('modalEdit') public modalEdit:ModalDirective;
  @ViewChild('modalNew') public modalNew:ModalDirective;
  @ViewChild('modalConfDelete') public modalConfDelete:ModalDirective;
  @ViewChild('modalEditProd') public modalEditProd:ModalDirective;
  zonas:zona[] = new Array();
  closeResult: string;
  productosSelected:number[]=[0];
  preSelected:number;
  zonaDelete:zona;
  selecEdit:select[]=[
    {
      value:0,
      label:""
    }
  ];
  editForm:FormGroup;
  repetidoEdit:boolean=false;
  newForm:FormGroup;
  productoZona:FormGroup;
  repetido:boolean=false;
  userForm: FormGroup;
  productos:producto[] = [];
  selectedValue:select[]=[
    {
      value:0,
      label:""
    }
  ];
  select:select[]=[
    {
      value:0,
      label:""
    }
  ];
  public alerts: any = [];




  constructor(private modalService: NgbModal,
              private _demandaService:ZonasService,
              private _fb:FormBuilder,
              private _productosService:ProductoService,
              private router:Router) {




    }






  ngOnInit() {
    this.zonas=this._demandaService.returnZonasNormales();
    console.log(this.zonas);
    this.productos=this._productosService.returnProductos();

    this.newForm = this._fb.group({
            nombreZona: ['',Validators.required],
            productos: this._fb.array([
                this.initProductoOfNew(0,0,0),
            ])
        });

        this.productoZona=new FormGroup({
          'idZona':new FormControl(''),
          'idProducto':new FormControl(''),
          'costoDes':new FormControl(''),
          'tiempoDes':new FormControl(''),

        });




        this.editForm = this._fb.group({
                idZona: [''],
                nombreZona: [''],
                productos: this._fb.array([])
            });


            this.newForm.controls.productos.valueChanges.subscribe(data => {
              const control = <FormArray>this.newForm.controls['productos'];
              console.log("entrando evento",)
              for(let i=0;i<data.length;i++){
                for(let j=i+1;j<data.length;j++){
                  //console.log(data[j].Producto_idProducto,data[i].Producto_idProducto)

                  if(data[j].Producto_idProducto==data[i].Producto_idProducto){
                    control.removeAt(j)
                    this.repetido=true;

                  }

                    //console.log(this.newForm.controls.productos.get(j.toString()).get("Producto_idProducto"))

                    if(!data[i]==data.length){
                      //control.removeAt(data.lenght-1);
                    }

                }



              }
})



  }


noRepeat(){
  let productos=this.newForm.controls.productos.value;
  let repeat:number=0;
  for(let i=0;i<productos.length;i++)
    for(let j=i+1;j<productos.length;j++)
      if(productos[i].Producto_idProducto==productos[j].Producto_idProducto)
        return false
      else
        return true
  return null

}

validaNew(){
  console.log(this.newForm.valid && this.noRepeat())
  return "Hola"
}



  initProductoOfNew(id:number,costo:number,tiempo:number){
    return this._fb.group({
            Producto_idProducto:[id,Validators.required],
            costoDes:[costo,Validators.required],
            tiempoDes:[tiempo,Validators.required]
        });
    }

    initPeriodoOfNew(){
      return this._fb.group({
        numPerido:[0],
        demanda:[0]
      })
    }

    inputProducto(form:FormGroup,id:number,costo:number,tiempo:number){
      this.repetido=false;
      const control = <FormArray>form.controls['productos'];
      if(form.controls.productos.valid){
        control.push(this.initProductoOfNew(id,costo,tiempo));
      }else
        alert("Completa campos del producto anterior para agregar uno nuevo")

    }

    agregaProd(idZona,idProducto,costo,tiempo){
      for(let prod of this.editForm.controls.productos.value)
        if(prod.Producto_idProducto==this.preSelected){
          alert("producto repetido");
          return;
        }

          this._demandaService.addProducto(idZona,idProducto,costo,tiempo);
          this.inputProducto(this.editForm,idProducto,0,0);



    }

    guardaProductoZona(productoZona){
      console.log(productoZona);
      this.modalEditProd.hide();
      this._demandaService.editProductoZona(productoZona).subscribe();
      this.editForm.controls.productos=this._fb.array([]);
      this.modalEdit.hide();



    }

    evento(){
      console.log("Evento de Selecr Producto")
    }

    deleteProducto(i:number,form:FormGroup){
      const control = <FormArray>form.controls['productos'];
      console.log(i);
      control.removeAt(i);


    }

    openEditAgrega(idZona,idProducto){
      this.modalEditProd.show();
      this.productoZona.controls['idZona'].setValue(idZona);
      this.productoZona.controls['idProducto'].setValue(idProducto);
    }

    openEditProd(producto,idZona){

      this.modalEditProd.show();
      this.productoZona.controls['idZona'].setValue(idZona);
      this.productoZona.controls['idProducto'].setValue(producto.controls['Producto_idProducto'].value);
      this.productoZona.controls['costoDes'].setValue(producto.controls['costoDes'].value);
      this.productoZona.controls['tiempoDes'].setValue(producto.controls['tiempoDes'].value);
    }

    eliminaProducto(idProducto, idZona,i){
      var x = {
        idZona:idZona,
        idProducto:idProducto
      }

      this._demandaService.deleteProducto(x).subscribe();
      this.deleteProducto(i,this.editForm);
      //this.modalEdit.hide();
    }

    objetoEnvio(zona){
      let ids:number[]=[];
        for(let producto of zona.productos)
          ids.push(producto.idProducto)
      return {
        nombreZona:zona.nombreZona,
        tiempoDes:zona.tiempoDes,
        costoDes:zona.costoDes,
        productos:ids
      }


    }



  guardaZona(zona:any){
    if(!this.buscaRepetidos(zona)){
      this._demandaService.guardarZona(zona);
      this.modalNew.hide();

      this.alerts.push({
        type: 'success',
        msg: `Zona "${(zona.nombreZona)}" agregada`,
        timeout: 2000
      });
    }else{
      alert("Repetido")
    }
    setTimeout(() =>{
      this.zonas=this._demandaService.returnZonasNormales();
    },500);

  }

  buscaRepetidos(zonaS){
    for(let zona of this.zonas){
      if(zona.nombreZona==zonaS.nombreZona){
        return true
      }


    }

  }

  editaZona(zona:zona){
    console.log(this.editForm.controls.productos.value);
      console.log(this.editForm.controls.productos.value.length);

    this._demandaService.setZona(zona).subscribe();
    this.modalEdit.hide();
    this.editForm.controls.productos=this._fb.array([]);

    this.alerts.push({
      type: 'success',
      msg: `Zona "${(zona.nombreZona)}" editada`,
      timeout: 2000
    });


  }

  validaCampo(i,campo){
    if(this.newForm.controls.productos.get(i+"").get(campo).valid)
      return false;
    else
      return true;
  }



  cerrarEdit(){
    this.modalEdit.hide();
    this.editForm.controls.productos=this._fb.array([]);

  }



  eliminaZona(id:number){
    this._demandaService.deleteZona(id).subscribe();
    this.modalConfDelete.hide();

    this.alerts.push({
      type: 'danger',
      msg: `Zona Eliminada`,
      timeout: 2000
    });

  }

  //Abre formulario para agrear nuevo item
    openNew(content){
      this.newForm.reset();
      this.modalNew.show();
    }

  //Abre formulario para editar un item
    openEdit(zona){
      let select:select={
        value:0,
        label:""
      };
      this.modalEdit.show();



      console.log("openEdit",zona.productos)

      this.editForm.controls['idZona'].setValue(zona.idZona);
      this.editForm.controls['nombreZona'].setValue(zona.nombreZona);
      //this.editForm.controls['productos'].setValue(zona.productos);
      for(let producto of zona.productos){
          //console.log(producto.Producto_idProducto,producto.costoDes,producto.tiempoDes);
          this.inputProducto(this.editForm,producto.Producto_idProducto,producto.costoDes,producto.tiempoDes);
      }

      console.log("Controls Value",this.editForm.controls.productos.value)

    }

    itemSelcted(idRequired:number,idselect:number,index){
      if(idRequired==idselect)
        return "0";
      else
        return "1"
      }


    getNameById(id:any){
      //console.log("name of: ",id);
      for(let producto of this.productos){
        //console.log(producto.idProducto,id);
        if(producto.idProducto==id)
         return producto.nombreProd;
      }
        return "no encontrado";

    }





   confDelete(zona:zona){
    this.zonaDelete=zona;
    this.modalConfDelete.show();
  }


}
