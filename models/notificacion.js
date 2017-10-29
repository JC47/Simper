const db = require('../config/db');
const querySql = db.querySql;

module.exports.addNotificacion = function(data) {
    const sql = "insert into Notificacion set ?";
    return querySql(sql,data);
}

module.exports.getNotificaciones = function(idProyecto){
  const sql = "select * from Notificacion where Balance_Proyectos_idProyecto = ?";
  return querySql(sql,idProyecto);
}

module.exports.deleteNotificaciones = function(idProyecto){
  const sql = "delete from Notificacion where Balance_Proyectos_idProyecto = ?";
  return querySql(sql, idProyecto);
}
