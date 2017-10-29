const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
//manejo de promises node.js
const Promise = require("bluebird");


module.exports.addProducto = function (data) {
    var queryAdmin = "insert into Producto set ? ";
    return querySql(queryAdmin,data);
}

module.exports.deleteProducto = function (id) {
    var userQuery = "delete from Producto where idProducto = ?";
    return querySql(userQuery, id);
}

module.exports.updateProducto = function (data,id){
    queryUpdateProd = "update Producto set ? where idProducto = "+id+"";
    return querySql(queryUpdateProd,data);
}

module.exports.getProductos = function () {
    var query = "select * from Producto";
    return querySql(query);
}

module.exports.getProductoById = function (id) {
  var query = "select * from producto where idProducto = ?";
  return query(query,id);
}
