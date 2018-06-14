import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {DecimalPipe} from '@angular/common'
import {CurrencyPipe} from '@angular/common'
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {ProyectosService} from '../../../../services/proyectos.service';
import {BalanceService} from '../../../../services/balance.service';


declare var jsPDF: any;


@Component({
  selector: 'app-integrales',
  templateUrl: './integrales.component.html'
})







export class IntegralesComponent implements OnInit {

  integrales = [];
  tabla:any=[];
  proyectos:any;
  balances:any;
  balanceTable=[];
  proyectoActual:any;
  constructor(private _operacionService:OperacionService,
              private dc:DecimalPipe,
              private _proyectoService:ProyectosService,
              private cp: CurrencyPipe,
              private _balanceService:BalanceService) {
    this.integrales = this._operacionService.returnIntegrales();
    this.proyectos=this._proyectoService.returnUsuarios();
    this.balances=this._balanceService.returnTodosBalances()
    console.log(this.balances)
    setTimeout(() => {
    this.balances.splice(0,1);
    this.balanceTable=this.acomodaBalance()
    this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'));
    this.tabla=this.acomoda(this.integrales);
    console.log(this.balances);
  },2000);
  }

  ngOnInit() {
  }

acomoda(integrales){
    let arrelgo=[];
    let sec=[];

    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.ventasNetas,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pventasNetas,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.costoVentas,'USD',true,'1.0-0'))
      sec.push(this.dc.transform(periodo.pcostoVentas,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadBruta,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadBruta,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.cDist,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pcDist,'1.0-0')+"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){

      sec.push(this.cp.transform(periodo.oGastos,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.poGastos,'1.0-0') +"%")

    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.cAdmin,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pcAdmin,'1.0-0') +"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.cDist+periodo.oGastos+periodo.cAdmin,'USD',true,'1.0-0')  )
      sec.push(this.dc.transform(this.getSuma(periodo.cDist+periodo.oGastos+periodo.cAdmin,periodo.ventasNetas),'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadOperacion,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadOperacion,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.intereses,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pintereses,'1.0-0') +"%")
    }
    arrelgo.push(sec);

    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadAntesImptos,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadAntesImptos,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push( this.cp.transform(periodo.ISR,'USD',true,'1.0-0'))
      sec.push(this.dc.transform(periodo.pISR,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push( this.cp.transform(periodo.PTU,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.pPTU,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    sec=[];
    for(let periodo of this.integrales){
      sec.push(this.cp.transform(periodo.utilidadEjercicio,'USD',true,'1.0-0') )
      sec.push(this.dc.transform(periodo.putilidadEjercicio,'1.0-0')+"%")
    }
    arrelgo.push(sec);


    return arrelgo;
}

getSuma(n1,n2){
  var r = 0;
  if(n2 != 0){
    r = (n1/n2)*100;
  }
  return r;
}


getTotalActivo(balance){
  return balance.cajaBancos+balance.cuentasPorCobrar
                +balance.IVAAcreditable
                +balance.almacenArtTerm
                +balance.almacenMateriales
                +balance.terreno
                +balance.edifInsta
                -balance.depEdif
                +balance.maqEquipo
                -balance.depMaqEquipo
                +balance.mueblesEnseres
                -balance.depMueblesEnseres
                +balance.eqTrans
                -balance.depEqTrans
                +balance.pagosAnticipado
                +balance.gastosAmortizacion
}


getSumaPasivo(balance){
  return balance.IVAPorEnterar
          +balance.imptosPorPagar
          +balance.proveedores
          +balance.PTUPorPagar
          +balance.prestamosMenosAnio
          +balance.prestamosMasAnio
          +balance.capitalSocial
          +balance.reservaLegal
          +balance.utilidadAcum
          +balance.utilidadEjercicio
}



acomodaBalance(){
  let balanceAcomodado=[];
  let sec;


  // this.cp.transform(,'USD',true,'1.0-0');
  // this.dc.transform(,'1.0-0')+"%" ;





  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.cajaBancos,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.cajaBancos/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.cuentasPorCobrar,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.cuentasPorCobrar/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);



  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.IVAAcreditable,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.IVAAcreditable/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);



  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.almacenArtTerm,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.almacenArtTerm/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);



  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.almacenMateriales,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.almacenMateriales/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);

  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.almacenMateriales+balance.cajaBancos+balance.cuentasPorCobrar+balance.IVAAcreditable+balance.almacenArtTerm,'USD',true,'1.0-0'))
    sec.push(this.cp.transform((balance.almacenMateriales+balance.cajaBancos+balance.cuentasPorCobrar+balance.IVAAcreditable+balance.almacenArtTerm)/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);



  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.terreno,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.terreno/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);



  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.edifInsta,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.edifInsta/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(-balance.depEdif,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(-balance.depEdif/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.maqEquipo,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.maqEquipo/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(-balance.depMaqEquipo,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(-balance.depMaqEquipo/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.mueblesEnseres,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.mueblesEnseres/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(-balance.depMueblesEnseres,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(-balance.depMueblesEnseres/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);



  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.eqTrans,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.eqTrans/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(-balance.depEqTrans,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(-balance.depEqTrans/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.terreno+balance.edifInsta-balance.depEdif+balance.maqEquipo-balance.depMaqEquipo+balance.mueblesEnseres-balance.depMueblesEnseres+balance.eqTrans-balance.depEqTrans,'USD',true,'1.0-0'))
    sec.push(this.cp.transform((balance.terreno+balance.edifInsta-balance.depEdif+balance.maqEquipo-balance.depMaqEquipo+balance.mueblesEnseres-balance.depMueblesEnseres+balance.eqTrans-balance.depEqTrans)/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.pagosAnticipado,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.pagosAnticipado/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.gastosAmortizacion,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.gastosAmortizacionr/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.gastosAmortizacion+balance.pagosAnticipado,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.gastosAmortizacion+balance.pagosAnticipado/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);

  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(this.getTotalActivo(balance),'USD',true,'1.0-0'))
    sec.push(this.cp.transform(this.getTotalActivo(balance)/this.getTotalActivo(balance)*100,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.IVAPorEnterar,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.IVAPorEnterar/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.imptosPorPagar,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.imptosPorPagar/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);

  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.proveedores,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.proveedores/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);

  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.PTUPorPagar,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.PTUPorPagar/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


    sec=[];
    for(let balance of this.balances){
      sec.push(this.cp.transform(balance.prestamosMenosAnio,'USD',true,'1.0-0'))
      sec.push(this.cp.transform(balance.prestamosMenosAnio/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
    }
    balanceAcomodado.push(sec);


      sec=[];
      for(let balance of this.balances){
        sec.push(this.cp.transform(balance.IVAPorEnterar+balance.imptosPorPagar+balance.proveedores+balance.PTUPorPagar+balance.prestamosMenosAnio,'USD',true,'1.0-0'))
        sec.push(this.cp.transform((balance.IVAPorEnterar+balance.imptosPorPagar+balance.proveedores+balance.PTUPorPagar+balance.prestamosMenosAnio)/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
      }
      balanceAcomodado.push(sec);



  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.prestamosMasAnio,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.prestamosMasAnio/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.capitalSocial,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.capitalSocial/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.reservaLegal,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.reservaLegal/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.utilidadAcum,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.utilidadAcum/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.utilidadEjercicio,'USD',true,'1.0-0'))
    sec.push(this.cp.transform(balance.utilidadEjercicio/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


  sec=[];
  for(let balance of this.balances){
    sec.push(this.cp.transform(balance.capitalSocial+balance.reservaLegal+balance.utilidadAcum+balance.utilidadEjercicio,'USD',true,'1.0-0'))
    sec.push(this.cp.transform((balance.capitalSocial+balance.reservaLegal+balance.utilidadAcum+balance.utilidadEjercicio)/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
  }
  balanceAcomodado.push(sec);


    sec=[];
    for(let balance of this.balances){
      sec.push(this.cp.transform(this.getSumaPasivo(balance),'USD',true,'1.0-0'))
      sec.push(this.cp.transform(this.getSumaPasivo(balance)/this.getSumaPasivo(balance)*100 ,'USD',true,'1.0-0')+"%")
    }
    balanceAcomodado.push(sec);



return balanceAcomodado;

}



CSVintegrales3(){



    let rows=[
       {cara:"Integrales de Balance General"},
       {cara:"Proyecto "+this.proyectoActual},
       {cara:"Derechos"},
       {cara: "Caja Bancos"},
       {cara: "Cuentas por Cobrar"},
       {cara: "IVA Acreditable"},
       {cara: "Almacén de Artículo Terminado"},
       {cara: "Almacén de Materiales"},
       {cara: ""},
       {cara: "Más de un Año"},
       {cara: "Terreno"},
       {cara: "Edificios e Instalaciones"},
       {cara: "Depreciación Acumulada"},
       {cara: "Maquinaria y Equipo"},
       {cara: "Depreciación Acumulada"},
       {cara: "Muebles y Enseres"},
       {cara: "Depreciación Acumulada"},
       {cara: "Equipo de Transporte"},
       {cara: "Depreciación Acumulada"},
       {cara: ""},
       {cara: "De Aplicación Diferida"},
       {cara: "Pagos por Anticipado"},
       {cara: "Gastos por Amortizar"},
       {cara: ""},
       {cara: "Suma de Activo"},
       {cara: ""},
       {cara: "Obligaciones"},
       {cara: "A menos de un Año"},
       {cara: "IVA por Enterar"},
       {cara: "Impuestos por Pagar"},
       {cara: "Proveedores"},
       {cara: "PTU por Pagar"},
       {cara: "Prestamos Bancarios"},
       {cara: ""},
       {cara: "A mas de un año"},
       {cara: "Prestamos Bancarios"},
       {cara: "Con los Accionistas"},
       {cara: "Capital Social"},
       {cara: "Reserva Legal"},
       {cara: "Utilidad Acumulada"},
       {cara: "Utilidad Ejercicio"},
       {cara: ""},
       {cara: "Suma de Pasivo y Capital"}
     ]



     for(let inte in this.balances){



       rows[3]["periodo"+inte]=this.cp.transform(this.balances[inte].cajaBancos ,'USD',true,'1.0-0');
       rows[3]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].cajaBancos /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[4]["periodo"+inte]=this.cp.transform(this.balances[inte].cuentasPorCobrar ,'USD',true,'1.0-0');
       rows[4]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].cuentasPorCobrar /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[5]["periodo"+inte]=this.cp.transform(this.balances[inte].IVAAcreditable ,'USD',true,'1.0-0');
       rows[5]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].IVAAcreditable /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[6]["periodo"+inte]=this.cp.transform(this.balances[inte].almacenArtTerm ,'USD',true,'1.0-0');
       rows[6]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].almacenArtTerm /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[7]["periodo"+inte]=this.cp.transform(this.balances[inte].almacenMateriales ,'USD',true,'1.0-0');
       rows[7]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].almacenMateriales /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[8]["periodo"+inte]=this.cp.transform(this.balances[inte].cajaBancos+this.balances[inte].cuentasPorCobrar+this.balances[inte].IVAAcreditable+this.balances[inte].almacenArtTerm+this.balances[inte].almacenMateriales ,'USD',true,'1.0-0');
       rows[8]["periodo"+inte+"p"]=this.dc.transform((this.balances[inte].cajaBancos+this.balances[inte].cuentasPorCobrar+this.balances[inte].IVAAcreditable+this.balances[inte].almacenArtTerm+this.balances[inte].almacenMateriales)/this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[10]["periodo"+inte]=this.cp.transform(this.balances[inte].terreno ,'USD',true,'1.0-0');
       rows[10]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].terreno /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[11]["periodo"+inte]=this.cp.transform(this.balances[inte].edifInsta ,'USD',true,'1.0-0');
       rows[11]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].edifInsta /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[12]["periodo"+inte]=this.cp.transform(-this.balances[inte].depEdif ,'USD',true,'1.0-0');
       rows[12]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depEdif /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[13]["periodo"+inte]=this.cp.transform(this.balances[inte].maqEquipo ,'USD',true,'1.0-0');
       rows[13]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].maqEquipo /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[14]["periodo"+inte]=this.cp.transform(-this.balances[inte].depMaqEquipo ,'USD',true,'1.0-0');
       rows[14]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depMaqEquipo /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[15]["periodo"+inte]=this.cp.transform(this.balances[inte].mueblesEnseres ,'USD',true,'1.0-0');
       rows[15]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].mueblesEnseres /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[16]["periodo"+inte]=this.cp.transform(-this.balances[inte].depMueblesEnseres ,'USD',true,'1.0-0');
       rows[16]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depMueblesEnseres /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[17]["periodo"+inte]=this.cp.transform(this.balances[inte].eqTrans ,'USD',true,'1.0-0');
       rows[17]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].eqTrans /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[18]["periodo"+inte]=this.cp.transform(-this.balances[inte].depEqTrans ,'USD',true,'1.0-0');
       rows[18]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depEqTrans /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[19]["periodo"+inte]=this.cp.transform(this.balances[inte].terreno+this.balances[inte].edifInsta+this.balances[inte].depEdif+this.balances[inte].maqEquipo+this.balances[inte].depMaqEquipo+this.balances[inte].mueblesEnseres+this.balances[inte].mueblesEnseres+this.balances[inte].depMueblesEnseres+this.balances[inte].eqTrans+this.balances[inte].depEqTrans,'USD',true,'1.0-0');
       rows[19]["periodo"+inte+"p"]=this.dc.transform((this.balances[inte].terreno+this.balances[inte].edifInsta+this.balances[inte].depEdif+this.balances[inte].maqEquipo+this.balances[inte].depMaqEquipo+this.balances[inte].mueblesEnseres+this.balances[inte].mueblesEnseres+this.balances[inte].depMueblesEnseres+this.balances[inte].eqTrans+this.balances[inte].depEqTrans)/this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[21]["periodo"+inte]=this.cp.transform(this.balances[inte].pagosAnticipado ,'USD',true,'1.0-0');
       rows[21]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].pagosAnticipado /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[22]["periodo"+inte]=this.cp.transform(this.balances[inte].gastosAmortizacion ,'USD',true,'1.0-0');
       rows[22]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].gastosAmortizacion /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[23]["periodo"+inte]=this.cp.transform(this.balances[inte].pagosAnticipado+this.balances[inte].gastosAmortizacion ,'USD',true,'1.0-0');
       rows[23]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].pagosAnticipado+this.balances[inte].gastosAmortizacion/this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[24]["periodo"+inte]=this.cp.transform(this.getTotalActivo(this.balances[inte]) ,'USD',true,'1.0-0');
       rows[24]["periodo"+inte+"p"]=this.dc.transform(this.getTotalActivo(this.balances[inte]) /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[28]["periodo"+inte]=this.cp.transform(this.balances[inte].IVAPorEnterar ,'USD',true,'1.0-0');
       rows[28]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].IVAPorEnterar /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[29]["periodo"+inte]=this.cp.transform(this.balances[inte].imptosPorPagar ,'USD',true,'1.0-0');
       rows[29]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].imptosPorPagar /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;


       rows[30]["periodo"+inte]=this.cp.transform(this.balances[inte].proveedores ,'USD',true,'1.0-0');
       rows[30]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].proveedores /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[31]["periodo"+inte]=this.cp.transform(this.balances[inte].PTUPorPagar ,'USD',true,'1.0-0');
       rows[31]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].PTUPorPagar /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[32]["periodo"+inte]=this.cp.transform(this.balances[inte].prestamosMenosAnio ,'USD',true,'1.0-0');
       rows[32]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].prestamosMenosAnio /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[35]["periodo"+inte]=this.cp.transform(this.balances[inte].prestamosMasAnio ,'USD',true,'1.0-0');
       rows[35]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].prestamosMasAnio /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[37]["periodo"+inte]=this.cp.transform(this.balances[inte].capitalSocial ,'USD',true,'1.0-0');
       rows[37]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].capitalSocial /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[38]["periodo"+inte]=this.cp.transform(this.balances[inte].reservaLegal ,'USD',true,'1.0-0');
       rows[38]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].reservaLegal /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[39]["periodo"+inte]=this.cp.transform(this.balances[inte].utilidadAcum ,'USD',true,'1.0-0');
       rows[39]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].utilidadAcum /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[40]["periodo"+inte]=this.cp.transform(this.balances[inte].utilidadEjercicio ,'USD',true,'1.0-0');
       rows[40]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].utilidadEjercicio /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[41]["periodo"+inte]=this.cp.transform(this.balances[inte].capitalSocial+this.balances[inte].reservaLegal+this.balances[inte].utilidadAcum+this.balances[inte].utilidadEjercicio ,'USD',true,'1.0-0');
       rows[41]["periodo"+inte+"p"]=this.dc.transform((this.balances[inte].capitalSocial+this.balances[inte].reservaLegal+this.balances[inte].utilidadAcum+this.balances[inte].utilidadEjercicio)/this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

       rows[42]["periodo"+inte]=this.cp.transform(this.getSumaPasivo(this.balances[inte]),'USD',true,'1.0-0');
       rows[42]["periodo"+inte+"p"]=this.dc.transform(this.getSumaPasivo(this.balances[inte])/this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;



     }






    new Angular2Csv(rows, 'Balance General de Integrales');


}


PDFintegrales3(){

  let proyecto=this.proyectoActual;
  var doc= new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: [215.9,279]});

  let cols=[
    {title: "", dataKey: "cara"},
  ]

  let rows=[

     {cara:"Derechos"},
     {cara: "Caja Bancos"},
     {cara: "Cuentas por Cobrar"},
     {cara: "IVA Acreditable"},
     {cara: "Almacén de Artículo Terminado"},
     {cara: "Almacén de Materiales"},
     {cara: ""},
     {cara: "Más de un Año"},
     {cara: "Terreno"},
     {cara: "Edificios e Instalaciones"},
     {cara: "Depreciación Acumulada"},
     {cara: "Maquinaria y Equipo"},
     {cara: "Depreciación Acumulada"},
     {cara: "Muebles y Enseres"},
     {cara: "Depreciación Acumulada"},
     {cara: "Equipo de Transporte"},
     {cara: "Depreciación Acumulada"},
     {cara: ""},
     {cara: "De Aplicación Diferida"},
     {cara: "Pagos por Anticipado"},
     {cara: "Gastos por Amortizar"},
     {cara: ""},
     {cara: "Suma de Activo"},
     {cara: ""},
     {cara: "Obligaciones"},
     {cara: "A menos de un Año"},
     {cara: "IVA por Enterar"},
     {cara: "Impuestos por Pagar"},
     {cara: "Proveedores"},
     {cara: "PTU por Pagar"},
     {cara: "Prestamos Bancarios"},
     {cara: ""},
     {cara: "A mas de un año"},
     {cara: "Prestamos Bancarios"},
     {cara: "Con los Accionistas"},
     {cara: "Capital Social"},
     {cara: "Reserva Legal"},
     {cara: "Utilidad Acumulada"},
     {cara: "Utilidad Ejercicio"},
     {cara: ""},
     {cara: "Suma de Pasivo y Capital"}
   ]



                let options={
                margin: {top: 40,
                         left:10},
                 tableWidth: 259,
                headerStyles: {fillColor:0,halign:'center',fontSize:6},
                bodyStyles:{
                  fontSize:5
                },
                columnStyles: {
                },
                addPageContent: function(data) {
                  doc.setFontSize(15);
                  doc.setFontType("bold");
                  doc.text(139.5, 15, 'Proyecto '+proyecto, null, null, 'center');
                  doc.setFontSize(13);
                  doc.text(139.5, 23, 'Integrales Balance General', null, null, 'center');
                  doc.line(50, 27, 228, 27);
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
                      doc.setFontType("bold")
                    }else if (data.row.index == 18) {
                      doc.setFontType("bold")
                    }else if (data.row.index == 25) {
                      doc.setFontType("bold")
                    }else if (data.row.index == 32) {
                      doc.setFontType("bold")
                    }else if (data.row.index == 34) {
                      doc.setFontType("bold")
                    }
                }
                }


  for(let inte in this.balances){
    cols.push({
      title:"Periodo "+(parseInt(inte)+1),
      dataKey:"periodo"+inte
    })
    cols.push({
      title:"",
      dataKey:"periodo"+inte+"p"
    })

    console.log(this.getTotalActivo(this.balances[inte]))



    rows[1]["periodo"+inte]=this.cp.transform(this.balances[inte].cajaBancos ,'USD',true,'1.0-0');
    rows[1]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].cajaBancos /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[2]["periodo"+inte]=this.cp.transform(this.balances[inte].cuentasPorCobrar ,'USD',true,'1.0-0');
    rows[2]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].cuentasPorCobrar /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[3]["periodo"+inte]=this.cp.transform(this.balances[inte].IVAAcreditable ,'USD',true,'1.0-0');
    rows[3]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].IVAAcreditable /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[4]["periodo"+inte]=this.cp.transform(this.balances[inte].almacenArtTerm ,'USD',true,'1.0-0');
    rows[4]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].almacenArtTerm /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[5]["periodo"+inte]=this.cp.transform(this.balances[inte].almacenMateriales ,'USD',true,'1.0-0');
    rows[5]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].almacenMateriales /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[6]["periodo"+inte]=this.cp.transform(this.balances[inte].cajaBancos+this.balances[inte].cuentasPorCobrar+this.balances[inte].IVAAcreditable+this.balances[inte].almacenArtTerm+this.balances[inte].almacenMateriales ,'USD',true,'1.0-0');
    rows[6]["periodo"+inte+"p"]=this.dc.transform((this.balances[inte].cajaBancos+this.balances[inte].cuentasPorCobrar+this.balances[inte].IVAAcreditable+this.balances[inte].almacenArtTerm+this.balances[inte].almacenMateriales)/this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[8]["periodo"+inte]=this.cp.transform(this.balances[inte].terreno ,'USD',true,'1.0-0');
    rows[8]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].terreno /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[9]["periodo"+inte]=this.cp.transform(this.balances[inte].edifInsta ,'USD',true,'1.0-0');
    rows[9]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].edifInsta /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[10]["periodo"+inte]=this.cp.transform(-this.balances[inte].depEdif ,'USD',true,'1.0-0');
    rows[10]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depEdif /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[11]["periodo"+inte]=this.cp.transform(this.balances[inte].maqEquipo ,'USD',true,'1.0-0');
    rows[11]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].maqEquipo /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[12]["periodo"+inte]=this.cp.transform(-this.balances[inte].depMaqEquipo ,'USD',true,'1.0-0');
    rows[12]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depMaqEquipo /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[13]["periodo"+inte]=this.cp.transform(this.balances[inte].mueblesEnseres ,'USD',true,'1.0-0');
    rows[13]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].mueblesEnseres /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[14]["periodo"+inte]=this.cp.transform(-this.balances[inte].depMueblesEnseres ,'USD',true,'1.0-0');
    rows[14]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depMueblesEnseres /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[15]["periodo"+inte]=this.cp.transform(this.balances[inte].eqTrans ,'USD',true,'1.0-0');
    rows[15]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].eqTrans /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[16]["periodo"+inte]=this.cp.transform(-this.balances[inte].depEqTrans ,'USD',true,'1.0-0');
    rows[16]["periodo"+inte+"p"]=this.dc.transform(-this.balances[inte].depEqTrans /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[17]["periodo"+inte]=this.cp.transform(this.balances[inte].terreno+this.balances[inte].edifInsta+this.balances[inte].depEdif+this.balances[inte].maqEquipo+this.balances[inte].depMaqEquipo+this.balances[inte].mueblesEnseres+this.balances[inte].mueblesEnseres+this.balances[inte].depMueblesEnseres+this.balances[inte].eqTrans+this.balances[inte].depEqTrans,'USD',true,'1.0-0');
    rows[17]["periodo"+inte+"p"]=this.dc.transform((this.balances[inte].terreno+this.balances[inte].edifInsta+this.balances[inte].depEdif+this.balances[inte].maqEquipo+this.balances[inte].depMaqEquipo+this.balances[inte].mueblesEnseres+this.balances[inte].mueblesEnseres+this.balances[inte].depMueblesEnseres+this.balances[inte].eqTrans+this.balances[inte].depEqTrans)/this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[19]["periodo"+inte]=this.cp.transform(this.balances[inte].pagosAnticipado ,'USD',true,'1.0-0');
    rows[19]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].pagosAnticipado /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[20]["periodo"+inte]=this.cp.transform(this.balances[inte].gastosAmortizacion ,'USD',true,'1.0-0');
    rows[20]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].gastosAmortizacion /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[21]["periodo"+inte]=this.cp.transform(this.balances[inte].pagosAnticipado+this.balances[inte].gastosAmortizacion ,'USD',true,'1.0-0');
    rows[21]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].pagosAnticipado+this.balances[inte].gastosAmortizacion/this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[22]["periodo"+inte]=this.cp.transform(this.getTotalActivo(this.balances[inte]) ,'USD',true,'1.0-0');
    rows[22]["periodo"+inte+"p"]=this.dc.transform(this.getTotalActivo(this.balances[inte]) /this.getTotalActivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[26]["periodo"+inte]=this.cp.transform(this.balances[inte].IVAPorEnterar ,'USD',true,'1.0-0');
    rows[26]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].IVAPorEnterar /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[27]["periodo"+inte]=this.cp.transform(this.balances[inte].imptosPorPagar ,'USD',true,'1.0-0');
    rows[27]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].imptosPorPagar /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;


    rows[28]["periodo"+inte]=this.cp.transform(this.balances[inte].proveedores ,'USD',true,'1.0-0');
    rows[28]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].proveedores /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[29]["periodo"+inte]=this.cp.transform(this.balances[inte].PTUPorPagar ,'USD',true,'1.0-0');
    rows[29]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].PTUPorPagar /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[30]["periodo"+inte]=this.cp.transform(this.balances[inte].prestamosMenosAnio ,'USD',true,'1.0-0');
    rows[30]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].prestamosMenosAnio /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[33]["periodo"+inte]=this.cp.transform(this.balances[inte].prestamosMasAnio ,'USD',true,'1.0-0');
    rows[33]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].prestamosMasAnio /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[35]["periodo"+inte]=this.cp.transform(this.balances[inte].capitalSocial ,'USD',true,'1.0-0');
    rows[35]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].capitalSocial /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[36]["periodo"+inte]=this.cp.transform(this.balances[inte].reservaLegal ,'USD',true,'1.0-0');
    rows[36]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].reservaLegal /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[37]["periodo"+inte]=this.cp.transform(this.balances[inte].utilidadAcum ,'USD',true,'1.0-0');
    rows[37]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].utilidadAcum /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[38]["periodo"+inte]=this.cp.transform(this.balances[inte].utilidadEjercicio ,'USD',true,'1.0-0');
    rows[38]["periodo"+inte+"p"]=this.dc.transform(this.balances[inte].utilidadEjercicio /this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[39]["periodo"+inte]=this.cp.transform(this.balances[inte].capitalSocial+this.balances[inte].reservaLegal+this.balances[inte].utilidadAcum+this.balances[inte].utilidadEjercicio ,'USD',true,'1.0-0');
    rows[39]["periodo"+inte+"p"]=this.dc.transform((this.balances[inte].capitalSocial+this.balances[inte].reservaLegal+this.balances[inte].utilidadAcum+this.balances[inte].utilidadEjercicio)/this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    rows[40]["periodo"+inte]=this.cp.transform(this.getSumaPasivo(this.balances[inte]),'USD',true,'1.0-0');
    rows[40]["periodo"+inte+"p"]=this.dc.transform(this.getSumaPasivo(this.balances[inte])/this.getSumaPasivo(this.balances[inte])*100,'1.0-0')+"%" ;

    options.columnStyles["periodo"+inte]={halign:"right"}
    options.columnStyles["periodo"+inte+"p"]={halign:"center"}

  }




  doc.autoTable(cols, rows, options);


  doc.save("Integrales Balance.pdf");


}


PDFintegrales(){
      let proyecto=this.proyectoActual;
      var doc= new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [215.9,279]});

      let cols=[
        {title: "", dataKey: "cara"},
      ]


                    let options={
                    margin: {top: 40,
                             left:10},
                     tableWidth: 259,
                    headerStyles: {fillColor:0,halign:'center',fontSize:6},
                    bodyStyles:{
                      fontSize:5
                    },
                    columnStyles: {
                    },
                    addPageContent: function(data) {
                      doc.setFontSize(15);
                      doc.setFontType("bold");
                      doc.text(139.5, 15, 'Proyecto '+proyecto, null, null, 'center');
                      doc.setFontSize(13);
                      doc.text(139.5, 23, 'Integrales', null, null, 'center');
                      doc.line(50, 27, 228, 27);
                    },
                    }


      let rows=[
        {cara: "Ventas Netas"},
        {cara: "Costo de Ventas"},
        {cara: "Utilidad Bruta"},
        {cara: ""},
        {cara: "Costo de Distribución"},
        {cara: "Otros Gastos"},
        {cara: "Costo de Administración"},
        {cara: ""},
        {cara: ""},
        {cara: "Utilidad en Operación"},
        {cara: "Intereses"},
        {cara: "Utilidad Antes de Impuestos"},
        {cara: "ISR"},
        {cara: "PTU"},
        {cara: "Utilidad del Ejercicio"},
      ]

      for(let inte of this.integrales){
        cols.push({
          title:"Periodo "+inte.numeroPeriodo,
          dataKey:"periodo"+inte.numeroPeriodo
        })
        cols.push({
          title:"",
          dataKey:"periodo"+inte.numeroPeriodo+"p"
        })



        rows[0]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ventasNetas,'USD',true,'1.0-0');
        rows[0]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

        rows[1]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.costoVentas,'USD',true,'1.0-0') ;
        rows[1]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

        rows[2]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadBruta,'USD',true,'1.0-0');
        rows[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

        rows[4]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist,'USD',true,'1.0-0') ;
        rows[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

        rows[5]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.oGastos,'USD',true,'1.0-0') ;
        rows[5]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

        rows[6]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cAdmin,'USD',true,'1.0-0') ;
        rows[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

        rows[7]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist+inte.oGastos+inte.cAdmin,'USD',true,'1.0-0') ;
        rows[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

        rows[9]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadOperacion,'USD',true,'1.0-0');
        rows[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

        rows[10]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.intereses,'USD',true,'1.0-0');
        rows[10]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


        rows[11]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadAntesImptos,'USD',true,'1.0-0') ;
        rows[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

        rows[12]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ISR,'USD',true,'1.0-0')
        rows[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

        rows[13]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.PTU,'USD',true,'1.0-0') ;
        rows[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

        rows[14]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadEjercicio,'USD',true,'1.0-0');
        rows[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


        options.columnStyles["periodo"+inte.numeroPeriodo]={halign:"right"}
        options.columnStyles["periodo"+inte.numeroPeriodo+"p"]={halign:"center"}

      }




      doc.autoTable(cols, rows, options);


      doc.save("Integrales.pdf");

}


PDFintegrales2(){
  let proyecto=this.proyectoActual;
  var doc= new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: [215.9,279]});

  let cols=[
    {title: "", dataKey: "cara"},
  ]


                let options={
                margin: {top: 40,
                         left:10},
                 tableWidth: 259,
                headerStyles: {fillColor:0,halign:'center',fontSize:8},
                bodyStyles:{
                  fontSize:8
                },
                columnStyles: {
                },
                addPageContent: function(data) {
                  doc.setFontSize(15);
                  doc.setFontType("bold");
                  doc.text(139.5, 15, 'Proyecto '+proyecto, null, null, 'center');
                  doc.setFontSize(13);
                  doc.text(139.5, 23, 'Integrales', null, null, 'center');
                  doc.line(50, 27, 228, 27);
                },
                }


  let rows=[
    {cara: "Ventas Netas"},
    {cara: "Costo de Ventas"},
    {cara: "Utilidad Bruta"},
    {cara: ""},
    {cara: "Costo de Distribución"},
    {cara: "Otros Gastos"},
    {cara: "Costo de Administración"},
    {cara: ""},
    {cara: ""},
    {cara: "Utilidad en Operación"},
    {cara: "Intereses"},
    {cara: "Utilidad Antes de Impuestos"},
    {cara: "ISR"},
    {cara: "PTU"},
    {cara: "Utilidad del Ejercicio"},
  ]

  for(let inte of this.integrales){
    cols.push({
      title:"Periodo "+inte.numeroPeriodo,
      dataKey:"periodo"+inte.numeroPeriodo+"p"
    });



    rows[0]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

    rows[1]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

    rows[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

    rows[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

    rows[5]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

    rows[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

    rows[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

    rows[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

    rows[10]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


    rows[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

    rows[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

    rows[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

    rows[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


    options.columnStyles["periodo"+inte.numeroPeriodo+"p"]={halign:"center"}

  }




  doc.autoTable(cols, rows, options);


  doc.save("Integrales Porcentajes.pdf");



}



CSVintegrales(){

    let data=[
      {cara:"Integrales del Proyecto "+this.proyectoActual},
      {cara:""},
      {cara: "Ventas Netas"},
      {cara: "Costo de Ventas"},
      {cara: "Utilidad Bruta"},
      {cara: ""},
      {cara: "Costo de Distribución"},
      {cara: "Otros Gastos"},
      {cara: "Costo de Administración"},
      {cara: ""},
      {cara: ""},
      {cara: "Utilidad en Operación"},
      {cara: "Intereses"},
      {cara: "Utilidad Antes de Impuestos"},
      {cara: "ISR"},
      {cara: "PTU"},
      {cara: "Utilidad del Ejercicio"},
    ]


          for(let inte of this.integrales){



            data[1]["periodo"+inte.numeroPeriodo]="Periodo "+inte.numeroPeriodo;
            data[1]["periodo"+inte.numeroPeriodo+"p"]="";


            data[2]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ventasNetas,'USD',true,'1.0-0');
            data[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

            data[3]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.costoVentas,'USD',true,'1.0-0') ;
            data[3]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

            data[4]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadBruta,'USD',true,'1.0-0');
            data[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

            data[6]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist,'USD',true,'1.0-0') ;
            data[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

            data[7]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.oGastos,'USD',true,'1.0-0') ;
            data[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

            data[8]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cAdmin,'USD',true,'1.0-0') ;
            data[8]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

            data[9]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.cDist+inte.oGastos+inte.cAdmin,'USD',true,'1.0-0') ;
            data[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

            data[11]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadOperacion,'USD',true,'1.0-0');
            data[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

            data[12]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.intereses,'USD',true,'1.0-0');
            data[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


            data[13]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadAntesImptos,'USD',true,'1.0-0') ;
            data[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

            data[14]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.ISR,'USD',true,'1.0-0')
            data[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

            data[15]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.PTU,'USD',true,'1.0-0') ;
            data[15]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

            data[16]["periodo"+inte.numeroPeriodo]=this.cp.transform(inte.utilidadEjercicio,'USD',true,'1.0-0');
            data[16]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


          }

          new Angular2Csv(data, 'Integrales');

}




CSVintegrales2(){

    let data=[
      {cara:"Integrales del Proyecto "+this.proyectoActual},
      {cara:""},
      {cara: "Ventas Netas"},
      {cara: "Costo de Ventas"},
      {cara: "Utilidad Bruta"},
      {cara: ""},
      {cara: "Costo de Distribución"},
      {cara: "Otros Gastos"},
      {cara: "Costo de Administración"},
      {cara: ""},
      {cara: ""},
      {cara: "Utilidad en Operación"},
      {cara: "Intereses"},
      {cara: "Utilidad Antes de Impuestos"},
      {cara: "ISR"},
      {cara: "PTU"},
      {cara: "Utilidad del Ejercicio"},
    ]


          for(let inte of this.integrales){



            data[1]["periodo"+inte.numeroPeriodo+"p"]="Periodo "+inte.numeroPeriodo;


            data[2]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pventasNetas,'1.0-0')+"%" ;

            data[3]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcostoVentas,'1.0-0')+"%";

            data[4]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadBruta,'1.0-0')+"%";

            data[6]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcDist,'1.0-0')+"%";

            data[7]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.poGastos,'1.0-0')+"%";

            data[8]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pcAdmin,'1.0-0')+"%";

            data[9]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform((inte.cDist+inte.oGastos+inte.cAdmin)/inte.ventasNetas*100,'1.0-0')+"%";

            data[11]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadOperacion,'1.0-0')+"%";

            data[12]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pintereses,'1.0-0')+"%";


            data[13]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadAntesImptos,'1.0-0')+"%";

            data[14]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pISR,'1.0-0')+"%" ;

            data[15]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.pPTU,'1.0-0')+"%";

            data[16]["periodo"+inte.numeroPeriodo+"p"]=this.dc.transform(inte.putilidadEjercicio,'1.0-0')+"%" ;


          }

          new Angular2Csv(data, 'Integrales2');

}

getNameById(idProyecto){
  for(let proyecto of this.proyectos){
    if(proyecto.idProyecto==idProyecto)
      return proyecto.nombreProyecto
  }
    return "id NO encontrado"

}



}
