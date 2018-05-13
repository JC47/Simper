import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {ProyectosService} from '../../../../services/proyectos.service';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import { MaquinariaService } from '../../../../services/maquinaria.service';
import {ZonasService} from '../../../../services/zonas.service';
import {DecimalPipe} from '@angular/common'
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
declare var jsPDF: any;





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
       {  idProducto:null,
         unidadesVendidas:null,
        unidadesAlmacenadas:null}
     ]}
  ];
  periodoSelect:number=1;

  maquinas=[
    {
      numeroPeriodo:null,
      maquinarias:[
          {
            idMaquinaria:null,
            Cantidad:null
          }
      ]
          }
  ];


  DProductos=[
    {numeroPeriodo:null,
      productos:[
        {
          idProducto:null
        }
      ]}
  ];
  DZonas=[
    {numeroPeriodo:null,
      productos:[
        {
          idProducto:null,
          idZona:null
        }
      ]}
  ];


  productos=[]
  maquinaria=[]
  ceditos=[];
  openDes:boolean=false;
  zonas=[];
  constructor(private router:Router,
              private _productoService:ProductoService,
              private _operacionService:OperacionService,
              private _proyectosS:ProyectosService,
              private _maquinariaService:MaquinariaService,
              private dc: DecimalPipe,
              private _zonasService: ZonasService) {

    this.proyectoActual=localStorage.getItem('nombreProyecto');
    this.productos=this._productoService.returnProductos();
    this.maquinaria=this._maquinariaService.returnMaquinas();
    this.zonas=this._zonasService.returnZonasNormales();
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


  getNameByIdMaquinaria(idMaquinaria){
    for(let maquina of this.maquinaria){
      if(maquina.idMaquinaria==idMaquinaria)
        return maquina.nombreMaq
    }
      return "id NO encontrado"

  }



    getNameByIdZona(idZona){
      for(let zona of this.zonas){
        if(zona.idZona==idZona)
          return zona.nombreZona
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



  PDFdecisiones(){
    let rowVentas=[];
    let colsVentas=[
    {title: "Producto", dataKey: "producto"},
    {title: "Unidades Vendidas", dataKey: "uVendidas"},
    {title: "Unidades Almacenadas", dataKey: "uAlmacenadas"}];

    let colsMaquinaria=[
    {title: "Maquinaria", dataKey: "maquinaria"},
    {title: "Cantidad", dataKey: "cantidad"}];

    let colsProductos=[
    {title: "Productos Desarrollados", dataKey: "productos"}];


    let colsMercados=[
    {title: "Producto", dataKey: "producto"},
    {title: "Zonas de Mercado Desarrolladas", dataKey: "zona"}];



    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [279,215.9]
  });


  doc.setFontSize(15);
  doc.setFontType("bold");
  doc.text(139.5, 15, 'Proyecto ' +this.proyectoActual , null, null, 'center');
  doc.setFontSize(13);
  doc.text(139.5, 23, 'Resumen de Decisiones', null, null, 'center');


for(let i=0,x=0;i<this.ventas.length;i++,x++){
    let v=i/3;
    if( v % 1==0)
      x=0;
    doc.setFontSize(12);
    doc.setFontType("bold");
    doc.text(30, 35+(x*55), 'Periodo'+(i+1), null, null, 'center');
    doc.line(10, 38+(x*55), 269, 38+(x*55));

      doc.text(52, 44 +(x*55), 'Ventas de Productos', null, null, 'center');
      doc.text(130, 44+(x*55), 'Maquinaria Adquirida', null, null, 'center');
      doc.text(217, 44+(x*55), 'Productos y Zonas de Mercado Desarrollados', null, null, 'center');
      rowVentas=[];
            for(let venta of this.ventas[i].ventas){

              rowVentas.push({
                producto:this.getNameByIdProducto(venta.idProducto),
                uVendidas:this.dc.transform( venta.unidadesVendidas,'1.0-0') ,
                uAlmacenadas:this.dc.transform( venta.unidadesAlmacenadas,'1.0-0')
              })
            }

            doc.autoTable(colsVentas, rowVentas, {
            margin: {top:47+(x*55),
              left:10},

              tableWidth:85,
            headerStyles: {fillColor:0,halign:'center',fontSize:6},
            columnStyles: {
              producto:{halign:'center'},
              uVendidas:{halign:'right'},
              uAlmacenadas:{halign:'right'},
            },
            bodyStyles:{
              fontSize:6
            }
            });



            let rowMaquinaria=[];
            for(let maquina of this.maquinas[i].maquinarias){
              rowMaquinaria.push({
                maquinaria:this.getNameByIdMaquinaria(maquina.idMaquinaria),
                cantidad:maquina.Cantidad
              })
            }

            doc.autoTable(colsMaquinaria, rowMaquinaria, {
            margin: {top:47+(x*55),
                 left:100},
            tableWidth:60,
            headerStyles: {fillColor:0,halign:'center',fontSize:6},
            columnStyles: {
              maquinaria:{halign:'center'},
              cantidad:{halign:'right'}

            },
            bodyStyles:{
              fontSize:6
            }
            });

            let rowProductos=[]
            for(let producto of this.DProductos[i].productos){
              rowProductos.push({
                productos:this.getNameByIdProducto(producto.idProducto)
              })
            }


            doc.autoTable(colsProductos,rowProductos, {
            margin: {top:47+(x*55),
                 left:165},
            tableWidth:30,
            headerStyles: {fillColor:0,halign:'center',fontSize:6},
            columnStyles: {
              productos:{halign:'center'}
            },
            bodyStyles:{
              fontSize:6
            }
            });

            let rowMercados=[];
            for(let zona of this.DZonas[i].productos){
              rowMercados.push({
                producto:this.getNameByIdProducto(zona.idProducto),
                zona:this.getNameByIdZona(zona.idZona)
              })
            }


            doc.autoTable(colsMercados, rowMercados, {
            margin: {top:47+(x*55),
                 left:200},
            tableWidth:70,
            headerStyles: {fillColor:0,halign:'center',fontSize:6},
            columnStyles: {
              producto:{halign:'center'},
              zona:{halign:'center'}
            },
            bodyStyles:{
              fontSize:6
            }
            });

            let num=(i+1)/3
            if(num % 1==0){
              console.log(i)
              doc.addPage()

                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto ' +this.proyectoActual , null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Resumen de Decisiones', null, null, 'center');
                doc.setFontSize(12);
                doc.setFontType("bold");
            }


}

          doc.save("Reporte de decisiones.pdf");
  }


  CSVdecisiones(){
    let data=[
      {productoV:"Resumen de Decisiones"},
      {productoV:"Proyecto "+this.proyectoActual}
  ];

  for(let i in this.ventas){
    var space=[
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"Periodo "+this.ventas[i].numeroPeriodo,cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"Venta de Productos",cVendida:"",cAlmacenada:"",es1:"",maquina:"Maquinaria Adquirida",cMaquina:"",sp2:"",pDesarrollado:" Productos y Zona de Mercado Desarrolladas",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"Producto",cVendida:"Unidades Vendidas",cAlmacenada:"Unidades Almacenadas",es1:"",maquina:"Maquina",cMaquina:"Cantidad",sp2:"",pDesarrollado:"Producto Desarrollado",esp3:"",pZonas:"Producto",zDesarrolladas:"Zona de Mercado Desarrollada"},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
      {productoV:"",cVendida:"",cAlmacenada:"",es1:"",maquina:"",cMaquina:"",sp2:"",pDesarrollado:"",esp3:"",pZonas:"",zDesarrolladas:""},
    ];

    for(let x=0;x<this.ventas[i].ventas.length;x++){
      console.log(x)
      space[x+5].productoV=this.getNameByIdProducto(this.ventas[i].ventas[x].idProducto)
      space[x+5].cVendida=this.ventas[i].ventas[x].unidadesVendidas
      space[x+5].cAlmacenada=this.ventas[i].ventas[x].unidadesAlmacenadas;
    }

    for(let x=0;x<this.maquinas[i].maquinarias.length;x++){
        space[x+5].maquina=this.getNameByIdMaquinaria(this.maquinas[i].maquinarias[x].idMaquinaria);
        space[x+5].cMaquina=this.maquinas[i].maquinarias[x].Cantidad;
    }

    for(let x=0;x<this.DProductos[i].productos.length;x++){
      space[x+5].pDesarrollado=this.getNameByIdProducto(this.DProductos[i].productos[x].idProducto)
    }


    for(let x=0;x<this.DZonas[i].productos.length;x++){
      space[x+5].pZonas=this.getNameByIdProducto(this.DZonas[i].productos[x].idProducto)
      space[x+5].zDesarrolladas=this.getNameByIdZona(this.DZonas[i].productos[x].idZona)
    }


    for(let sp of space){
      data.push(sp);
    }



  }

new Angular2Csv(data, 'Desiciones');

  }


}
