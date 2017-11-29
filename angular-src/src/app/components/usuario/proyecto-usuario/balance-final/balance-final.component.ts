import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {BalanceService} from '../../../../services/balance.service';
import {ResultadosService} from '../../../../services/resultados.service';

// import * as jsPDF from 'jspdf'
declare var jsPDF: any;
@Component({
  selector: 'app-balance-final',
  templateUrl: './balance-final.component.html',
  styleUrls: ['./balance-final.component.css']
})
export class BalanceFinalComponent implements OnInit {
  balanceFinal:any;

  constructor(private _resultadosService:ResultadosService,
     private _balanceService:BalanceService) {
    this._resultadosService.vender();
  }

  ngOnInit() {
    setTimeout(() => {
      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.balanceFinal = this._resultadosService.getBalanceFinal();
        }
      });
    }, 1500);
  }




  descargaPDF(){
    let cajaBancos,
        cuentasPorCobrar,
        IVAAcreditable,
        almacenArtTerm,
        almacenMateriales,
        terreno,
        edificios,
        mueblesEnseres,
        equipoTrans,
        pagosAnticipado,
        gastosAmortizacion,
        IVAPorEnterar,
        imptosPorPagar,
        proveedores,
        PTUPorPagar,
        prestamosMenosAnio,
        prestamosMasAnio,
        capitalSocial,
        reservaLegal,
        utilidadAcum,
        utilidadEjercicio;



    for(let balance of this.balanceFinal){
      cajaBancos=balance.cajaBancos;
      cuentasPorCobrar=balance.cuentasPorCobrar;
      IVAAcreditable=balance.IVAAcreditable;
      almacenArtTerm=balance.almacenArtTerm;
      almacenMateriales=balance.almacenMateriales
      terreno=balance.terreno;
      edificios=balance.edificios;
      mueblesEnseres=
      equipoTrans,
      pagosAnticipado,
      gastosAmortizacion,
      IVAPorEnterar,
      imptosPorPagar,
      proveedores,
      PTUPorPagar,
      prestamosMenosAnio,
      prestamosMasAnio,
      capitalSocial,
      reservaLegal,
      utilidadAcum,
      utilidadEjercicio;
    }
    var doc= new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [215.9,279]});

      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
      doc.setFontSize(13);
      doc.text(139.5, 23, 'Posición Financiera Final del Periodo X', null, null, 'center');
      doc.line(50, 27, 228, 27);
      doc.setFontSize(7);
      let mar=45;
      let anchCell=4;



      doc.setFontType("normal");
  //Activo
      doc.text(10, 40, 'A menos de un año');
      doc.line(10, 45, 120, 45);

      doc.text(12, 48, 'Caja y Bancos');
      doc.line(10, mar+anchCell*1, 120, mar+anchCell*1);
      doc.text(120, 48, '$20,000,000' , null, null, 'right');

      doc.text(12, 44+anchCell*2, 'Cuentas por Cobrar');
doc.line(10, mar+anchCell*2, 120, mar+anchCell*2);
doc.text(120, 44+anchCell*2, '$20,000,000', null, null, 'right');

doc.text(12, 44+anchCell*3, 'IVA Acreditable');
doc.line(10, mar+anchCell*3, 120, mar+anchCell*3);
doc.text(120, 44+anchCell*3, '$20,000,000', null, null, 'right');

doc.text(12, 44+anchCell*4, 'Almacén de Artículo Terminado');
doc.line(10, mar+anchCell*4, 120, mar+anchCell*4);
doc.text(120, 44+anchCell*4, '$20,000,000', null, null, 'right');

doc.text(12, 44+anchCell*5, 'Almacen de Materiales');
doc.line(10, mar+anchCell*5, 120, mar+anchCell*5);
doc.text(120, 44+anchCell*5, '$20,000,000', null, null, 'right');

doc.setFontSize(8);
doc.setFontType("bold");
doc.text(12, 44+anchCell*6, 'Total');
doc.text(140, 44+anchCell*6, '$20,000,000', null, null, 'right');


doc.text(10, 85, 'A más de un año');
doc.setFontType("normal");
doc.setFontSize(7);
doc.text(62, 44+anchCell*7+17, 'I.O.');
doc.text(82, 44+anchCell*7+17, 'Dep. Acum');
doc.line(10, 90, 120, 90);

doc.text(12, 44+anchCell*7+21, 'Terreno');
doc.line(10, mar+0+anchCell*7+21, 120, mar+anchCell*7+21);
doc.text(120, 44+anchCell*7+21, '$20,000,000', null, null, 'right');
doc.text(70, 44+anchCell*7+21, '$20,000,000', null, null, 'right');
doc.text(95, 44+anchCell*7+21, '$20,000,000', null, null, 'right');

doc.text(12, 44+anchCell*8+21, 'Edificios e Instalaciones');
doc.line(10, mar+0+anchCell*8+21, 120, mar+anchCell*8+21);
doc.text(120, 44+anchCell*8+21, '$20,000,000', null, null, 'right');
doc.text(70, 44+anchCell*8+21, '$20,000,000', null, null, 'right');
doc.text(95, 44+anchCell*8+21, '$20,000,000', null, null, 'right');


doc.text(12, 44+anchCell*9+21, 'Maquinaria y Equipo');
doc.line(10, mar+0+anchCell*9+21, 120, mar+anchCell*9+21);
doc.text(120, 44+anchCell*9+21, '$20,000,000', null, null, 'right');
doc.text(70, 44+anchCell*9+21, '$20,000,000', null, null, 'right');
doc.text(95, 44+anchCell*9+21, '$20,000,000', null, null, 'right');


doc.text(12, 44+anchCell*10+21, 'Muebles y Enseres');
doc.line(10, mar+0+anchCell*10+21, 120, mar+anchCell*10+21);
doc.text(120, 44+anchCell*10+21, '$20,000,000', null, null, 'right');
doc.text(70, 44+anchCell*10+21, '$20,000,000', null, null, 'right');
doc.text(95, 44+anchCell*10+21, '$20,000,000', null, null, 'right');


doc.text(12, 44+anchCell*11+21, 'Equipo de Transportes');
doc.line(10, mar+0+anchCell*11+21, 120, mar+anchCell*11+21);
doc.text(120, 44+anchCell*11+21, '$20,000,000', null, null, 'right');
doc.text(70, 44+anchCell*11+21, '$20,000,000', null, null, 'right');
doc.text(95, 44+anchCell*11+21, '$20,000,000', null, null, 'right');


doc.setFontSize(8);
doc.setFontType("bold");
doc.text(12, 44+anchCell*12+21, 'Total');
doc.text(140, 44+anchCell*12+21, '$20,000,000', null, null, 'right');
doc.text(70, 44+anchCell*12+21, '$20,000,000', null, null, 'right');
doc.text(95, 44+anchCell*12+21, '$20,000,000', null, null, 'right');

doc.setFontSize(7);

doc.text(10, 130, 'De Aplicación Difereida');
doc.line(10, 135, 120, 135);

doc.text(12, 44+anchCell*12+46, 'Pagos Hechos por Anticipado');
doc.line(10, mar+0+anchCell*12+46, 120, mar+anchCell*12+46);
doc.text(120, 44+anchCell*12+46, '$20,000,000', null, null, 'right');

doc.text(12, 44+anchCell*13+46, 'Gastos por Amortizar');
doc.line(10, mar+0+anchCell*13+46, 120, mar+anchCell*13+46);
doc.text(120, 44+anchCell*13+46, '$20,000,000', null, null, 'right');

doc.setFontSize(8);
doc.setFontType("bold");
doc.text(12, 44+anchCell*14+46, 'Total');
doc.text(140, 44+anchCell*14+46, '$20,000,000', null, null, 'right');

doc.text(12, 44+anchCell*18+46, 'Suma de los Derechos');
doc.text(140, 44+anchCell*18+46, '$20,000,000', null, null, 'right');
doc.line(120, mar+0+anchCell*18+46, 140, mar+anchCell*18+46);

//Pasivo
  doc.text(165, 40, 'A menos de un año');
doc.line(165, 45, 235, 45);

doc.text(167, 44+anchCell*1, 'IVA por enterar');
doc.text(235, 44+anchCell*1, '$20,000,000', null, null, 'right');
doc.line(165, mar+anchCell*1, 235, mar+anchCell*1);






doc.text(167, 44+anchCell*2, 'Impuestos por Pagar');
doc.text(235, 44+anchCell*2, '$20,000,000', null, null, 'right');
doc.line(165, mar+anchCell*2, 235, mar+anchCell*2);

doc.text(167, 44+anchCell*3, 'Proveedores');
doc.text(235, 44+anchCell*3, '$20,000,000', null, null, 'right');
doc.line(165, mar+anchCell*3, 235, mar+anchCell*3);

doc.text(167, 44+anchCell*4, 'PTU por Pagar');
doc.text(235, 44+anchCell*4, '$20,000,000', null, null, 'right');
doc.line(165, mar+anchCell*4, 235, mar+anchCell*4);

doc.text(167, 44+anchCell*5, 'Prestamos Bancarios');
doc.text(235, 44+anchCell*5, '$20,000,000', null, null, 'right');
doc.line(165, mar+anchCell*5, 235, mar+anchCell*5);


doc.setFontSize(8);
doc.setFontType("bold");
doc.text(167, 44+anchCell*6, 'Total');
doc.text(255, 44+anchCell*6, '$20,000,000', null, null, 'right');
doc.setFontType("normal");
doc.setFontSize(7);

doc.text(165, 85, 'A más de un año');
doc.setFontType("normal");
doc.setFontSize(7);
doc.line(165, 90, 235, 90);


doc.text(167, 44+anchCell*7+21, 'Prestamos Bancarios');
doc.line(165, mar+0+anchCell*7+21, 235, mar+anchCell*7+21);
doc.text(235, 44+anchCell*7+21, '$20,000,000', null, null, 'right');


doc.setFontSize(8);
doc.setFontType("bold");
doc.text(167, 44+anchCell*8+21, 'Total');
doc.text(255, 44+anchCell*8+21, '$20,000,000', null, null, 'right');

doc.text(165, 115, 'Con los Accionistas');
doc.line(165, 122, 235, 122);

doc.setFontType("normal");
doc.setFontSize(7);

doc.text(167, 44+anchCell*9+45, 'Capital Social');
doc.line(165, mar+0+anchCell*9+45, 235, mar+anchCell*9+45);
doc.text(235, 44+anchCell*9+45, '$20,000,000', null, null, 'right');

doc.text(167, 44+anchCell*10+45, 'Reserva Legal');
doc.line(165, mar+0+anchCell*10+45, 235, mar+anchCell*10+45);
doc.text(235, 44+anchCell*10+45, '$20,000,000', null, null, 'right');


doc.text(167, 44+anchCell*11+45, 'Utilidad Acumulada');
doc.line(165, mar+0+anchCell*11+45, 235, mar+anchCell*11+45);
doc.text(235, 44+anchCell*11+45, '$20,000,000', null, null, 'right');


doc.text(167, 44+anchCell*12+45, 'Utilidad del Ejercicio');
doc.line(165, mar+0+anchCell*12+45, 235, mar+anchCell*12+45);
doc.text(235, 44+anchCell*12+45, '$20,000,000', null, null, 'right');


doc.text(167, 44+anchCell*13+45, 'Total');
doc.text(255, 44+anchCell*13+45, '$20,000,000', null, null, 'right');

doc.text(165, 44+anchCell*18+46, 'Suma de los Derechos');
doc.text(255, 44+anchCell*18+46, '$20,000,000', null, null, 'right');
doc.line(235, mar+0+anchCell*18+46, 255, mar+anchCell*18+46);







    //doc.autoTable(columns0,[],{tableWidth:500});
    //doc.setPage(1);
  //  doc.autoTable(columns,rows,{startY: doc.autoTableEndPosY()});
    doc.save("prue.pdf")
  }

}
