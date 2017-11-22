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

module.exports.addCreditoBalance = function (json) {
  var query = "insert into creditobalance set ?";
  return querySql(query,json);
}

//CRUD credito
module.exports.addCredito = function (json) {
  var query = "insert into credito set ? ";
  return querySql(query,json);
}

module.exports.getLastIdCredito = function () {
  var query = "select max(idCredito) as idCredito from credito";
  return querySql(query);
}

module.exports.addPagoCredito = function (lastIdCredito,pagosCredito) {
  for (var i = 0; i < pagosCredito.length; i++) {
    //var query = "insert into pagocredito set idCredito = "+lastIdCredito+", pagosCredito = "+pagosCredito[i]+" ";
    querySql("insert into pagocredito set idCredito = "+lastIdCredito+", pagosCredito = "+pagosCredito[i].pago+" ");
  }
  return console.log("Insertado pagocredito");
}

module.exports.deleteCredito = function (idCredito) {
  var query = "delete from credito where idCredito = "+idCredito+" ";
  return querySql(query);
}

module.exports.updateCredito = function (json,idCredito) {
  //var idCredito = json.idCredito;
  var query = "update credito set ? where idCredito = "+idCredito+" ";
  return querySql(query,json);
}

module.exports.updatePagoCredito = function (idCredito,pagosTotales) {
  for (var i = 0; i < pagosTotales.length; i++) {
    var query = "update pagocredito set pagosCredito = "+pagosTotales[i].pagosCredito+" where idPagoCredito = "+pagosTotales[i].idPagoCredito+" and idCredito = "+idCredito+" ";
    querySql(query);
  }
  return console.log("Update PagoCredito");
}

//Objeto de préstamos con periodos de préstamo
module.exports.getCredito = function () {
    var query = "select * from credito";
    return querySql(query);
}

module.exports.distinctIdCredito = function () {
  var query = "select idCredito from credito";
  return querySql(query);
}

module.exports.getPagoCredito = function () {
  var query = "select * from pagocredito";
  return querySql(query);
}

//Inserta en amortizacion y creditobalance

module.exports.getPagoAnticipado = function (idCredito) {
  var query = "select pagoAnticipado,tipo from credito where idCredito = "+idCredito+" ";
  return querySql(query);
}

module.exports.getPagosCredito = function (idCredito) {
  var query = "select pagosCredito from pagocredito where idCredito = "+idCredito+" ";
  return querySql(query);
}

module.exports.addAmortizacion = function (numeroPeriodo,idProyecto,idCredito,json) {
var count;
  for (var i = 1; i <= json.length; i++) {
    var numP = numeroPeriodo;
    count = numP + i;
    numP = count;
    //var query = "insert into amortizacion set numeroPeriodo = "+numP+" ,Proyecto_idProyecto = "+idProyecto+", idCredito = "+idCredito+", pagoCapital = "+json[i-1].pagoCapital+" ,intereses = "+json[i-1].interes+" ";
    //console.log("NUMP : "+numP);
    querySql("insert into amortizacion set numeroPeriodo = "+numP+" ,Proyecto_idProyecto = "+idProyecto+", idCredito = "+idCredito+", pagoCapital = "+json[i-1].pagoCapital+" ,intereses = "+json[i-1].interes+"");
    numP = 0;
  }
  return console.log("Insertado");
}

module.exports.deleteCreditoBalance = function (idCredito,idProyecto,numeroPeriodo) {
    var query = "delete from creditobalance where credito_idCredito = "+idCredito+" and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" ";
    return querySql(query);
}

//ver amortizacion

module.exports.getMonto = function (idCredito,idProyecto,numPeriodo) {
  var query = "select monto from creditobalance where credito_idCredito = "+idCredito+" and Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numPeriodo+" ";
  return querySql(query);
}

module.exports.eliminarAmortizacion = function(idCredito,idProyecto){
  var query = "delete from amortizacion where Proyecto_idProyecto = " +idProyecto+" and idCredito = " +idCredito+ " ";
  return querySql(query);
}

module.exports.getFinanciamientos = function(idProyecto,numeroPeriodo){
  var query = "select monto,anticipo,plazo,nombreCredito,numeroPeriodo,tipo from creditobalance inner join credito on creditobalance.credito_idCredito = credito.idCredito and numeroPeriodo = "+numeroPeriodo+" and Proyectos_idProyecto = "+idProyecto+"";
  return querySql(query);
}

module.exports.getFinanEspecifico = function(idProyecto,numeroPeriodo,idCredito){
  var query = "select  * from creditobalance where numeroPeriodo = "+numeroPeriodo+" and Proyectos_idProyecto = "+idProyecto+" and credito_idCredito = " +idCredito+ "";
  return querySql(query);
}

module.exports.updateCreditoBalance = function(json,idProyecto,numeroPeriodo,idCredito){
  var query = "update creditobalance set ? where numeroPeriodo = "+numeroPeriodo+" and Proyectos_idProyecto = "+idProyecto+" and credito_idCredito = " +idCredito+ "";
  return querySql(query,json)
}

module.exports.getPagos = function(idProyecto,numeroPeriodo){
  var query = "select numeroPeriodo,pagoCapital,intereses,plazo,tipo from amortizacion inner join credito on amortizacion.idCredito = credito.idCredito and Proyecto_idProyecto = " +idProyecto+" and numeroPeriodo = " +numeroPeriodo+ "";
  return querySql(query);
}

module.exports.getAmortizacion = function(idProyecto,idCredito){
  var query = "select * from amortizacion where Proyecto_idProyecto = " +idProyecto+ " and idCredito = " +idCredito+"";
  return querySql(query);
}

module.exports.getCreditosBalance = function(idProyecto){
  var query = "select * from creditobalance where Proyectos_idProyecto = " +idProyecto+ "";
  return querySql(query);
}

//valida 2 creditos por proyecto

//si el resultado es 2 no se le permitirá pedir más créditos
//filtro 1
module.exports.limiteCreditos1 = function (idProyecto,numeroPeriodo) {
  var query = "select count(*) as limiteCredito1 from creditobalance  where Proyectos_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

//valida 2 creditos por proyecto

//si el resultado es 2 no se le permitirá pedir más créditos
//filtro 2
module.exports.limiteCreditos2 = function (idProyecto,numeroPeriodo) {
  var query = "select count(*) as limiteCredito2 from amortizacion  where Proyecto_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

//Devolverá el idCredito de los creditos activos

module.exports.creditosActivos = function (idProyecto,numPeriodo) {
  var query = "select idCredito from amortizacion where Proyecto_idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}
