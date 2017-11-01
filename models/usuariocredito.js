const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

module.exports.addUsuarioCredito = function (dato) {
  var query = "insert into usuariocredito set ?";
  return querySql(query,dato);
}

module.exports.getUsuarioCreditoByIdUsuario = function (idUsuario) {
  var query = "select * from usuariocredito inner join credito on usuariocredito.idCredito = credito.idCredito and usuariocredito.idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.deleteUsuarioCredito = function (idUsuario,idAdministrador,idCredito) {
  var query = "delete from usuariocredito where idCredito = "+idCredito+" and idUsuario = "+idUsuario+" and idAdministrador = "+idAdministrador+" ";
  return querySql(query);
}
