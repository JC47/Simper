const db = require('../config/db');
const querySql = db.querySql;
const Promise = require("bluebird");


module.exports.addProyecto = function (data) {
    var query = "insert into proyecto set ? ";
    return querySql(query,data);
}

module.exports.deleteProyecto = function (id) {
    var userQuery = "delete from proyecto where idProyecto = ?";
    return querySql(userQuery, id);
}

module.exports.updateProyecto = function (data,id){
    queryUpdateProyecto = "update proyecto set ? where idProyecto = "+id+"";
    return querySql(queryUpdateProyecto, data);
}

module.exports.getProyectos = function (id) {
    var query = "select * from proyecto where Usuario_idUsuario = ?";
    return querySql(query,id);
}

module.exports.getProyectosActivos = function (idUsuario) {
  var query = "select proyectos from  usuario where idUsuario = "+idUsuario+" ";
  return querySql(query);
}

module.exports.getPs = function (idUsuario) {
  var query = "select * from proyecto where Usuario_idUsuario = ?";
  return querySql(query,idUsuario);
}

module.exports.setTerminado = function(idProyecto) {
  var query = "update proyecto set terminado=1 where idProyecto = "+idProyecto+"";
  return querySql(query);
}
