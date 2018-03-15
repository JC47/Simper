const db = require('../config/db');
const querySql = db.querySql;

module.exports.addNotificacion = function(data) {
    const sql = "insert into notificacion set ?";
    return querySql(sql,data);
}

module.exports.getNotificaciones = function(idProyecto){
  const sql = "select * from notificacion where Balance_Proyectos_idProyecto = ?";
  return querySql(sql,idProyecto);
}

module.exports.deleteNotificaciones = function(idProyecto){
  const sql = "delete from notificacion where Balance_Proyectos_idProyecto = ?";
  return querySql(sql, idProyecto);
}
