const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
//manejo de promises node.js
const Promise = require("bluebird");


module.exports.addAdmin = function (data) {
    var queryAdmin = "insert into Administrador set ? ";
    return querySql(queryAdmin,data);
}

module.exports.deleteAdministrador = function (id) {
    var userQuery = "delete from Administrador where idAdministrador = ?";
    return querySql(userQuery, id);
}

module.exports.updateAdministrador = function (data,id){
    queryUpdateProd = "update Administrador set ? where idAdministrador = "+id+"";
    return querySql(queryUpdateProd,data);
}

module.exports.getAdministradores = function () {
    var query = "select * from Administrador";
    return querySql(query);
}

module.exports.getAdminById = function (id) {
    var userQuery = "select * from Administrador where idAdministrador = ?";
    return querySql(userQuery, id);
}

module.exports.getAdminByUserName = function (username){
    var userQuery = "select * from Administrador where user = ?";
    return querySql(userQuery, username);
}
