import { Component, OnInit } from '@angular/core';
import {OperacionService} from '../../../../services/operacion.service';
import {ProductoService} from '../../../../services/producto.service';
import {ResultadosService} from '../../../../services/resultados.service';
import {BalanceService} from '../../../../services/balance.service';

@Component({
  selector: 'app-estado-resultados',
  templateUrl: './estado-resultados.component.html'
})

export class EstadoResultadosComponent implements OnInit {

  resultados = [];
  auxiliares=[];
  auxiliarC=[];
  productos=[];

  constructor(private _operacionService:OperacionService,
              private _productoService:ProductoService,
              private _balanceService:BalanceService,
              private _resultadosService:ResultadosService){
    this._resultadosService.vender();
  }

  ngOnInit() {
    setTimeout(() => {
      this._balanceService.getBalanceFinal().subscribe( data => {
        if(data.success){
          this.auxiliares=this._operacionService.returnAuxiliares();
          this.auxiliarC=this._operacionService.returnAuxiliarC();
          this.productos=this._productoService.returnProductos();
          this.resultados = this._operacionService.returnProductoResultados();
          console.log(this.auxiliarC);
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

  getVentasNetas(id){
    var i = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        i += (aux.Ventas - aux.IVAxVentas);
      }
    }
    return i;
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

  getCostoVentas(id){
    var T = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        T += aux.costoVentas;
      }
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

  getUtilidadParcial(id){
    var T = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
      }
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

  getDistParcial(id){
    var T = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        T += aux.costoDistribucion;
      }
    }
    return T;
  }

  getAdminParcial(id){
    var T = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        T += aux.costoAdministrativo;
      }
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

  getOtrosGastosTotal(){
    var T = 0;
    for(let aux of this.auxiliarC){
      T += (aux.desarrolloMercado + aux.desarrolloProducto);
    }
    return T;
  }

  getOtrosGastosParcial(id){
    var T = 0;
    for(let aux of this.auxiliarC){
      if(aux.Producto_idProducto == id){
        T += (aux.desarrolloMercado + aux.desarrolloProducto);
      }
    }
    return T;
  }

  getUtilidadAntesParcial(id){
    var T = 0;
    for(let aux of this.auxiliares){
      if(aux.Producto_idProducto == id){
        T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
      }
    }
    for(let aux2 of this.auxiliarC){
      if(aux2.Producto_idProducto == id){
        T += -aux2.desarrolloMercado -aux2.desarrolloProducto;
      }
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

}
