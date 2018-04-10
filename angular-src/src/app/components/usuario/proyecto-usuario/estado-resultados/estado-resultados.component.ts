import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {BalanceService} from '../../../../services/balance.service';
import { CurrencyPipe } from '@angular/common';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
import {ProyectosService} from '../../../../services/proyectos.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


declare var jsPDF: any;
@Component({
  selector: 'app-estado-resultados',
  templateUrl: './estado-resultados.component.html'
})

export class EstadoResultadosComponent implements OnInit {

  resultados = [];
  auxiliares=[];
  auxiliarC=[];
  productos=[];
  auxiliarT = [];
  intereses = [];
  maquinas = [];
  balanceFinal =[];
  proyectoActual:any;
  proyectos:any;

  constructor(private _operacionService:OperacionService,
              private _productoService:ProductoService,
              private _maqService:CompraMaquinariaService,
              private cp: CurrencyPipe,
              private _balanceService:BalanceService,
              private _resultadosService:ResultadosService,
            private _proyectoService:ProyectosService){
              this.proyectos=this._proyectoService.returnUsuarios();
              this._proyectoService.ocultaCierrePeriodo()
    this._resultadosService.vender();
    setTimeout(() => {
      this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'));
        this._balanceService.getBalanceFinal().subscribe( data => {
          if(data.success){
            this.balanceFinal = this._resultadosService.getBalanceFinal();
          }
        });
        this.auxiliares=this._operacionService.returnAuxiliares();
        this.productos=this._productoService.returnProductos();
        this.intereses = this._operacionService.returnInter();
        this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
        this.resultados = this._operacionService.returnProductoResultados();
        this.auxiliarC=this._operacionService.returnAuxiliarC();
        this.maquinas =this._maqService.returnMaquinasCompradas();
        console.log("Intereses",this.intereses);
    }, 1500);
  }

  ngOnInit() {
  }

  getNameByIdProducto(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";
  }

  getVentasNetas(id){
    var i = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        i += (aux.Ventas - aux.IVAxVentas);
      }
    }
    return i;
  }

  getTotalVentas(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.IVAxVentas;
    }
    return T;
  }

  getTotalCostosVentas(){
    var T = 0;
    if(this.auxiliares.length == 0){
      for(let m of this.maquinas){
        console.log(m.costo,m.depAcum,m.Cantidad)
        T += ((m.costo * (m.depAcum/100))*m.Cantidad);
      }
    }
    else{
      for(let aux of this.auxiliares){
        T += aux.costoVentas;
      }
    }
    return T;
  }

  getCostoVentas(id){
    var T = 0;
    if(this.auxiliares.length == 0 || this.validarExistencia(id)){
      for(let m of this.maquinas){
        if(m.Producto_idProducto == id){
          T += ((m.costo * (m.depAcum/100))*m.Cantidad);
        }
      }
    }
    else{
      for(let aux of this.auxiliares){
        if(aux.Producto_idProducto == id){
          T += aux.costoVentas;
        }
      }
    }
    return T;
  }

  getUtilidadBruta(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
    }
    return T;
  }

  getUtilidadParcial(id){
    var T = 0;
    if(this.auxiliares.length == 0 || this.validarExistencia(id)){
      for(let m of this.maquinas){
        if(m.Producto_idProducto == id){
          T -= ((m.costo * (m.depAcum/100))*m.Cantidad);
        }
      }
    }
    else{
      for(let aux of this.auxiliares){
        if(aux.Producto_idProducto == id){
          T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
        }
      }
    }
    return T;
  }

  getDistTotal(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoDistribucion;
    }
    return T;
  }

  getDistParcial(id){
    var T = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        T += aux.costoDistribucion;
      }
    }
    return T;
  }

  getAdminParcial(id){
    var T = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        T += aux.costoAdministrativo;
      }
    }
    return T;
  }

  getAdminTotal(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoAdministrativo;
    }
    return T;
  }

  getOtrosGastosParcial(id){
    var T = 0;
    for(let aux of this.auxiliarC){
      if(aux.Producto_idProducto == id){
        T += (aux.desarrolloMercado + aux.desarrolloProducto);
      }
    }
    return T;
  }


            getNameById(idProyecto){
              for(let proyecto of this.proyectos){
                if(proyecto.idProyecto==idProyecto)
                  return proyecto.nombreProyecto
              }
                return "id NO encontrado"

            }


  getUtilidadAntesParcial(id){
    var T = 0;
    if(this.auxiliares.length == 0 || this.validarExistencia(id)){
      for(let m of this.maquinas){
        if(m.Producto_idProducto == id){
          T -= ((m.costo * (m.depAcum/100))*m.Cantidad);
        }
      }
    }
    else{
      for(let aux of this.auxiliares){
        if(aux.Producto_idProducto == id){
          T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
        }
      }
    }
    for(let aux2 of this.auxiliarC){
      if(aux2.Producto_idProducto == id){
        T += -aux2.desarrolloMercado -aux2.desarrolloProducto;
      }
    }
    return T;
  }

  getUtilidadAntes(){
    var T = 0;
    if(this.auxiliares.length == 0){
      for(let m of this.maquinas){
        T -= ((m.costo * (m.depAcum/100))*m.Cantidad);
      }
    }
    else{
      for(let aux of this.auxiliares){
        T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
      }
    }
    return T;
  }

  getUtilidad2(){
    var T = 0;
    if(this.auxiliares.length == 0){
      for(let m of this.maquinas){
        T -= ((m.costo * (m.depAcum/100))*m.Cantidad);
      }
    }
    else{
      for(let aux of this.auxiliares){
        T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
      }
    }
    for(let i of this.auxiliarT){
      T -= i
    }
    for(let i2 of this.intereses){
      T -= i2;
    }
    return T;
  }

  getISR(){
    var isr = 0;
    var uti = this.getUtilidad2();
    if(uti > 0){
      isr = uti * .34;
    }
    return isr;
  }

  getPTU(){
    var ptu = 0;
    var uti = this.getUtilidadAntes();
    if(uti > 0){
      ptu = uti * .10;
    }
    return ptu;
  }

  validarExistencia(id){
    var t = true;
    for(let a of this.auxiliares){
      if(a.Producto_idProducto == id){
        t = false;
        break;
      }
    }
    return t;
  }



  PDFestadoDeResultados(){
  var doc= new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: [215.9,279]});
  let actual=this.proyectoActual;
  var columns = [
  {title: "", dataKey: "cara"}];


  var rows = [
  {"cara":"Ventas Netas"},
  {"cara":"Costo de Ventas"},
  {"cara":""},
  {"cara":"Utilidad Bruta"},
  {"cara":""},
  {"cara":"Costo de Distribución"},
  {"cara":"Otros Gastos"},
  {"cara":"Gastos de Administración"},
  {"cara":""},
  {"cara":""},
  {"cara":"Utilidad en Operación" },
  {"cara":""},
  {"cara":"Intereses" },
  {"cara":""},
  {"cara":"Utilidad antes de Impuestos"},
  {"cara":""},
  {"cara":"ISR"},
  {"cara":"PTU"},
  {"cara":""},
  {"cara":"Utilidad del Ejercicio"},
  ];


    let conf={
    margin: {top: 40,left:40},
    tableWidth: 200,
    headerStyles: {fillColor:0,halign:'center'},
    columnStyles: {
    cara: {halign:'left',columnWidth:65},
    t:{halign:'right'}
    },
    addPageContent: function(data) {
    doc.setFontSize(15);
    doc.setFontType("bold");
    doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
    doc.setFontSize(13);
    doc.text(139.5, 23, 'Estado de Resultados del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
    doc.line(50, 27, 228, 27);
    },
    }

  for(let producto of this.resultados){
    var x = {
      title:this.getNameByIdProducto(producto),
      dataKey:this.getNameByIdProducto(producto)
    }
    columns.push(x);
    rows[0][x.dataKey] = this.cp.transform(this.getVentasNetas(producto),'USD',true,'1.0-0')
    rows[1][x.dataKey] = this.cp.transform(this.getCostoVentas(producto),'USD',true,'1.0-0')
    rows[3][x.dataKey] = this.cp.transform(this.getUtilidadParcial(producto),'USD',true,'1.0-0')
    rows[5][x.dataKey] = this.cp.transform(this.getDistParcial(producto),'USD',true,'1.0-0')
    rows[6][x.dataKey] =  this.cp.transform(this.getOtrosGastosParcial(producto),'USD',true,'1.0-0')
    rows[7][x.dataKey] = this.cp.transform(this.getAdminParcial(producto),'USD',true,'1.0-0')
    rows[10][x.dataKey] =  this.cp.transform(this.getUtilidadAntesParcial(producto),'USD',true,'1.0-0')
    rows[12][x.dataKey] = "-";
    rows[14][x.dataKey] =  this.cp.transform(this.getUtilidadAntesParcial(producto),'USD',true,'1.0-0')
    rows[16][x.dataKey] = "-";
    rows[17][x.dataKey] = "-";
    rows[19][x.dataKey] = "-";

    conf.columnStyles[this.getNameByIdProducto(producto)]={halign:'right'}

  }

  var t = {
    title:"Total",
    dataKey:"t"
  }
  columns.push(t);

  rows[0][t.dataKey] =   this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0')
  rows[1][t.dataKey] = this.cp.transform( this.getTotalCostosVentas(),'USD',true,'1.0-0')
  rows[3][t.dataKey] =  this.cp.transform(this.getUtilidadBruta(),'USD',true,'1.0-0');
  rows[5][t.dataKey] =  this.cp.transform(this.getDistTotal(),'USD',true,'1.0-0')
  for(let item of this.auxiliarT){
    rows[6][t.dataKey] = this.cp.transform(item,'USD',true,'1.0-0')
    rows[10][t.dataKey] =  this.cp.transform((this.getUtilidadAntes() - item),'USD',true,'1.0-0')
  }
  rows[7][t.dataKey] = this.cp.transform(this.getAdminTotal(),'USD',true,'1.0-0')
  for(let aux of this.intereses){
    rows[12][t.dataKey] =  this.cp.transform(aux,'USD',true,'1.0-0')
  }
  rows[14][t.dataKey] =  this.cp.transform(this.getUtilidad2(),'USD',true,'1.0-0')
  rows[16][t.dataKey] =  this.cp.transform(this.getISR(),'USD',true,'1.0-0')
  rows[17][t.dataKey] =  this.cp.transform(this.getPTU(),'USD',true,'1.0-0')
  rows[19][t.dataKey] = this.cp.transform((this.getUtilidad2() - this.getISR() - this.getPTU()),'USD',true,'1.0-0')







  doc.autoTable(columns, rows, conf );

  doc.save("Estado de Resultados.pdf");



  }



  CSVestado(){
    let actual=this.proyectoActual;
    let data=[
      {"cara":"Proyecto "+actual,"cara2":"Estado de Resultados del Perido "+ localStorage.getItem('numeroPeriodo')},
      {"cara":""},
      {"cara":"Ventas Netas"},
      {"cara":"Costo de Ventas"},
      {"cara":""},
      {"cara":"Utilidad Bruta"},
      {"cara":""},
      {"cara":"Costo de Distribución"},
      {"cara":"Otros Gastos"},
      {"cara":"Gastos de Administración"},
      {"cara":""},
      {"cara":""},
      {"cara":"Utilidad en Operación" },
      {"cara":""},
      {"cara":"Intereses" },
      {"cara":""},
      {"cara":"Utilidad antes de Impuestos"},
      {"cara":""},
      {"cara":"ISR"},
      {"cara":"PTU"},
      {"cara":""},
      {"cara":"Utilidad del Ejercicio"},
    ];


    for(let producto of this.resultados){
      var x = this.getNameByIdProducto(producto);
      data[1][x] = this.getNameByIdProducto(producto)
      data[2][x] = this.getVentasNetas(producto)
      data[3][x] = this.getCostoVentas(producto)
      data[5][x] = this.getUtilidadParcial(producto)
      data[7][x] = this.getDistParcial(producto)
      data[8][x] = this.getOtrosGastosParcial(producto)
      data[9][x] = this.getAdminParcial(producto)
      data[12][x] = this.getUtilidadAntesParcial(producto)
      data[14][x] = "-";
      data[16][x] = this.getUtilidadAntesParcial(producto)
      data[18][x] = "-";
      data[19][x] = "-";
      data[21][x] = "-";
    }

    data[1]["total"] = "Total"
    data[2]["total"] = this.getTotalVentas()
    data[3]["total"] = this.getTotalCostosVentas()
    data[5]["total"] = this.getUtilidadBruta()
    data[7]["total"] = this.getDistTotal()
    for(let item of this.auxiliarT){
      data[8]["total"] = item
      data[12]["total"] = (this.getUtilidadAntes() - item)
    }
    data[9]["total"] = this.getAdminTotal()
    for(let aux of this.intereses){
      data[13]["total"] = aux.toString();
    }
    data[16]["total"] = this.getUtilidad2()
    data[18]["total"] = this.getISR()
    data[19]["total"] = this.getPTU()
    data[21]["total"] = (this.getUtilidad2() - this.getISR() - this.getPTU())



    new Angular2Csv(data, 'Estado de Resultados');



  }

}
