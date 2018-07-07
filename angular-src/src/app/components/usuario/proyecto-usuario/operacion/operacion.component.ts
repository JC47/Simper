import { Component, OnInit ,Pipe} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {OperacionService} from '../../../../services/operacion.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {ProductoService} from '../../../../services/producto.service';
import {BalanceService} from '../../../../services/balance.service';
import {CurrencyPipe} from '@angular/common'
import {DecimalPipe} from '@angular/common'
import {ProyectosService} from '../../../../services/proyectos.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';



declare var jsPDF: any;

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {
  productos=[];
  auxiliares=[];
  auxiliaresAnteriores=[];
  auxiliarC=[];
  opne:boolean=false;
  openAll:boolean=false;
  almacenArticuloTerm:boolean=false;
  presGlobalVentas:boolean=false;
  presGlobalProduccion:boolean=false;
  presGlobalConsumoMP:boolean=false;
  presGlobalComprasMP:boolean=false;
  presGlobalCostoTrans:boolean=false;
  presGlobalCostoDist:boolean=false;
  presGlobalCostoAdmon:boolean=false;
  presGlobalCostoVenta:boolean=false;
  presOtrosGastos:boolean=false;
  proyectos:any;
  proyectoActual:any;



  constructor(private _productoService:ProductoService,
              private _balanceService:BalanceService,
              private _operacionService:OperacionService,
              private _resultadosService:ResultadosService,
              private cp: CurrencyPipe,
              private dc:DecimalPipe,
              private _proyectoService:ProyectosService) {
    this.proyectos=this._proyectoService.returnUsuarios();
    this._proyectoService.ocultaCierrePeriodo()
    this._resultadosService.vender();
  }



  ngOnInit() {
    setTimeout(() => {
      this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'));
      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.auxiliaresAnteriores=this._operacionService.returnAuxiliaresAnteriores();
          this.auxiliares=this._operacionService.returnAuxiliares();
          this.auxiliarC=this._operacionService.returnAuxiliarC();
          this.productos=this._productoService.returnProductos();
          console.log("Aux",this.auxiliares)
          console.log("Aux",this.auxiliarC);
        }
      });
    }, 1500);
  }

  getTotalIVAVentas(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.IVAxVentas;
    }
    return r;
  }

  getTotalCostoUnitarioProduccion(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=this.getMPPuniProd(producto.Producto_idProducto) + (producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas;
    }
    return r;
  }

  getTotalCostoUnitarioTrans(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=(producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas;
    }
    return r;
  }

  getTotalCostoMP(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.materiaCosumida;
    }
    return r;
  }

  getTotalCostoUnitarioMP(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=this.getMPPuniProd(producto.Producto_idProducto);
    }
    return r;
  }

  getTotalInventarioFinal(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.unidadesAlmacenadas;
    }
    return r;
  }

  getTotalCostoProduccion(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.materiaCosumida + producto.costoTransformacionVentas + producto.costoTransformacionMaq;
    }
    return r;
  }

  getTotalCV(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoVentas;
    }
    return r;
  }

  getTotaInventarioFinal(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.inventarioFinal;
    }
    return r;
  }

  getInventarioInicialParcial(id){
    let r =0;
    for(let producto of this.auxiliaresAnteriores) {
      if(producto.Producto_idProducto == id){
        r+=producto.inventarioFinal;
      }
    }
    return r;
  }

  getTotaInventarioInicial(){
    let r =0;
    for(let producto of this.auxiliaresAnteriores) {
      r+=producto.inventarioFinal;
    }
    return r;
  }

  getTotalMOGIP(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoTransformacionVentas + producto.costoTransformacionMaq;
    }
    return r;
  }

  getTotalMPC(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.materiaCosumida;
    }
    return r;
  }

  getTotalAdmin(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoAdminDep - producto.IVAAdmon;
    }
    return r;
  }

  getTotalIVAAdmin(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=-producto.IVAAdmon;
    }
    return r;
  }

  getTotalNetoAdmin(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoAdminDep;
    }
    return r;
  }

  getTotalDepreAdmin(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoAdministrativo - producto.costoAdminDep;
    }
    return r;
  }

  getTotalGastoAdmin(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoAdministrativo;
    }
    return r;
  }

  getTotalDist(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoDistDep - producto.IVADist;
    }
    return r;
  }

  getTotalIVADist(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=-producto.IVADist;
    }
    return r;
  }

  getTotalNetoDist(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoDistDep;
    }
    return r;
  }

  getTotalDepreDist(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoDistribucion - producto.costoDistDep;
    }
    return r;
  }

  getTotalGastosDist(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoDistribucion;
    }
    return r;
  }

  getTotalVendidas(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.unidadesVendidas;
    }
    return r;
  }

  getTotalTrans(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoTransformacionVentas - producto.IVATrans;
    }
    return r;
  }

  getTotalIVA(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=-producto.IVATrans;
    }
    return r;
  }

  getTotalNeto(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoTransformacionVentas;
    }
    return r;
  }

  getTotalDep(){
    let r =0;
    for(let producto of this.auxiliares) {
      r+=producto.costoTransformacionMaq;
    }
    return r;
  }

  getTotalCostosTrans(){
    let r =0;
    for(let a of this.auxiliares) {
      r+=a.costoTransformacionVentas + a.costoTransformacionMaq;
    }
    return r;
  }

  getTotalProducidas(){
    let r =0;
    for(let a of this.auxiliares) {
      r+=a.unidadesProducidas;
    }
    return r;
  }

  getTotalPProducto(id){
    let r = 0;
    for(let a of this.auxiliarC){
      if(a.Producto_idProducto == id){
        r += a.desarrolloMercado + a.desarrolloProducto;
      }
    }
    return r;
  }

  getNameByIdProducto(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";
  }

  getPrecioVenta(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.precioVenta;
    }
    return 0;
  }

  getTotalPrecioVenta(){
    let r =0;
    for(let producto of this.productos){
       r+=producto.precioVenta;
    }
    return r;
  }





  cerrarTodo(){
      this.almacenArticuloTerm=false;
      this.presGlobalVentas=false;
      this.presGlobalProduccion=false;
      this.presGlobalConsumoMP=false;
      this.presGlobalComprasMP=false;
      this.presGlobalCostoTrans=false;
      this.presGlobalCostoDist=false;
      this.presGlobalCostoAdmon=false;
      this.presGlobalCostoVenta=false;
      this.presOtrosGastos=false;

  }

  abrirTodo(){
    this.openAll=true;
    this.almacenArticuloTerm=true;
    this.presGlobalVentas=true;
    this.presGlobalProduccion=true;
    this.presGlobalConsumoMP=true;
    this.presGlobalComprasMP=true;
    this.presGlobalCostoTrans=true;
    this.presGlobalCostoDist=true;
    this.presGlobalCostoAdmon=true;
    this.presGlobalCostoVenta=true;
    this.presOtrosGastos=true;

  }

  getMPPuniProd(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.costosMPPUniProd;
    }
    return 0;
  }

  getUnidadesAlmacenadasAnterior(idProducto){
    for(let aux of this.auxiliaresAnteriores){
      if(aux.Producto_idProducto == idProducto){
        return aux.unidadesAlmacenadas;
      }
    }
    return 0;
  }

  getTotalInventarioInicial(){
    var r = 0;
    for(let aux of this.auxiliaresAnteriores){
        r+=aux.unidadesAlmacenadas;
    }
    return r;
  }

  getUniMP(id){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.uniMP;
    }
    return 0;
  }

  getCostoUni(id){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.costoUni;
    }
    return 0;
  }

  getUniMPTotal(){
    var mpT = 0;
    for(let aux of this.auxiliares){
      mpT += this.getUniMP(aux.Producto_idProducto) * aux.unidadesProducidas;
    }
    return mpT
  }

  getUniMPTotalCash(){
    var mpTC = 0;
    mpTC = this.getUniMPTotal() * 69;
    return mpTC;
  }

  getIVAMP(){
    var mpIVA =0;
    mpIVA = this.getUniMPTotalCash() * .15;
    return mpIVA
  }

  getTotalMP(){
    var total = 0;
    total = this.getUniMPTotalCash() + this.getIVAMP();
    return total;
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
    for(let aux of this.auxiliares){
      T += aux.costoVentas;
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

  getDistTotal(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoDistribucion;
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

  getTotalMercado(){
    var T = 0;
    for(let aux of this.auxiliarC){
      T+= aux.desarrolloMercado;
    }
    return T;
  }

  getTotalProducto(){
    var T = 0;
    for(let aux of this.auxiliarC){
      T+= aux.desarrolloProducto;
    }
    return T;
  }

  getCostoAlmacen(id){
    var r = 0;
    for(let producto of this.auxiliaresAnteriores){
      if(producto.Producto_idProducto == id){
        if(producto.unidadesAlmacenadas != 0){
            r = producto.inventarioFinal / producto.unidadesAlmacenadas;
        }
      }
    }
    return r;
  }


  getUtilidadAntes(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
    }
    for(let aux2 of this.auxiliarC){
      T += -aux2.desarrolloMercado -aux2.desarrolloProducto;
    }
    return T;
  }

  getISR(){
    var isr = 0;
    var uti = this.getUtilidadAntes();
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


  PDFalmacenArticuloTerminado(){
    let vars=200000;
    let varss=this.cp.transform(vars, 'USD', true, '1.0-0');
    console.log(varss);
    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [215.9,279]});

    var columns = [
    {title: "Producto", dataKey: "producto"},
    {title: "Unidades", dataKey: "unidades"},
    {title: "Costo Unitario de Producción", dataKey: "costoUni"},
    {title: "Total", dataKey: "total"}];

    var rows = [];

    //Cosas Importantes
    for(let producto of this.auxiliaresAnteriores){
      var x = {
        "producto":this.getNameByIdProducto(producto.Producto_idProducto),
        "unidades":this.dc.transform( producto.unidadesAlmacenadas,'1.0-0'),
        "costoUni":this.cp.transform(this.getCostoAlmacen(producto.Producto_idProducto) ,'USD',true,'1.0-0'),
        "total":this.cp.transform(producto.inventarioFinal, 'USD',true,'1.0-0')
      }
      if(producto.unidadesAlmacenadas == 0){
        x.unidades = this.dc.transform( 0,'1.0-0');
        x.costoUni = this.cp.transform( 0 ,'USD',true,'1.0-0');
        x.total = this.cp.transform(0, 'USD',true,'1.0-0');
      }

      rows.push(x);
    }

    let actual=this.proyectoActual

    doc.autoTable(columns, rows, {
    margin: {top: 40,
             left:40},
     tableWidth: 200,
    headerStyles: {fillColor:0,halign:'center'},
    columnStyles: {
    	total: {halign:'right',columnWidth:'auto'},
      producto:{halign:'center'},
      unidades:{halign:'right'},
      costoUni:{halign:'right'}
    },
    addPageContent: function(data) {
      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto '+ actual, null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Almacen de Artículo Terminado del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
      doc.line(50, 27, 228, 27);
    },






    });

    doc.save("Alamcen Articulo Terminado.pdf");



    }


  CSValmacenArticuloTerminado(){
    let data:any=[
      {producto:"Almacén de Artículo Terminado del Periodo "+localStorage.getItem('numeroPeriodo')},
      {producto:"Proyecto "+this.proyectoActual},
      {prodcuto:"Producto",
       unidades:"Unidades",
       costoProd:"Costo de Producción",
       total:"Total"
      }
    ];

    for(let producto of this.auxiliaresAnteriores){
      data.push({
        prodcuto:this.getNameByIdProducto( producto.Producto_idProducto),
         unidades:producto.unidadesAlmacenadas,
         costoProd:this.getCostoAlmacen(producto.Producto_idProducto),
         total:producto.inventarioFinal
      })
    }

    new Angular2Csv(data, 'Almacen de Articulo Terminado');
  }






  PDFpresupuestoGlobalComprasMP(){


    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [215.9,279]});

    var columns = [
    {title: "Material", dataKey: "material"},
    {title: "Cantidad a Comprar", dataKey: "cantidadComprar"},
    {title: "Costo Unitario", dataKey: "costoUni"},
    {title: "Importe", dataKey: "importe"},
    {title: "IVA Acreditable", dataKey: "ivaA"},
    {title: "Total a Pagar", dataKey: "total"}];

    var rows = [
    {"material":"1",
    "cantidadComprar":this.dc.transform(this.getUniMPTotal(),'1.0-0'),
    "costoUni":"69",
    "importe":this.cp.transform(this.getUniMPTotalCash(),'USD',true,'1.0-0'),
    "ivaA":this.cp.transform(this.getIVAMP(),'USD',true,'1.0-0'),
    "total":this.cp.transform(this.getTotalMP(),'USD',true,'1.0-0')
    }
    ];

    let actual=this.proyectoActual

    doc.autoTable(columns, rows, {
    margin: {top: 40,
             left:40},
     tableWidth: 200,
    headerStyles: {fillColor:0,halign:'center'},
    columnStyles: {
    	cantidadComprar: {halign:'right',columnWidth:'auto'},
      material:{halign:'center'},
      importe:{halign:'right'},
      costoUni:{halign:'right'},
      ivaA:{halign:'right'},
      total:{halign:'right'}
    },
    addPageContent: function(data) {
      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto '+ actual, null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Presupuesto Global de Compras de Materia Prima e I.V.A. del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
      doc.line(50, 27, 228, 27);
    },
    });

    doc.save("Presupuesto Global de Compras de Materia Prima.pdf");



    }





    CSVpresupuestoGlobalComprasMP(){
      let data=[
        {material:"Presupuesto Global de Compras del Periodo "+ localStorage.getItem('numeroPeriodo')},
        {material:"Proyecto "+this.proyectoActual,},
        {
          material:"Material",
          cantidadComprar:"Cantidad a Comprar",
          costoUni:"Costo Unitario",
          importe:"Importe",
          ivaA:"Iva Acreditable",
          total:"Total"
        },
        {
          material:1,
          cantidadComprar:this.getUniMPTotal(),
          costoUni:"69",
          importe:this.getUniMPTotalCash(),
          ivaA:this.getIVAMP(),
          total:this.getTotalMP()
        }
      ];

      new Angular2Csv(data, 'Presupuesto Global de Compras');

    }


    PDFpresupuestoGlobalConsumoMP(){
      var doc= new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [215.9,279]});

      var columns = [
      {title: "Producto", dataKey: "producto"},
      {title: "Cantidad Unitaria", dataKey: "cantidadUnit"},
      {title: "Costo Unitario", dataKey: "costoUni"},
      {title: "Unidades a Producir", dataKey: "unidadProd"},
      {title: "Cantidad", dataKey: "cantidad"},
      {title: "Importe", dataKey: "importe"}];

      var rows = [];

      //Cosas Importantes
      for(let producto of this.auxiliares){
        var x = {
          "producto":this.getNameByIdProducto(producto.Producto_idProducto),
          "cantidadUnit":this.dc.transform(this.getUniMP(producto.Producto_idProducto),'1.0-0'),
          "costoUni":this.cp.transform( this.getCostoUni(producto.Producto_idProducto) ,'USD',true,'1.0-0'),
          "unidadProd":this.dc.transform( producto.unidadesProducidas ,'1.0-0'),
          "cantidad":this.dc.transform( (this.getUniMP(producto.Producto_idProducto)*producto.unidadesProducidas),'1.0-0'),
          "importe":this.cp.transform( (this.getCostoUni(producto.Producto_idProducto)*(this.getUniMP(producto.Producto_idProducto) * producto.unidadesProducidas)) ,'USD',true,'1.0-0')
        }
        //this.cp.transform(  ,'USD',true,'1.0-0')
        rows.push(x);
      }

      let actual=this.proyectoActual

      doc.autoTable(columns, rows, {
      margin: {top: 40,
               left:40},
       tableWidth: 200,
      headerStyles: {fillColor:0, halign:'center'},
      columnStyles: {
        producto: {halign:'center',columnWidth:'auto'},
        cantidadUnit:{halign:'right'},
        costoUni:{halign:'right'},
        unidadProd:{halign:'right'},
        cantidad:{halign:'right'},
        importe:{halign:'right'},
      },



      addPageContent: function(data) {
        doc.setFontSize(15);
        doc.setFontType("bold");
        doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
        doc.setFontSize(13);
        doc.text(139.5, 23, 'Presupuesto Global de Consumo de Materias Primas del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
        doc.line(50, 27, 228, 27);
      },

      });

      doc.save("Presupuesto Global de Consumo de Materias Primas.pdf");




                    var columns = [
                    {title: "Producto", dataKey: "producto"},
                    {title: "Unidades A Vender", dataKey: "unidadesVender"},
                    {title: "Precio de Venta", dataKey: "precioVenta"},
                    {title: "Venta en $", dataKey: "vnetaEn"},
                    {title: "Importe", dataKey: "importe"}
                    ];

      }

  CSVpresupuestoGlobalConsumoMP(){

    let data:any=[
      {producto:"Presupuesto Global de Consumo de Materia Prima del Periodo "+localStorage.getItem('numeroPeriodo') },
      {producto:"Proyecto "+  this.proyectoActual},
    {
      producto:"Producto",
      cantidadUnit:"Cantidad Unitaria",
      costoUni:"Costo Unitario",
      unidadProd:"Unidades Producidas",
      cantidad:"Cantidad",
      importe:"Importe"
    }];

    for(let producto of this.auxiliares){
      data.push(
        {
          producto:this.getNameByIdProducto(producto.Producto_idProducto),
          cantidadUnit:this.getUniMP(producto.Producto_idProducto),
          costoUni:this.getCostoUni(producto.Producto_idProducto),
          unidadProd:producto.unidadesProducidas,
          cantidad:producto.Producto_idProducto*producto.unidadesProducidas,
          importe:producto.Producto_idProducto*(this.getUniMP(producto.Producto_idProducto) * producto.unidadesProducidas)
        }
      )
    }
    new Angular2Csv(data, 'Presupuesto Global de Consumo de Materia Prima');

  }


  PDFpresupuestoGlobalVentasIVA(){
    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [215.9,279]});



    var columns = [
    {title: "Producto", dataKey: "producto"},
    {title: "Unidades a Vender", dataKey: "unidadesVender"},
    {title: "Precio de Venta", dataKey: "precioVenta"},
    {title: "Venta en $", dataKey: "venta"},
    {title: "IVA", dataKey: "iva"},
    {title: "Importe", dataKey: "importe"}];



    var rows=[];

    let actual=this.proyectoActual
    let conf={
    margin: {top: 40,
             left:40},
     tableWidth: 200,
    headerStyles: {fillColor:0,halign:'center'},
    columnStyles: {
      producto:{halign:'center'},
      unidadesVender:{halign:'right'},
      precioVenta:{halign:'right'},
      venta:{halign:'right'},
      iva:{halign:'right'},
      importe:{halign:'right'}
    },


    addPageContent: function(data) {
      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Presupuesto Global de Ventas e IVA del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
      doc.line(50, 27, 228, 27);
    }};


    for(let producto of this.auxiliares){
      rows.push({
        "producto":this.getNameByIdProducto(producto.Producto_idProducto),
        "unidadesVender":this.dc.transform(producto.unidadesVendidas ,'1.0-0'),
        "precioVenta":this.cp.transform(this.getPrecioVenta(producto.Producto_idProducto),'USD',true,'1.0-0'),
        "venta":this.cp.transform((producto.Ventas - producto.IVAxVentas),'USD',true,'1.0-0'),
        "iva":this.cp.transform(producto.IVAxVentas,'USD',true,'1.0-0'),
        "importe":this.cp.transform(producto.Ventas,'USD',true,'1.0-0')
      })

    }

    rows.push({
      "producto":"Total",
      "unidadesVender":"",
      "precioVenta":"",
      "venta":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0'),
      "iva":this.cp.transform(this.getTotalIVAVentas(),'USD',true,'1.0-0'),
      "importe":this.cp.transform(this.getTotalVentas()-this.getTotalIVAVentas(),'USD',true,'1.0-0')
    })


    doc.autoTable(columns, rows,conf );

    doc.save("Presupuesto Global de Ventas e IVA.pdf");



    }


    CSVpresupuestoGlobalVentasIVA(){
      let data:any=[
        {producto:"Presupuesto Global de Ventas e IVA del Periodo" +localStorage.getItem('numeroPeriodo')},
        {producto:"Proyecto: "+this.proyectoActual},
        {producto:"Producto",unidadesVender:"Unidades A Vender",
         precioVenta:"Precio de Venta",
         venta:"Venta en $",
         IVA:"IVA",
         importe:"Importe"}
      ];


      for(let producto of this.auxiliares){
        data.push(
          {producto:this.getNameByIdProducto(producto.Producto_idProducto),
           unidadesVender:producto.unidadesVendidas,
           precioVenta:this.getPrecioVenta(producto.Producto_idProducto),
           venta:producto.Ventas - producto.IVAxVentas,
           IVA:producto.IVAxVentas,
           importe:producto.Ventas}
        )
      }

      data.push({
        "producto":"Total",
        "unidadesVender":"",
        "precioVenta":"",
        "venta":this.cp.transform(this.getTotalVentas(),'USD',true,'1.0-0'),
        "IVA":this.cp.transform(this.getTotalIVAVentas(),'USD',true,'1.0-0'),
        "importe":this.cp.transform(this.getTotalVentas()-this.getTotalIVAVentas(),'USD',true,'1.0-0')
      })

      new Angular2Csv(data, 'Presupuesto Global de Ventas e IVA');





    }



    PDFpresupuestoGlobalProduccion(){
      var doc= new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [215.9,279]});

      var columns2=[
        {title:"",dataKey:"init"}
      ]

      var rows2=[
        {"init":"Unidades a Vender (+)"},
        {"init":"Inventario Final(+)"},
        {"init":"Inventario Inicial(-)"},
        {"init":"Unidades a Producir"},
        {"init":"Costo Unitario(M.P.)"},
        {"init":"Costo Total(M.P.)"},
        {"init":"Costo Unitario(Transformación)"},
        {"init":"Costo Total(Trasnformación)"},
        {"init":"Costo Producción Unitario"},
        {"init":"Costo Producción Total"}
      ]



      let conf= {
      margin: {top: 40,
               left:10},
      headerStyles: {fillColor:0,halign:'center'},
      columnStyles: {
        cara: {halign:'left',columnWidth:40}
      },
      addPageContent: function(data) {
        doc.setFontSize(15);
        doc.setFontType("bold");
        doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
        doc.setFontSize(13);
        doc.text(139.5, 23, 'Presupuesto Global de Ventas e IVA del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
        doc.line(50, 27, 228, 27);
      }}

      var rows = [];
      for(let producto of this.auxiliares){
      let x={
          title:this.getNameByIdProducto(producto.Producto_idProducto),
          dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
      }
      columns2.push(x)

        rows2[0][x.dataKey] =this.dc.transform(producto.unidadesVendidas,'1.0-0');
        rows2[1][x.dataKey] =this.dc.transform(producto.unidadesAlmacenadas,'1.0-0')
        rows2[2][x.dataKey] = this.dc.transform(this.getUnidadesAlmacenadasAnterior(producto.Producto_idProducto),'1.0-0')
        rows2[3][x.dataKey] = this.dc.transform(producto.unidadesProducidas,'1.0-0')
        rows2[4][x.dataKey] =this.cp.transform(this.getMPPuniProd(producto.Producto_idProducto),'USD',true,'1.0-0')
        rows2[5][x.dataKey] = this.cp.transform(producto.materiaCosumida,'USD',true,'1.0-0')
        rows2[6][x.dataKey] = this.cp.transform(((producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas),'USD',true,'1.0-0')
        rows2[7][x.dataKey] =this.cp.transform((producto.costoTransformacionVentas + producto.costoTransformacionMaq),'USD',true,'1.0-0')
        rows2[8][x.dataKey] =this.cp.transform((this.getMPPuniProd(producto.Producto_idProducto) + (producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas),'USD',true,'1.0-0')
        rows2[9][x.dataKey] = this.cp.transform((producto.costoTransformacionVentas + producto.costoTransformacionMaq + producto.materiaCosumida),'USD',true,'1.0-0')
        conf.columnStyles[x.dataKey]={halign:'right'};
      }


      let x={
          title:"Total",
          dataKey:"total"
      }
      columns2.push(x)

        rows2[0][x.dataKey] =this.dc.transform(this.getTotalVendidas(),'1.0-0');
        rows2[1][x.dataKey] =this.dc.transform(this.getTotalInventarioFinal(),'1.0-0')
        rows2[2][x.dataKey] = this.dc.transform(this.getTotalInventarioInicial(),'1.0-0')
        rows2[3][x.dataKey] = this.dc.transform(this.getTotalProducidas(),'1.0-0')
        rows2[4][x.dataKey] =""
        rows2[5][x.dataKey] = this.cp.transform(this.getTotalCostoMP(),'USD',true,'1.0-0')
        rows2[6][x.dataKey] = ""
        rows2[7][x.dataKey] =this.cp.transform(this.getTotalCostosTrans(),'USD',true,'1.0-0')
        rows2[8][x.dataKey] =""
        rows2[9][x.dataKey] = this.cp.transform(this.getTotalCostoProduccion(),'USD',true,'1.0-0')
        conf.columnStyles[x.dataKey]={halign:'right'};


      let actual=this.proyectoActual

      doc.autoTable(columns2, rows2, conf);

      doc.save("Presupuesto Global de Produccion.pdf");



      }


      CSVpresupuestoGlobalProduccion(){


        let data:any=[
          {producto:"Poryecto: "+this.proyectoActual,invFinal:"Periodo: "+localStorage.getItem('numeroPeriodo')},
          {cara:""},
          {cara:"Unidades A Vender (+)"},
          {cara:"Inventario Final (+)"},
          {cara:"Inventario Inicial(-)"},
          {cara:"Unidades a Producir"},
          {cara:"Costo Unitario (M.P.)"},
          {cara:"Costo Total (M.P.)"},
          {cara:"Costo Unitario (Trasnformación)"},
          {cara:"Costo Total (Transformación)"},
          {cara:"Costo de Producción Unitario"},
          {cara:"Costo de Producción Total"}
        ];


        for(let producto of this.auxiliares){
          data[1][this.getNameByIdProducto(producto.Producto_idProducto)]=this.getNameByIdProducto(producto.Producto_idProducto);
          data[2][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.unidadesVendidas
          data[3][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.unidadesAlmacenadas
          data[4][this.getNameByIdProducto(producto.Producto_idProducto)]=this.getUnidadesAlmacenadasAnterior(producto.Producto_idProducto)
          data[5][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.unidadesProducidas
          data[6][this.getNameByIdProducto(producto.Producto_idProducto)]=this.getMPPuniProd(producto.Producto_idProducto)
          data[7][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.materiaCosumida
          data[8][this.getNameByIdProducto(producto.Producto_idProducto)]=((producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas)
          data[9][this.getNameByIdProducto(producto.Producto_idProducto)]=(producto.costoTransformacionVentas + producto.costoTransformacionMaq)
          data[10][this.getNameByIdProducto(producto.Producto_idProducto)]=(this.getMPPuniProd(producto.Producto_idProducto) + (producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas)
          data[11][this.getNameByIdProducto(producto.Producto_idProducto)]=(producto.costoTransformacionVentas + producto.costoTransformacionMaq + producto.materiaCosumida);
        }

        data[1]["total"]="Total"
        data[2]["total"]=this.getTotalVendidas()
        data[3]["total"]=this.getTotalInventarioFinal()
        data[4]["total"]=this.getTotalInventarioInicial()
        data[5]["total"]=this.getTotalProducidas()
        data[6]["total"]=""
        data[7]["total"]=this.getTotalCostoMP()
        data[8]["total"]=""
        data[9]["total"]=this.getTotalCostosTrans()
        data[10]["total"]=""
        data[11]["total"]=this.getTotalCostoProduccion()





        new Angular2Csv(data, 'Presupuesto Global de Producción');
      }



  PDFpresupuestoGlobalCostoTrans(){
  var doc= new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: [215.9,279]});

  var columns = [
  {title: "", dataKey: "cara"}];

  var rows = [
  {"cara":"Unidades a Producir"},
  {"cara":"Costo Unitario Total"},
  {"cara":"Costos de Transformación"},
  {"cara":""},
  {"cara":"Menos: "},
  {"cara":"Depreciaciones"},
  {"cara":"Neto"},
  {"cara":""},
  {"cara":"Menos partidas que no incluyen I.V.A."},
  {"cara":""},
  {"cara":"Sueldos y Salarios"},
  {"cara":"Previsión Social"},
  {"cara":""},
  {"cara":"Neto"},
  {"cara":"I.V.A."},
  {"cara":"Total a Pagar"},
  ];


  let actual=this.proyectoActual

  let options={
  margin: {top: 40,
     left:40},
  tableWidth: 200,
  headerStyles: {fillColor:0,halign:'center'},
  columnStyles: {
  cara: {halign:'left',columnWidth:65}

  },
  addPageContent: function(data) {
  doc.setFontSize(15);
  doc.setFontType("bold");
  doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
  doc.setFontSize(13);
  doc.text(139.5, 23, 'Presupuesto Global de  Costos de Trasnformación del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
  doc.line(50, 27, 228, 27);
  }, }



  for(let producto of this.auxiliares){
    let x = {
      title:this.getNameByIdProducto(producto.Producto_idProducto),
      dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
    }
    columns.push(x);
    rows[0][x.dataKey] = this.dc.transform(producto.unidadesProducidas,'1.0-0');
    rows[1][x.dataKey] = this.cp.transform( (producto.costoTransformacionVentas + producto.costoTransformacionMaq )/ producto.unidadesProducidas,'USD',true,'1.0-0');
    rows[2][x.dataKey] = this.cp.transform( producto.costoTransformacionVentas + producto.costoTransformacionMaq ,'USD',true,'1.0-0');
    rows[5][x.dataKey] = this.cp.transform( producto.costoTransformacionMaq ,'USD',true,'1.0-0');
    rows[6][x.dataKey] = this.cp.transform( producto.costoTransformacionVentas ,'USD',true,'1.0-0');
    rows[10][x.dataKey] = "$0";
    rows[11][x.dataKey] = "$0";
    rows[13][x.dataKey] = this.cp.transform( producto.costoTransformacionVentas ,'USD',true,'1.0-0');
    rows[14][x.dataKey] =  this.cp.transform(-producto.IVATrans ,'USD',true,'1.0-0');
    rows[15][x.dataKey] = this.cp.transform( (producto.costoTransformacionVentas - producto.IVATrans) ,'USD',true,'1.0-0')


    options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};
  }

  let x = {
    title:"Total",
    dataKey:"total"
  }
  columns.push(x);
  rows[0][x.dataKey] = this.dc.transform(this.getTotalProducidas(),'1.0-0');
  rows[1][x.dataKey] = ""
  rows[2][x.dataKey] = this.cp.transform(this.getTotalCostosTrans(),'USD',true,'1.0-0');
  rows[5][x.dataKey] =this.cp.transform(this.getTotalDep() ,'USD',true,'1.0-0');
  rows[6][x.dataKey] = this.cp.transform( this.getTotalNeto() ,'USD',true,'1.0-0');
  rows[10][x.dataKey] = "$0";
  rows[11][x.dataKey] = "$0";
  rows[13][x.dataKey] = this.cp.transform(this.getTotalNeto(),'USD',true,'1.0-0');
  rows[14][x.dataKey] =  this.cp.transform(this.getTotalIVA(),'USD',true,'1.0-0');
  rows[15][x.dataKey] = this.cp.transform(this.getTotalTrans() ,'USD',true,'1.0-0')
  options.columnStyles["total"]={halign:'right'};



//this.cp.transform(  ,'USD',true,'1.0-0')


  doc.autoTable(columns, rows,options);

  doc.save("Presupuesto Global de Costos de Trasnformacion.pdf");



  }

  CSVpresupuestoGlobalCostoTrans(){


    let data:any=[
      {cara:"Presupuesto Global de Costo de Transformación del Periodo: "+localStorage.getItem('numeroPeriodo')},
      {cara:"Proyecto: "+this.proyectoActual},
      {cara:"Unidades a Producir"},
      {cara:"Costo Unitario Total"},
      {cara:"Costos de Transformación"},
      {cara:"Menos: "},
      {cara:"Depreciaciones"},
      {cara:"Neto"},
      {cara:"Menos partidas que no incluyen I.V.A."},
      {cara:"Sueldos y Salarios"},
      {cara:"Previsión Social"},
      {cara:"Neto"},
      {cara:"I.V.A."},
      {cara:"Total a Pagar"},
    ];

    for(let producto of this.auxiliares){
      data[2][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.unidadesProducidas;
      data[3][this.getNameByIdProducto(producto.Producto_idProducto)]=(producto.costoTransformacionVentas + producto.costoTransformacionMaq )/ producto.unidadesProducidas;
      data[4][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoTransformacionVentas + producto.costoTransformacionMaq;
      data[6][this.getNameByIdProducto(producto.Producto_idProducto)]= producto.costoTransformacionMaq;
      data[7][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoTransformacionVentas
      data[9][this.getNameByIdProducto(producto.Producto_idProducto)]=0
      data[10][this.getNameByIdProducto(producto.Producto_idProducto)]=0
      data[11][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoTransformacionVentas
      data[12][this.getNameByIdProducto(producto.Producto_idProducto)]=-producto.IVATrans;
      data[13][this.getNameByIdProducto(producto.Producto_idProducto)]=(producto.costoTransformacionVentas - producto.IVATrans);
    }

    data[2]["total"]=this.getTotalProducidas()
    data[3]["total"]=""
    data[4]["total"]=this.getTotalCostosTrans()
    data[6]["total"]=this.getTotalDep()
    data[7]["total"]=this.getTotalNeto()
    data[9]["total"]="$0"
    data[10] ["total"]="$0"
    data[11]["total"]=this.getTotalNeto()
    data[12]["total"]=this.getTotalIVA()
    data[13]["total"]=this.getTotalTrans()

    new Angular2Csv(data, 'Presupuesto Global de Costos de Trasnformación');

  }


  PDFpresupuestoGlobalCostoDist(){
    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [215.9,279]});

    var columns = [
    {title: "", dataKey: "cara"}];


    var rows = [
    {"cara":"Unidades a Vender"},
    {"cara":""},
    {"cara":"Costo Unitario Total"},
    {"cara":""},
    {"cara":"Gasto de distribución"},
    {"cara":""},
    {"cara":"Menos: "},
    {"cara":"Depreciaciones"},
    {"cara":"Neto"},
    {"cara":""},
    {"cara":"Menos partidas que no incluyen I.V.A."},
    {"cara":"Sueldos y Salarios"},
    {"cara":"Previsión Social"},
    {"cara":""},
    {"cara":"Neto"},
    {"cara":"I.V.A."},
    {"cara":"Total a Pagar"},
  ];

  let actual=this.proyectoActual

 let options={
 margin: {top: 40,
          left:40},
  tableWidth: 200,
 headerStyles: {fillColor:0,halign:'center'},
 columnStyles: {
   cara: {halign:'left',columnWidth:65}
 },
 addPageContent: function(data) {
   doc.setFontSize(15);
   doc.setFontType("bold");
   doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
   doc.setFontSize(13);
   doc.text(139.5, 23, 'Presupuesto Global de  Gasto de Distribución del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
   doc.line(50, 27, 228, 27);
 }}



  for(let producto of this.auxiliares){
    let x = {
      title:this.getNameByIdProducto(producto.Producto_idProducto),
      dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
    }
    columns.push(x);
    rows[0][x.dataKey] = this.dc.transform( producto.unidadesVendidas,'1.0-0')
    rows[2][x.dataKey] = this.cp.transform((producto.costoDistribucion / producto.unidadesVendidas) ,'USD',true,'1.0-0')
    rows[4][x.dataKey] =  this.cp.transform( producto.costoDistribucion ,'USD',true,'1.0-0');
    rows[7][x.dataKey] =  this.cp.transform( (producto.costoDistribucion - producto.costoDistDep),'USD',true,'1.0-0')
    rows[8][x.dataKey] = this.cp.transform( producto.costoDistDep ,'USD',true,'1.0-0')
    rows[11][x.dataKey] = "$0";
    rows[12][x.dataKey] = "$0";
    rows[14][x.dataKey] =  this.cp.transform(producto.costoDistDep ,'USD',true,'1.0-0')
    rows[15][x.dataKey] =  this.cp.transform(-producto.IVADist ,'USD',true,'1.0-0')
    rows[16][x.dataKey] = this.cp.transform( (producto.costoDistDep - producto.IVADist) ,'USD',true,'1.0-0')

    options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};

  }



  let x = {
    title:"Total",
    dataKey:"total"
  }
  columns.push(x);
  rows[0][x.dataKey] = this.dc.transform( this.getTotalVendidas(),'1.0-0')
  rows[2][x.dataKey] =""
  rows[4][x.dataKey] =  this.cp.transform(this.getTotalGastosDist() ,'USD',true,'1.0-0');
  rows[7][x.dataKey] =  this.cp.transform(this.getTotalDepreDist(),'USD',true,'1.0-0')
  rows[8][x.dataKey] = this.cp.transform(this.getTotalNetoDist() ,'USD',true,'1.0-0')
  rows[11][x.dataKey] = "$0";
  rows[12][x.dataKey] = "$0";
  rows[14][x.dataKey] =  this.cp.transform(this.getTotalNetoDist() ,'USD',true,'1.0-0')
  rows[15][x.dataKey] =  this.cp.transform(this.getTotalIVADist() ,'USD',true,'1.0-0')
  rows[16][x.dataKey] = this.cp.transform( this.getTotalDist() ,'USD',true,'1.0-0')

  options.columnStyles["total"]={halign:'right'};





    doc.autoTable(columns, rows,options);

    doc.save("Presupuesto Global de Gasto de Distribucion.pdf");



    }

    CSVpresupuestoGlobalCostoDist(){
      let data:any=[
        {cara:"Presupuesto Global de Costo de Distribución del Periodo: "+localStorage.getItem('numeroPeriodo')},
        {cara:"Proyecto: "+this.proyectoActual},
        {cara:""},
        {cara:"Unidades a Vender"},
        {cara:"Costo Unitario Total"},
        {cara:"Gasto de Distribución"},
        {cara:"Menos: "},
        {cara:"Depreciaciones"},
        {cara:"Neto"},
        {cara:"Menos partidas que no incluyen I.V.A."},
        {cara:"Sueldos y Salarios"},
        {cara:"Previsión Social"},
        {cara:"Neto"},
        {cara:"I.V.A."},
        {cara:"Total a Pagar"},
      ];


      for(let producto of this.auxiliares){
        data[2][this.getNameByIdProducto(producto.Producto_idProducto)]=this.getNameByIdProducto(producto.Producto_idProducto);
        data[3][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.unidadesVendidas;
        data[4][this.getNameByIdProducto(producto.Producto_idProducto)]= producto.costoDistribucion / producto.unidadesVendidas;
        data[5][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoDistribucion
        data[7][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoDistribucion - producto.costoDistDep
        data[8][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoDistDep
        data[10][this.getNameByIdProducto(producto.Producto_idProducto)]=0
        data[11][this.getNameByIdProducto(producto.Producto_idProducto)]=0
        data[12][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoDistDep;
        data[13][this.getNameByIdProducto(producto.Producto_idProducto)]=-producto.IVADist;
        data[14][this.getNameByIdProducto(producto.Producto_idProducto)]=(producto.costoDistDep - producto.IVADist)
      }

      data[2]["total"]="Total";
      data[3]["total"]=this.getTotalVendidas();
      data[5]["total"]=this.getTotalGastosDist();
      data[7]["total"]=this.getTotalDepreDist();
      data[8]["total"]=this.getTotalNeto();
      data[10]["total"]=0;
      data[11]["total"]=0;
      data[12]["total"]=this.getTotalNeto();
      data[13]["total"]=this.getTotalIVADist();
      data[14]["total"]=this.getTotalDist();



      new Angular2Csv(data, 'Presupuesto Global de Gasto de Distribución');

    }


    PDFpresupuestoGlobalCostoAdmin(){
      var doc= new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [215.9,279]});

      var columns = [
      {title: "", dataKey: "cara"}];


      var rows = [
        {"cara":"Unidades a Vender"},
        {"cara":""},
        {"cara":"Costo Unitario Total"},
        {"cara":""},
        {"cara":"Gasto de administracion"},
        {"cara":""},
        {"cara":"Menos: "},
        {"cara":"Depreciaciones"},
        {"cara":"Neto"},
        {"cara":""},
        {"cara":"Menos partidas que no incluyen I.V.A."},
        {"cara":""},
        {"cara":"Sueldos y Salarios"},
        {"cara":"Previsión Social"},
        {"cara":""},
        {"cara":"Neto"},
        {"cara":"I.V.A."},
        {"cara":"Total a Pagar"},
    ];

    let actual=this.proyectoActual

    let options={
    margin: {top: 40,
             left:40},
     tableWidth: 200,
    headerStyles: {fillColor:0,halign:'center'},
    columnStyles: {
      cara: {halign:'left',columnWidth:65}
    },
    addPageContent: function(data) {
      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Presupuesto Global de  Gasto de Administración del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
      doc.line(50, 27, 228, 27);
    },
    }


    for(let producto of this.auxiliares){
      let x = {
        title:this.getNameByIdProducto(producto.Producto_idProducto),
        dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
      }
      columns.push(x);
      rows[0][x.dataKey] =  this.cp.transform( producto.unidadesVendidas ,'USD',true,'1.0-0')
      rows[2][x.dataKey] =  this.cp.transform( (producto.costoAdministrativo/producto.unidadesVendidas ) ,'USD',true,'1.0-0')
      rows[4][x.dataKey] =  this.cp.transform(producto.costoAdministrativo ,'USD',true,'1.0-0')
      rows[7][x.dataKey] =  this.cp.transform( (producto.costoAdministrativo - producto.costoAdminDep) ,'USD',true,'1.0-0')
      rows[8][x.dataKey] =  this.cp.transform( producto.costoAdminDep ,'USD',true,'1.0-0')
      rows[12][x.dataKey] = "$0";
      rows[13][x.dataKey] = "$0";
      rows[15][x.dataKey] =  this.cp.transform(producto.costoAdminDep ,'USD',true,'1.0-0')
      rows[16][x.dataKey] =  this.cp.transform( -producto.IVAAdmon ,'USD',true,'1.0-0')
      rows[17][x.dataKey] =  this.cp.transform((producto.costoAdminDep - producto.IVAAdmon),'USD',true,'1.0-0')

        options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};

    }

    let x = {
      title:"Total",
      dataKey:"total"
    }
    columns.push(x);
    rows[0][x.dataKey] =  this.cp.transform(this.getTotalVendidas(),'USD',true,'1.0-0')
    rows[2][x.dataKey] = ""
    rows[4][x.dataKey] =  this.cp.transform(this.getTotalGastoAdmin() ,'USD',true,'1.0-0')
    rows[7][x.dataKey] =  this.cp.transform(this.getTotalDepreAdmin() ,'USD',true,'1.0-0')
    rows[8][x.dataKey] =  this.cp.transform(this.getTotalNetoAdmin() ,'USD',true,'1.0-0')
    rows[12][x.dataKey] = "$0";
    rows[13][x.dataKey] = "$0";
    rows[15][x.dataKey] =  this.cp.transform(this.getTotalNetoAdmin() ,'USD',true,'1.0-0')
    rows[16][x.dataKey] =  this.cp.transform(this.getTotalIVAAdmin() ,'USD',true,'1.0-0')
    rows[17][x.dataKey] =  this.cp.transform(this.getTotalAdmin(),'USD',true,'1.0-0')

      options.columnStyles["total"]={halign:'right'};



      doc.autoTable(columns, rows, options);

      doc.save("Presupuesto Global de Gasto de Administracion.pdf");



      }


      CSVpresupuestoGlobalCostoAdmin(){




        let data:any=[
          {cara:"Presupuesto Global de Costo de Administración del Periodo: "+localStorage.getItem('numeroPeriodo')},
          {cara:"Proyecto: "+this.proyectoActual},
          {cara:""},
          {cara:"Unidades a Vender"},
          {cara:"Costo Unitario Total"},
          {cara:"Gasto de Administración"},
          {cara:"Menos: "},
          {cara:"Depreciaciones"},
          {cara:"Neto"},
          {cara:"Menos partidas que no incluyen I.V.A."},
          {cara:"Sueldos y Salarios"},
          {cara:"Previsión Social"},
          {cara:"Neto"},
          {cara:"I.V.A."},
          {cara:"Total a Pagar"},
        ];

        for(let producto of this.auxiliares){
          data[2][this.getNameByIdProducto(producto.Producto_idProducto)]=this.getNameByIdProducto(producto.Producto_idProducto);
          data[3][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.unidadesVendidas;
          data[4][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoAdministrativo/producto.unidadesVendidas;
          data[5][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoAdministrativo
          data[7][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoAdministrativo - producto.costoAdminDep
          data[8][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoAdminDep
          data[10][this.getNameByIdProducto(producto.Producto_idProducto)]=0
          data[11][this.getNameByIdProducto(producto.Producto_idProducto)]=0
          data[12][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoAdminDep;
          data[13][this.getNameByIdProducto(producto.Producto_idProducto)]=-producto.IVAAdmon;
          data[14][this.getNameByIdProducto(producto.Producto_idProducto)]=(producto.costoAdminDep - producto.IVAAdmon);
        }

        data[2]["total"]="Total"
        data[3]["total"]=this.getTotalVendidas()
        data[4]["total"]=""
        data[5]["total"]=this.getTotalGastoAdmin()
        data[7]["total"]=this.getTotalDepreAdmin()
        data[8]["total"]=this.getTotalNetoAdmin()
        data[10]["total"]="$0"
        data[11]["total"]="$0"
        data[12]["total"]=this.getTotalNetoAdmin()
        data[13]["total"]=this.getTotalIVAAdmin()
        data[14]["total"]=this.getTotalAdmin()


        new Angular2Csv(data, 'Presupuesto Global de Gasto de Administración');

      }



      PDFpresupuestoGlobalOtrosGastos(){
        var doc= new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [215.9,279]});

        var columns = [
        {title: "", dataKey: "cara"}];


        var rows = [
        {"cara":"Desarrollo de Producto"},
        {"cara":"Desarrollo de Mercado"},
        {"cara":"Total"}
      ];




      let actual=this.proyectoActual

      let options={
      margin: {top: 40,
               left:40},
       tableWidth: 200,
      headerStyles: {fillColor:0},
      columnStyles: {
        cara: {halign:'left',columnWidth:65},
      },
      addPageContent: function(data) {
        doc.setFontSize(15);
        doc.setFontType("bold");
        doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
        doc.setFontSize(13);
        doc.text(139.5, 23, 'Presupuesto Global de Otros Gastos del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
        doc.line(50, 27, 228, 27);
      }}




      for(let producto of this.auxiliarC){
        var x = {
          title:this.getNameByIdProducto(producto.Producto_idProducto),
          dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
        }
        columns.push(x);
        rows[0][x.dataKey] =  this.cp.transform( producto.desarrolloProducto ,'USD',true,'1.0-0')
        rows[1][x.dataKey] =  this.cp.transform( producto.desarrolloMercado ,'USD',true,'1.0-0')
        rows[2][x.dataKey] =  this.cp.transform( producto.desarrolloMercado+producto.desarrolloProducto ,'USD',true,'1.0-0')

        options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};

      }




      columns.push({
               title:"Total",
               dataKey:"t"
                           });



      rows[0]["t"] =   this.cp.transform(this.getTotalProducto() ,'USD',true,'1.0-0')
      rows[1]["t"] =  this.cp.transform( this.getTotalMercado() ,'USD',true,'1.0-0')
      rows[2]["t"] =  this.cp.transform( this.getTotalMercado()+this.getTotalProducto() ,'USD',true,'1.0-0')
      options.columnStyles["t"]={halign:'right'};



        doc.autoTable(columns, rows,options );

        doc.save("Presupuesto Global Otros Gastos.pdf");



        }


      CSVpresupuestoGlobalOtrosGastos(){
        let data=[
          {cara:"Proyecto: "+this.proyectoActual,prod:"Periodo: "+localStorage.getItem('numeroPeriodo')},
          {cara:""},
          {cara:"Desarrollo de Producto"},
          {cara:"Desarrollo de Mercado"},
          {cara:"Total"}
        ];




        for(let producto of this.auxiliarC){

          data[1][this.getNameByIdProducto(producto.Producto_idProducto)]=this.getNameByIdProducto(producto.Producto_idProducto)

          data[2][this.getNameByIdProducto(producto.Producto_idProducto)] =  producto.desarrolloProducto
          data[3][this.getNameByIdProducto(producto.Producto_idProducto)] =  producto.desarrolloMercado
          data[4][this.getNameByIdProducto(producto.Producto_idProducto)] =  producto.desarrolloMercado+producto.desarrolloProducto


        }


        data[1]["total"]="Total";
        data[2]["total"]=this.getTotalProducto();
        data[3]["total"]=this.getTotalMercado();
        data[4]["total"]=this.getTotalMercado()+this.getTotalProducto();

        new Angular2Csv(data, 'Presupuesto Global de Gasto de Administración');

      }


        PDFcostoProduccionVentas(){
          var doc= new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: [215.9,279]});

          var columns = [
          {title: "", dataKey: "cara"}];


          var rows = [
          {"cara":"Materia prima consumida"},
          {"cara":""},
          {"cara":"Mano de Obra y Gastos I.P."},
          {"cara":""},
          {"cara":"Costo de Producción"},
          {"cara":""},
          {"cara":"I.I. de Producto Terminado" },
          {"cara":"I.F. de Producto Terminado" },
          {"cara":""},
          {"cara":"Costo de Ventas"}
        ];
        let actual=this.proyectoActual

        let options= {
        margin: {top: 40,
                 left:40},
         tableWidth: 200,
        headerStyles: {fillColor:0,halign:'center'},
        columnStyles: {
          cara: {halign:'left',columnWidth:65}
        },
        addPageContent: function(data) {
          doc.setFontSize(15);
          doc.setFontType("bold");
          doc.text(139.5, 15, 'Proyecto '+actual, null, null, 'center');
          doc.setFontSize(13);
          doc.text(139.5, 23, 'Costo de Producción y Ventas del Periodo '+localStorage.getItem('numeroPeriodo'), null, null, 'center');
          doc.line(50, 27, 228, 27);
        }}


        for(let producto of this.auxiliares){
          let x = {
            title:this.getNameByIdProducto(producto.Producto_idProducto),
            dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
          }
          columns.push(x);
          rows[0][x.dataKey] =  this.cp.transform(producto.materiaCosumida,'USD',true,'1.0-0')
          rows[2][x.dataKey] =  this.cp.transform( (producto.costoTransformacionVentas + producto.costoTransformacionMaq) ,'USD',true,'1.0-0')
          rows[4][x.dataKey] =  this.cp.transform( (producto.materiaCosumida + producto.costoTransformacionVentas + producto.costoTransformacionMaq) ,'USD',true,'1.0-0')
          rows[7][x.dataKey] =  this.cp.transform( producto.inventarioFinal ,'USD',true,'1.0-0')
          rows[9][x.dataKey] =  this.cp.transform( producto.costoVentas ,'USD',true,'1.0-0')

          options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};

        }

        let x = {
          title:"Total",
          dataKey:"total"
        }

        for(let producto of this.auxiliares){
          rows[6][x.dataKey] = this.cp.transform( producto.inventarioFinal ,'USD',true,'1.0-0')
        }

        columns.push(x);
        rows[0][x.dataKey] =  this.cp.transform(this.getTotalMPC(),'USD',true,'1.0-0')
        rows[2][x.dataKey] =  this.cp.transform(this.getTotalMOGIP() ,'USD',true,'1.0-0')
        rows[4][x.dataKey] =  this.cp.transform(this.getTotalCostoProduccion(),'USD',true,'1.0-0')
        rows[6][x.dataKey] =  this.cp.transform(this.getTotalInventarioInicial(),'USD',true,'1.0-0')
        rows[7][x.dataKey] =  this.cp.transform( this.getTotalInventarioFinal() ,'USD',true,'1.0-0')
        rows[9][x.dataKey] =  this.cp.transform( this.getTotalCV(),'USD',true,'1.0-0')

        options.columnStyles["total"]={halign:'right'};




        //this.cp.transform( ,'USD',true,'1.0-0')

          doc.autoTable(columns, rows, options);

          doc.save("Costo de Producción y Ventas.pdf");



          }


          CSVcostoProduccionVentas(){



            let data=[
              {"cara":"Costo de Producción y Ventra del Periodo: "+localStorage.getItem('numeroPeriodo')},
              {"cara":"Proyecto: "+this.proyectoActual,},
              {"cara":""},
              {"cara":"Materia prima consumida"},
              {"cara":"Mano de Obra y Gastos I.P."},
              {"cara":"Costo de Producción"},
              {"cara":"I.I. de Producto Terminado" },
              {"cara":"I.F. de Producto Terminado" },
              {"cara":"Costo de Ventas"}
            ];

            for(let producto of this.auxiliares){
              data[2][this.getNameByIdProducto(producto.Producto_idProducto)]=this.getNameByIdProducto(producto.Producto_idProducto)
              data[3][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.materiaCosumida
              data[4][this.getNameByIdProducto(producto.Producto_idProducto)]=(producto.costoTransformacionVentas + producto.costoTransformacionMaq)
              data[5][this.getNameByIdProducto(producto.Producto_idProducto)]= (producto.materiaCosumida + producto.costoTransformacionVentas + producto.costoTransformacionMaq)

              data[7][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.inventarioFinal
              data[8][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.costoVentas
            }

            for(let producto of this.auxiliaresAnteriores){
              data[6][this.getNameByIdProducto(producto.Producto_idProducto)]=producto.inventarioInicial;
            }

            data[2]["total"]="Total"
            data[3]["total"]=this.getTotalMPC()
            data[4]["total"]=this.getTotalMOGIP()
            data[5]["total"]=this.getTotalCostoProduccion()
            data[6]["total"]=this.getTotalInventarioInicial()
            data[7]["total"]=this.getTotalInventarioFinal()
            data[8]["total"]= this.getTotalCV()




            new Angular2Csv(data, 'Presupuesto Global de Producion y Ventas');


          }





          getNameById(idProyecto){
            for(let proyecto of this.proyectos){
              if(proyecto.idProyecto==idProyecto)
                return proyecto.nombreProyecto
            }
              return "id NO encontrado"

          }











}
