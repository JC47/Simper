import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {BalanceService} from '../../../services/balance.service';
import {ResultadosService} from '../../../services/resultados.service';
import { CurrencyPipe } from '@angular/common';
import {ProyectosService} from '../../../services/proyectos.service';
import {DesarrolloProductoService} from '../../../services/desarrollo-producto.service';
import {DesarrolloZonaService} from '../../../services/desarrollo-zona.service';
import { UsuarioCreditoService} from '../../../services/usuario-credito.service';
import {AuxiliarService} from '../../../services/auxiliar.service';


@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrls: ['./navbar-usuario.component.css']
})
export class NavbarUsuarioComponent implements OnInit {
  usuario:Object
  balance:any;
  balanceFinal:any;
  openConf:boolean=false;
  openBien:boolean=false;
  openLoad:boolean=false;
  alert:boolean=false;
  opciones:boolean=false;
  periodo:number;
  periodos = [];
  openPeriodos:boolean=false;
  constructor(private authService: AuthService, private router:Router,
    private _resultadosService:ResultadosService,
    private _proyectoService:ProyectosService,
    private _balanceService:BalanceService,
    private _auxiliarService:AuxiliarService,
    private _desarrolloZona:DesarrolloZonaService,
    private _desarrolloProducto:DesarrolloProductoService,
    private _creditoService:UsuarioCreditoService) {
      this._resultadosService.vender();
  this.asignarBalance(localStorage.getItem('idProyecto')); }

  ngOnInit() {
    this.authService.getProfileUsuario().subscribe( data => {
      this.usuario = data.admin;
      this.balance = localStorage.getItem('idBalance');
    });



  }

  logOut(){
    this.authService.logoutUsuario();
    this.router.navigate(['login']);
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
      //this.modalPeriodos.hide();
    }


    pasarPeriodo(){
      this.openLoad=true;
      this.openConf=false;
      setTimeout(()=>{this.openLoad=false}, 1000);
      this._balanceService.getBalanceFinal().subscribe( data => {
        console.log("data side av",data)
        if(data.success){
          this.balanceFinal = this._resultadosService.getBalanceFinal();
        }
      });


      setTimeout(() => {
        var p = localStorage.getItem('numeroPeriodo');
        var proyecto = localStorage.getItem('idProyecto');
        let periodoNuevo = parseInt(p) + 1;
        var cajaBancosFinal = 0;
        console.log(this.balanceFinal)
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

            this._balanceService.getBalanceByIds(proyecto,p).subscribe(data => {
              var dep = data.datos[0].maqEquipo*.10;
              this._balanceService.crearBalance(proyecto,data.datos[0],periodoNuevo).subscribe(data => {
                if(data.success){
                  setTimeout(()=>{this.openBien=true;}, 1000);
                  localStorage.setItem('numeroPeriodo',periodoNuevo.toString());
                  localStorage.setItem('numeroRPeriodos',periodoNuevo.toString());
                  this.periodo = this.periodo + 1 ;
                  this._proyectoService.changePeriodo();
                  setTimeout(() => {
                    console.log("Peri",this._proyectoService.periodo)
                  }, 1000);


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
      }, 1000);



    }





}
