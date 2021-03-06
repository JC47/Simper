const db = require('../config/db');
//módulos de la conexión
const querySql = db.querySql;
const Promise = require("bluebird");

//DESARROLLADOS
//productoszonademanda

module.exports.getProductosZonaDemandaDesarrollados = function (numeroPeriodo,idUsuario,idProyecto) {
  //var query = "select * from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and productozonaproyecto.desarrollado = 1 where demanda.numPeriodo = "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" ";
//var query = "select * from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and productozonaproyecto.desarrollado = 2 where demanda.numPeriodo = "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" ";
var query = "select * from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and demanda.numPeriodo = "+numeroPeriodo+" where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.desarrollado = 2 order by productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

module.exports.getDistinctIdProductoDesarrollados = function (numeroPeriodo,idUsuario,idProyecto) {
    //var query = "select distinct productozonaproyecto.Producto_idProducto from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and productozonaproyecto.desarrollado= 1 where demanda.numPeriodo = "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and Proyecto_idProyecto = "+idProyecto+" ";
    //var query = "select distinct productozonaproyecto.Producto_idProducto from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and productozonaproyecto.desarrollado = 2 where demanda.numPeriodo = "+numeroPeriodo+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and Proyecto_idProyecto = "+idProyecto+" ";
    // var query = "select distinct productozonaproyecto.Producto_idProducto from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and demanda.numPeriodo = "+numeroPeriodo+" where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.desarrollado = 2";
    var query = "select distinct productozonaproyecto.Producto_idProducto,producto.color from productozonaproyecto inner join demanda inner join producto on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and productozonaproyecto.Producto_idProducto = producto.idProducto and demanda.numPeriodo = "+numeroPeriodo+" where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.desarrollado = 2";
    return querySql(query);
}

module.exports.getProductosZonaDemandaDesarrolladosByIdProductoIdZona = function (numeroPeriodo,idUsuario,idProyecto) {
var query = "select productozonaproyecto.Producto_idProducto, productozonaproyecto.Zona_idZonas,demanda.cantidad from productozonaproyecto inner join demanda on productozonaproyecto.Producto_idProducto = demanda.Producto_idProducto and productozonaproyecto.Zona_idZonas = demanda.Zona_idZonas and demanda.numPeriodo = "+numeroPeriodo+" where productozonaproyecto.Proyecto_idProyecto = "+idProyecto+" and productozonaproyecto.Proyecto_Usuario_idUsuario = "+idUsuario+" and productozonaproyecto.numeroPeriodo <= "+numeroPeriodo+" and productozonaproyecto.desarrollado = 2 order by productozonaproyecto.Producto_idProducto, productozonaproyecto.Zona_idZonas";
  return querySql(query);
}

//ProductoMaquinaria

module.exports.getMaquinariaProyecto = function (idProyecto,numeroPeriodo) {
  var query = "select * from maquinariaproyecto inner join maquinaria on maquinariaproyecto.Maquinaria_idMaquinaria = maquinaria.idMaquinaria and maquinariaproyecto.Maquinaria_idProducto = maquinaria.Producto_idProducto where maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" and maquinariaproyecto.Balance_numeroPeriodo <= "+numeroPeriodo+" order by Maquinaria_idProducto ";
  return querySql(query);
}

module.exports.getDistinctIdProducto = function (idProyecto,numeroPeriodo) {
  //var query = "select distinct Producto_idProducto from maquinariaproyecto inner join maquinaria on maquinariaproyecto.Maquinaria_idMaquinaria = maquinaria.idMaquinaria and maquinariaproyecto.Maquinaria_idProducto = maquinaria.Producto_idProducto where maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" order by Producto_idProducto";
  var query = "select distinct maquinaria.Producto_idProducto,producto.color from maquinariaproyecto inner join maquinaria inner join producto on maquinariaproyecto.Maquinaria_idMaquinaria = maquinaria.idMaquinaria and maquinariaproyecto.Maquinaria_idProducto = maquinaria.Producto_idProducto and maquinariaproyecto.Maquinaria_idProducto = producto.idProducto where maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" and maquinariaproyecto.Balance_numeroPeriodo <= "+numeroPeriodo+" order by Producto_idProducto";
  return querySql(query);
}
