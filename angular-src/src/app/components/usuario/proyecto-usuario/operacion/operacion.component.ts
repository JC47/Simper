import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {ProductoService} from '../../../../services/producto.service';
import {BalanceService} from '../../../../services/balance.service';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {
  productos=[];
  auxiliares=[];
  auxiliaresAnteriores=[];
  auxiliarC=[];
  opne:boolean=false;
  almacenArticuloTerm:boolean=false;
  presGlobalVentas:boolean=false;
  presGlobalProduccion:boolean=false;
  presGlobalConsumoMP:boolean=false;
  presGlobalComprasMP:boolean=false;
  presGlobalCostoTrans:boolean=false;
  presGlobalCostoDist:boolean=false;
  presGlobalCostoAdmon:boolean=false;
  presGlobalCostoVenta:boolean=false;

  constructor(private _productoService:ProductoService,
              private _balanceService:BalanceService,
              private _operacionService:OperacionService,
              private _resultadosService:ResultadosService) {
    this._resultadosService.vender();
  }

  ngOnInit() {
    setTimeout(() => {
      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.auxiliaresAnteriores=this._operacionService.returnAuxiliaresAnteriores();
          this.auxiliares=this._operacionService.returnAuxiliares();
          this.auxiliarC=this._operacionService.returnAuxiliarC();
          this.productos=this._productoService.returnProductos();
        }
      });
    }, 1500);
  }

  getNameByIdProducto(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.nombreProd;
    }
    return "id no encontrado";
  }

  getPrecioVenta(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.precioVenta;
    }
    return 0;
  }

  getMPPuniProd(id:number){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.costosMPPUniProd;
    }
    return 0;
  }

  getUnidadesAlmacenadasAnterior(idProducto){
    for(let aux of this.auxiliaresAnteriores){
      if(aux.Producto_idProducto == idProducto){
        return aux.unidadesAlmacenadas;
      }
    }
    return 0;
  }

  getUniMP(id){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.uniMP;
    }
    return 0;
  }

  getCostoUni(id){
    for(let producto of this.productos){
      if(producto.idProducto==id)
       return producto.costoUni;
    }
    return 0;
  }

  getUniMPTotal(){
    var mpT = 0;
    for(let aux of this.auxiliares){
      mpT += this.getUniMP(aux.Producto_idProducto) * aux.unidadesProducidas;
    }
    return mpT
  }

  getUniMPTotalCash(){
    var mpTC = 0;
    mpTC = this.getUniMPTotal() * 69;
    return mpTC;
  }

  getIVAMP(){
    var mpIVA =0;
    mpIVA = this.getUniMPTotalCash() * .15;
    return mpIVA
  }

  getTotalMP(){
    var total = 0;
    total = this.getUniMPTotalCash() + this.getIVAMP();
    return total;
  }

  getTotalVentas(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.IVAxVentas;
    }
    return T;
  }

  getTotalCostosVentas(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoVentas;
    }
    return T;
  }

  getUtilidadBruta(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
    }
    return T;
  }

  getDistTotal(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoDistribucion;
    }
    return T;
  }

  getAdminTotal(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.costoAdministrativo;
    }
    return T;
  }

  getUtilidadAntes(){
    var T = 0;
    for(let aux of this.auxiliares){
      T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
    }
    for(let aux2 of this.auxiliarC){
      T += -aux2.desarrolloMercado -aux2.desarrolloProducto;
    }
    return T;
  }

  getISR(){
    var isr = 0;
    var uti = this.getUtilidadAntes();
    if(uti > 0){
      isr = uti * .34;
    }
    return isr;
  }

  getPTU(){
    var ptu = 0;
    var uti = this.getUtilidadAntes();
    if(uti > 0){
      ptu = uti * .10;
    }
    return ptu;
  }



}
