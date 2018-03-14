import { Component, OnInit, ViewChild} from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';
import {AdministradoresService} from '../../services/administradores.service';
import { AuthService} from '../../services/auth.service';
import {CreditosService} from '../../services/creditos.service';
import {UsuarioCreditoService} from '../../services/usuario-credito.service';
import {usuario, admin} from '../../app.interfaces';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {MaquinariaService} from '../../services/maquinaria.service';
import {ProductoService} from '../../services/producto.service';
import {UsuarioZonaService} from '../../services/usuario-zona.service';
import {UsuarioProductoService} from '../../services/usuario-producto.service';
import {ZonasService} from '../../services/zonas.service';
import {UsuarioMaquinariaService} from '../../services/usuario-maquinaria.service';
import {VariablesService} from '../../services/variables.service';
import { FileUploader } from 'ng2-file-upload';






@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {
  @ViewChild('modalProdInit') public modalProdInit:ModalDirective;
  @ViewChild('modalEdit') public modalEdit:ModalDirective;
  @ViewChild('modalCreditosInit') public modalCreditosInit:ModalDirective;
  @ViewChild('modalVars') public modalVars:ModalDirective;
  @ViewChild('modalNew') public modalNew:ModalDirective;
  @ViewChild('modalConfDelete') public modalConfDelete:ModalDirective;
  @ViewChild('modalVariables') public modalVariables:ModalDirective;
  @ViewChild('modalMaqInit') public modalMaqInit:ModalDirective;
  @ViewChild('modalZonaInit') public modalZonaInit:ModalDirective;
  @ViewChild('modalCopia') public modalCopia:ModalDirective;
  @ViewChild('modalErrBalance') public modalErrBalance:ModalDirective;


  idAdmin;
  usuarioDelete:any={
    idUsuario:0,
    nombreUsuario:"",
    apPat:"",
    apMat:"",
    contra:"",
    user:"",
    proyectos:0,
    periodos:0,
    regresion:0
  };

  public alerts: any = [];
  userSelected:any={
    idUsuario:0,
    nombreUsuario:"",
    apPat:"",
    apMat:"",
    contra:"",
    user:"",
    proyectos:0,
    periodos:0,
    regresion:0
  };
  administradores = new Array();
  usuarios:any[]=new Array();
  proyectos = new Array();
  closeResult: string;
  maquinas:any;
  productos:any;
  zonas:any;
  creditos:any;
  maquinariaU:any;
  productosU:any;
  zonasU:any;
  creditosU:any;
  newForm:FormGroup;
  editForm:FormGroup;
  variablesForm:FormGroup;
  varsForm:FormGroup;
  Admin:admin;
  variables:any;
  variablesSelected:any={
    concepto:null,
    valor:null
  };
  openVarsGen:boolean=false;
  openVarUnit:any=false;

  status: any = {
    isFirstOpen: true,
    isOpen: true
  };

  constructor(private _usuariosService:UsuariosService,private modalService: NgbModal,
              private authService: AuthService,
              private _usuarioProductoService:UsuarioProductoService,
              private _creditosService:CreditosService,
              private _usuarioCreditoService:UsuarioCreditoService,
              private _administradoresService:AdministradoresService,
              private _productoService:ProductoService,
              private _usuarioMaquinariaService:UsuarioMaquinariaService,
              private _usuarioZonaService:UsuarioZonaService,
              private _maquinariaService:MaquinariaService,
              private _zonasService: ZonasService,
            private _variablesService:VariablesService) {

            this.variables = this._variablesService.returnVariables();
    this.idAdmin = localStorage.getItem('idAdmin');
    this.newForm= new FormGroup({
      'nombreUsuario':new FormControl('',Validators.required),
      'apPat':new FormControl('',Validators.required),
      'apMat':new FormControl('',Validators.required),
      'user':new FormControl('',Validators.required),
      'contra':new FormControl('',Validators.required),
      'proyectos':new FormControl('',Validators.required),
      'periodos':new FormControl('',Validators.required),
      'regresion':new FormControl('',Validators.required),
      'Administrador_idAdministrador': new FormControl(localStorage.getItem('idAdmin'))
    });


    this.varsForm= new FormGroup({
      'idVariable':new FormControl('',Validators.required),
      'concepto':new FormControl('',Validators.required),
      'valor':new FormControl('',Validators.required)
    });

    this.editForm= new FormGroup({
      'idUsuario':new FormControl('',Validators.required),
      'nombreUsuario':new FormControl('',Validators.required),
      'apPat':new FormControl('',Validators.required),
      'apMat':new FormControl('',Validators.required),
      'user':new FormControl('',Validators.required),
      'contra':new FormControl('',Validators.required),
      'proyectos':new FormControl('',Validators.required),
      'periodos':new FormControl('',Validators.required),
      'regresion':new FormControl('',Validators.required),
      'Administrador_idAdministrador': new FormControl(localStorage.getItem('idAdmin'))

    });

    this.variablesForm=new FormGroup({
      'idUsuario': new FormControl('',Validators.required),
      'cajaBancos': new FormControl('',Validators.required),
      'cuentasPorCobrar': new FormControl('',Validators.required),
      'IVAAcreditable': new FormControl('',Validators.required),
      'almacenArtTerm': new FormControl('',Validators.required),
      'almacenMateriales': new FormControl('',Validators.required),
      'terreno': new FormControl('',Validators.required),
      'edifInsta': new FormControl('',Validators.required),
      'maqEquipo': new FormControl('',Validators.required),
      'mueblesEnseres': new FormControl('',Validators.required),
      'eqTrans': new FormControl('',Validators.required),
      'pagosAnticipado': new FormControl('',Validators.required),
      'gastosAmortizacion': new FormControl('',Validators.required),
      'IVAPorEnterar': new FormControl('',Validators.required),
      'imptosPorPagar': new FormControl('',Validators.required),
      'proveedores': new FormControl('',Validators.required),
      'PTUPorPagar': new FormControl('',Validators.required),
      'capitalSocial': new FormControl('',Validators.required),
      'reservaLegal': new FormControl('',Validators.required),
      'utilidadAcum': new FormControl('',Validators.required),
      'prestamosMenosAnio': new FormControl('',Validators.required),
      'prestamosMasAnio':new FormControl('',Validators.required)
    });
  }

   public uploader:FileUploader = new FileUploader({url:'usuario/register/'});

  getAdministrador(id){
    for(let admin of this.administradores){
      if(admin.idAdministrador==id)
       return admin.nombreAdmin;
    }
    return "id no encontrado";
  }

  ngOnInit() {
    this.administradores = this._administradoresService.returnAdministradores();
    this.usuarios=this._usuariosService.returnUsuarios();
    console.log(this.usuarios);
    this.proyectos = this._usuariosService.returnProyectos();
  }




  guarda(usuario){
    console.log(usuario)
    if(!this.buscaRepetidos(usuario)){
      this._usuariosService.guardarUsuario(usuario);
      this.modalNew.hide();

      this.alerts.push({
        type: 'success',
        msg: `Usuario "${(usuario.nombreUsuario)}" agregado`,
        timeout: 2000
      });
    }else{
      alert("Repetidos")
    }

  }


  buscaRepetidos(user){
    for(let usuario of this.usuarios){
      if(usuario.nombreUsuario+" "+usuario.apPat+" "+usuario.apMat==user.nombreUsuario+" "+user.apPat+" "+user.apMat){
        return true
      }

    }
  }

  editaUsuario(usuario){
    this._usuariosService.setUsuario(usuario).subscribe();
    this.modalEdit.hide();
    this.alerts.push({
      type: 'success',
      msg: `Usuario "${(usuario.nombreUsuario)}" agregado`,
      timeout: 2000
    });
  }

  eliminaUsuario(idUsuario:number){
    this._usuariosService.deleteUsuario(idUsuario).subscribe(

    );
    console.log("Eliminado",idUsuario);
    this.modalConfDelete.hide()

    this.alerts.push({
      type: 'danger',
      msg: `Usuario Eliminado`,
      timeout: 2000
    });
  }

  setVariablesUsuario(usuario){
    console.log(usuario);
    this.variablesForm.controls['IVAAcreditable'].setValue(usuario.IVAAcreditable);
    this.variablesForm.controls['cajaBancos'].setValue(usuario.cajaBancos);
    this.variablesForm.controls['cuentasPorCobrar'].setValue(usuario.cuentasPorCobrar);
    this.variablesForm.controls['almacenArtTerm'].setValue(usuario.almacenArtTerm);
    this.variablesForm.controls['almacenMateriales'].setValue(usuario.almacenMateriales);
    this.variablesForm.controls['terreno'].setValue(usuario.terreno);
    this.variablesForm.controls['edifInsta'].setValue(usuario.edifInsta);
    this.variablesForm.controls['maqEquipo'].setValue(usuario.maqEquipo);
    this.variablesForm.controls['mueblesEnseres'].setValue(usuario.mueblesEnseres);
    this.variablesForm.controls['eqTrans'].setValue(usuario.eqTrans);
    this.variablesForm.controls['pagosAnticipado'].setValue(usuario.pagosAnticipado);
    this.variablesForm.controls['gastosAmortizacion'].setValue(usuario.gastosAmortizacion);
    this.variablesForm.controls['IVAPorEnterar'].setValue(usuario.IVAPorEnterar);
    this.variablesForm.controls['imptosPorPagar'].setValue(usuario.imptosPorPagar);
    this.variablesForm.controls['proveedores'].setValue(usuario.proveedores);
    this.variablesForm.controls['PTUPorPagar'].setValue(usuario.PTUPorPagar);
    this.variablesForm.controls['capitalSocial'].setValue(usuario.capitalSocial);
    this.variablesForm.controls['reservaLegal'].setValue(usuario.reservaLegal);
    this.variablesForm.controls['utilidadAcum'].setValue(usuario.utilidadAcum);
    this.variablesForm.controls['prestamosMenosAnio'].setValue(usuario.prestamosMenosAnio);
    this.variablesForm.controls['prestamosMasAnio'].setValue(usuario.prestamosMasAnio);
    this.modalCopia.hide();
  }

  openVariables(){
    this.variablesForm.controls['idUsuario'].setValue(this.userSelected.idUsuario);
    this.variablesForm.controls['IVAAcreditable'].setValue(this.userSelected.IVAAcreditable);
    this.variablesForm.controls['cajaBancos'].setValue(this.userSelected.cajaBancos);
    this.variablesForm.controls['cuentasPorCobrar'].setValue(this.userSelected.cuentasPorCobrar);
    this.variablesForm.controls['almacenArtTerm'].setValue(this.userSelected.almacenArtTerm);
    this.variablesForm.controls['almacenMateriales'].setValue(this.userSelected.almacenMateriales);
    this.variablesForm.controls['terreno'].setValue(this.userSelected.terreno);
    this.variablesForm.controls['edifInsta'].setValue(this.userSelected.edifInsta);
    this.variablesForm.controls['maqEquipo'].setValue(this.userSelected.maqEquipo);
    this.variablesForm.controls['mueblesEnseres'].setValue(this.userSelected.mueblesEnseres);
    this.variablesForm.controls['eqTrans'].setValue(this.userSelected.eqTrans);
    this.variablesForm.controls['pagosAnticipado'].setValue(this.userSelected.pagosAnticipado);
    this.variablesForm.controls['gastosAmortizacion'].setValue(this.userSelected.gastosAmortizacion);
    this.variablesForm.controls['IVAPorEnterar'].setValue(this.userSelected.IVAPorEnterar);
    this.variablesForm.controls['imptosPorPagar'].setValue(this.userSelected.imptosPorPagar);
    this.variablesForm.controls['proveedores'].setValue(this.userSelected.proveedores);
    this.variablesForm.controls['PTUPorPagar'].setValue(this.userSelected.PTUPorPagar);
    this.variablesForm.controls['capitalSocial'].setValue(this.userSelected.capitalSocial);
    this.variablesForm.controls['reservaLegal'].setValue(this.userSelected.reservaLegal);
    this.variablesForm.controls['utilidadAcum'].setValue(this.userSelected.utilidadAcum);
    this.variablesForm.controls['prestamosMenosAnio'].setValue(this.userSelected.prestamosMenosAnio);
    this.variablesForm.controls['prestamosMasAnio'].setValue(this.userSelected.prestamosMasAnio);
    this.modalVariables.show();
  }



  openCopia(){
    this.modalCopia.show();

  }

  openNew(){

    this.modalNew.show();
    this.newForm.reset();
    this.newForm.controls['Administrador_idAdministrador'].setValue(localStorage.getItem('idAdmin'));


  }

//Abre formulario para editar un item
  openEdit(usuario){
    this.modalEdit.show();
      this.editForm.controls['idUsuario'].setValue(usuario.idUsuario);
      this.editForm.controls['nombreUsuario'].setValue(usuario.nombreUsuario);
      this.editForm.controls['apPat'].setValue(usuario.apPat);
      this.editForm.controls['apMat'].setValue(usuario.apMat);
      this.editForm.controls['user'].setValue(usuario.user);
      this.editForm.controls['contra'].setValue(usuario.contra);
      this.editForm.controls['proyectos'].setValue(usuario.proyectos);
      this.editForm.controls['periodos'].setValue(usuario.periodos);
      this.editForm.controls['regresion'].setValue(usuario.regresion);
      this.editForm.controls['Administrador_idAdministrador'].setValue(usuario.Administrador_idAdministrador);

  }

  getNameById(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";

  }

  openVars(usuario){
    console.log(usuario);
    this.productos = this._productoService.returnProductos();
    this.maquinas=this._maquinariaService.returnMaquinas();
    this.zonas=this._zonasService.returnZonas();
    this.creditos = this._creditosService.establecerValores();
    this.maquinariaU = this._usuarioMaquinariaService.returnMaquinariasU(usuario.idUsuario);
    this.zonasU = this._usuarioZonaService.returnZonasU(usuario.idUsuario);
    this.productosU = this._usuarioProductoService.returnProductosU(usuario.idUsuario);
    this.creditosU = this._usuarioCreditoService.returnCreditosU(usuario.idUsuario);
    this.modalVars.show();
    this.userSelected=usuario;
  }

  confDelete(usuario){
    this.usuarioDelete=usuario;
    console.log(this.usuarioDelete);
    this.modalConfDelete.show();

  }

  agregarMaquinaria(maquina,idUsuario){


    var x = {
      Administrador_idAdministrador:localStorage.getItem('idAdmin'),
      idUsuario:this.userSelected.idUsuario,
      idMaquinaria:maquina.idMaquinaria,
      Producto_idProducto:maquina.Producto_idProducto,
      cantidad:1
    }
    this._usuarioMaquinariaService.agregarMaquinariaU(x);
  }

  agregarZona(zona,producto){
    var x = {
      idUsuario:this.userSelected.idUsuario,
      idAdministrador:localStorage.getItem('idAdmin'),
      idProducto:producto.idProducto,
      idZona:zona.idZona
    }

    this._usuarioZonaService.agregarZonaU(x);
  }

  agregarProducto(producto){

    var y = {
      idUsuario:this.userSelected.idUsuario,
      idAdministrador:localStorage.getItem('idAdmin'),
      idProducto:producto.idProducto
    }
    this._usuarioProductoService.insertar(y);
  }

  agregarCredito(credito){
    var z = {
      idUsuario:this.userSelected.idUsuario,
      idAdministrador:localStorage.getItem('idAdmin'),
      idCredito:credito.idCredito
    }
    this._usuarioCreditoService.insertar(z);
  }

  balanceCero(data){
    var objeto = {
      "IVAPorEnterar":data.IVAPorEnterar,
      "imptosPorPagar":data.imptosPorPagar,
      "proveedores":data.proveedores,
      "PTUPorPagar":data.PTUPorPagar,
      "prestamosMenosAnio":data.prestamosMenosAnio,
      "prestamosMasAnio":data.prestamosMasAnio,
      "cajaBancos":data.cajaBancos,
      "cuentasPorCobrar":data.cuentasPorCobrar,
      "IVAAcreditable":data.IVAAcreditable,
      "almacenArtTerm":data.almacenArtTerm,
      "almacenMateriales":data.almacenMateriales,
      "terreno":data.terreno,
      "edifInsta":data.edifInsta,
      "maqEquipo":data.maqEquipo,
      "mueblesEnseres":data.mueblesEnseres,
      "pagosAnticipado":data.pagosAnticipado,
      "gastosAmortizacion":data.gastosAmortizacion,
      "capitalSocial":data.capitalSocial,
      "reservaLegal":data.reservaLegal,
      "utilidadAcum":data.utilidadAcum,
      "eqTrans":data.eqTrans
    }


    if(
  this.variablesForm.controls['IVAAcreditable'].value+
  this.variablesForm.controls['cajaBancos'].value+
  this.variablesForm.controls['cuentasPorCobrar'].value+
  this.variablesForm.controls['almacenArtTerm'].value+
  this.variablesForm.controls['almacenMateriales'].value+
  this.variablesForm.controls['terreno'].value+
  this.variablesForm.controls['edifInsta'].value+
  this.variablesForm.controls['maqEquipo'].value+
  this.variablesForm.controls['mueblesEnseres'].value+
  this.variablesForm.controls['eqTrans'].value+
  this.variablesForm.controls['pagosAnticipado'].value+
  this.variablesForm.controls['gastosAmortizacion'].value==
  this.variablesForm.controls['IVAPorEnterar'].value+
  this.variablesForm.controls['imptosPorPagar'].value+
  this.variablesForm.controls['proveedores'].value+
  this.variablesForm.controls['PTUPorPagar'].value+
  this.variablesForm.controls['capitalSocial'].value+
  this.variablesForm.controls['reservaLegal'].value+
  this.variablesForm.controls['utilidadAcum'].value+
  this.variablesForm.controls['prestamosMenosAnio'].value+
  this.variablesForm.controls['prestamosMasAnio'].value
    ){
      this._usuariosService.inicializarVariables(objeto, data.idUsuario);
      this.modalVariables.hide();
    }else{
      this.modalErrBalance.show();
    }



  }


  openMaqInit(){
    this.modalMaqInit.show();
  }

  openModalProdInit(){
    this.modalProdInit.show();
  }

  openModalZonaInit(){
    this.modalZonaInit.show();
  }

  openModalCreditosInit(){
    this.modalCreditosInit.show();
  }

  eliminaMaquinaria(maquinaria){
    this._usuarioMaquinariaService.deleteMaquinaria(maquinaria).subscribe();
  }

  eliminaProductoZona(zona){
    this._usuarioZonaService.deleteZona(zona).subscribe();
  }

  eliminaProducto(producto){
    this._usuarioProductoService.eliminar(producto);
  }

  eliminaCredito(credito){
    this._usuarioCreditoService.eliminar(credito);
  }

  getNameByIdMaq(id){
    for(let maq of this.maquinas){
      if(maq.idMaquinaria==id)
       return maq.nombreMaq;
    }
    return "id no encontrado";
  }

  getNameByIdZona(id){
    for(let maq of this.zonas){
      if(maq.idZona==id)
       return maq.nombreZona;
    }
    return "id no encontrado";
  }

  getNameByIdCredito(id){
    for(let maq of this.creditos){
      if(maq.idCredito==id)
       return maq.nombreCredito;
    }
    return "id no encontrado";
  }

  selectVariables(variables){
      console.log("Var",variables)
      this.openVarsGen=false;
      this.variablesSelected=variables;
      this.varsForm.controls['concepto'].setValue(variables.concepto);
      this.varsForm.controls['valor'].setValue(variables.valor);
      this.varsForm.controls['idVariable'].setValue(variables.idVariable);
      this.openVarUnit=true;
  }


  asignaVar(){
    var x = {
      "concepto":this.varsForm.controls['concepto'].value,
      "valor":this.varsForm.controls['valor'].value
    }
    var id = this.varsForm.controls['idVariable'].value;

    this.variables = this._variablesService.editarVariable(x,id);
    this.openVarUnit=false;
    this.openVarsGen=true;
  }

  }
