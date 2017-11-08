import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class VariablesService {

  headers = new Headers({
    'Content-Type':'application/json'
  });

  constructor(private http:Http) { }

  returnVariables(){
    var variables = [];
    this.getVariables().subscribe(data => {
      for(let key in data.datos){
        variables.push(data.datos[key]);
      }
    });
    return variables;
  }

  editarVariable(x,id){
    var variables = [];
    this.modifyVariable(x,id).subscribe(data => {
      for(let key in data.datos){
        variables.push(data.datos[key]);
      }
    });
    return variables;
  }

  //Peticiones

  getVariables(){
    return this.http.get('variable/').map(res => res.json());
  }

  registerVariable(x){
    return this.http.post('variable/register',x,this.headers).map(res => res.json());
  }

  modifyVariable(x,id){
    return this.http.post('variable/modify/'+id,x,this.headers).map(res => res.json());
  }


}
