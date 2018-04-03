import { Component, OnInit,ViewChild } from '@angular/core';
import { UsuarioCreditoService } from '../../../../services/usuario-credito.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProyectosService} from '../../../../services/proyectos.service';




@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.css']
})
export class FinanciamientoComponent implements OnInit {
  tablaA = [];
  creditosActivos = [];
  creditosBloqueados = [];
  creditos:any;
  creditosSolicitados = [];
  creditoSelected:any;
  openTablaAmort = false;
  openPagos = false;
  tablaPagos = [];
  openModalConf:boolean=false;
  solicitudForm:FormGroup;
  modalAlerta:boolean=false;
  modalAlerta2:boolean=false;
  deleteCreditoSelected:any={
    idCredito:null
  }
  confDeleteCredito:boolean=false;

  constructor(private _creditoService:UsuarioCreditoService,
  private _proyectoService:ProyectosService) {
    this._proyectoService.ocultaCierrePeriodo()
    this.creditos=this._creditoService.returnCreditosU(localStorage.getItem('idUsuario'));
    this.creditosActivos=this._creditoService.arregloC();
    this.creditosBloqueados=this._creditoService.returnBloqueados();
    console.log("cActivos",this.creditosActivos)
    console.log("cBloqueados",this.creditosBloqueados)
    this.solicitudForm= new FormGroup({
      'monto':new FormControl('',Validators.required),
      'idCredito':new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
  }

  validaCredito(credito){
    for(let credit of this.creditosActivos){
      if(credito.idCredito==credit.idCredito || this.validaVi()){
        return true;

      }
    }
    return false;

  }

  validaCreditoA(credito){
    var r = false;
    for(let a of this.creditosBloqueados){
      if(credito.idCredito==a.credito_idCredito){
        r = true;
        break;
      }
    }
    return r;
  }

  getNameById(id:number){
    for(let credito of this.creditos){
      if(credito.idCredito==id)
       return credito.nombreCredito;
    }
    return "id no encontrado";

  }

  selectCredito(credito){
    this.solicitudForm.controls['idCredito'].setValue(credito.idCredito)
    this.openModalConf=true;
    this.creditoSelected=credito;
  }


  solicitaCredito(cantidad){
    if(cantidad.monto<this.getMinById(cantidad.idCredito) || cantidad.monto>this.getMaxById(cantidad.idCredito)){
      this.modalAlerta2=true;
      this.openModalConf=false;
    }else{
      var x = {
        idCredito:cantidad.idCredito,
        idProyecto:parseInt(localStorage.getItem('idProyecto')),
        numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo')),
        monto:cantidad.monto
      };
      this._creditoService.validarC().subscribe(data1 => {
        if(data1.limite == 0){
          this._creditoService.solicitarCredito(x).subscribe(data => {
            if(data.success){
              this.verAmortizacion(cantidad.idCredito);
              this.actualizar();
            }
          });
        }else{
          this.modalAlerta=true;
          this.openModalConf=false;
        }
      });
      this.openModalConf=false;
    }
  }

  eliminarCreditoSolicitado(){
    this.confDeleteCredito=false;
    var x = {
      idCredito:this.deleteCreditoSelected.idCredito,
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
    };
    this._creditoService.eliminarCreditoActivo(x).subscribe();
    this._creditoService.eliminarCredito(x).subscribe(data => {
      if(data.success){
        this.actualizar();
      }
    });
  }

  verAmortizacion(idCredito){
    this.openTablaAmort = true;
    this.tablaA = this._creditoService.visualizarTabla(idCredito);
  }

  verPagos(idCredito){
    this.openPagos = true;
    this.tablaPagos = this._creditoService.verPagosP(idCredito);
  }

  getMaxById(idCredito){
    for(let credito of this.creditos){
      if(credito.idCredito==idCredito)
       return credito.montoMax
    }
    return "id no encontrado"
  }

  getMinById(idCredito){
    for(let credito of this.creditos){
      if(credito.idCredito==idCredito)
       return credito.montoMin
    }
    return "id no encontrado"

  }



  actualizar(){
    this.creditosActivos = this._creditoService.arregloC();
    this.creditosBloqueados = this._creditoService.returnBloqueados();
  }


  validaVi(){
    if(localStorage.getItem('numeroPeriodo')==localStorage.getItem('numeroRPeriodos'))
      return false
    else
      return true
  }




}
