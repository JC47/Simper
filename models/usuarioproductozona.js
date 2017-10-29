const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

module.exports.addUsuarioProductoZona = function (dato) {
  var query = "insert into usuarioproductozona set ? ";
  return querySql(query,dato);
}

module.exports.getUsuarioProductoZonaByIdUsuario = function (idUsuario) {
  var query = "select * from usuarioproductozona where idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.deleteUsuarioProductoZona = function (idUsuario,idAdministrador,idProducto,idZona) {
  var query = "delete from usuarioproductozona where idUsuario = "+idUsuario+" and idAdministrador = "+idAdministrador+" and idProducto = "+idProducto+" and idZona = " + idZona +" ";
  return querySql(query);
}
