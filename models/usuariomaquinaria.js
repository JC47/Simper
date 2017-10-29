const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

module.exports.addUsuarioMaquinaria = function (dato) {
  var query = "insert into usuariomaquinaria set ?";
  return querySql(query,dato);
}

module.exports.getUsuarioMaquinariaByIdUsuario = function (idUsuario) {
  var query = "select * from usuariomaquinaria where idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.updateUsuarioMaquinaria = function (idUsuario,idAdministrador,idProducto,idMaquinaria,cantidad) {
  var query = "update usuariomaquinaria set cantidad = "+cantidad+" where idMaquinaria = "+idMaquinaria+" and Producto_idProducto = "+idProducto+" and idUsuario = "+idUsuario+" and Administrador_idAdministrador = "+idAdministrador+" ";
  return querySql(query);
}

module.exports.deleteUsuarioMaquinaria = function (idUsuario,idAdministrador,idProducto,idMaquinaria) {
  var query = "delete from usuariomaquinaria where idMaquinaria = "+idMaquinaria+" and Producto_idProducto = "+idProducto+" and idUsuario = "+idUsuario+" and Administrador_idAdministrador = "+idAdministrador+" ";
  return querySql(query);
}

module.exports.getUsuarioMaquinaria = function (idUsuario,idAdministrador,idProducto,idMaquinaria) {
  var query = "select cantidad from usuariomaquinaria where idMaquinaria = "+idMaquinaria+" and Producto_idProducto = "+idProducto+" and idUsuario = "+idUsuario+" and Administrador_idAdministrador = "+idAdministrador+" ";
  return querySql(query);
}
