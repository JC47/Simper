import { Component, OnInit, ViewChild } from '@angular/core';
import {AdministradoresService} from '../../services/administradores.service';
import {admin} from '../../app.interfaces';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

@ViewChild('modalEdit') public modalEdit:ModalDirective;
@ViewChild('modalNew') public modalNew:ModalDirective;
@ViewChild('modalConfDelete') public modalConfDelete:ModalDirective;


  public alerts: any = [];
  userNew:admin;
  administradores:admin[]=new Array();
  closeResult: string;
  newForm:FormGroup;
  editForm:FormGroup;
  adminDelete:admin = {
    idAdministrador:0,
    nombreAdmin:"",
    apPat:"",
    apMat:"",
    contra:"",
    user:""
  }

  constructor(private _administradoresService:AdministradoresService,private modalService: NgbModal) {
    this.newForm= new FormGroup({
      'nombreAdmin':new FormControl('',Validators.required),
      'apPat':new FormControl('',Validators.required),
      'apMat':new FormControl('',Validators.required),
      'user':new FormControl('',Validators.required),
      'contra':new FormControl('',Validators.required)
    });

    this.editForm= new FormGroup({
      'idAdministrador':new FormControl('',Validators.required),
      'nombreAdmin':new FormControl('',Validators.required),
      'apPat':new FormControl('',Validators.required),
      'apMat':new FormControl('',Validators.required),
      'user':new FormControl('',Validators.required),
      'contra':new FormControl('',Validators.required)

    });

    this.administradores=this._administradoresService.returnAdministradores();


  }



  ngOnInit() {
  }



  guarda(admin:admin){

    if(!this.buscaRepetidos(admin)){
      this._administradoresService.guardarAdministrador(admin);
      this.modalNew.hide();

      this.alerts.push({
        type: 'success',
        msg: `Administrador "${(admin.nombreAdmin)}" agregado`,
        timeout: 2000
      });
    }else{
      alert("repetidos")
    }


  }


  buscaRepetidos(admin){
    for(let admiS of this.administradores){
      if(admin.nombreAdmin+" "+admin.apPat+" "+admin.apMat==admiS.nombreAdmin+" "+admiS.apPat+" "+admiS.apMat){
        return true
      }



    }

  }

  editaAdmin(admin:admin){
    this._administradoresService.setAdministrador(admin).subscribe();
    this.modalEdit.hide();

    this.alerts.push({
      type: 'success',
      msg: `Administrador Editado`,
      timeout: 2000
    });


  }

  eliminaAdmin(idAdministrador:number){
    this._administradoresService.deleteAdministrador(idAdministrador).subscribe();
    console.log("Eliminado",idAdministrador)
    this.modalConfDelete.hide();


    this.alerts.push({
      type: 'danger',
      msg: `Administrador Eliminado`,
      timeout: 2000
    });
  }




  openNew(){
    this.modalNew.show()
    this.newForm.reset();
  }

//Abre formulario para editar un item
  openEdit(admin){
    this.modalEdit.show();
    console.log(admin);
    this.editForm.setValue(admin);

  }


 confDelete(admin){
   this.adminDelete=admin;
   console.log(this.adminDelete);
   this.modalConfDelete.show();

 }

}
