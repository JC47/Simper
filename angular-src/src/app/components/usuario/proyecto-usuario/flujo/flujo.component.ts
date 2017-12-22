import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {BalanceService} from '../../../../services/balance.service';
import {CompraMaquinariaService} from '../../../../services/compra-maquinaria.service';
import {ProyectosService} from '../../../../services/proyectos.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

declare var jsPDF: any;


@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {
  balanceInicial:any;
  auxiliares=[];
  auxiliarC=[];
  auxiliarT = [];
  pagos = [];
  intereses = [];
  maquinas = [];
  balanceFinal = [];
  auxiliaresAnteriores = [];
  prestamos = [];


  constructor(private _operacionService:OperacionService,
              private _productoService:ProductoService,
              private _maqService:CompraMaquinariaService,
              private _balanceService:BalanceService,
              private _resultadosService:ResultadosService,
            private _proyectoService:ProyectosService) {
              this._proyectoService.ocultaCierrePeriodo()
    this._resultadosService.vender();
    setTimeout(() => {
        this.auxiliares=this._operacionService.returnAuxiliares();
        this.auxiliaresAnteriores=this._operacionService.returnAuxiliaresAnteriores();
        this.intereses = this._operacionService.returnInter();
        this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
        this.auxiliarC=this._operacionService.returnAuxiliarC();
        this.maquinas =this._maqService.returnMaquinasCompradas();
        this.balanceInicial = this._resultadosService.balanceInicialAnterior();
        this.balanceFinal = this._resultadosService.getBalanceFinal();
        this.prestamos = this._operacionService.returnPrestamosActuales();
        this.pagos = this._operacionService.returnPagos();
    }, 1500);
  }

  ngOnInit() {
  }


  getCobroVentas(){
    var r = 0;
    for(let a of this.auxiliaresAnteriores){
      r += a.VentasPorCobrar;
    }
    for(let b of this.auxiliares){
      r += b.VentasCobradas;
    }
    return r;
  }

  getCajaBancos(){
    var  r = 0;
    for(let b of this.balanceInicial){
      r+=b.cajaBancos;
    }
    return r;
  }

  getPAcuales(){
    var r = 0;
    for(let p of this.prestamos){
      r+= p.monto;
    }
    return r;
  }

  getDisponible(){
    var d = 0;
    d = this.getCajaBancos() + this.getCobroVentas() + this.getPAcuales();
    return d;
  }

  getCostoDeTransformacion(){
    var r = 0;
    for(let aux of this.auxiliares){
      r += aux.costoTransformacionVentas;
      r -= aux.IVATrans;
    }
    return r;
  }

  getCostoDeDistribucion(){
    var r = 0;
    for(let aux of this.auxiliares){
      r += aux.costoDistDep;
      r -= aux.IVADist;
    }
    return r;
  }

  getCostoAdministrativo(){
    var r = 0;
    for(let aux of this.auxiliares){
      r += aux.costoAdminDep;
      r -= aux.IVAAdmon;
    }
    return r;
  }

  getCompras(){
    var r = 0;
    for(let b of this.auxiliares){
      r += b.comprasPagadas;
    }
    for(let b2 of this.auxiliaresAnteriores){
      r += b2.ComprasPorPagar;
    }
    return r;
  }

  getIntereses(){
    var r = 0;
    for(let b of this.intereses){
      r += b;
    }
    return r;
  }


  getPagos(){
    var r = 0;
    for(let b of this.pagos){
      r += b;
    }
    return r;
  }

  getGastosVenta(){
    var r = 0;
    for(let b of this.auxiliarC){
      r += b.desarrolloMercado + b.desarrolloProducto - b.IVAGastosVenta;
    }
    return r;
  }

  getCompraMaquinaria(){
    var r = 0;
    for(let b of this.auxiliarC){
      r += b.compraMaquinaria;
    }
    return r;
  }

  getIVA(){
    var r = 0;
    for(let b of this.balanceFinal){
      r += (b.IVAPorEnterar*11);
    }
    for(let b2 of this.balanceInicial){
      r += b2.IVAPorEnterar;
    }
    return r;
  }

  getPTU(){
    var r = 0;
    for(let b of this.balanceInicial){
      r += b.PTUPorPagar;
    }
    return r;
  }

  getISR(){
    var r = 0;
    for(let b of this.balanceFinal){
      r += b.imptosPorPagar * 11;
    }
    return r;
  }

  getSalidas(){
    var s = 0;
    s = this.getCostoDeTransformacion() + this.getCostoDeDistribucion() + this.getCostoAdministrativo() + this.getCompras() + this.getIntereses() + this.getPagos() + this.getGastosVenta() + this.getCompraMaquinaria() + this.getIVA();
    return s;
  }

  getCajaBancosFinal(){
    var c = 0;
    for(let b of this.balanceFinal){
      c += b.cajaBancos;
    }
    return c;
  }






      PDFflujo(){
      var doc= new jsPDF({
      unit: 'mm',
      format: [279,215.9]


    });

      var columns = [
      {title: "Concepto", dataKey: "cara"},
      {title: "Saldo", dataKey: "saldo"}];


      var rows = [
      {"cara":"Saldo Inicial","saldo":this.getCajaBancos()},
      {"cara":"","saldo":""},
      {"cara":"Cobros por venta","saldo":this.getCobroVentas()},
      {"cara":"Préstamos","saldo":this.getPAcuales()},
      {"cara":"Intereses","saldo":this.getIntereses()},
      {"cara":"Incremento de Capital","saldo":""},
      {"cara":"","saldo":""},
      {"cara":"Disponible","saldo":this.getDisponible()},
      {"cara":"","saldo":""},
      {"cara":"Costo de Transformación","saldo":this.getCostoDeTransformacion()},
      {"cara":"Costo de Distribución","saldo":this.getCostoDeDistribucion()},
      {"cara":"Costo de Administrativo","saldo":this.getCostoAdministrativo()},
      {"cara":"Gastos de Venta","saldo":this.getGastosVenta()},
      {"cara":"Compra de Maquinaria","saldo":this.getCompraMaquinaria()},
      {"cara":"Compras","saldo":this.getCompras()},
      {"cara":"Intereses","saldo":this.getIntereses()},
      {"cara":"Pago de Prestamos","saldo":this.getPagos()},
      {"cara":"Dividendos","saldo":""},
      {"cara":"","saldo":""},
      {"cara":"PTU","saldo":this.getPTU()},
      {"cara":"ISR","saldo":this.getISR()},
      {"cara":"IVA","saldo":this.getIVA()},
      {"cara":"","saldo":""},
      {"cara":"Total de Salidas","saldo":this.getSalidas()},
      {"cara":"Saldo Final","saldo":this.getCajaBancosFinal()}
      ];
      var t = {
        title:"Total",
        dataKey:"t"
      }



      doc.autoTable(columns, rows, {
      margin: {top: 40,
           left:15},
      tableWidth: 185,
      headerStyles: {fillColor:0},
      columnStyles: {
      cara: {halign:'left',columnWidth:65}
      },
      addPageContent: function(data) {
      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(107.9, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
      doc.setFontSize(13);
      doc.text(107.9, 23, 'Presupuesto Global de Caja y Bancos', null, null, 'center');
      doc.line(25, 27, 190, 27);
      },


      drawRow: function (row, data) {
             // Colspan
             doc.setFontStyle('bold');
             doc.setFontSize(10);
             if (row.index === 2) {
                 doc.rect(data.settings.margin.left, row.y, data.table.width, 7, 'S');
                 doc.autoTableText("Entradas", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
                     halign: 'center',
                     valign: 'middle'
                 });
                 data.cursor.y += 7;
             } else if (row.index === 9) {
                 doc.rect(data.settings.margin.left, row.y, data.table.width, 7, 'S');
                 doc.autoTableText("Salidas", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
                     halign: 'center',
                     valign: 'middle'
                 });
                 data.cursor.y += 7;
             }

             if (row.index % 5 === 0) {
                 var posY = row.y + row.height * 6 + data.settings.margin.bottom;
                 if (posY > doc.internal.pageSize.height) {
                     data.addPage();
                 }
             }
         },
         drawCell: function (cell, data) {
             // Rowspan


             var rows = data.table.rows;
             if (data.row.index == 0) {
               doc.setFillColor(176, 176, 176);
               doc.setFontType("bold")
             }else if (data.row.index == 24) {
               doc.setFillColor(176, 176, 176);
               doc.setFontType("bold")
             }else if (data.row.index == 7) {
               doc.setFillColor(176, 176, 176);
               doc.setFontType("bold")
             }else if (data.row.index == 23) {
               doc.setFillColor(176, 176, 176);
               doc.setFontType("bold")
             };
         }






      });

      var dataCSV = [
      {
        concepto: "Presupuesto Global de Caja y Bancos",
        cantidad:"",

      },
      {
        concepto: "",
        cantidad:"",

      },
      {
        concepto: "Saldo Inicial",
        cantidad:this.getCajaBancos(),

      },
      {
        concepto: "Entradas",
        cantidad:"",

      },
      {
        concepto: "Cobro por Ventas",
        cantidad:this.getCobroVentas(),

      },
      {
        concepto: "Préstamos",
        cantidad:this.getPAcuales(),

      },
      {
        concepto: "Intereses",
        cantidad:"",

      },
      {
        concepto: "Incremento de Capital",
        cantidad:"",

      },
      {
        concepto: "",
        cantidad:"",

      },
      {
        concepto: "Disponible",
        cantidad:this.getDisponible(),

      },
      {
        concepto: "",
        cantidad:"",

      },
      {
        concepto: "Salidas",
        cantidad:"",

      },
      {
        concepto: "Costo de Trasformación",
        cantidad:this.getCostoDeTransformacion(),
      },
      {
        concepto: "Costo de Distribución",
        cantidad:this.getCostoDeDistribucion(),

      },
      {
        concepto: "Costo Administrativo",
        cantidad:this.getCostoAdministrativo(),

      },
      {
        concepto: "Costo de Venta",
        cantidad:this.getGastosVenta(),

      },
      {
        concepto: "Compra de Maquinaria",
        cantidad:this.getCompraMaquinaria(),

      },
      {
        concepto: "Compras",
        cantidad:this.getCompras(),

      },
      {
        concepto: "Intereses",
        cantidad:this.getIntereses(),

      },
      {
        concepto: "Pago de Prestamos",
        cantidad:this.getPagos(),

      },
      {
        concepto: "Dividendos",
        cantidad:"",

      },
      {
        concepto: "",
        cantidad:"",

      },
      {
        concepto: "PTU",
        cantidad:this.getPTU(),

      },
      {
        concepto: "ISR",
        cantidad:this.getISR(),

      },
      {
        concepto: "IVA",
        cantidad:this.getIVA(),

      },
      {
        concepto: "",
        cantidad:"",

      },

      {
        concepto: "Total de Salidas",
        cantidad:this.getSalidas(),

      },
      {
        concepto: "Saldo Final",
        cantidad:this.getCajaBancosFinal(),

      },
      {
        concepto: "",
        cantidad:"",

      },
    ];

      doc.save("Flujo de Efectivo.pdf");
      new Angular2Csv(dataCSV, 'Flujo de Efectivo');


      }


}
