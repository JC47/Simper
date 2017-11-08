import { Component, OnInit } from '@angular/core';
import {VariablesService} from '../../services/variables.service';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html'
})
export class VariablesComponent implements OnInit {

  variables = [];

  constructor(private _variablesService:VariablesService) {
    this.variables = this._variablesService.returnVariables();
  }

  ngOnInit() {
  }

}
