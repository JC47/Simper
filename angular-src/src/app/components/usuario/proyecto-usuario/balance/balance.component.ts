import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import {ProyectosService} from '../../../../services/proyectos.service';
import {DesarrolloProductoService} from '../../../../services/desarrollo-producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {DesarrolloZonaService} from '../../../../services/desarrollo-zona.service';
import {AuxiliarService} from '../../../../services/auxiliar.service';
import {BalanceService} from '../../../../services/balance.service';
import { UsuarioCreditoService } from '../../../../services/usuario-credito.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {

  @ViewChild('modalPeriodos') public modalPeriodos:ModalDirective;
  @ViewChild('modalConf') public confModal:ModalDirective;

  opciones:boolean=false;
  periodo:number;
  periodos = [];
  balanceFinal:any;
  openConf:boolean=false;
  openBien:boolean=false;
  openLoad:boolean=false;
  alert:boolean=false;
  perAct:any;


  constructor(private _proyectoService:ProyectosService,
              private _balanceService:BalanceService,
              private _auxiliarService:AuxiliarService,
              private _resultadosService:ResultadosService,
              private _desarrolloZona:DesarrolloZonaService,
              private router:Router,
              private _creditoService:UsuarioCreditoService,
              private _desarrolloProducto:DesarrolloProductoService) {

              this.asignarBalance(localStorage.getItem('idProyecto'));
              this.balanceFinal = this._resultadosService.getBalanceFinal();
              this.perAct=this._proyectoService.periodo;
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

  asignarBalance(idProyecto){
    this.periodos.length = 0;
    this._proyectoService.buscarPeriodos(idProyecto).subscribe(data => {
      if(data.datos.length == 0){
        this.periodo = 1;
        var x = {
          nombre:"Periodo 1",
          numero:1
        }
        this.periodos.push(x);
      }
      else{
        this.periodo = parseInt(data.datos.length) - 1;
        for(let key$ in data.datos){

          if(data.datos[key$].numeroPeriodo != 0){
            var y = {
              nombre:"Periodo "+(data.datos[key$].numeroPeriodo),
              numero:(data.datos[key$].numeroPeriodo)
            }
            this.periodos.push(y);
          }
        }
      }
    });
  }

  pasarPeriodo(){
    var p = localStorage.getItem('numeroPeriodo');
    var proyecto = localStorage.getItem('idProyecto');
    let periodoNuevo = parseInt(p) + 1;
    var cajaBancosFinal = 0;
    for(let b of this.balanceFinal){
      cajaBancosFinal += b.cajaBancos;
    }

    if(localStorage.getItem('periodos') == p){
      alert("Haz finalizado la simulacion");
    }
    else{
      if(cajaBancosFinal < 0){
        this.openConf=false;
        this.alert=true;
      }
      else{
        this.openConf=false;
        this.openLoad=true;
        setTimeout(()=>{this.openLoad=false,this.openBien=true;}, 2000);
        this._balanceService.getBalanceByIds(proyecto,p).subscribe(data => {
          var dep = data.datos[0].maqEquipo*.10;
          this._balanceService.crearBalance(proyecto,data.datos[0],periodoNuevo).subscribe(data => {
            if(data.success){
              localStorage.setItem('numeroPeriodo',periodoNuevo.toString());
              localStorage.setItem('numeroRPeriodo',periodoNuevo.toString());

              this.periodo = this.periodo + 1 ;
              var y = {
                nombre: "Periodo "+this.periodo,
                numero: this.periodo
              }
              this.periodos.push(y);
            }
          });
        });
        this._desarrolloProducto.actualizarPD();
        this._desarrolloZona.actualizarZonasDes();
        this._creditoService.validarP().subscribe();
      }
    }
  }

  openBalances(){
    this.modalPeriodos.show();

  }

  pasaCreditos(){
    this.router.navigate(['Usuario/proyecto/financiamiento']);
    this.alert=false;
  }

  modalPasarPeriodo(){
    this.openBien=false;
    this.router.navigate(['Usuario/proyecto/home']);
  }

  transicion(numero){
    console.log(numero)
    this.periodo = numero;
    localStorage.setItem('numeroPeriodo', numero);
    this.modalPeriodos.hide();
  }




}
