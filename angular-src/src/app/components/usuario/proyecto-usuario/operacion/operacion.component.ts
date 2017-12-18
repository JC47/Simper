import { Component, OnInit ,Pipe} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {OperacionService} from '../../../../services/operacion.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {ProductoService} from '../../../../services/producto.service';
import {BalanceService} from '../../../../services/balance.service';
import {CurrencyPipe} from '@angular/common'
import {DecimalPipe} from '@angular/common'
import {ProyectosService} from '../../../../services/proyectos.service';




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




  constructor(private _productoService:ProductoService,
              private _balanceService:BalanceService,
              private _operacionService:OperacionService,
              private _resultadosService:ResultadosService,
              private cp: CurrencyPipe,
              private dc:DecimalPipe,
            private _proyectoService:ProyectosService) {
    this._proyectoService.ocultaCierrePeriodo()
    this._resultadosService.vender();
  }


  ngOnInit() {
    setTimeout(() => {
      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.auxiliaresAnteriores=this._operacionService.returnAuxiliaresAnteriores();
          this.auxiliares=this._operacionService.returnAuxiliares();
          this.auxiliarC=this._operacionService.returnAuxiliarC();
          this.productos=this._productoService.returnProductos();
        }
      });
    }, 1500);
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

    var rows = [
    {"producto":"", "unidades": "", "costoUni": "","total": ""}
    ];

    //Cosas Importantes
    for(let producto of this.auxiliaresAnteriores){
      var x = {
        "producto":this.getNameByIdProducto(producto.Producto_idProducto),
        "unidades":this.cp.transform( producto.unidadesAlmacenadas ,'USD',true,'1.0-0'),
        "costoUni":this.cp.transform((producto.inventarioFinal / producto.unidadesAlmacenadas) ,'USD',true,'1.0-0'),
        "total":producto.inventarioFinal.toString()
      }
      rows.push(x);
    }

    doc.autoTable(columns, rows, {
    margin: {top: 40,
             left:40},
     tableWidth: 200,
    headerStyles: {fillColor:0},
    columnStyles: {
    	total: {halign:'right',columnWidth:'auto'},
      producto:{halign:'center'},
      unidades:{halign:'right'},
      costoUni:{halign:'right'}
    },
    addPageContent: function(data) {
      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Almacen de Artículo Terminado del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
      doc.line(50, 27, 228, 27);
    },






    });

    doc.save("Alamcen Articulo Terminado.pdf");



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
    {"material":"","cantidadComprar": "","costoUni": "","importe": "","ivaA": "","total": ""},
    {"material":"1",
    "cantidadComprar":this.dc.transform(this.getUniMPTotal(),'1.0-0'),
    "costoUni":"69",
    "importe":this.cp.transform(this.getUniMPTotalCash(),'USD',true,'1.0-0'),
    "ivaA":this.cp.transform(this.getIVAMP(),'USD',true,'1.0-0'),
    "total":this.cp.transform(this.getTotalMP(),'USD',true,'1.0-0')
    }
    ];

    doc.autoTable(columns, rows, {
    margin: {top: 40,
             left:40},
     tableWidth: 200,
    headerStyles: {fillColor:0},
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
      doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Presupuesto Global de Compras de Materia Prima e I.V.A. del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
      doc.line(50, 27, 228, 27);
    },
    });

    doc.save("Presupuesto Global de Compras de Materia Prima.pdf");



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
          "cantidadUnit":this.cp.transform(this.getUniMP(producto.Producto_idProducto),'USD',true,'1.0-0'),
          "costoUni":this.cp.transform( this.getCostoUni(producto.Producto_idProducto) ,'USD',true,'1.0-0'),
          "unidadProd":this.dc.transform( producto.unidadesProducidas ,'1.0-0'),
          "cantidad":this.dc.transform( (this.getUniMP(producto.Producto_idProducto)*producto.unidadesProducidas),'1.0-0'),
          "importe":this.cp.transform( (this.getCostoUni(producto.Producto_idProducto)*(this.getUniMP(producto.Producto_idProducto) * producto.unidadesProducidas)) ,'USD',true,'1.0-0')
        }
        //this.cp.transform(  ,'USD',true,'1.0-0')
        rows.push(x);
      }

      doc.autoTable(columns, rows, {
      margin: {top: 40,
               left:40},
       tableWidth: 200,
      headerStyles: {fillColor:0},
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
        doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
        doc.setFontSize(13);
        doc.text(139.5, 23, 'Presupuesto Global de Compras de Materia Prima e I.V.A. del Periodo X', null, null, 'center');
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


  PDFpresupuestoGlobalVentasIVA(){
    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [215.9,279]});



    var columns = [
    {title: "", dataKey: "cara"}];



    var rows = [
    {"cara":"Unidades a Vender"},
    {"cara":""},
    {"cara":"Precio de Venta"},
    {"cara":""},
    {"cara":"Venta en $ "},
    {"cara":""},
    {"cara":"IVA"},
    {"cara":""},
    {"cara":"Importe"},
    {"cara":""}];


    for(let producto of this.auxiliares){
      var x = {
        title:this.getNameByIdProducto(producto.Producto_idProducto),
        dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
      }
      columns.push(x);
      rows[0][x.dataKey] = producto.unidadesVendidas.toString();
      rows[2][x.dataKey] = this.cp.transform(this.getPrecioVenta(producto.Producto_idProducto),'USD',true,'1.0-0')
      rows[4][x.dataKey] =  this.cp.transform((producto.Ventas - producto.IVAxVentas),'USD',true,'1.0-0')
      rows[6][x.dataKey] =  this.cp.transform(producto.IVAxVentas,'USD',true,'1.0-0')
      rows[8][x.dataKey] =  this.cp.transform(producto.Ventas,'USD',true,'1.0-0')
//this.cp.transform(,'USD',true,'1.0-0')
    }

    doc.autoTable(columns, rows, {
    margin: {top: 40,
             left:40},
     tableWidth: 200,
    headerStyles: {fillColor:0},
    columnStyles: {
      cara: {halign:'left',columnWidth:40}
    },
    addPageContent: function(data) {
      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Presupuesto Global de Ventas e IVA del Periodo X', null, null, 'center');
      doc.line(50, 27, 228, 27);
    },






    });

    doc.save("Presupuesto Global de Ventas e IVA.pdf");



    }



    PDFpresupuestoGlobalProduccion(){
      var doc= new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [215.9,279]});

      var columns = [
      {title: "Producto", dataKey: "producto"},
      {title: "Unidades A Vender (+)", dataKey: "unidadesVender"},
      {title: "Inventario Final (+)", dataKey: "invFinal"},
      {title: "Inventario Inicial(-)", dataKey: "invInicial"},
      {title: "Unidades a Producir", dataKey: "unidadesProducir"},
      {title: "Costo Unitario (M.P.)", dataKey: "costUnitMP"},
      {title: "Costo Total (M.P.)", dataKey: "cosTotalMP"},
      {title: "Costo Unitario (Trasnformación)", dataKey: "costUnitTrans"},
      {title: "Costo Total (Transformación)", dataKey: "cosTotalTrans"},
      {title: "Costo de Producción Unitario", dataKey: "costProdUnit"},
      {title: "Costo de Producción Total", dataKey: "costProdTot"}
      ];


      var rows = [];

      for(let producto of this.auxiliares){
        var x = {
          "producto":this.getNameByIdProducto(producto.Producto_idProducto),
          "unidadesVender":this.dc.transform(producto.unidadesVendidas,'1.0-0'),
          "invFinal":this.dc.transform(producto.unidadesAlmacenadas,'1.0-0'),
          "invInicial":this.dc.transform(this.getUnidadesAlmacenadasAnterior(producto.Producto_idProducto),'1.0-0'),
          "unidadesProducir":this.dc.transform(producto.unidadesProducidas,'1.0-0'),
          "costUnitMP":this.cp.transform(this.getMPPuniProd(producto.Producto_idProducto),'USD',true,'1.0-0'),
          "cosTotalMP":this.cp.transform(producto.materiaCosumida,'USD',true,'1.0-0'),
          "costUnitTrans":this.cp.transform(((producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas),'USD',true,'1.0-0'),
          "cosTotalTrans":this.cp.transform((producto.costoTransformacionVentas + producto.costoTransformacionMaq),'USD',true,'1.0-0'),
          "costProdUnit":this.cp.transform((this.getMPPuniProd(producto.Producto_idProducto) + (producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas),'USD',true,'1.0-0'),
          "costProdTot":this.cp.transform((producto.costoTransformacionVentas + producto.costoTransformacionMaq + producto.materiaCosumida),'USD',true,'1.0-0')
        }
        rows.push(x);
      }




      doc.autoTable(columns, rows, {
      margin: {top: 40,
               left:40},
       tableWidth: 200,
      headerStyles: {fillColor:0},
      columnStyles: {
        cara: {halign:'left',columnWidth:40}
      },
      addPageContent: function(data) {
        doc.setFontSize(15);
        doc.setFontType("bold");
        doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
        doc.setFontSize(13);
        doc.text(139.5, 23, 'Presupuesto Global de Ventas e IVA del Periodo X', null, null, 'center');
        doc.line(50, 27, 228, 27);
      },






      });

      doc.save("Presupuesto Global de Produccion.pdf");



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
  {"cara":""},
  {"cara":"Costo de Transformación"},
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
  doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
  doc.setFontSize(13);
  doc.text(139.5, 23, 'Presupuesto Global de  Costo de Trasnformación del Periodo X', null, null, 'center');
  doc.line(50, 27, 228, 27);
  }, }

  for(let producto of this.auxiliares){
    var x = {
      title:this.getNameByIdProducto(producto.Producto_idProducto),
      dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
    }
    columns.push(x);
    rows[0][x.dataKey] = this.dc.transform(((producto.costoTransformacionVentas + producto.costoTransformacionMaq )/ producto.unidadesProducidas),'1.0-0');
    rows[2][x.dataKey] = this.cp.transform( (producto.costoTransformacionVentas + producto.costoTransformacionMaq) ,'USD',true,'1.0-0');
    rows[5][x.dataKey] = this.cp.transform( producto.costoTransformacionMaq ,'USD',true,'1.0-0');
    rows[6][x.dataKey] = this.cp.transform( producto.costoTransformacionVentas ,'USD',true,'1.0-0');
    rows[10][x.dataKey] = "$0";
    rows[11][x.dataKey] = "$0";
    rows[13][x.dataKey] = this.cp.transform( producto.costoTransformacionVentas ,'USD',true,'1.0-0');
    rows[14][x.dataKey] =  this.cp.transform(-producto.IVATrans ,'USD',true,'1.0-0');
    rows[15][x.dataKey] = this.cp.transform( (producto.costoTransformacionVentas - producto.IVATrans) ,'USD',true,'1.0-0')


    options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};
    console.log(options)
  }

//this.cp.transform(  ,'USD',true,'1.0-0')


  doc.autoTable(columns, rows,options);

  doc.save("Presupuesto Global de Costo de Trasnformacion.pdf");



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
    {"cara":"Costo de Distribución"},
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

 let options={
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
   doc.text(139.5, 23, 'Presupuesto Global de  Costo de Distribución del Periodo X', null, null, 'center');
   doc.line(50, 27, 228, 27);
 }}

  for(let producto of this.auxiliares){
    var x = {
      title:this.getNameByIdProducto(producto.Producto_idProducto),
      dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
    }
    columns.push(x);
    rows[0][x.dataKey] = this.dc.transform( producto.unidadesVendidas,'1.0-0')
    rows[2][x.dataKey] = this.cp.transform((producto.costoDistribucion / producto.unidadesVendidas) ,'USD',true,'1.0-0')
    rows[4][x.dataKey] =  this.cp.transform( producto.costoDistribucion ,'USD',true,'1.0-0');
    rows[7][x.dataKey] =  this.cp.transform( (producto.costoDistribucion - producto.costoDistDep),'USD',true,'1.0-0')
    rows[8][x.dataKey] = this.cp.transform( producto.costoDistDep ,'USD',true,'1.0-0')
    rows[12][x.dataKey] = "$0";
    rows[13][x.dataKey] = "$0";
    rows[15][x.dataKey] =  this.cp.transform(producto.costoDistDep ,'USD',true,'1.0-0')
    rows[16][x.dataKey] =  this.cp.transform(-producto.IVADist ,'USD',true,'1.0-0')
    rows[17][x.dataKey] = this.cp.transform( (producto.costoDistDep - producto.IVADist) ,'USD',true,'1.0-0')

    options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};

  }




    doc.autoTable(columns, rows,options);

    doc.save("Presupuesto Global de Costo de Distribucion.pdf");



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
        {"cara":"Costo de Administracion"},
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

    let options={
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
      doc.text(139.5, 23, 'Presupuesto Global de  Costo de Administración del Periodo X', null, null, 'center');
      doc.line(50, 27, 228, 27);
    },
    }

    for(let producto of this.auxiliares){
      var x = {
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


      doc.autoTable(columns, rows, options);

      doc.save("Presupuesto Global de Costo de Administracion.pdf");



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
        {"cara":"Desarrollo de Mercado"}

      ];

      let options={
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
        doc.text(139.5, 23, 'Presupuesto Global de Otros Gastos del Periodo X', null, null, 'center');
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

        options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};

      }





      var y = {
        title:"Total",
        dataKey:"t"
      }

      columns.push(y);
      rows[0]["t"] =   this.cp.transform(this.getTotalProducto() ,'USD',true,'1.0-0')
      rows[1]["t"] =  this.cp.transform( this.getTotalMercado() ,'USD',true,'1.0-0')




        doc.autoTable(columns, rows,options );

        doc.save("Presupuesto Global Otros Gastos.pdf");



        }


        PDFcostoProduccionVentas(){
          var doc= new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: [215.9,279]});

          var columns = [
          {title: "", dataKey: "cara"}];


          var rows = [
          {"cara":"I.I de Materia Prima"},
          {"cara":"Compras"},
          {"cara":"I.F. de Materia prima"},
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

        let options= {
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
          doc.text(139.5, 23, 'Costo de Producción y Ventas', null, null, 'center');
          doc.line(50, 27, 228, 27);
        }}

        for(let producto of this.auxiliares){
          var x = {
            title:this.getNameByIdProducto(producto.Producto_idProducto),
            dataKey:this.getNameByIdProducto(producto.Producto_idProducto)
          }
          columns.push(x);
          rows[0][x.dataKey] = "0";
          rows[1][x.dataKey] = "0";
          rows[2][x.dataKey] = "0";
          rows[3][x.dataKey] =  this.cp.transform(producto.materiaCosumida,'USD',true,'1.0-0')
          rows[5][x.dataKey] =  this.cp.transform( (producto.costoTransformacionVentas + producto.costoTransformacionMaq) ,'USD',true,'1.0-0')
          rows[7][x.dataKey] =  this.cp.transform( (producto.materiaCosumida + producto.costoTransformacionVentas + producto.costoTransformacionMaq) ,'USD',true,'1.0-0')
          rows[9][x.dataKey] = this.cp.transform( producto.inventarioInicia ,'USD',true,'1.0-0')
          rows[10][x.dataKey] =  this.cp.transform( producto.inventarioFinal ,'USD',true,'1.0-0')
          rows[12][x.dataKey] =  this.cp.transform( producto.costoVentas ,'USD',true,'1.0-0')

          options.columnStyles[this.getNameByIdProducto(producto.Producto_idProducto)]={halign:'right'};

        }

        //this.cp.transform( ,'USD',true,'1.0-0')

          doc.autoTable(columns, rows, options);

          doc.save("Costo de Producción y Ventas.pdf");



          }










}
