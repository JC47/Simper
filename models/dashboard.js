const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

//DESARROLLADOS
//productoszonademanda

module.exports.getProductosZonaDemandaDesarrollados = function (numeroPeriodo,idUsuario,idProyecto) {
  var query = "select * from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and productozonaproyecto.desarrollado = 1 where demanda.numPeriodo = "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

module.exports.getDistinctIdProductoDesarrollados = function (numeroPeriodo,idUsuario,idProyecto) {
    var query = "select distinct productozonaproyecto.Producto_idProducto from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and productozonaproyecto.desarrollado= 1 where demanda.numPeriodo = "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and Proyecto_idProyecto = "+idProyecto+" ";
    return querySql(query);
}
