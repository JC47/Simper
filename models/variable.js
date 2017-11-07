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
