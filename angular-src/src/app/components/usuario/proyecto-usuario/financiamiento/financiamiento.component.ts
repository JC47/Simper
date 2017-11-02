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
  creditos:any;
  creditoSelected:any;
  openModalConf:boolean=false;
  solicitudForm:FormGroup;

  constructor(private _creditoService:UsuarioCreditoService) {
    this.creditos=this._creditoService.returnCreditosU(localStorage.getItem('idUsuario'));
    this.solicitudForm= new FormGroup({
      'monto':new FormControl('',Validators.required),
    });
  }

  selectCredito(credito){
    this.openModalConf=true;
    this.creditoSelected=credito;
  }
  solicitaCredito(cantidad){
    console.log(cantidad.monto)    
  }

  ngOnInit() {
  }

}
