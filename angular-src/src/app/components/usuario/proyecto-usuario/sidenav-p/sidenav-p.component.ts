import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {ProyectosService} from '../../../../services/proyectos.service';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';


@Component({
  selector: 'app-sidenav-p',
  templateUrl: './sidenav-p.component.html',
  styleUrls: ['./sidenav-p.component.css']
})
export class SidenavPComponent implements OnInit {

  proyectos:any;
  proyectoActual:any;
  totalPer:number=1;
  ventas=[
    {numeroPeriodo:null,
     ventas:[
       {unidadesVendidas:null,
        unidadesAlmacenadas:null}
     ]}
  ];
  periodoSelect:number=1;
  maquinas=[
    {numeroPeriodo:null,
     ventas:[
       {unidadesVendidas:null,
        unidadesAlmacenadas:null}
     ]}
  ];
  DProductos=[];
  DZonas=[];
  productos:any;
  ceditos=[];
  openDes:boolean=false;
  constructor(private router:Router,
              private _productoService:ProductoService,
              private _operacionService:OperacionService,
              private _proyectosS:ProyectosService) {

    this.proyectoActual=localStorage.getItem('nombreProyecto');
    this.productos=this._productoService.returnProductos();
  }

  ngOnInit() {
  }

  verProyectos(){
    this._proyectosS.ocultaCierrePeriodo();
    this._proyectosS.oculataPCorriendo();
    localStorage.removeItem('numeroPeriodo');
    localStorage.removeItem('idProyecto');
    localStorage.removeItem('numeroRPeriodos');
    localStorage.removeItem('nombreProyecto');
    localStorage.removeItem('regresion');
    localStorage.removeItem('terminado');
    this.router.navigate(['/Usuario/proyectos']);
  }


  getNameById(idProyecto){
    for(let proyecto of this.proyectos){
      if(proyecto.idProyecto==idProyecto)
        return proyecto.nombreProyecto
    }
      return "id NO encontrado"

  }


  getNameByIdProducto(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";
  }

  verDecisiones(){

    this.ventas = this._operacionService.returnVentas();
    this.maquinas = this._operacionService.returnMaquinas();
    this.DProductos = this._operacionService.returnDProductos();
    this.DZonas = this._operacionService.returnDZonas();
    this.ceditos = this._operacionService.returnCreditos();

    setTimeout(() => {
      this.openDes=true;
      this.totalPer=this.ventas.length*10;
      console.log(this.totalPer)
      }, 1500);

    console.log("Ventas",this.ventas);
    console.log("Maquinas",this.maquinas);
    console.log("Productos",this.DProductos);
    console.log("Zonas",this.DZonas);
    console.log("Creditos",this.ceditos);
  }




}
