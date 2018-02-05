import { Component, OnInit,ViewChild } from '@angular/core';
import {Router}  from '@angular/router';
import {proyecto} from '../../../app.interfaces';
import {ProyectosService} from '../../../services/proyectos.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
  @ViewChild('modalConfDelete') public confModalDelete:ModalDirective;
  @ViewChild('modalConf') public confModal:ModalDirective;
  @ViewChild('modalEdit') public modalEdit:ModalDirective;
  @ViewChild('modalNew') public modalNew:ModalDirective;


  public alerts: any = [];
  proyectos:proyecto[];
  proyectoDelete:proyecto={
    idProyecto:1,
    Usuario_idUsuario:0,
    nombreProyecto:"",
    fechaCreacion:0
  };

  editForm:FormGroup;
  newForm:FormGroup;

  constructor(private _proyectosService:ProyectosService,
              private datePipe:DatePipe) {
    this.editForm=new FormGroup({
      'idProyecto': new FormControl(),
      'nombreProyecto':new FormControl(),
      'fechaCreacion':new FormControl(),
      'Usuario_idUsuario': new FormControl(localStorage.getItem('idUsuario'))
    });

    this.newForm=new FormGroup({
      'idProyecto': new FormControl(),
      'nombreProyecto':new FormControl(),
      'fechaCreacion':new FormControl(this.datePipe.transform(Date.now())),
      'Usuario_idUsuario': new FormControl(localStorage.getItem('idUsuario'))
    });

   }

   entrarProyecto(idProyecto){
     this._proyectosService.asignarBalance(idProyecto);
     localStorage.setItem('idProyecto',idProyecto);
     this.confModal.show();
     this._proyectosService.muestraPCorriendo();
   }

   entrarP(){
     setTimeout(()=>{this._proyectosService.changePeriodo()}, 1000);
     this.confModal.hide();
     this._proyectosService.entrar();
   }

  ngOnInit() {
    this.proyectos = this._proyectosService.returnUsuarios();
  }

  eliminaProyecto(id:number){
    this.confModalDelete.hide();
    this._proyectosService.eliminaProyecto(id).subscribe();
    this.alerts.push({
      type: 'danger',
      msg: `Proyecto Eliminado`,
      timeout: 2000
    });


  }

  agregaProyecto(proyecto:proyecto){
    this._proyectosService.agregaProyecto(proyecto);
    this.modalNew.hide();
    this.alerts.push({
      type: 'success',
      msg: `Nuevo Proyecto: ${(proyecto.nombreProyecto)} Agregado`,
      timeout: 2000
    });

  }

  modificaProyecto(proyecto:proyecto){
    this.modalEdit.hide()

    console.log(this.alerts);
    this._proyectosService.setProyecto(proyecto).subscribe();
    this.alerts.push({
      type: 'success',
      msg: `Proyecto: ${(proyecto.nombreProyecto)} Modificado`,
      timeout: 2000
    });

  }

  confDelete(proyecto:proyecto){
    this.proyectoDelete=proyecto;
    this.confModalDelete.show();

  }

  openEdit(proyecto:proyecto){
    this.editForm.setValue(proyecto);
    console.log("hola",proyecto)
    this.modalEdit.show();


  }


  openNew(){
    this.newForm.controls['nombreProyecto'].reset();
    this.modalNew.show();

  }











}
