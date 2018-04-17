import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';

@Component({
  selector: 'app-integrales',
  templateUrl: './integrales.component.html'
})
export class IntegralesComponent implements OnInit {

  integrales = [];

  constructor(private _operacionService:OperacionService) {
    this.integrales = this._operacionService.returnIntegrales();
    console.log(this.integrales)
  }

  ngOnInit() {
  }








}
