const db = require('../config/db');
const querySql = db.querySql;
const Promise = require("bluebird");


module.exports.addProyecto = function (data) {
    var query = "insert into Proyecto set ? ";
    return querySql(query,data);
}

module.exports.deleteProyecto = function (id) {
    var userQuery = "delete from Proyecto where idProyecto = ?";
    return querySql(userQuery, id);
}

module.exports.updateProyecto = function (data,id){
    queryUpdateProyecto = "update Proyecto set ? where idProyecto = "+id+"";
    return querySql(queryUpdateProyecto, data);
}

module.exports.getProyectos = function (id) {
    var query = "select * from Proyecto where Usuario_idUsuario = ?";
    return querySql(query,id);
}
