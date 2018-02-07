const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

module.exports.addProductoZonaProyecto = function (json) {
  var query = "insert into productozonaproyecto set ?";
  return querySql(query, json);
}

module.exports.getTerminados = function(idProyecto){
  var query = "select * from productozona inner join productozonaproyecto on productozona.Producto_idProducto = productozonaproyecto.Producto_idProducto and productozonaproyecto.Proyecto_idProyecto = " + idProyecto +" and productozonaproyecto.periodosDes = productozona.tiempoDes and productozonaproyecto.desarrollado = 1 and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona";
  console.log(query);
  return querySql(query);
}
//select periodosDes from productozonaproyecto where Proyecto_idProyecto = 8 and Producto_idProducto = 4

module.exports.updateProductoZonaProyecto = function (idProducto,idZona,idProyecto,idUsuario,ultimoPeriodo,periodos) {
  var query = "update productozonaproyecto set ultimoPeriodoDes = "+ultimoPeriodo+", periodosDes = "+periodos+"  where Producto_idProducto = "+idProducto+" and Zona_idZonas = "+idZona+" and Proyecto_idProyecto = "+idProyecto+" and Proyecto_Usuario_idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.desarolladoProductoZonaProyecto = function (idProducto,idZona,idProyecto,idUsuario,desarrollado) {
  var query = "update productozonaproyecto set desarrollado = "+desarrollado+" where Producto_idProducto = "+idProducto+" and Zona_idZonas = "+idZona+" and Proyecto_idProyecto = "+idProyecto+" and Proyecto_Usuario_idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.getIdProductoFromProductoZonaProyecto = function (idProyecto,idUsuario) {
  var query = "select distinct(Producto_idProducto) from productozonaproyecto where Proyecto_idProyecto = "+idProyecto+" and Proyecto_Usuario_idUsuario = "+idUsuario+" and desarrollado = 2";
  return querySql(query);
}

module.exports.getProductoZonaProyectoByIdProyectoByIdUsuario = function (idProyecto,idUsuario) {
  var query = "select * from productozonaproyecto where Proyecto_idProyecto = "+idProyecto+" and Proyecto_Usuario_idUsuario = "+idUsuario+" and desarrollado = 2 ";
  return querySql(query);
}

//PRODUCTOS SIN DESARROLLAR
//indica los productos que se encuentran en productozona pero no en productozonaproyecto con más cositas
module.exports.getProductosSinDesarrollar = function (idProyecto,numeroPeriodo,idUsuario) {
//var query = "select * from proyectoproducto inner join productozona inner join zona on proyectoproducto.Productos_idProducto = productozona.Producto_idProducto and productozona.Zona_idZona = zona.idZona and proyectoproducto.desarrollado = 1 and proyectoproducto.Proyectos_idProyecto = "+idProyecto+" where not (productozona.Producto_idProducto,productozona.Zona_idZona ) in (select Producto_idProducto, Zona_idZonas from productozonaproyecto where Proyecto_idProyecto = "+idProyecto+" and //Proyecto_Usuario_idUsuario = "+idUsuario+") order by idZona";
// var query = "select * from proyectoproducto inner join productozona inner join zona on proyectoproducto.Productos_idProducto = productozona.Producto_idProducto and productozona.Zona_idZona = zona.idZona and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" and desarrollado= 0 where not (productozona.Producto_idProducto, productozona.Zona_idZona) in (select distinct Producto_idProducto, Zona_idZonas from productozonaproyecto where desarrollado>0 and Proyecto_idProyecto = "+idProyecto+" and Proyecto_Usuario_idUsuario = "+idUsuario+" and numeroPeriodo <= "+numeroPeriodo+") order by Zona_idZona";
  // var query = "select * from productozonaproyecto inner join productozona inner join zona on productozonaproyecto.Producto_idProducto = productozona.Producto_idProducto and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona and productozonaproyecto.Zona_idZonas = zona.idZona where not (productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas) in (select productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas from productozonaproyecto where productozonaproyecto.desarrollado>0 and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+") and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 0 order by productozonaproyecto.Zona_idZonas";

  var query = "select * from productozonaproyecto inner join productozona inner join zona inner join proyectoproducto on productozonaproyecto.Producto_idProducto = productozona.Producto_idProducto and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona and productozonaproyecto.Zona_idZonas = zona.idZona and productozonaproyecto.Proyecto_idProyecto = proyectoproducto.Proyectos_idProyecto and productozonaproyecto.Producto_idProducto = proyectoproducto.Productos_idProducto and productozonaproyecto.Producto_idProducto = proyectoproducto.Productos_idProducto where not (productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas) in (select productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas from productozonaproyecto where productozonaproyecto.desarrollado>0 and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+") and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 0 and proyectoproducto.desarrollado = 2 and proyectoproducto.numeroPeriodo <= "+numeroPeriodo+" order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}
//indica el numero de objeto dependiendo el resultado que se van a crear
module.exports.getIdZonaSinDes = function (idProyecto,numeroPeriodo,idUsuario) {
  var query = "select distinct productozonaproyecto.Zona_idZonas from productozonaproyecto inner join productozona inner join zona inner join proyectoproducto on productozonaproyecto.Producto_idProducto = productozona.Producto_idProducto and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona and productozonaproyecto.Zona_idZonas = zona.idZona and productozonaproyecto.Proyecto_idProyecto = proyectoproducto.Proyectos_idProyecto and productozonaproyecto.Producto_idProducto = proyectoproducto.Productos_idProducto and productozonaproyecto.Producto_idProducto = proyectoproducto.Productos_idProducto where not (productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas) in (select productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas from productozonaproyecto where productozonaproyecto.desarrollado>0 and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+") and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 0 and proyectoproducto.desarrollado = 2 and proyectoproducto.numeroPeriodo <= "+numeroPeriodo+" order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}
//lo usamos para compración y extraer dato de nombreZona
module.exports.getZonas = function () {
  var query = "select * from zona";
  return querySql(query);
}

//PRODUCTOS EN DESARROLLO

// module.exports.getProductosEnDesEnZona = function (idProyecto,idUsuario) {
//   var query = "select distinct Producto_idProducto,Zona_idZonas,ultimoPeriodoDes,periodosDes,tiempoDes from productozonaproyecto inner join zona on productozonaproyecto.Zona_idZonas = zona.idZona inner join producto on productozonaproyecto.Producto_idProducto = producto.idProducto where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 0 order by Zona_idZonas";
//   return querySql(query);
// }

module.exports.getProductosEnDesarrollo = function (idProyecto,numeroPeriodo,idUsuario) {

  var query = "select * from productozonaproyecto inner join productozona inner join zona on productozonaproyecto.Producto_idProducto = productozona.Producto_idProducto and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona and productozonaproyecto.Zona_idZonas = zona.idZona where not (productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas) in (select productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas from productozonaproyecto where productozonaproyecto.desarrollado>1 and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+") and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 1 order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

module.exports.getIdZonasEnDes = function (idProyecto,numeroPeriodo,idUsuario) {
var query = "select distinct productozonaproyecto.Zona_idZonas from productozonaproyecto inner join productozona inner join zona on productozonaproyecto.Producto_idProducto = productozona.Producto_idProducto and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona and productozonaproyecto.Zona_idZonas = zona.idZona where not (productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas) in (select productozonaproyecto.Producto_idProducto,productozonaproyecto.Zona_idZonas from productozonaproyecto where productozonaproyecto.desarrollado>1 and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+") and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 1 order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

//PRODUCTOS DESARROLLADOS

// module.exports.getProductosDesEnZona = function (idProyecto,idUsuario) {
//   var query = "select distinct Producto_idProducto,Zona_idZonas from productozonaproyecto inner join zona on productozonaproyecto.Zona_idZonas = zona.idZona where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 1 order by Zona_idZonas";
//   return querySql(query);
// }

module.exports.getProductosDesarrollados = function (idProyecto,numeroPeriodo,idUsuario) {
//  var query = "select * from productozonaproyecto inner join zona on productozonaproyecto.Zona_idZonas = zona.idZona where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+"  and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+"  and productozonaproyecto.desarrollado = 1";
//var query = "select * from proyectoproducto inner join productozona inner join zona on proyectoproducto.Productos_idProducto = productozona.Producto_idProducto and productozona.Zona_idZona = zona.idZona where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" and desarrollado= 2";
var query = "select * from productozonaproyecto inner join productozona inner join zona on productozonaproyecto.Producto_idProducto = productozona.Producto_idProducto and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona and productozonaproyecto.Zona_idZonas = zona.idZona where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.numeroPeriodo <="+numeroPeriodo+" and productozonaproyecto.desarrollado = 2 order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

module.exports.getIdZonasDes = function (idProyecto,numeroPeriodo,idUsuario) {
//  var query = "select distinct(Zona_idZonas) from productozonaproyecto inner join zona on productozonaproyecto.Zona_idZonas = zona.idZona where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+"  and productozonaproyecto.desarrollado = 1";
//var query = "select * from proyectoproducto inner join productozona inner join zona on proyectoproducto.Productos_idProducto = productozona.Producto_idProducto and productozona.Zona_idZona = zona.idZona where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" and desarrollado= 2 order by Zona_idZona";
var query = "select distinct productozonaproyecto.Zona_idZonas from productozonaproyecto inner join productozona inner join zona on productozonaproyecto.Producto_idProducto = productozona.Producto_idProducto and productozonaproyecto.Zona_idZonas = productozona.Zona_idZona and productozonaproyecto.Zona_idZonas = zona.idZona where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.numeroPeriodo <="+numeroPeriodo+" and productozonaproyecto.desarrollado = 2 order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

module.exports.getBalance = function (idProyecto,numPeriodo) {
  console.log("Francisco",idProyecto,numPeriodo);
  var queryGetCajaBanco = "select * from balance where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numPeriodo+" ";
  return querySql(queryGetCajaBanco);
};

module.exports.updateBalance = function (idProyecto,numPeriodo,saldoF,IVAPorEnterarProd,utilidadEjercicioProd) {
  var queryUpdateCajaBanco = "update balance set cajaBancos = "+saldoF+", IVAPorEnterar = "+IVAPorEnterarProd+", utilidadEjercicio = "+utilidadEjercicioProd+"  where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numPeriodo+" ";
  return querySql(queryUpdateCajaBanco);
}

//ambos desarrolados productoZonaProyecto y proyectoProducto

module.exports.getIdsZonas = function (idUsuario,idProyecto) {
  var query = "select distinct(Zona_idZonas) from productozonaproyecto inner join proyectoproducto on productozonaproyecto.Proyecto_idProyecto = 92 and proyectoproducto.Proyectos_idProyecto = 92 and productozonaproyecto.Producto_idProducto = proyectoproducto.Productos_idProducto and productozonaproyecto.Proyecto_Usuario_idUsuario = 1 and productozonaproyecto.desarrollado = 1 and proyectoproducto.desarrollado = 1 order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

module.exports.getDesarrollados = function (idUsuario,idProyecto) {
  var query = "select * from productozonaproyecto inner join proyectoproducto on productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and proyectoproducto.Proyectos_idProyecto = "+idProyecto+" and productozonaproyecto.Producto_idProducto = proyectoproducto.Productos_idProducto and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.desarrollado = 1 and proyectoproducto.desarrollado = 1 order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

module.exports.getProductoZonaProyectoEnDes = function () {
  var query = "select * from productozonaproyecto where desarrollado = 0";
  return querySql(query);
}

//pagardesarrollozona
module.exports.getMaxNumeroPeriodoProductoZonaProyecto = function (idProyecto,idProducto,idZona,idUsuario) {
  var query = "select max(numeroPeriodo) as maxnumperiodo from productozonaproyecto where Proyecto_idProyecto = "+idProyecto+" and Producto_idProducto = "+idProducto+" and Zona_idZonas = "+idZona+" and Proyecto_Usuario_idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.getTiempoDesZona = function (idZona,idProducto) {
  var query = "select tiempoDes from productozona where Zona_idZona = "+idZona+" and Producto_idProducto = "+idProducto+" ";
  return querySql(query);
}

module.exports.getPeriodosDesProductoZonaProyecto = function (idProyecto,idProducto,idUsuario,idZona,numeroPeriodo) {
  var query = "select periodosDes from productozonaproyecto where Proyecto_idProyecto = "+idProyecto+" and Producto_idProducto = "+idProducto+" and Proyecto_Usuario_idUsuario = "+idUsuario+" and Zona_idZonas = "+idZona+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

module.exports.getProductoZonaProyecto = function (idProducto,idZona,idProyecto,idUsuario,numeroPeriodo) {
  var query = "select * from productozonaproyecto where Producto_idProducto = "+idProducto+" and Zona_idZonas = "+idZona+" and Proyecto_idProyecto = "+idProyecto+" and Proyecto_Usuario_idUsuario = "+idUsuario+" and numeroPeriodo = "+numeroPeriodo+"  ";
  return querySql(query);
}

module.exports.deleteProductoZona = function(idProyecto, idProducto, idZona, numeroPeriodo,idUsuario) {
  var query = "delete from productozonaproyecto where Producto_idProducto = "+ idProducto +" AND Zona_idZonas = "+ idZona+" AND Proyecto_idProyecto = "+idProyecto+" AND Proyecto_Usuario_idUsuario = "+ idUsuario+" AND numeroPeriodo = " +numeroPeriodo+"";
  return querySql(query);
}
