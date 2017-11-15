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
  creditoDelete={
    nombreCredito:null,
    montoMinimo:null,
    montoMaximo:null,
    pagoAnticipado:null,
    pago:null,
    pagosCredito:[]
  };

  constructor(private _creditosService:CreditosService,
              private modalService: NgbModal,
              private _fb:FormBuilder) {

                this.newForm = this._fb.group({
                        nombreCredito:['',Validators.required],
                        montoMin:['',Validators.required],
                        montoMax:['',Validators.required],
                        tipo:['',Validators.required],
                        pagoAnticipado:['',Validators.required],
                        pago:['',Validators.required],
                        pagosCredito: this._fb.array([])
                    });
                    this.editForm = this._fb.group({
                            idCredito:['',Validators.required],
                            nombreCredito:['',Validators.required],
                            montoMin:['',Validators.required],
                            montoMax:['',Validators.required],
                            pagoAnticipado:['',Validators.required],
                            pago:['',Validators.required],
                            pagosCredito: this._fb.array([])
                        });


          this.creditos = this._creditosService.establecerValores();
          console.log(this.creditos);

  }

  ngOnInit() {


  }

  validaCampo(i){
    if(this.newForm.controls.pagosCredito.get(i+"").get('pago').valid)
      return false;
    else
      return true;
  }

  validaCampoEdit(i){
    if(this.editForm.controls.pagosCredito.get(i+"").get('pago').valid)
      return false;
    else
      return true;
  }


  initProductoOfNew(pago){
    return this._fb.group({
            pago:[pago,Validators.required]
          });
    }


    initPagoOfEdit(pago,idPago){
      return this._fb.group({
              pago:[pago,Validators.required],
              idPago:[idPago,Validators.required]
            });
      }


  eliminaPagoNew(i:number){
    (<FormArray>this.newForm.controls['pagosCredito']).removeAt(i);
  }

  eliminaPagoEdit(i:number){
    (<FormArray>this.editForm.controls['pagosCredito']).removeAt(i);
  }

  agregaCredito(credito){
    console.log(credito)
    //this._creditosService.guardarCredito(credito);
    this.modalNew.hide();

    this.alerts.push({
      type: 'success',
      msg: `Usuario "${(credito.nombreCredito)}" agregado`,
      timeout: 2000
    });

    this.creditos = this._creditosService.guardarCredito(credito);
  }

  editaCredito(credito){
    console.log(credito);
    this._creditosService.setCreditos(credito).subscribe();
    this.modalEdit.hide();
    this.alerts.push({
      type: 'success',
      msg: `Usuario "${(credito.nombreCredito)}" agregado`,
      timeout: 2000
    });

    this.editForm.controls['pagosCredito']=this._fb.array([]);

  }

  eliminaCredito(id:number){
    this._creditosService.deleteCredito(id).subscribe();
    this.modalConfDelete.hide();

    this.alerts.push({
      type: 'danger',
      msg: `Credito eliminado`,
      timeout: 2000
    });
  }

  openEdit(credito){

    this.editForm.controls['montoMax'].setValue(credito.montoMax);
    this.editForm.controls['montoMin'].setValue(credito.montoMin);
    this.editForm.controls['nombreCredito'].setValue(credito.nombreCredito);
    this.editForm.controls['pagoAnticipado'].setValue(credito.pagoAnticipado);
    this.editForm.controls['pago'].setValue(credito.pago);
    this.editForm.controls['idCredito'].setValue(credito.idCredito);
    for(let pago of credito.pagosTotales){
      this.inputPagoEdit(pago.pagosCredito)
    }
    this.modalEdit.show();
    //this.editForm.setValue(credito);
  }

  openNew(){
    let cantidadpagosCredito=this.newForm.controls['pagosCredito'].value.length
    for(let i=0;i<cantidadpagosCredito;i++){
      (<FormArray>this.newForm.controls['pagosCredito']).removeAt(0);
    }
    this.newForm.reset();
    this.modalNew.show()


  }


  inputPago(form:FormGroup,pago){

    (<FormArray>this.newForm.controls['pagosCredito']).push(this.initProductoOfNew(pago));
    console.log(this.newForm.controls.pagosCredito);
  }
  inputPagoEdit(pago){
        (<FormArray>this.editForm.controls['pagosCredito']).push(this.initProductoOfNew(pago));
  }


 confDelete(credito){
    this.creditoDelete=credito;
    console.log(this.creditoDelete);
    this.modalConfDelete.show();

  }





}
