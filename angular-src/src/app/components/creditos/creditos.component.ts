import { Component, OnInit, ViewChild } from '@angular/core';
import {CreditosService} from '../../services/creditos.service';
import {NgbModal, ModalDismissReasons,NgbActiveModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  pagoAForm:boolean=false;
  editForm:FormGroup;
  public alerts: any = [];
  creditoDelete={
    idCredito:null,
    nombreCredito:null,
    montoMinimo:null,
    montoMaximo:null,
    pagoAnticipado:null,
    pago:null,
    pagosCredito:[],
    plazo:null
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

  }

  ngOnInit() {

                    this.newForm.valueChanges.subscribe(val=>{
                      if(val.tipo==1|| val.tipo==3){
                        this.pagoAForm=true;
                      }else{
                        this.pagoAForm=false;
                        //this.newForm.controls['pagoAnticipado'].setValue('1');
                      }
                    })

  }

  validaCampo(i){
    if(this.newForm.controls.pagosCredito.get(i+"").get('pago').valid)
      return false;
    else
      return true;
  }

  validaCampoEdit(i){
    if(this.editForm.controls.pagosCredito.get(i+"").get('pagosCredito').valid)
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
      console.log(pago,idPago);
      return this._fb.group({
              pagosCredito:[pago,Validators.required],
              idPagoCredito:[idPago]
            });
      }


  eliminaPagoNew(i:number){
    (<FormArray>this.newForm.controls['pagosCredito']).removeAt(i);
  }

  eliminaPagoEdit(i:number){
    (<FormArray>this.editForm.controls['pagosCredito']).removeAt(i);
  }

  agregaCredito(credito){
    this.modalNew.hide();

    this.alerts.push({
      type: 'success',
      msg: `Usuario "${(credito.nombreCredito)}" agregado`,
      timeout: 2000
    });
    console.log(credito)
    this.creditos = this._creditosService.guardarCredito(credito);
  }

  editaCredito(credito){
    console.log(credito.pagosCredito,"Edicion")
    this.creditos = this._creditosService.editarCredito(credito);
    this.modalEdit.hide();
    this.alerts.push({
      type: 'success',
      msg: `Usuario "${(credito.nombreCredito)}" agregado`,
      timeout: 1000
    });

    this.editForm.controls['pagosCredito']=this._fb.array([]);
  }


  onChange(){
    this.newForm.valueChanges.subscribe(val=>{
      console.log(val)
    })
  }

  eliminaCredito(id){
    this.creditos = this._creditosService.eliminarCredito(id.idCredito);
    this.modalConfDelete.hide();

    this.alerts.push({
      type: 'danger',
      msg: `Credito eliminado`,
      timeout: 1000
    });
  }

  openEdit(credito){
    this.editForm.reset();
    let cantidadpagosCredito=this.editForm.controls['pagosCredito'].value.length
    for(let i=0;i<cantidadpagosCredito;i++){
      (<FormArray>this.editForm.controls['pagosCredito']).removeAt(0);
    }
    this.editForm.controls['montoMax'].setValue(credito.montoMax);
    this.editForm.controls['montoMin'].setValue(credito.montoMin);
    this.editForm.controls['nombreCredito'].setValue(credito.nombreCredito);
    this.editForm.controls['pagoAnticipado'].setValue(credito.pagoAnticipado);
    this.editForm.controls['pago'].setValue(credito.pago);
    this.editForm.controls['idCredito'].setValue(credito.idCredito);
    for(let pago of credito.pagosTotales){
      this.inputPagoEdit(pago.pagosCredito,pago.idPagoCredito)
    }
    console.log(this.editForm.controls.pagosCredito,"Formulario");
    this.modalEdit.show();
    console.log(this.editForm.value)
  }

  openNew(){
    let cantidadpagosCredito=this.newForm.controls['pagosCredito'].value.length
    for(let i=0;i<cantidadpagosCredito;i++){
      (<FormArray>this.newForm.controls['pagosCredito']).removeAt(0);
    }
    this.newForm.reset();
    this.newForm.controls['pagoAnticipado'].setValue(1)
    this.modalNew.show()


  }


  inputPago(form:FormGroup,pago){

    (<FormArray>this.newForm.controls['pagosCredito']).push(this.initProductoOfNew(pago));
    console.log(this.newForm.controls.pagosCredito);
  }
  inputPagoEdit(pago,id){
        (<FormArray>this.editForm.controls['pagosCredito']).push(this.initPagoOfEdit(pago,id));
  }


 confDelete(credito){
    this.creditoDelete=credito;
    console.log(this.creditoDelete);
    this.modalConfDelete.show();

  }




}
