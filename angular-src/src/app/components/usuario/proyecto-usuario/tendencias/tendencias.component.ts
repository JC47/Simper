import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html'
})
export class TendenciasComponent implements OnInit {

  tendencias = [];

  constructor(private _operacionService:OperacionService) {
    this.tendencias = this._operacionService.returnTendencias();
    console.log(this.tendencias);
  }

  ngOnInit() {
  }

}
