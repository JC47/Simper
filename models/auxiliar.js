const db = require('../config/db');
const querySql = db.querySql;

module.exports.getAuxiliar = function(numeroPeriodo,idProyecto,idProducto){
  var sql = "select * from auxiliarcuenta where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" and Producto_idProducto = "+idProducto+" " ;
  return querySql(sql);
}

module.exports.getAuxiliares = function(numeroPeriodo,idProyecto){
  var sql = "select * from auxiliarcuenta where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" " ;
  return querySql(sql);
}

module.exports.setAuxiliar = function(numeroPeriodo,idProyecto,idProducto,data){
  var sql = "update auxiliarcuenta set ? where Balance_numeroPeriodo = "+numeroPeriodo+ " and Proyectos_idProyecto = "+idProyecto+" and Producto_idProducto = "+idProducto+" " ;
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

module.exports.getEquilibrio = function(idProyecto,numeroPeriodo) {
  var sql = "select costosMPPUniProd,unidadesVendidas,costosFijosFabri,costoVarUniFabri,gastosFijosDist,costoVarUniDist,gastosFijosAdmon,costoTransformacionMaq,VentasPorCobrar,VentasCobradas,IVAxVentas from auxiliarcuentaventa inner join producto on auxiliarcuentaventa.Producto_idProducto = producto.idProducto where auxiliarcuentaventa.Balance_numeroPeriodo = " +numeroPeriodo+ " and auxiliarcuentaventa.Proyectos_idProyecto = "+idProyecto+"";
  return querySql(sql);
}

module.exports.getDepMaq = function(idProyecto,numeroPeriodo) {
  var sql = "select maqEquipo from balance where numeroPeriodo = " +numeroPeriodo+" and Proyectos_idProyecto = " +idProyecto+ "";
  return querySql(sql);
}
