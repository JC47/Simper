const db = require('../config/db');
const querySql = db.querySql;

module.exports.deletePrestamo = function (id) {
    var userQuery = "delete from Prestamo where idPrestamos = ?";
    return querySql(userQuery, id);
}

module.exports.updatePrestamo = function (data,id){
    queryUpdateProd = "update Prestamo set ? where idPrestamos = "+id+"";
    return querySql(queryUpdateProd,data);
}

module.exports.getCredito = function () {
    var query = "select * from credito";
    return querySql(query);
}

module.exports.addCreditoBalance = function (json) {
  var query = "insert into creditobalance set ?";
  return querySql(query,json);
}

module.exports.addAmortizacion = function (numeroPeriodo,idProyecto,jsonAmortizacion) {
var count;
  for (var i = 1; i <= jsonAmortizacion.length; i++) {
    var numP = numeroPeriodo;
    count = numP + i;
    numP = count;
    var query = "insert into amortizacion set numeroPeriodo = "+numP+" ,Proyecto_idProyecto = "+idProyecto+" ,pagoCapital = "+jsonAmortizacion[i-1].pagoCapital+" ,intereses = "+jsonAmortizacion[i-1].interes+" ";
    console.log("NUMP : "+numP);
    querySql(query);
    numP = 0;
  }
  return console.log("Insertado");
}

module.exports.deleteCreditoBalance = function (idCredito,idProyecto,numeroPeriodo) {
    var query = "delete from creditobalance where credito_idCredito = "+idCredito+" and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" ";
    return querySql(query);
}
