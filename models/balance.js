const db = require('../config/db');
const querySql = db.querySql;

module.exports.addBalance = function (data) {
  const sql = "insert into balance set ?";
  return querySql(sql,data);
}

module.exports.updateBalance = function (numeroPeriodo, idProyecto,data) {
  const sql = "update balance set ? where numeroPeriodo = "+numeroPeriodo+" and Proyectos_idProyecto = " +idProyecto+ " ";
  return querySql(sql, data);
}

module.exports.getBalances = function (idProyecto) {
  const sql = "select * from balance where Proyectos_idProyecto = ?";
  return querySql(sql,idProyecto);
}

module.exports.getBalanceById = function (idProyecto, numeroPeriodo) {
  const sql = "select * from balance where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+"";
  return querySql(sql);
}

module.exports.getActivos = function(idProyecto, numeroPeriodo){
  const sql = "select cajaBancos,cuentasPorCobrar,IVAAcreditable,almacenArtTerm,proveedores from balance where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+"";
  return querySql(sql);
}

module.exports.deleteBalanceR = function(idProyecto,pm,pMas){
  const sql = "delete from balance where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo > "+pm+" and numeroPeriodo <= "+pMas+"";
  return querySql(sql);
}

module.exports.getPasivos = function(idProyecto, numeroPeriodo){
  const sql = "select IVAPorEnterar,imptosPorPagar,prestamosMenosAnio,prestamosMasAnio from balance where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+"";
  return querySql(sql);
}

module.exports.getCS = function (idProyecto, numeroPeriodo) {
  const sql = "select capitalSocial from balance where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+"";
  return querySql(sql);
}

module.exports.getUltimo = function (idProyecto){
  const sql = "SELECT * FROM (SELECT MAX(numeroPeriodo) numeroPeriodo FROM balance WHERE balance.Proyectos_idProyecto = "+idProyecto+") balance";
  return querySql(sql);
}

module.exports.editTerminado = function(idProyecto) {
  var query = "update proyecto set terminado=0 where idProyecto = "+idProyecto+"";
  return querySql(query);
}

//Models rescate

module.exports.getRescate = function (idUsuario) {
  var query = "select minRescate,maxRescate from usuario where idUsuario = "+idUsuario+" ";
  return querySql(query);
}
