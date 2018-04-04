const db = require('../config/db');
const querySql = db.querySql;

module.exports.addMaquinariaComprada = function(data) {
    const sql = "insert into maquinariaproyecto set ?";
    return querySql(sql,data);
}

module.exports.getMaquinariasCompradas = function(idProyecto){
  const sql = "select * from maquinariaproyecto where Proyectos_idProyecto = ?";
  return querySql(sql,idProyecto);
}

module.exports.getMaquinariaComprada = function(idP,idM,nP){
  const sql = "select * from maquinariaproyecto where Proyectos_idProyecto = "+idP+" and Maquinaria_idMaquinaria = "+idM+" and Balance_numeroPeriodo = " +nP+"";
  return querySql(sql);
}

module.exports.deleteMaquinariaComprada = function(idProyecto, idMaquinaria,numeroPeriodo){
  const sql = "delete from maquinariaproyecto where Proyectos_idProyecto = "+ idProyecto+" and Maquinaria_idMaquinaria = " +idMaquinaria+" and Balance_numeroPeriodo = " +numeroPeriodo+ "";
  return querySql(sql);
}

module.exports.updateMaquinariaComprada = function(data){
  var idP = data.Proyectos_idProyecto;
  var idM = data.Maquinaria_idMaquinaria;
  const sql = "update maquinariaproyecto set ? where Proyectos_idProyecto = "+idP+" and Maquinaria_idMaquinaria = "+idM+"";
  return querySql(sql, data)
}

module.exports.getMaqMaqProyecto = function(idProyecto,numeroPeriodo) {
  var query = "select * from maquinaria inner join maquinariaproyecto on maquinaria.idMaquinaria = maquinariaproyecto.Maquinaria_idMaquinaria and maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" where maquinariaproyecto.Balance_numeroPeriodo <= "+numeroPeriodo+" order by idMaquinaria,Balance_numeroPeriodo ";
  return querySql(query);
}

module.exports.getIdMaqProyecto = function (idProyecto,numeroPeriodo) {
  var query = "select distinct(idMaquinaria) from maquinaria inner join maquinariaproyecto on maquinaria.idMaquinaria = maquinariaproyecto.Maquinaria_idMaquinaria and maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" where maquinariaproyecto.Balance_numeroPeriodo <= "+numeroPeriodo+" order by idMaquinaria";
  return querySql(query);
}

module.exports.getNombreMaqProd = function (idProyecto,numeroPeriodo) {
  //var query = "select distinct nombreMaq,Producto_idProducto,cantidadProd,costo,cantidadProd,depAcum from maquinaria inner join maquinariaproyecto on maquinaria.idMaquinaria = maquinariaproyecto.Maquinaria_idMaquinaria and maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" where maquinariaproyecto.Balance_numeroPeriodo <= "+numeroPeriodo+" ";
  var query = "select distinct Maquinaria_idMaquinaria,nombreMaq,Producto_idProducto,cantidadProd,costo,cantidadProd,depAcum from maquinaria inner join maquinariaproyecto on maquinaria.idMaquinaria = maquinariaproyecto.Maquinaria_idMaquinaria and maquinaria.Producto_idProducto = maquinariaproyecto.Maquinaria_idProducto and maquinariaproyecto.Proyectos_idProyecto = "+idProyecto+" where maquinariaproyecto.Balance_numeroPeriodo <= "+numeroPeriodo+" order by Maquinaria_idMaquinaria";
  return querySql(query);
}

module.exports.getMaquinaria = function () {
  var query = "select * from maquinaria order by idMaquinaria,Producto_idProducto;";
  return querySql(query);
}

module.exports.addMaquinariaProyecto = function (idProyecto,idMaquinaria,idProducto,cantidadValor,numeroPeriodo) {
  var queryMaqProy = "insert into maquinariaproyecto set Maquinaria_idMaquinaria = "+idMaquinaria+",Proyectos_idProyecto = "+idProyecto+",Cantidad = "+cantidadValor+",Maquinaria_idProducto = "+idProducto+",Balance_numeroPeriodo = " +numeroPeriodo+ "";
  return querySql(queryMaqProy);
}

module.exports.updateCantidad = function (idProyecto,idMaquinaria,numeroPeriodo,cantidad) {
  var queryMaqProy = "update maquinariaproyecto set Cantidad = "+cantidad+" where Maquinaria_idMaquinaria = "+idMaquinaria+" and Proyectos_idProyecto = "+idProyecto+" and Balance_numeroPeriodo = " +numeroPeriodo+ "";
  return querySql(queryMaqProy);
}

module.exports.getMaq = function(idMaquinaria){
  var query = "select cantidadProd from maquinaria where idMaquinaria = " +idMaquinaria+ "";
  return querySql(query);
}
