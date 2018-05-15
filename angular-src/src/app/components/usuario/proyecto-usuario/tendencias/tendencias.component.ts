import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';

@Component({
    selector: 'app-tendencias',
  templateUrl: './tendencias.component.html'
})
export class TendenciasComponent implements OnInit {

  tendencias = [];
  graf1:any[]=[];
  graf2:any[]=[];
  graf3:any[]=[];
  graf4:any[]=[];
  graf5:any[]=[];
  graf6:any[]=[];


  colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };




  constructor(private _operacionService:OperacionService) {
    this.tendencias = this._operacionService.returnTendencias();
    console.log(this.tendencias);
    setTimeout(() => {
    this.graf1=this.getGraf1();
    this.graf2=this.getGraf2();
    this.graf3=this.getGraf3();
    this.graf4=this.getGraf4();
    this.graf5=this.getGraf5();
    this.graf6=this.getGraf6();
    console.log("Grafica 1",this.graf1)
  },2000);
  }

  ngOnInit() {
  }

  getTotal(n1,n2){
    if(n1 == 1){
      return 100;
    }
    else{
      return n2;
    }
  }


  getGraf1(){
    let data=[];
    for(let periodo of this.tendencias){
      let gTemp={
        name:"Periodo "+periodo.numeroPeriodo,
        series:[
          {name:"Activo Circulante",
          value:Math.trunc(periodo.pactivoCirculante)},
          {name:"Pasivo a Corto Plazo",
          value:Math.trunc(periodo.ppasivoCortoPlazo)}
        ]
      }
      data.push(gTemp)
    }
    return data
  }


  getGraf2(){
    let data=[];
    for(let periodo of this.tendencias){
      let gTemp={
        name:"Periodo "+periodo.numeroPeriodo,
        series:[
          {name:"Activo Fijo",
          value:Math.trunc(periodo.pactivoFijo)},
          {name:"Pasivo Pasivo Total",
          value:Math.trunc(periodo.ppasivoTotal)},
          {name:"Capital Contable",
          value:Math.trunc(periodo.pcapitalContable)}
        ]
      }
      data.push(gTemp)
    }
    return data
  }


    getGraf3(){
      let data=[];
      for(let periodo of this.tendencias){
        let gTemp={
          name:"Periodo "+periodo.numeroPeriodo,
          series:[
            {name:"Cuentas por Cobrar",
            value:Math.trunc(periodo.pcuentasPCobrar)},
            {name:"Almacen de Materia Prima",
            value:Math.trunc(0)},
            {name:"Almacen de PT",
            value:Math.trunc(periodo.palmacenPT)},
            {name:"Ventas",
            value:Math.trunc(periodo.pventasNetas)}
          ]
        }
        data.push(gTemp)
      }
      return data
    }



      getGraf4(){
        let data=[];
        for(let periodo of this.tendencias){
          let gTemp={
            name:"Periodo "+periodo.numeroPeriodo,
            series:[
              {name:"Ventas",
              value:Math.trunc(periodo.pventasNetas)},
              {name:"Costo de Ventas",
              value:Math.trunc(periodo.pcostoVentas)},
              {name:"Utilidad Neta",
              value:Math.trunc(periodo.putilidadNeta)},
              {name:"Total de Gastos de Operación",
              value:Math.trunc(periodo.pcDist+periodo.pcAdmin+periodo.poGastos)}
            ]
          }
          data.push(gTemp)
        }
        return data
      }


      getGraf5(){
        let data=[];
        for(let periodo of this.tendencias){
          let gTemp={
            name:"Periodo "+periodo.numeroPeriodo,
            series:[
              {name:"Total de Gastos de Operación",
              value:Math.trunc(periodo.pcDist+periodo.pcAdmin+periodo.poGastos)},
              {name:"Gastos de Distribución",
              value:Math.trunc(periodo.pcDist)},
              {name:"Gastos de Administración",
              value:Math.trunc(periodo.pcAdmin)},
              {name:"Otros Gastos",
              value:Math.trunc(periodo.poGastos)}
            ]
          }
          data.push(gTemp)
        }
        return data
      }



            getGraf6(){
              let data=[];
              for(let periodo of this.tendencias){
                let gTemp={
                  name:"Periodo "+periodo.numeroPeriodo,
                  series:[
                    {name:"Utilidad Bruta",
                    value:Math.trunc(periodo.putilidadBruta)},
                    {name:"Utilidad Neta",
                    value:Math.trunc(periodo.putilidadNeta)}
                  ]
                }
                data.push(gTemp)
              }
              return data
            }

}
