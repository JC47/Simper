const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
//manejo de promises node.js
const Promise = require("bluebird");


module.exports.addProducto = function (data) {
    var queryAdmin = "insert into producto set ? ";
    return querySql(queryAdmin,data);
}

module.exports.deleteProducto = function (id) {
    var userQuery = "delete from producto where idProducto = ?";
    return querySql(userQuery, id);
}

module.exports.updateProducto = function (data,id){
    queryUpdateProd = "update producto set ? where idProducto = "+id+"";
    return querySql(queryUpdateProd,data);
}

module.exports.getProductos = function () {
    var query = "select * from producto";
    return querySql(query);
}

module.exports.getProductoById = function (id) {
  var query = "select * from producto where idProducto = ?";
  return query(query,id);
}
