import { Component, OnInit,ViewChild } from '@angular/core';
import { UsuarioCreditoService } from '../../../../services/usuario-credito.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.css']
})
export class FinanciamientoComponent implements OnInit {
  tablaA = [];
  creditosActivos = [];
  creditos:any;
  creditosSolicitados = [];
  creditoSelected:any;
  openTablaAmort = false;
  openPagos = false;
  tablaPagos = [];
  openModalConf:boolean=false;
  solicitudForm:FormGroup;
  modalAlerta:boolean=false;

  constructor(private _creditoService:UsuarioCreditoService) {
    this.creditos=this._creditoService.returnCreditosU(localStorage.getItem('idUsuario'));
    this.creditosActivos=this._creditoService.arregloC();
    console.log("cActivos",this.creditosActivos)
    this.solicitudForm= new FormGroup({
      'monto':new FormControl('',Validators.required),
      'idCredito':new FormControl('',Validators.required)
    });
  }

  validaCredito(credito){
    for(let credit of this.creditosActivos){
      if(credito.idCredito==credit.idCredito){
        console.log("esta pedidio")
        return true;

      }
    }
    console.log("no esta pedido")
    return false;

  }

  validaCreditoA(credito){
    if(credito.numeroPeriodo==localStorage.getItem('numeroPeriodo'))
      return true
    else
      return false
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
          }
        });
      console.log("Activos",this._creditoService.arregloC());
      this.creditosActivos=this._creditoService.arregloC();
      }else{
        this.modalAlerta=true;
        this.openModalConf=false;
      }
    });
  }

  eliminarCreditoSolicitado(idCredito){
    var x = {
      idCredito:idCredito,
      idProyecto:parseInt(localStorage.getItem('idProyecto')),
      numeroPeriodo:parseInt(localStorage.getItem('numeroPeriodo'))
    };
    this._creditoService.eliminarCredito(x).subscribe(data => {console.log(2,data);});
    this._creditoService.eliminarCreditoActivo(x).subscribe();
  }

  verAmortizacion(idCredito){
    this.openTablaAmort = true;
    this.tablaA = this._creditoService.visualizarTabla(idCredito);
  }

  verPagos(idCredito){
    this.openPagos = true;
    this.tablaPagos = this._creditoService.verPagosP(idCredito);
  }

  ngOnInit() {
  }

}
