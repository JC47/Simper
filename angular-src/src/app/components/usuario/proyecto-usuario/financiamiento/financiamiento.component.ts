import { Component, OnInit } from '@angular/core';
import { UsuarioCreditoService } from '../../../../services/usuario-credito.service';

@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.css']
})
export class FinanciamientoComponent implements OnInit {
  creditosU = [];

  constructor(private _usuarioCreditoSerivice:UsuarioCreditoService) {
    this.creditosU = this._usuarioCreditoSerivice.returnCreditosU(localStorage.getItem('idUsuario'));
  }

  ngOnInit() {
  }

}
