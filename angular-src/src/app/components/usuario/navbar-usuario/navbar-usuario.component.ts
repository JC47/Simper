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
  confProd:boolean=false;
  confZonas:boolean=false;
  openBien:boolean=false;
  openLoad:boolean=false;
  openLoadDatos:boolean=false;
  alert:boolean=false;
  numeroPeriodoSelected:any;
  simTerm:boolean=false;
  opciones:boolean=false;
  periodo:number;
  periodos = [];
  confZona:boolean=false;
  productosEnDesarrollo:any;
  zonasEnDesarrollo:any;
  confEditaPeriodos:boolean=false;
  openPeriodos:boolean=false;
  constructor(private authService: AuthService, private router:Router,
    private _resultadosService:ResultadosService,
    private _proyectoService:ProyectosService,
    private _balanceService:BalanceService,
    private _auxiliarService:AuxiliarService,
    private _desarrolloZona:DesarrolloZonaService,
    private _desarrolloProducto:DesarrolloProductoService,
    private _creditoService:UsuarioCreditoService) {
    this._proyectoService.ocultaCierrePeriodo()
    this.asignarBalance(localStorage.getItem('idProyecto')); }

  ngOnInit() {
    this.authService.getProfileUsuario().subscribe( data => {
      this.usuario = data.admin;
      this.balance = localStorage.getItem('idBalance');
    });



  }

  logOut(){
    this._proyectoService.ocultaCierrePeriodo();
    this._proyectoService.oculataPCorriendo();
    this.authService.logoutUsuario();
    this.router.navigate(['login']);
  }

  pasaAfDes(){
    if(this.zonasEnDesarrollo){
      this.confProd=false;
      this.confZona=true;

    }

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

    pasaDesProd(){
      this.router.navigate(['Usuario/proyecto/desarrolloProducto']);
      this.confProd=false;
    }

    validaVi(){
      if(localStorage.getItem('numeroPeriodo')!=localStorage.getItem('numeroRPeriodos'))
        return false
      else
        return true
    }

    pasaDesZona(){
      this.router.navigate(['Usuario/proyecto/desarrolloMercado']);
      this.confZona=false;
    }

    modalPasarPeriodo(){
      this.openBien=false;
      this.router.navigate(['Usuario/proyecto/home']);
    }

    goHome(){
      this._proyectoService.ocultaCierrePeriodo();
      this._proyectoService.oculataPCorriendo();
      this._proyectoService.setTerminado(localStorage.getItem('idProyecto')).subscribe();
      this.simTerm = false;
      setTimeout(()=>{
        localStorage.removeItem('numeroPeriodo');
        localStorage.removeItem('idProyecto');
        localStorage.removeItem('numeroRPeriodos');
        localStorage.removeItem('nombreProyecto');
        localStorage.removeItem('regresion');
        localStorage.removeItem('terminado');
      },100);
      this.router.navigate(['/Usuario/proyectos']);
    }

    selectEditaPeriodo(p){
      this.numeroPeriodoSelected=p;
      this.confEditaPeriodos=true;
      this.openPeriodos=false;
      //this._proyectoService.editar(p.numero)
    }

    preparaCierre(){
      this.productosEnDesarrollo=this._desarrolloProducto.returnProductosEnDesarrollo();
      this.zonasEnDesarrollo=this._desarrolloZona.returnProductosDeZonaEnDesarrollo();
      console.log("Perro",this.zonasEnDesarrollo)
      this.openConf=true
    }

    editaPeriodo(){
      this.openLoadDatos=true;
      this.confEditaPeriodos=false;
      setTimeout(()=>{this.openLoadDatos=false}, 1000);
      this._proyectoService.editar(this.numeroPeriodoSelected)

    }

    visualizaPeriodo(p){
      this.openLoadDatos=true;
      this.openPeriodos=false;
      setTimeout(()=>{this.openLoadDatos=false}, 1000);
      this._proyectoService.ver(p)
    }

    transicion(numero){
      console.log(numero)
      this.periodo = numero;
      localStorage.setItem('numeroPeriodo', numero);
      //this.modalPeriodos.hide();
    }


    verificaDesarrollo(){
      this.openConf=false;

      if(this.confProd==false){
        for(let prodDes of this.productosEnDesarrollo){
          if(prodDes.numeroPeriodo!=localStorage.getItem('numeroRPeriodos')){
            this.confProd=true;
          }
        }
      }

      if(this.confZona==false){
        for(let zonaDes of this.zonasEnDesarrollo){
          for(let producto of zonaDes.productosEnDes){
            if(producto.numeroPeriodo!=localStorage.getItem('numeroRPeriodos')){
                this.confZona=true;
            }
          }
        }
      }





    if(this.confZona==false && this.confProd==false){
      this.pasarPeriodo();
    }

  }


  muestraCerrarPeriodo(){
    if(this._proyectoService.muestraPeriodo==true || localStorage.getItem('periodos')==localStorage.getItem('numeroPeriodo'))
      return true
    else
      return false;
  }


    pasarPeriodo(){

      this.openConf=false;
      this.confZona=false;
      this.confProd=false;
      console.log(this.productosEnDesarrollo)

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
          this.simTerm=true;

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
                  this.openLoad=true;
                  setTimeout(()=>{this.openLoad=false}, 1000);
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

                  var np = 0;
                  for(let r in data.datos){
                    np += data.datos[np].numeroPeriodo;
                  }
                  setTimeout(()=>{
                    this.openBien=true;
                    this._desarrolloProducto.actualizarPD(np);
                    this._desarrolloZona.actualizarZonasDes(np);
                    this._creditoService.validarP(np).subscribe();
                  }, 1000);

                }
              });
            });

          }
        }
      }, 1000);



    }

    validaRegre(){
      if(localStorage.getItem('regresion')=="0")
        return true
      else
        return false
    }



}
