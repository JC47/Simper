const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
//manejo de promises node.js
const Promise = require("bluebird");


module.exports.addMaquinaria = function (data) {
    var query = "insert into Maquinaria set ? ";
    return querySql(query,data);
}

module.exports.deleteMaquinaria = function (id) {
    var userQuery = "delete from Maquinaria where idMaquinaria = ?";
    return querySql(userQuery, id);
}

module.exports.updateMaquinaria = function (data,id){
    queryUpdateMaq = "update Maquinaria set ? where idMaquinaria = "+id+"";
    return querySql(queryUpdateMaq,data);
}

module.exports.getMaquinarias = function () {
    var query = "select * from Maquinaria";
    return querySql(query);
}

module.exports.getMaquinariasParaComprar = function(idProyecto){
  var query = "select * from maquinaria where maquinaria.idMaquinaria not in (select Maquinaria_idMaquinaria from maquinariaproyecto where maquinariaproyecto.Balance_numeroPeriodo = 0 and maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" )";
  return querySql(query);
}
