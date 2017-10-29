import { Injectable } from '@angular/core';
import { AuthService} from '../services/auth.service';
import {usuario, maquinaria,select, proyecto} from '../app.interfaces';
import { AdministradoresService} from '../services/administradores.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

@Injectable()
export class UsuariosService {
  usuarios:usuario[]=new Array();
  proyectos:proyecto[]= new Array();
  idAdmin;
  Admin:object;

  constructor(private http:Http, private authService:AuthService, private administradoresService:AdministradoresService) {
    this.idAdmin = localStorage.getItem('idAdmin');
    /*
    this.getUsuarios().subscribe(data => {
      for(let key$ in data){
          this.usuarios.push(data[key$]);
      }
    });
    console.log("Perro",this.usuarios);
    */
   }

   establecerValores(){
     this.usuarios.length = 0;
     this.getUsuarios().subscribe(data => {
       for(let key$ in data){
           this.usuarios.push(data[key$]);
       }
     });
     return this.usuarios;
   }

returnUsuarios(){
  return this.establecerValores();
}

setBalanceCero(data, id){
  let headers = new Headers({
    'Content-Type':'application/json'
  });
  return this.http.post('usuario/variables/'+id, data, {headers}).map( res => res.json());
}

inicializarVariables(data, id){
  this.setBalanceCero(data,id).subscribe(data => {
    for(let key$ in data.datos){
        this.usuarios[key$] = data.datos[key$];
    }
  });
}

deleteUsuario(id:number){
  for(let i=0;this.usuarios.length>i;i++){
    if(this.usuarios[i].idUsuario==id){
      this.usuarios.splice(i,1);
      console.log("Usuario: ",id,"eliminado");
    }
  }
  console.log('usuario/delete/'+id);
  return this.http.get('usuario/delete/'+id).map(res => res.json());

}

  getUsuarios(){
    return this.http.get('usuario/').map(res => res.json());
  }

  addMaquinaria(){

  }


  guardarUsuario(usuario:usuario){
    this.addUsuario(usuario).subscribe( data => {
      for(let key$ in data.datos){
          this.usuarios[key$] = data.datos[key$];
      }
    });
  }

  addUsuario(usuario:usuario){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post('usuario/register/', usuario, {headers}).map( res => res.json());

  }

  getProyectos(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.get('usuario/proyectos', {headers}).map( res => res.json());
  }

  returnProyectos(){
    this.proyectos.length = 0;
    this.getProyectos().subscribe(data => {
      for(let key$ in data){
          this.proyectos.push(data[key$]);
      }
    });
    return this.proyectos;
  }

  getBalanceCero(){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.get('usuario/balanceCero/'+localStorage.getItem('idUsuario'),{headers}).map( res => res.json());
  }



  setUsuario(usuario:usuario){
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    for(let i=0;this.usuarios.length>i;i++){
      if(this.usuarios[i].idUsuario==usuario.idUsuario){
        this.usuarios.splice(i,1);
        this.usuarios.push(usuario);
        break;
      }
    }
    return this.http.post('usuario/modify/'+usuario.idUsuario, usuario, {headers}).map( res => res.json());
  }

}
