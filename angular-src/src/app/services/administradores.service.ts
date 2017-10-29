import { Injectable } from '@angular/core';
import {admin} from '../app.interfaces';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';


@Injectable()
export class AdministradoresService {
  Administrador:admin;
  administradores:admin[] = new Array();

  constructor(private http:Http) {
    this.getAdministradores().subscribe(data => {
      for(let key$ in data){
          this.administradores.push(data[key$]);
      }
    });
  }

  establecerValores(){
    this.administradores.length = 0;
    this.getAdministradores().subscribe(data => {
      for(let key$ in data){
          this.administradores.push(data[key$]);
      }
    });
    return this.administradores;
  }

  deleteAdministrador(id:number){
    console.log("Eliminando",id);
    for(let i=0;this.administradores.length>i;i++){
      if(this.administradores[i].idAdministrador==id){
        console.log(this.administradores[i].idAdministrador);
        this.administradores.splice(i,1);
        console.log("Administrador: ",id,"eliminado");
      }
    }
    console.log('admin/delete/'+id);
    return this.http.get('admin/delete/'+id).map(res => res.json());

  }

    getAdministradores(){
      return this.http.get('admin/').map(res => res.json());
    }

    returnAdministradores(){
      return this.establecerValores();
    }

    getAdministrador(id){
      this.returnAdministradores();
      for(let i=0;this.administradores.length>i;i++){
        if(this.administradores[i].idAdministrador==id){
          this.Administrador = this.administradores[i];
          break;
        }
      }
      return this.Administrador;
    }


    guardarAdministrador(admin:admin){
      this.addAdministrador(admin).subscribe( data => {
        for(let key$ in data.datos){
            this.administradores[key$] = data.datos[key$];
        }
      });
    }

    addAdministrador(admin:admin){
      let headers = new Headers({
        'Content-Type':'application/json'
      });
      return this.http.post('admin/register', admin, {headers}).map( res => res.json());

    }

    getAdministradorById(id){
      let headers = new Headers({
        'Content-Type':'application/json'
      });
      return this.http.get('admin/'+id, {headers}).map( res => res.json());
    }

    setAdministrador(admin:admin){
      let headers = new Headers({
        'Content-Type':'application/json'
      });
      for(let i=0;this.administradores.length>i;i++){
        console.log(this.administradores[i].idAdministrador, admin.idAdministrador)
        if(this.administradores[i].idAdministrador==admin.idAdministrador){
          this.administradores.splice(i,1);
          this.administradores.push(admin);
        }
      }
      return this.http.post('admin/modify/'+admin.idAdministrador, admin, {headers}).map( res => res.json());
    }
}
