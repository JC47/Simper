const db = require('../config/db');
const querySql = db.querySql;
const Promise = require("bluebird");

module.exports.addOperacion = function (json) {
  var query = "insert into operacion set ?";
  return querySql(query,json);
}

module.exports.addAlmacen = function(json){
  var query = "insert into almacen set ?";
  return querySql(query,json);
}

module.exports.updateAlmacen = function(uniA,idProducto,idProyecto,numeroPeriodo){
  var query = "update almacen set unidadesAlmacenadas = "+uniA+" where Producto_idProducto = "+idProducto+" and Proyecto_idProyecto = "+idProyecto+" and Balance_numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

module.exports.getOperaciones = function (idProyecto,idUsuario,numeroPeriodo) {
  var query = "select * from operacion where Proyecto_idProyecto = "+idProyecto+" and Usuario_idUsuario = "+idUsuario+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

module.exports.getAlmacenTotal = function(idProyecto,numeroPeriodo) {
  var query = "select * from almacen where Proyecto_idProyecto = "+idProyecto+" and Balance_numeroPeriodo = "+numeroPeriodo+"";
  return querySql(query);
}

module.exports.updateOperacion = function (idProducto,idZona,idProyecto,idUsuario,numeroPeriodo,uniVendidas) {
  var query = " update operacion set unidadesVendidas = "+uniVendidas+" where Producto_idProducto = "+idProducto+" and Proyecto_idProyecto = "+idProyecto+" and Usuario_idUsuario = "+idUsuario+" and numeroPeriodo = "+numeroPeriodo+" and Zona_idZonas = " +idZona+ " " ;
  return querySql(query);
}

module.exports.getOperacion = function (idProyecto,idUsuario,numeroPeriodo,idProducto,idZona) {
  var query = "select * from operacion where Proyecto_idProyecto = "+idProyecto+" and Usuario_idUsuario = "+idUsuario+" and numeroPeriodo = "+numeroPeriodo+" and Producto_idProducto = "+idProducto+" and Zona_idZonas = " +idZona+ " ";
  return querySql(query);
}

module.exports.getDemandaPotencial = function(numeroPeriodo,idProducto,idZona){
  var query = "select cantidad from demanda where numPeriodo = "+numeroPeriodo+" and Zona_idZonas= "+idZona+" and Producto_idProducto= "+idProducto+"";
  return querySql(query);
}

module.exports.getMaquinarias = function(idProducto, idProyecto, numeroPeriodo){
  var query = "select * from maquinariaproyecto inner join maquinaria on maquinariaproyecto.Maquinaria_idMaquinaria = maquinaria.idMaquinaria where maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" and maquinariaproyecto.Maquinaria_idProducto = " +idProducto+" and maquinariaproyecto.Balance_numeroPeriodo <= "+numeroPeriodo+"";
  return querySql(query);
}

module.exports.getOperacionProducto = function(idProyecto,idProducto,numeroPeriodo,idUsuario,idZona){
  var query = "select unidadesVendidas from operacion where Producto_idProducto = "+idProducto+" and Proyecto_idProyecto = "+idProyecto+" and Usuario_idUsuario = "+idUsuario+" and numeroPeriodo = "+numeroPeriodo+" and Zona_idZonas != "+idZona+" ";
  return querySql(query);
}

module.exports.getProductoVendido = function(idProducto){
  var query = "select * from producto where idProducto = ?";
  return querySql(query,idProducto);
}

module.exports.setOperacion = function (idProducto,idProyecto,idUsuario,numeroPeriodo,data){
  var query = " update operacion set ? where Producto_idProducto = "+idProducto+" and Proyecto_idProyecto = "+idProyecto+" and Usuario_idUsuario = "+idUsuario+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query,data);
}

module.exports.getProductosVentas = function(idProyecto){
  var query = "select Producto_idProducto from productozonaproyecto inner join proyectoproducto on productozonaproyecto.Producto_idProducto = proyectoproducto.Productos_idProducto and productozonaproyecto.Proyecto_idProyecto = proyectoproducto.Proyectos_idProyecto where productozonaproyecto.desarrollado = 1 and proyectoproducto.desarrollado = 1 and Proyecto_idProyecto = " +idProyecto+" ";
  return querySql(query);
}

module.exports.getAlmacen = function(idProyecto,idProducto,numeroPeriodo){
  var query = "select * from almacen where Balance_numeroPeriodo = " +numeroPeriodo+ " and Proyecto_idProyecto = " +idProyecto+ " and Producto_idProducto = "+idProducto+" ";
  return querySql(query);
}

module.exports.getUnidadesVendidas = function(idProyecto,idProducto,numeroPeriodo){
  var query = "select unidadesVendidas from operacion where Proyecto_idProyecto = "+idProyecto+" and Producto_idProducto = "+idProducto+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

module.exports.getAlmacenes = function(idProyecto,numeroPeriodo){
  var query = "select * from almacen where Proyecto_idProyecto = "+idProyecto+" and Balance_numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

module.exports.getProductoCuentaVenta = function(idProyecto,numeroPeriodo){
  var query = "select Producto_idProducto from auxiliarcuentaventa where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = " +idProyecto+"";
  return querySql(query);
}

module.exports.getProductoMaquinaria = function(idProyecto,numeroPeriodo){
  var query = "select * from maquinariaproyecto where Balance_numeroPeriodo <= "+numeroPeriodo+ " and Proyectos_idProyecto = " +idProyecto+"";
  return querySql(query);
}

module.exports.getProductoCuenta = function(idProyecto,numeroPeriodo){
  var query = "select Producto_idProducto from auxiliarcuenta where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = " +idProyecto+"";
  return querySql(query);
}

module.exports.getACV = function(idProyecto,numeroPeriodo) {
  var query = "select Balance_numeroPeriodo,Ventas,IVAxVentas,costoDistribucion,costoAdministrativo from auxiliarcuentaventa where Proyectos_idProyecto ="+idProyecto+" and Balance_numeroPeriodo <= "+numeroPeriodo+"";
  return querySql(query);
}

module.exports.getBalances = function(idProyecto,numeroPeriodo) {
  var query = "select * from balance where Proyectos_idProyecto ="+idProyecto+" and numeroPeriodo > 0 and numeroPeriodo <= "+numeroPeriodo+" order by numeroPeriodo";
  return querySql(query);
}

module.exports.getAC = function(idProyecto,numeroPeriodo) {
  var query = "select Balance_numeroPeriodo,desarrolloMercado,desarrolloProducto from auxiliarcuenta where Proyectos_idProyecto ="+idProyecto+" and Balance_numeroPeriodo <= "+numeroPeriodo+"";
  return querySql(query);
}


module.exports.getPedidos = function(idProyecto,numeroPeriodo) {
  var query = "select anticipo,numeroPeriodo from creditobalance where Proyectos_idProyecto ="+idProyecto+" and numeroPeriodo <="+numeroPeriodo+"";
  return querySql(query);
}

module.exports.getPT = function(idProyecto,numeroPeriodo) {
  var query = "select numeroPeriodo,intereses,tipo from amortizacion inner join credito on amortizacion.idCredito = credito.idCredito and Proyecto_idProyecto = " +idProyecto+" and numeroPeriodo <="+numeroPeriodo+"";
  return querySql(query);
}
