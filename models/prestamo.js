const db = require('../config/db');
const querySql = db.querySql;

module.exports.deletePrestamo = function (id) {
    var userQuery = "delete from prestamo where idPrestamos = ?";
    return querySql(userQuery, id);
}

module.exports.updatePrestamo = function (data,id){
    queryUpdateProd = "update prestamo set ? where idPrestamos = "+id+"";
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

module.exports.eliminarAmortizacion = function(idCredito,idProyecto,numeroPeriodo){
  var query = "delete from amortizacion where Proyecto_idProyecto = " +idProyecto+" and idCredito = " +idCredito+ " and numeroPeriodo > "+numeroPeriodo+" ";
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

module.exports.returnActivos = function(idProyecto) {
  var query = "select idCredito,numeroPeriodo from creditoactivo where idProyecto = "+idProyecto+" and activo = 1 ";
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
//obtenemos cuanto dura el préstamo que se pidió
module.exports.plazoCredito = function (idCredito) {
  var query = "select count(idCredito) as plazocredito from pagocredito where idCredito = "+idCredito+" ";
  return querySql(query);
}

//agregamos el credito seleccionado a una tabla que registra los créditos que tenemos
module.exports.addCreditoActivo = function (json) {
  //console.log("CREDITO ACTIVO");
  var query = "insert into creditoactivo set ? ";
  return querySql(query,json);
}

module.exports.addCreditoActivoMul = function (arrayfaltantes) {
  //console.log("CREDITO ACTIVO");
  for (var i = 0; i < arrayfaltantes.length; i++) {

    var json = {
      "idCredito":arrayfaltantes[i].idCredito,
      "idProyecto":arrayfaltantes[i].idProyecto,
      "numeroPeriodo":arrayfaltantes[i].numeroPeriodo,
      "plazo":arrayfaltantes[i].plazo
    }

    var query = "insert into creditoactivo set ?";
    querySql(query,json);
  }
return console.log("addCreditoActivoMul");
}

//actualiza los valores de creditoactivo
module.exports.updateCreditoActivo = function (json, idCredito, idProyecto) {
  var query = "update creditoactivo set ? where idCredito = "+idCredito+" and idProyecto = "+idProyecto+" ";
  return querySql(query,json);
}

//borra los valores de creditoactivo
module.exports.deleteCreditoActivo = function (idCredito,idProyecto) {
  console.log("DELETE CREDITO ACTIVO");
  var query = "delete from creditoactivo where idCredito = "+idCredito+" and idProyecto = "+idProyecto+" ";
  return querySql(query);
}

//borra los valores de creditoactivo para un periodo específico
module.exports.deleteCreditoActivoNumP = function (idCredito,idProyecto,numeroPeriodo) {
  var query = "delete from creditoactivo where idCredito = "+idCredito+" and idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" ";
  return querySql(query);
}

//VALIDA NUMERO DE CREDITOS ACTIVOS EN LOS PERIODOS
//numero de creditos activos por Proyecto_idProyecto
module.exports.getCreditosActivos = function (idProyecto,numeroPeriodo) {
  var query = "select count(distinct idCredito) as creditosactivos from creditoactivo where idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" and plazo !=0 ";
  return querySql(query);
}

module.exports.getIdCreditosActivos = function (idProyecto,numeroPeriodo) {
  var query = "select * from creditoactivo where idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" and plazo !=0 ";
  return querySql(query);
}

//VALIDA LOS DESCUENTOS DEL PLAZO DE CADA CRÉDITO QUE SE REALIZA EN CADA PERIODO
//VALIDA QUÉ CRÉDITOS ESTÁN ACTIVOS EN LA REGRESIÓN

module.exports.getCreditoActivo = function (idProyecto) {
  var query = "select * from creditoactivo where idProyecto = "+idProyecto+" ";
  return querySql(query);
}
//Regresa una tabla con los registros de los creditos activos y sus respectivos numeros de periodos que han sido saldados
module.exports.getCreditoActivoByNumeroPeriodo = function (idProyecto,numeroPeriodo) {
  //var query = "select * from creditoactivo where idProyecto = "+idProyecto+" ";
  var query = "select * from creditoactivo where idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" ";
  return querySql(query);

}
//Regresa especificamente el creditoactivo que está en el número de periodo que se pide
module.exports.getCreditoActivoRegresion = function (idProyecto,numeroPeriodo) {
  var query = "select * from creditoactivo where idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" order by numeroPeriodo";
  return querySql(query);
}
//Obtiene los idscreditos que estuvieron activosa partir del periodo donde se ha hecho la petición de regresión hacia atrás
module.exports.getIdsCreditoActivoRegresion = function (idProyecto,numeroPeriodo) {
  var query = "select distinct idCredito from creditoactivo where idProyecto = "+idProyecto+" and numeroPeriodo = "+numeroPeriodo+" and plazo!=0 ";
  return querySql(query);
}

module.exports.getIdCreditoPlazo = function () {
  var query = "select idCredito, plazo from credito";
  return querySql(query);
}

module.exports.getIdsCredito = function (idProyecto, numeroPeriodo) {
  var query = "select distinct idCredito from creditoactivo where idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" ";
  return querySql(query);
}

module.exports.deteleCreditoActivo = function (idCredito,idProyecto) {
  var query = "delete from creditoactivo where idCredito = "+idCredito+" and idProyecto = "+idProyecto+" ";
  return querySql(query);
}

//Regresion Creditos Activos por periodo

module.exports.getCreditosActivoPorPeriodo = function (idProyecto,numeroPeriodo) {
  //var query = "select distinct idCredito from creditoactivo where not (idCredito) in (select idCredito from creditoactivo where plazo=0 and idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" ) and idProyecto = "+idProyecto+" and numeroPeriodo <= "+numeroPeriodo+" ";
  var query = "select * from creditoactivo where (idCredito,plazo) in (select idCredito,plazo from credito) and idProyecto = "+idProyecto+" and numeroPeriodo<="+numeroPeriodo+" order by numeroPeriodo";
  return querySql(query);
}

module.exports.getCreditosTerminados = function (idProyecto,numeroPeriodo) {
  var query = "select idCredito,idProyecto,numeroPeriodo,plazo from creditoactivo where plazo=0 and numeroPeriodo <= "+numeroPeriodo+" and idProyecto = "+idProyecto+" ";
  return querySql(query);
}
