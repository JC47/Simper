const db = require('../config/db');
const querySql = db.querySql;

module.exports.addVariable = function(data){
  var sql = "insert into variable set ?";
  return querySql(sql,data);
}

module.exports.updateVariable = function(data,id){
  var sql = "update variable set ? where idVariable = "+id+"";
  return querySql(sql,data);
}

module.exports.getVariables = function(){
  var sql = "select * from variable";
  return querySql(sql);
}

module.exports.getIVA = function(){
  var sql = "select valor from variable where concepto = 'IVA'";
  return querySql(sql);
}

module.exports.getPTU = function(){
  var sql = "select valor from variable where concepto = 'PTU'";
  return querySql(sql);
}

module.exports.getISR = function(){
  var sql = "select valor from variable where concepto = 'ISR'";
  return querySql(sql);
}

module.exports.getClientes = function(){
  var sql = "select valor from variable where concepto = 'Clientes'";
  return querySql(sql);
}

module.exports.getProveedores = function(){
  var sql = "select valor from variable where concepto = 'Proveedores'";
  return querySql(sql);
}
