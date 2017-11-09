import { Component, OnInit, ViewChild } from '@angular/core';
import {CreditosService} from '../../services/creditos.service';
import {NgbModal, ModalDismissReasons,NgbActiveModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';
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
              private _fb:FormBuilder) {

                this.newForm = this._fb.group({
                        nombreCredito:['',Validators.required],
                        montoMinimo:['',Validators.required],
                        montoMaximo:['',Validators.required],
                        pagoAnticipado:['',Validators.required],
                        pago:['',Validators.required],
                        pagos: this._fb.array([])
                    });
                    this.editForm = this._fb.group({
                            idCredito:['',Validators.required],
                            nombreCredito:['',Validators.required],
                            montoMinimo:['',Validators.required],
                            montoMaximo:['',Validators.required],
                            pagoAnticipado:['',Validators.required],
                            pago:['',Validators.required],
                            pagos: this._fb.array([])
                        });


          this.creditos = this._creditosService.establecerValores();
          console.log(this.creditos);

  }

  ngOnInit() {


  }


  initProductoOfNew(pago){
    return this._fb.group({
            pago:[pago,Validators.required]
          });
    }

  eliminaPagoNew(i:number){
    (<FormArray>this.newForm.controls['pagos']).removeAt(i);
  }

  agregaCredito(credito){
    console.log(credito)
    //this._creditosService.guardarCredito(credito);
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
    let cantidadPagos=this.newForm.controls['pagos'].value.length
    for(let i=0;i<cantidadPagos;i++){
      (<FormArray>this.newForm.controls['pagos']).removeAt(0);
    }
    this.newForm.reset();
    this.modalNew.show()


  }


  inputPago(form:FormGroup,pago){
    const control = <FormArray>form.controls['pagos'];
    (<FormArray>this.newForm.controls['pagos']).push(this.initProductoOfNew(pago));
    console.log(this.newForm.controls.pagos);
  }


 confDelete(credito){
    this.creditoDelete=credito;
    console.log(this.creditoDelete);
    this.modalConfDelete.show();

  }





}
