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


//productosSinDesarrollar
module.exports.productosSinDesarrollar = function (idProyecto,numeroPeriodo) {
  //var query = "select Productos_idProducto from proyectoproducto inner join producto on proyectoproducto.Productos_idProducto = producto.idProducto where desarrollado = 0 and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" ";
  var query = "select * from proyectoproducto inner join producto on proyectoproducto.Productos_idProducto = producto.idProducto where not Productos_idProducto in (select Productos_idProducto from proyectoproducto where desarrollado > 0 and Proyectos_idProyecto = "+idProyecto+") and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" and desarrollado = 0";
  return querySql(query);
}

// module.exports.productosSinDesarrollarOtrosPeriodos = function (idProyecto) {
//   var query = "select distinct Productos_idProducto from proyectoproducto where desarrollado > 0 and Proyectos_idProyecto = "+idProyecto+"";
//   return querySql(query);
// }

module.exports.getProductosEnDesarrollo = function (idProyecto,numeroPeriodo) {
  //var queryProdEnDes = "select * from producto inner join proyectoproducto on producto.idProducto = proyectoproducto.Productos_idProducto and proyectoproducto.Proyectos_idProyecto = "+idProyecto+" and proyectoproducto.desarrollado = 0 ";
  var query = "select * from proyectoproducto where not Productos_idProducto in (select Productos_idProducto from proyectoproducto where desarrollado >1 and Proyectos_idProyecto = "+idProyecto+") and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" and desarrollado = 1";
  return querySql(query);
}

module.exports.getProductosDesarrollados = function (idProyecto,numeroPeriodo) {
  //var queryProdDes = "select * from producto inner join proyectoproducto on producto.idProducto = proyectoproducto.Productos_idProducto and proyectoproducto.Proyectos_idProyecto = "+idProyecto+" and proyectoproducto.desarrollado = 1 ";
  var query = "select * from proyectoproducto inner join producto on proyectoproducto.Productos_idProducto = producto.idProducto where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" and desarrollado = 2";
  return querySql(query);
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
