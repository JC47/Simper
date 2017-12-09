import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {BalanceService} from '../../../../services/balance.service';
import { CompraMaquinariaService } from '../../../../services/compra-maquinaria.service';
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

  constructor(private _operacionService:OperacionService,
              private _productoService:ProductoService,
              private _maqService:CompraMaquinariaService,
              private _balanceService:BalanceService,
              private _resultadosService:ResultadosService){
    this._resultadosService.vender();
    setTimeout(() => {
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
    if(this.auxiliares.length == 0){
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
    if(this.auxiliares.length == 0){
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

  getUtilidadAntesParcial(id){
    var T = 0;
    if(this.auxiliares.length == 0){
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



  PDFestadoDeResultados(){
  var doc= new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: [215.9,279]});

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

  for(let producto of this.resultados){
    var x = {
      title:this.getNameByIdProducto(producto),
      dataKey:producto
    }
    columns.push(x);
    rows[0][x.dataKey] = this.getVentasNetas(producto).toString();
    rows[1][x.dataKey] = this.getCostoVentas(producto).toString();
    rows[3][x.dataKey] = this.getUtilidadParcial(producto).toString();
    rows[5][x.dataKey] = this.getDistParcial(producto).toString();
    rows[6][x.dataKey] = this.getOtrosGastosParcial(producto).toString();
    rows[7][x.dataKey] = this.getAdminParcial(producto).toString();
    rows[10][x.dataKey] = this.getUtilidadAntesParcial(producto).toString();
    rows[12][x.dataKey] = "-";
    rows[14][x.dataKey] = this.getUtilidadAntesParcial(producto).toString();
    rows[16][x.dataKey] = "-";
    rows[17][x.dataKey] = "-";
    rows[19][x.dataKey] = "-";
  }

  var t = {
    title:"Total",
    dataKey:"t"
  }
  columns.push(t);

  rows[0][t.dataKey] = this.getTotalVentas().toString();
  rows[1][t.dataKey] = this.getTotalCostosVentas().toString();
  rows[3][t.dataKey] = this.getUtilidadBruta().toString();
  rows[5][t.dataKey] = this.getDistTotal().toString();
  for(let item of this.auxiliarT){
    rows[6][t.dataKey] = item.toString();
    rows[10][t.dataKey] = (this.getUtilidadAntes() - item).toString();
  }
  rows[7][t.dataKey] = this.getAdminTotal().toString();
  for(let aux of this.intereses){
    rows[12][t.dataKey] = aux.toString();
  }
  rows[14][t.dataKey] = this.getUtilidad2().toString();
  rows[16][t.dataKey] = this.getISR().toString();
  rows[17][t.dataKey] = this.getPTU().toString();
  rows[19][t.dataKey] = (this.getUtilidad2() - this.getISR() - this.getPTU()).toString();



  doc.autoTable(columns, rows, {
  margin: {top: 40,
       left:40},
  tableWidth: 200,
  headerStyles: {fillColor:0},
  columnStyles: {
  cara: {halign:'left',columnWidth:65}
  },
  addPageContent: function(data) {
  doc.setFontSize(15);
  doc.setFontType("bold");
  doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
  doc.setFontSize(13);
  doc.text(139.5, 23, 'Estado de Resultados', null, null, 'center');
  doc.line(50, 27, 228, 27);
  },






  });

  doc.save("Estado de Resultados.pdf");



  }

}
