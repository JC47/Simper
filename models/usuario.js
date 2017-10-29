const db = require('../config/db');
const querySql = db.querySql;
const bcrypt = require('bcryptjs');
const Promise = require("bluebird");


module.exports.addUsuario = function (data) {
  var sqlUsuario = "insert into Usuario set ? ";
  return querySql(sqlUsuario, data);
}

module.exports.deleteUsuario = function (id) {
    var userQuery = "delete from Usuario where idUsuario = ?";
    return querySql(userQuery, id);
}

module.exports.updateUsuario = function (data,id){
    var queryUpdate = "update Usuario set ? where idUsuario = "+id+"";
    return querySql(queryUpdate,data);
}

module.exports.getUsuarios = function () {
    var query = "select * from Usuario";
    return querySql(query);
}

module.exports.getProyectos = function () {
  var query = "select * from Proyecto";
  return querySql(query);
}

module.exports.getUsuarioById = function (id) {
    var userQuery = "select * from Usuario where idUsuario = ?";
    return querySql(userQuery, id);
}

module.exports.getUsuarioByUserName = function (username){
    var userQuery = "select * from Usuario where user = ?";
    return querySql(userQuery, username);
}

module.exports.addPeriodoCero = function (data,id){
  var sql = "update Usuario set ? where idUsuario = "+id+"";
  return querySql(sql,data);
}
