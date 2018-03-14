import { Component, OnInit , ViewChild,NgModule} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';
import {zona,producto,select,productoPeriodo,periodos,periodosAct} from '../../app.interfaces';
import {ProductoService} from '../../services/producto.service';
import {ZonasService} from '../../services/zonas.service';
import {Router} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';
import {GraficasService} from '../../services/graficas.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
// import {BrowserAnimationsModule} from '@angular/platform-browser-animations';




@Component({
  selector: 'app-zona-producto',
  templateUrl: './zona-producto.component.html',
  styleUrls: ['./zona-producto.component.css']
})
export class ZonaProductoComponent implements OnInit {
  @ViewChild('modalPeriodoNew') public modalPeriodoNew:ModalDirective;
  @ViewChild('modalPeriodoEdit') public modalPeriodoEdit:ModalDirective;




zonas:zona[];
edit:boolean;
nombreZonasZonas:string[];
graficas:any[];
newPerido:number;
productos:any;
formPeriodoNew:FormGroup;
formPeriodoEdit:FormGroup;
selectedZona:any;
selectedProducto:any;
zonaScrollSelected={
  zona:null,
  producto:null
};



///Graficas
options;
  data;
  ngOnInit() {

    this.options = {
      chart: {
        type: 'lineChart',
        height: 500,
        width:600,
        margin : {
          top: 50,
          right: 20,
          bottom: 40,
          left: 70
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Periodos'
        },
        yAxis: {
          axisLabel: '',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -5
        }
      }
    };

    this.data =[
      {
        values:[
          {x:1,y:4},
          {x:2,y:4},
          {x:3,y:2},
          {x:4,y:4},
          {x:5,y:7},
          {x:6,y:8},
          {x:7,y:4},

        ],      //values - represents the array of {x,y} data points
        key: 'Sine Wave', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      },
      {
        values:[
          {x:1,y:5},
          {x:2,y:6},
          {x:3,y:7},
          {x:4,y:8},
          {x:5,y:9},
          {x:6.5,y:2},
          {x:7,y:3},

        ],      //values - represents the array of {x,y} data points
        key: 'Hola', //key  - the name of the series.
        color: 'blue'  //color - optional: choose your own line color.
      }


    ]
    console.log("Data",this.data);
}







  constructor
  (
    private _demandaService:ZonasService,
    private _productosService:ProductoService,
    private modalService:NgbModal,
    private _graficasService:GraficasService
  ) {
    setTimeout(() =>{
      this.zonas=_graficasService.returnZonas();
      console.log(this.zonas)
      this.graficas=this._graficasService.setGraficas();
      this.productos=this._productosService.returnProductos();
      console.log("Graficas",this.graficas);
    },1000);




    this.formPeriodoNew= new FormGroup({
      'idZona':new FormControl('',Validators.required),
      'idProducto':new FormControl('',Validators.required),
      'cantidad':new FormControl('',Validators.required)
    });

    this.formPeriodoEdit= new FormGroup({
      'idZona':new FormControl('',Validators.required),
      'idProducto':new FormControl('',Validators.required),
      'numPeriodo':new FormControl('',Validators.required),
      'cantidad':new FormControl('',Validators.required)
    });



  }





  openModalPeriodo(idZona:number,idProducto:number){
    this.formPeriodoNew.controls['idZona'].setValue(idZona);
    this.formPeriodoNew.controls['idProducto'].setValue(idProducto);

    console.log("Datos de Entrada",idZona,idProducto);
    this.modalPeriodoNew.show();


  }

  openModalPeriodoEdit(idZona,idProducto,numPeriodo,cantidad){
    // console.log(idZona,idProducto,numPeriodo);
    console.log(cantidad)
    this.formPeriodoEdit.get('idZona').setValue(idZona);
    this.formPeriodoEdit.get('idProducto').setValue(idProducto);
    this.formPeriodoEdit.get('numPeriodo').setValue(numPeriodo);
    this.formPeriodoEdit.get('cantidad').setValue(cantidad);

    this.modalPeriodoEdit.show()

  }

  editaPeriodo(producto){
      console.log("Producto",producto);
      this._graficasService.editaPeriodo(producto);
      //this.scrollService.scrollTo(this.zonaScrollSelected.zona+this.zonaScrollSelected.producto)
      this.modalPeriodoEdit.hide();
      setTimeout(() =>{
      this.graficas=this._graficasService.setGraficas();
      },1000);
  }

  borraPeriodo(idZona,idProducto){
    this._graficasService.eliminaPeriodo(idZona,idProducto);
    // console.log(idZona,idProducto);
    setTimeout(() =>{
    this.graficas=this._graficasService.setGraficas();
    },
    1500);


  }

selectProductoScroll(element){
  // this.zonaScrollSelected={
  //   zona:zona.idZona,
  //   producto:producto.idProducto
  // };
  console.log(element)
  //console.log(this.zonaScrollSelected.zona+this.zonaScrollSelected.producto)

  }

  agregaPeriodo(producto){
    this._graficasService.agregaPeriodo(producto);
    // console.log(producto);
    setTimeout(() =>{
    this.graficas=this._graficasService.setGraficas();
    },1000);

    this.modalPeriodoNew.hide();

  }


  getNameById(id:number){

    //console.log(this.productos)
    for(let producto of this.productos){
      //console.log(producto.idProducto);
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }







  }
