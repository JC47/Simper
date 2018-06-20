const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

//getBalance

module.exports.getNumeroPeriodoBalance = function (idProyecto,numeroPeriodo) {
  var query = "select distinct numeroPeriodo from balance where numeroPeriodo > 0 and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" ";
  return querySql(query);
}


//getVentas
module.exports.getAuxiliarCuenta = function (idProyecto,numeroPeriodo) {
  var query = "select Producto_idProducto,Balance_numeroPeriodo,Proyectos_idProyecto,unidadesVendidas,unidadesAlmacenadas from auxiliarcuentaventa where Proyectos_idProyecto = "+idProyecto+" and Balance_numeroPeriodo<= "+numeroPeriodo+" order by Balance_numeroPeriodo,Producto_idProducto";
  return querySql(query);
}

module.exports.getAllNumeroBalanceAuxiliarCuenta = function (idProyecto,numeroPeriodo) {
  var query = "select distinct Balance_numeroPeriodo from auxiliarcuentaventa where Proyectos_idProyecto = "+idProyecto+" and Balance_numeroPeriodo<= "+numeroPeriodo+" ";
  return querySql(query);
}

//Ventas Especificas
module.exports.getAuxiliarCuentaVenta = function (idProyecto,numeroPeriodo) {
  var query = "select Producto_idProducto,Zona_idZonas,numeroPeriodo,unidadesVendidas from operacion where Proyecto_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" order by Producto_idProducto,Zona_idZonas";
  return querySql(query);
}

module.exports.getProductosName = function () {
  let query = "select idProducto,nombreProd from producto";
  return querySql(query);
}

module.exports.getZonasName = function () {
  let query = "select idZona,nombreZona from zona";
  return querySql(query);
}

//getMaquinarias
module.exports.getMaquinariaProyecto = function (idProyecto,numeroPeriodo) {
    var query = "select * from maquinariaproyecto where Balance_numeroPeriodo > 0 and Proyectos_idProyecto = "+idProyecto+" and Balance_numeroPeriodo <= "+numeroPeriodo+" order by Balance_numeroPeriodo";
    return querySql(query);
}

module.exports.getAllNumeroPeriodoMaquinariaProyecto = function (idProyecto,numeroPeriodo) {
    var query = "select distinct Balance_numeroPeriodo from maquinariaproyecto where Balance_numeroPeriodo > 0 and Proyectos_idProyecto = "+idProyecto+" and Balance_numeroPeriodo <= "+numeroPeriodo+" order by Balance_numeroPeriodo";
    return querySql(query);
}

//getDesarrollosP

module.exports.getDesarrolladosProyectoProducto = function (idProyecto,numeroPeriodo) {
  var query = "select * from proyectoproducto where desarrollado = 1 and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" order by numeroPeriodo,Productos_idProducto;";
  return querySql(query);
}

module.exports.getNumeroPeriodoProyectoProducto = function (idProyecto,numeroPeriodo) {
  var query = "select distinct numeroPeriodo from proyectoproducto where desarrollado = 1 and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" order by numeroPeriodo";
  return querySql(query);
}

//getDesarrollosZ

module.exports.getDesarrolladosProductoZonaProyecto = function (idProyecto,numeroPeriodo) {
  var query = "select * from productozonaproyecto where desarrollado = 1 and Proyecto_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" order by numeroPeriodo,Zona_idZonas,Producto_idProducto";
  return querySql(query);
}

module.exports.getNumeroPeriodoProductoZonaProyecto = function (idProyecto,numeroPeriodo) {
  var query = "select distinct numeroPeriodo from productozonaproyecto where desarrollado = 1 and Proyecto_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" order by numeroPeriodo";
  return querySql(query);
}

//getCreditos

module.exports.getCreditoBalance = function (idProyecto) {
  var query = "select Proyectos_idProyecto, numeroPeriodo,monto,nombreCredito  from creditobalance inner join credito on creditobalance.credito_idCredito = credito.idCredito where Proyectos_idProyecto = "+idProyecto+" order by numeroPeriodo";
  return querySql(query);
}

module.exports.getNumeroPeriodoCreditoBalance = function (idProyecto) {
  var query = "select distinct numeroPeriodo from creditobalance where Proyectos_idProyecto = "+idProyecto+" order by numeroPeriodo";
  return querySql(query);
}
