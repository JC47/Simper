
export interface usuario{
  idUsuario:number;
  nombreUsuario:string;
  apPat:string;
  apMat:string;
  contra:string;
  user:string;
};

export interface ProductoVenta{
  idProducto:number;
  AlmacenArtTerminadoI:AlmacenArticuloTerminadoI;
  PresupuestoGlobalVentas:PresupuestoGlobalVentasEIVA;
  PresupuestoGlobalProduccion:PresupuestoGlobalDeProduccion;
  PresupuestoConsumoMP:PresupuestoConsumoMP;
  PresupuestoCompraMP:PresupuestoCompraMP;
  PresupuestoCostoTransformacion:PresupuestoCostoTransformacion;
  PresupuestoCostoDistribucion:PresupuestoCostoDistribucion;
  PresupuestoCostoAdministracion:PresupuestoCostoAdministracion;
  costoProduccionVentas:costoProduccionVentas;
  EstadoResultados:EstadoResultados;
}


export interface AlmacenArticuloTerminadoI{
  unidades:number;
  costoUnitario:number;
  Total:number;
}

export interface PresupuestoGlobalVentasEIVA{
  unidadesAVender:number;
  precioVenta:number;
  ventasEfe:number;
  importe:number;
}

export interface PresupuestoGlobalDeProduccion{
  unidadesAVender:number;
  inventarioFinal:number;
  inventarioInicial:number;
  unidadesAProducir:number;
  costoUnitarioMP:number;
  costoUnitarioTrans:number;
  costoProduccionUnitario:number;
  costoProduccionTotal:number;
}

export interface PresupuestoConsumoMP{
  unidadesAProducir:number;
  cantidadUnitaria:number;
  costoUnitarioMP:number;
  cantidad:number;
  importe:number;
}

export interface PresupuestoCompraMP{
  consumoMP:number;
  costoUnitarioMP:number;
  importe:number;
  IVAAcreditable:number;
}

export interface PresupuestoCostoTransformacion{
  unidadesAProducir:number;
  costoUniTotal:number;
  costoTrans:number;
  depreciaciones:number;
  neto:number;
  IVA:number;
  total:number;
}

export interface PresupuestoCostoDistribucion{
  unidadesAVender:number;
  costoUniTotal:number;
  costoDistribucion:number;
  depreciaciones:number;
  neto:number;
  IVA:number;
  total:number;
}

export interface PresupuestoCostoAdministracion{
  unidadesAVender:number;
  costoUniTotal:number;
  costoAdministracion:number;
  depreciaciones:number;
  neto:number;
  IVA:number;
  total:number;
}

export interface costoProduccionVentas{
  materiaPrimaConsumida:number;
  manoObraYGastosIndirectos:number;
  costoProduccion:number;
  IIProductoTerminado:number;
  IFProductoTerminado:number;
  costoVentas:number;
}

export interface EstadoResultados{
  ventasNetas:number;
  costoVentas:number;
  utilidadBruta:number;
  costoDistribucion:number;
  otrosGastos:number;
  costoAdministracion:number;
  utilidadEnOperacion:number;
  utilidadEjercicio:number;
}

export interface proyecto{
  idProyecto:number;
  nombreProyecto:string;
  fechaCreacion:number;
  Usuario_idUsuario:number;
}


export interface periodosAct{
  idZona:number;
  idProducto:number;
  periodos:periodos[];
}

export interface admin{
  idAdministrador:number;
  nombreAdmin:string;
  apPat:string;
  apMat:string;
  contra:string;
  user:string;
}

export interface producto{
  idProducto:number;
  nombreProd:string;
  costoDes:number;
  tiempoDes:number;
  precioVenta:number;
  costoFijoFabri:number;
  costosVarFabri:number;
  costosVarUniDist:number;
  gastosFijosAdim:number;
  costosMPPUniProd:number;
  uniMP:number;
  costoUni:number;


};

export interface maquinaria{
  idMaquinaria:number;
  nombreMaq:string;
  costo:number;
  cantidadProd:number;
  depAcum:number;
  Producto_idProducto:number;


};

export interface zona{
  idZona:number;
  nombreZona:string;
  costoDes:number;
  tiempoDes:number;
  productos:productoPeriodo[];
};

export interface credito{
  idPrestamos:number;
  nombrePrestamo:string;
  intereses:number;
  plazoPago:number;
  monto:number;
  tipoPrestamo:string;
};


export interface productoPeriodo{
  idProducto:number;
  periodos:periodos[];

};

export interface periodos{
  numero:number;
  cantidad:number;
};


export interface select{
  value:number;
  label:string;
};
