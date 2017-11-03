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
  creditos:any;
  creditosSolicitados = [];
  creditoSelected:any;
  openTablaAmort = false;
  openPagos = false;
  tablaPagos = [];
  openModalConf:boolean=false;
  solicitudForm:FormGroup;

  constructor(private _creditoService:UsuarioCreditoService) {
    this.creditos=this._creditoService.returnCreditosU(localStorage.getItem('idUsuario'));
    this.solicitudForm= new FormGroup({
      'monto':new FormControl('',Validators.required),
      'idCredito':new FormControl('',Validators.required)
    });
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
    this._creditoService.solicitarCredito(x).subscribe(data => {
        if(data.success){
          this.openModalConf=false;
          this.verAmortizacion(cantidad.idCredito);
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
  }

  verAmortizacion(idCredito){
    this.tablaA = this._creditoService.visualizarTabla(idCredito);
    this.openTablaAmort = true;
  }

  verPagos(idCredito){
    this.tablaPagos = this._creditoService.verPagosP(idCredito);
    this.openPagos = true;
  }

  ngOnInit() {
  }

}
