const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;

module.exports.addDemanda = function (ultimoIdZona,idsProducto) {
  for (var i = 0; i < idsProducto.length; i++) {
    var queryDemanda = "insert into Demanda (Zona_idZonas,Producto_idProducto) values ("+ultimoIdZona+","+idsProducto[i]+") ";
    querySql(queryDemanda);
  }
return console.log("Se ha insertado");
}

module.exports.addZonaProducto = function (periodos,idZona,idProducto){
  for (var i = 0; i < periodos.length; i++) {
    //console.log("periodos[i].numero"+periodos[i].numero);
    queryUpdateDemanda = "insert into Demanda (numPeriodo,cantidad,Zona_idZonas,Producto_idProducto) values ("+periodos[i].numero+","+periodos[i].cantidad+","+idZona+","+idProducto+")";
    querySql(queryUpdateDemanda);
  }
    return console.log("Se ha actualizado");
}

module.exports.getDemanda = function(){
  var queryDemanda = "select * from Demanda";
  return querySql(queryDemanda);
}

module.exports.getDemandaZona = function(idZona,idProducto){
  var query = "select * from Demanda where Zona_idZonas = "+idZona+" and Producto_idProducto = " + idProducto +" ";
  return querySql(query);
}

module.exports.idsZonaFromDemanda = function (rows) {
    queryDemanda = "select distinct Zona_idZonas from demanda";
    return querySql(queryDemanda);
}

module.exports.ciclosPorIdZona = function (rows) {
var ciclos = [];
  for (var i = 0; i < rows.length; i++) {
    queryDemanda = "select Max(Producto_idProducto) as ciclos from demanda where Zona_idZonas = "+rows[i].Zona_idZonas+" ";
    ciclos.push(querySql(queryDemanda));
  }
return ciclos;
}

module.exports.addDemandaIndividual = function (numPeriodo,cantidad,idZona,idProducto) {
  var query = "insert into Demanda (numPeriodo,cantidad,Zona_idZonas,Producto_idProducto) values ("+numPeriodo+","+cantidad+","+idZona+","+idProducto+")";
  return querySql(query);
}

module.exports.updateDemandaIndividual = function (numPeriodo,cantidad,idZona,idProducto) {
  var query = "update Demanda set cantidad = "+cantidad+"  where numPeriodo = "+numPeriodo+" and Zona_idZonas = "+idZona+" and Producto_idProducto = "+idProducto+" ";
  return querySql(query);
}

module.exports.deleteDemandaIndividual = function (numPeriodo,idZona,idProducto) {
  var query = "delete from Demanda where numPeriodo = "+numPeriodo+" and Zona_idZonas = "+idZona+" and Producto_idProducto = "+idProducto+" ";
  return querySql(query);
}

//demanda

module.exports.getDemandaById = function (numPeriodo,idZona,idProducto) {
  var query = "select cantidad from demanda where numPeriodo = "+numPeriodo+" and Zona_idZonas = "+idZona+" and Producto_idProducto = "+idProducto+" ";
  return querySql(query);
}

//graficas

module.exports.getProductoZonaDemanda = function () {
  var query = "select * from demanda inner join productozona where demanda.Zona_idZonas = productozona.Zona_idZona and demanda.Producto_idProducto = productozona.Producto_idProducto";
  return querySql(query);
}

module.exports.getZonas = function () {
  var query = "select * from zona;";
  return querySql(query);
}

module.exports.getIdZonasFromProductoZonaDemanda = function () {
  var query = "select distinct(Zona_idZonas) from demanda inner join productozona where demanda.Zona_idZonas = productozona.Zona_idZona and demanda.Producto_idProducto = productozona.Producto_idProducto  order by Zona_idZonas";
  return querySql(query);
}

module.exports.filterIdZonaIdProducto = function () {
  var query = "select distinct demanda.Zona_idZonas,demanda.Producto_idProducto from demanda inner join productozona where demanda.Zona_idZonas = productozona.Zona_idZona and demanda.Producto_idProducto = productozona.Producto_idProducto order by demanda.Zona_idZonas";
  return querySql(query);
}

module.exports.idProductoEnZona = function () {
  var query = "select distinct demanda.Zona_idZonas,demanda.Producto_idProducto,producto.color from demanda inner join producto on demanda.Producto_idProducto = producto.idProducto order by demanda.Zona_idZonas";
  return querySql(query);
}
