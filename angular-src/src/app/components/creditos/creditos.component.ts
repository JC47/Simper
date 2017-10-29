import { Component, OnInit, ViewChild } from '@angular/core';
import {CreditosService} from '../../services/creditos.service';
import {NgbModal, ModalDismissReasons,NgbActiveModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {

@ViewChild('modalEdit') public modalEdit:ModalDirective;
@ViewChild('modalNew') public modalNew:ModalDirective;
@ViewChild('modalConfDelete') public modalConfDelete:ModalDirective;

  creditos = [];
  closeResult:string;
  newForm:FormGroup;
  editForm:FormGroup;
  public alerts: any = [];
  creditoDelete;

  constructor(private _creditosService:CreditosService,
              private modalService: NgbModal,
              private _flashMessagesService: FlashMessagesService) {

          this.newForm= new FormGroup({
            'nombrePrestamo':new FormControl('',Validators.required),
            'intereses':new FormControl('',Validators.required),
            'plazoPago':new FormControl('',Validators.required),
            'monto':new FormControl('',Validators.required),
            'tipoPrestamo':new FormControl('',Validators.required),
          });

          this.editForm= new FormGroup({
            'idPrestamos':new FormControl('',Validators.required),
            'nombrePrestamo':new FormControl('',Validators.required),
            'intereses':new FormControl('',Validators.required),
            'plazoPago':new FormControl('',Validators.required),
            'monto':new FormControl('',Validators.required),
            'tipoPrestamo':new FormControl('',Validators.required),
          });
          this.creditos = this._creditosService.establecerValores();
          console.log(this.creditos);

  }

  ngOnInit() {


  }

  agregaCredito(credito){
    let reason
    this._creditosService.guardarCredito(credito);
    this.modalNew.hide();

    this.alerts.push({
      type: 'success',
      msg: `Usuario "${(credito.nombrePrestamo)}" agregado`,
      timeout: 2000
    });
  }

  editaCredito(credito){
    console.log(credito);
    this._creditosService.setCreditos(credito).subscribe();
    this.modalEdit.hide();
    this.alerts.push({
      type: 'success',
      msg: `Usuario "${(credito.nombrePrestamo)}" agregado`,
      timeout: 2000
    });
  }

  eliminaCredito(id:number){
    this._creditosService.deleteCredito(id).subscribe();
    console.log("Eliminando: ",id);
    this.modalConfDelete.hide();

    this.alerts.push({
      type: 'danger',
      msg: `Credito eliminado`,
      timeout: 2000
    });
  }

  openEdit(credito){
    this.modalEdit.show();
    this.editForm.setValue(credito);
  }

  openNew(){
    this.modalNew.show()
    this.newForm.reset();
  }



 confDelete(credito){
    this.creditoDelete=credito;
    console.log(this.creditoDelete);
    this.modalConfDelete.show();

  }





}
