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

  constructor(private _operacionService:OperacionService,
              private _productoService:ProductoService,
              private _maqService:CompraMaquinariaService,
              private _balanceService:BalanceService,
              private _resultadosService:ResultadosService){
    this._resultadosService.vender();
    setTimeout(() => {
        this.auxiliares=this._operacionService.returnAuxiliares();
        this.productos=this._productoService.returnProductos();
        this.intereses = this._operacionService.returnInter();
        this.auxiliarT = this._operacionService.returnAuxiliarCTotal();
        this.resultados = this._operacionService.returnProductoResultados();
        this.auxiliarC=this._operacionService.returnAuxiliarC();
        this.maquinas =this._maqService.returnMaquinasCompradas();
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
                                                              {title: "", dataKey: "cara"},
                                                              {title: "Producto X", dataKey: "x"}];


                                                              var rows = [
                                                              {"cara":"Ventas Netas","x": "1000000"},
                                                              {"cara":"Costo de Ventas","x": "1000000"},
                                                              {"cara":"","x": ""},
                                                              {"cara":"Utilidad Bruta","x": "1000000"},
                                                              {"cara":"","x": ""},
                                                              {"cara":"Costo de Distribución","x": "1000000"},
                                                              {"cara":"Otros Gastos","x": "1000000"},
                                                              {"cara":"Gastos de Administración","x": "1000000"},
                                                              {"cara":"","x": ""},
                                                              {"cara":"","x": ""},
                                                              {"cara":"Utilidad en Operación" ,"x": "1000000"},
                                                              {"cara":"","x": ""},
                                                              {"cara":"Intereses" ,"x": "1000000"},
                                                              {"cara":"","x": ""},
                                                              {"cara":"Utilidad antes de Impuestos","x": "1000000"},
                                                              {"cara":"","x": ""},
                                                              {"cara":"ISR","x": "1000000"},
                                                              {"cara":"PTU","x": "1000000"},
                                                              {"cara":"","x": ""},
                                                              {"cara":"Utilidad del Ejercicio","x": "1000000"},
                                                            ];


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
