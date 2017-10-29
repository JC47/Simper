const db = require('../config/db');
const querySql = db.querySql;
const Promise = require("bluebird");


module.exports.addZona = function (nombreZona) {
//  console.log("nombreZona: "+nombreZona);
    var queryZona = "insert into Zona set nombreZona = ? ";
  //  console.log(querySql(queryZona,nombreZona));
    return querySql(queryZona,nombreZona);
}

module.exports.agregarProducto = function (data) {
    var queryZona = "insert into productozona set ?";
    return querySql(queryZona,data);
}
module.exports.addDemandaIndividual = function (data) {
  var sql = "insert into demanda set ?";
  return querySql(sql,data);
}

module.exports.deleteZona = function (id) {
    var userQuery = "delete from Zona where idZona = ?";
    return querySql(userQuery, id);
}

module.exports.updateZona = function (data,id){
    queryUpdateProd = "update Zona set ? where idZona = "+id+"";
    return querySql(queryUpdateProd,data);
}

module.exports.getZonas = function () {
    var query = "select * from Zona";
    return querySql(query);
}

module.exports.productoPeriodoZona = function (idZona) {
   var queryPPZ = "select numPeriodo,cantidad,Producto_idProducto from demanda where Zona_idZonas = "+idZona+" ";
   return querySql(queryPPZ);
 }

 module.exports.addProductoZona = function (ultimoIdZona,productos) {
    for (var i = 0; i < productos.length; i++) {
      var query = "insert into productozona (Zona_idZona,Producto_idProducto,costoDes,tiempoDes) values ("+ultimoIdZona+","+productos[i].Producto_idProducto+","+productos[i].costoDes+","+productos[i].tiempoDes+") ";
      querySql(query);
    }
    return console.log("se ha insertado en productozona");
 }

 module.exports.addDemanda = function (ultimoIdZona,productos) {
   for (var i = 0; i < productos.length; i++) {
     var queryDemanda = "insert into Demanda (Zona_idZonas,Producto_idProducto) values ("+ultimoIdZona+","+productos[i].Producto_idProducto+") ";
     querySql(queryDemanda);
   }
 return console.log("Se ha insertado");
 }

module.exports.getIdsAllZona = function () {
  var query = "select idZona from zona";
  return querySql(query);
}

// module.exports.getZonaProductoById = function (id) {
//   var query = "select * from productozona inner join zona where productozona.Zona_idZona = zona.idZona and Zona_idZona = "+id+" ";
//   return querySql(query,id);
// }

module.exports.deleteZonaProducto = function (idZona,idProducto){
    var query = "delete from productozona where Zona_idZona = " + idZona +" and Producto_idProducto = " + idProducto+"";
    return querySql(query);
}

module.exports.getZonaProducto = function () {
  var query = "select * from productozona inner join zona where productozona.Zona_idZona = zona.idZona";
  return querySql(query);
}

module.exports.filterIdZonaFromProductoZona = function () {
  var query = "select distinct(Zona_idZona) from productozona inner join zona where productozona.Zona_idZona = zona.idZona";
  return querySql(query);
}

module.exports.filterZonasByDistinctProductoZona = function () {
  var query = "select * from zona where idZona in (select distinct(Zona_idZona) from productozona)";
  return querySql(query);
}

module.exports.updateNombreZona = function (idZona,json) {
  console.log("idZona: "+idZona);
  var query = "update zona set ? where idZona = "+idZona+" ";
  //console.log(querySql(query));
  return querySql(query,json);
}

module.exports.updateProductoZona = function (idZona,idProducto,costoDes,tiempoDes) {
  var query = "update productozona set costoDes = "+costoDes+", tiempoDes = "+tiempoDes+" where Zona_idZona = "+idZona+" and Producto_idProducto = "+idProducto+" ";
  return querySql(query);
}




 //select numPeriodo,cantidad,Producto_idProducto from demanda where Zona_idZonas =
