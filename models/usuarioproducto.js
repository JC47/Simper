const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

module.exports.addUsuarioProducto = function (dato) {
  var query = "insert into usuarioproducto set ?";
  return querySql(query,dato);
}

module.exports.getUsuarioProductoByIdUsuario = function (idUsuario) {
  var query = "select * from usuarioproducto where idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.getUsuarioProducto = function (idUsuario, idProducto) {
  var query = "select * from usuarioproducto where idUsuario = "+idUsuario + " and idProducto = "+idProducto+"";
  return querySql(query)
}

module.exports.deleteUsuarioProducto = function (idUsuario,idAdministrador,idProducto) {
  var query = "delete from usuarioproducto where idProducto = "+idProducto+" and idUsuario = "+idUsuario+" and idAdministrador = "+idAdministrador+" ";
  return querySql(query);
}

//Toma los idProducto que estén en la tabla producto excluyendo a los productos que tiene asignado ya en usuarioproducto. Muestra los que no tiene asignado y están en producto
module.exports.getIdProductoSinAsignar = function (idUsuario) {
  var query = "select idProducto from producto where not idProducto in (select idProducto from usuarioproducto where idUsuario = "+idUsuario+")";
  return querySql(query);
}
