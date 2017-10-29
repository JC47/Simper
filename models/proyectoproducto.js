const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

module.exports.addProyectoProducto = function (json) {
    var queryProyectoProd = "insert into ProyectoProducto set ?";
    return querySql(queryProyectoProd, json);
}

module.exports.getProyectoProducto = function (idProyecto) {
    var proyectoProductoQuery = "select * from  ProyectoProducto where Proyectos_idProyecto = ?";
    return querySql(proyectoProductoQuery,idProyecto);
}

module.exports.updateProyectoProducto = function (idProyecto,idProducto,ultimoPeriodo) {
  var queryProyectoProd = "update ProyectoProducto set ultimoPeriodoDes = "+ultimoPeriodo+" where Proyectos_idProyecto = "+idProyecto+" and Productos_idProducto = "+idProducto+" ";
  return querySql(queryProyectoProd);
}

module.exports.getTerminados = function (idProyecto) {
  var query = "select idProducto from producto inner join proyectoproducto on producto.idProducto = proyectoproducto.Productos_idProducto and proyectoproducto.Proyectos_idProyecto = "+idProyecto+" and proyectoproducto.periodosDes = producto.tiempoDes "
  return querySql(query,idProyecto);
}

module.exports.getTiempoDes = function (idProducto) {
  console.log(idProducto);
  var queryTiempoDes = "select tiempoDes from producto where idProducto = ?";
  return querySql(queryTiempoDes,idProducto);
}

module.exports.getPeriodosDes = function (idProyecto,idProducto) {
  console.log(idProyecto, idProducto);
  var queryPeriodosDes = "select periodosDes from proyectoproducto where Proyectos_idProyecto = "+idProyecto+" and Productos_idProducto = "+idProducto+" ";
  return querySql(queryPeriodosDes);
}

module.exports.updateDesarrolladoPeriodos = function (periodos,idProyecto,idProducto) {
  console.log(periodos,idProyecto,idProducto);
  var queryDesarrollado = "update ProyectoProducto set periodosDes = "+periodos+" where Proyectos_idProyecto = "+idProyecto+" and Productos_idProducto = "+idProducto+"";
  return querySql(queryDesarrollado);
}

module.exports.productosSinDesarrollar = function (idProyecto) {
  var querySinDes = "select * from producto where not idProducto in (select Productos_idProducto from proyectoproducto where Proyectos_idProyecto = "+idProyecto+")";
  return querySql(querySinDes);
}

module.exports.getProductosEnDesarrollo = function (idProyecto) {
  var queryProdEnDes = "select * from producto inner join proyectoproducto on producto.idProducto = proyectoproducto.Productos_idProducto and proyectoproducto.Proyectos_idProyecto = "+idProyecto+" and proyectoproducto.desarrollado = 0 ";
  return querySql(queryProdEnDes);
}

module.exports.getProductosDesarrollados = function (idProyecto) {
  var queryProdDes = "select * from producto inner join proyectoproducto on producto.idProducto = proyectoproducto.Productos_idProducto and proyectoproducto.Proyectos_idProyecto = "+idProyecto+" and proyectoproducto.desarrollado = 1 ";
  return querySql(queryProdDes);
}

module.exports.desarollado = function (idProyecto, idProducto, desarrollado) {
  var queryDes = "update ProyectoProducto set desarrollado = "+desarrollado+" where Proyectos_idProyecto = "+idProyecto+" and Productos_idProducto = "+idProducto+"";
  return querySql(queryDes);
}

module.exports.getBalance = function (idProyecto,numPeriodo) {
  var queryGetCajaBanco = "select * from balance where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numPeriodo+" ";
  return querySql(queryGetCajaBanco);
};

module.exports.updateBalance = function (idProyecto,numPeriodo,saldoF,IVAPorEnterarProd,utilidadEjercicioProd) {
  var queryUpdateCajaBanco = "update balance set cajaBancos = "+saldoF+", IVAPorEnterar = "+IVAPorEnterarProd+", utilidadEjercicio = "+utilidadEjercicioProd+"  where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numPeriodo+" ";
  return querySql(queryUpdateCajaBanco);
}

module.exports.deleteProyectoProducto = function (idProyecto,idProducto) {
  var query = "delete from proyectoproducto where Proyectos_idProyecto = "+idProyecto+" and Productos_idProducto = "+idProducto+" ";
  return querySql(query);
}
