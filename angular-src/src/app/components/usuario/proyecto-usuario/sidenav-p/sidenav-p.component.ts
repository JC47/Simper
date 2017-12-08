import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {ProyectosService} from '../../../../services/proyectos.service';

@Component({
  selector: 'app-sidenav-p',
  templateUrl: './sidenav-p.component.html',
  styleUrls: ['./sidenav-p.component.css']
})
export class SidenavPComponent implements OnInit {

  proyectos:any;
  proyectoActual:any;
  constructor(private router:Router,
              private _proyectosS:ProyectosService) {

  this.proyectos=this._proyectosS.returnUsuarios();
  console.log("Proyectos",this.proyectos)
  setTimeout(() => {
    this.proyectoActual=this.getNameById(localStorage.getItem('idProyecto'))
    console.log(this.proyectoActual)
 }, 500);

              }

  ngOnInit() {
  }

  verProyectos(){
    localStorage.removeItem('numeroPeriodo');
    localStorage.removeItem('idProyecto');
    localStorage.removeItem('numeroRPeriodos');
    this.router.navigate(['/Usuario/proyectos']);
  }


  getNameById(idProyecto){
    for(let proyecto of this.proyectos){
      if(proyecto.idProyecto==idProyecto)
        return proyecto.nombreProyecto
    }
      return "id NO encontrado"

  }




}
