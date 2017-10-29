const db = require('../config/db');
const querySql = db.querySql;

module.exports.getAuxiliar = function(numeroPeriodo,idProyecto){
  var sql = "select * from auxiliarcuenta where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" " ;
  return querySql(sql);
}

module.exports.setAuxiliar = function(numeroPeriodo,idProyecto,data){
  var sql = "update auxiliarcuenta set ? where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" " ;
  return querySql(sql,data);
}

module.exports.addAuxiliar = function(data){
  var sql = "insert into auxiliarcuenta set ?";
  return querySql(sql,data);
}

module.exports.AddAuxiliarVenta = function(data){
  var sql = "insert into auxiliarcuentaventa set ?";
  return querySql(sql,data);
}

module.exports.setAuxiliarVenta = function(numeroPeriodo,idProyecto,idProducto,data){
  var sql = "update auxiliarcuentaventa set ? where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" and Producto_idProducto = "+idProducto+" " ;
  return querySql(sql,data);
}

module.exports.getAuxiliarVenta = function(numeroPeriodo,idProyecto,idProducto){
  var sql = "select * from auxiliarcuentaventa where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" and Producto_idProducto = "+idProducto+" " ;
  return querySql(sql);
}

module.exports.getAuxiliaresVenta = function(numeroPeriodo,idProyecto){
  var sql = "select * from auxiliarcuentaventa where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" " ;
  return querySql(sql);
}
