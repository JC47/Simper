import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ProductoVenta} from '../app.interfaces';
import {PresupuestoGlobalVentasEIVA} from '../app.interfaces';
import {AlmacenArticuloTerminadoI} from '../app.interfaces';
import {PresupuestoConsumoMP} from '../app.interfaces';
import {PresupuestoCompraMP} from '../app.interfaces';
import {PresupuestoCostoTransformacion} from '../app.interfaces';
import {PresupuestoCostoDistribucion} from '../app.interfaces';
import {PresupuestoCostoAdministracion} from '../app.interfaces';
import {costoProduccionVentas} from '../app.interfaces';
import {EstadoResultados} from '../app.interfaces';
import {PresupuestoGlobalDeProduccion} from '../app.interfaces';
import {BalanceService} from './balance.service';
import {ProductoService} from './producto.service';
import {OperacionService} from './operacion.service';

@Injectable()
export class ResultadosOperacionService {
  opAnterior = [];
  opActual = [];
  BalanceActual = [];
  productosN = [];
  productosO:ProductoVenta[] = [];

  PCA:PresupuestoCostoAdministracion = {
    unidadesAVender:null,
    costoUniTotal:null,
    costoAdministracion:null,
    depreciaciones:null,
    neto:null,
    IVA:null,
    total:null
  }

  PCD:PresupuestoCostoDistribucion = {
    unidadesAVender:null,
    costoUniTotal:null,
    costoDistribucion:null,
    depreciaciones:null,
    neto:null,
    IVA:null,
    total:null
  }

  PCT:PresupuestoCostoTransformacion = {
    unidadesAProducir:null,
    costoUniTotal:null,
    costoTrans:null,
    depreciaciones:null,
    neto:null,
    IVA:null,
    total:null
  }
  PCMP:PresupuestoCompraMP = {
    consumoMP:null,
    costoUnitarioMP:null,
    importe:null,
    IVAAcreditable:null
  }
  PGCMP:PresupuestoConsumoMP = {
    unidadesAProducir:null,
    cantidadUnitaria:null,
    costoUnitarioMP:null,
    cantidad:null,
    importe:null
  }
  PGP:PresupuestoGlobalDeProduccion = {
    unidadesAVender:null,
    inventarioFinal:null,
    inventarioInicial:null,
    unidadesAProducir:null,
    costoUnitarioMP:null,
    costoUnitarioTrans:null,
    costoProduccionUnitario:null,
    costoProduccionTotal:null
  }
  AAT:AlmacenArticuloTerminadoI = {
    unidades:null,
    costoUnitario:null,
    Total:null
  }
  PGV:PresupuestoGlobalVentasEIVA = {
    unidadesAVender:null,
    precioVenta:null,
    ventasEfe:null,
    importe:null
  }
  PAux:ProductoVenta ={
    idProducto:0,
    AlmacenArtTerminadoI:null,
    PresupuestoGlobalVentas:null,
    PresupuestoGlobalProduccion:null,
    PresupuestoConsumoMP:null,
    PresupuestoCompraMP:null,
    PresupuestoCostoTransformacion:null,
    PresupuestoCostoDistribucion:null,
    PresupuestoCostoAdministracion:null,
    costoProduccionVentas:null,
    EstadoResultados:null
  };

  constructor(private http:Http, private balanceService:BalanceService,
              private productoService:ProductoService, private operacionService:OperacionService) { }

  establecerValores(){
    this.productosO.length = 0;
    this.productosN = this.productoService.returnProductos();
    this.operacionService.getAllOperaciones().subscribe(data => {
      for(let key$ in data.datos){
        let idProducto = data.datos[key$].Producto_idProducto;
        let CV = data.datos[key$].unidadesVendidas;
        let CA = data.datos[key$].unidadesAlmacenadas;
        this.PAux.idProducto = idProducto;
        this.PAux.AlmacenArtTerminadoI = this.AAT;
        this.PAux.PresupuestoGlobalVentas = this.PGV;
        this.PAux.PresupuestoGlobalProduccion = this.PGP;
        this.PAux.PresupuestoConsumoMP = this.PGCMP;
        this.PAux.PresupuestoCompraMP = this.PCMP;
        this.PAux.PresupuestoCostoTransformacion = this.PCT;
        this.PAux.PresupuestoCostoDistribucion = this.PCD;
        this.PAux.PresupuestoCostoAdministracion = this.PCA;
        console.log(this.PAux)
        this.productosO.push(this.PAux);
      }
    });
    console.log(this.productosO);
    return this.productosO;
  }



}
