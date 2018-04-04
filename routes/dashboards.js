const express = require('express');
const router = express.Router();
const config = require('../config/db');
const dashboard = require('../models/dashboard');
const Promise = require("bluebird");

//DESARROLLADOS
//productoszonademanda

router.post('/productoszonademandadesarrollados/', (req, res, next) => {
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;
  var idProyecto = req.body.Proyecto_idProyecto;
  var numeroPeriodo = req.body.numPeriodo;

  Promise.join(
    dashboard.getProductosZonaDemandaDesarrollados(numeroPeriodo,idUsuario,idProyecto),
    dashboard.getDistinctIdProductoDesarrollados(numeroPeriodo,idUsuario,idProyecto),
    dashboard.getProductosZonaDemandaDesarrolladosByIdProductoIdZona(numeroPeriodo,idUsuario,idProyecto),
    function(productoszonasdemandasdes,idsproductos,productoszonasdemandasdesidprod) {
      return jsonProductosZonasDemandasDesarollados(productoszonasdemandasdes,idsproductos,productoszonasdemandasdesidprod);
     })
  .then(function (rows) {
      res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

router.post('/productomaquinaria/', (req, res, next) => {
  var idProyecto = req.body.Proyecto_idProyecto;

  Promise.join(dashboard.getMaquinariaProyecto(idProyecto),dashboard.getDistinctIdProducto(idProyecto),
  function(maquinariasproyectos,idsproductos) {
      return jsonProductosMaquinarias(maquinariasproyectos,idsproductos);
     })
  .then(function (rows) {
      res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

function jsonProductosZonasDemandasDesarollados(productoszonasdemandasdes,idsproductos,productoszonasdemandasdesidprod) {
  var repIdZonasDes = [];//almacena las veces que se repite un idZona en productoszonasdemandas

  var i = 0;
  while (i<idsproductos.length) {
    var aux = 0;
    for (var j = 0; j < productoszonasdemandasdes.length; j++) {
      if (idsproductos[i].Producto_idProducto == productoszonasdemandasdes[j].Producto_idProducto) {
        aux = aux +1;
      }
    }
    repIdZonasDes.push(aux);
    i++;
  }

console.log("repIdZonasDes",repIdZonasDes);

var productosDes = []
var k = 0;

while (k < idsproductos.length) {
//  for (var i = 0; i < productoszonasdemandasdes.length; i++) {
  //  if (idsproductos[k].Producto_idProducto == productoszonasdemandasdes[i].Producto_idProducto) {
      var json = {
        "idProducto":idsproductos[k].Producto_idProducto,
        "color":idsproductos[k].color,
        "zonas":[]
      }
    productosDes.push(json);
    //}
  //}
  k++;
}
//console.log(productosDes);

var aux2 = 0;
for (var j = 0; j < repIdZonasDes.length; j++) {
  for (var k = 0; k < (repIdZonasDes[j]); k++) {
    var json = {
      "idZona":productoszonasdemandasdesidprod[aux2].Zona_idZonas,
      "demanda":productoszonasdemandasdes[aux2].cantidad
    }
    productosDes[j]['zonas'].push(json);
   aux2 = aux2 + 1;
  }
}
console.log(JSON.stringify(productosDes));
return productosDes;
}

//Proucto Maquinaria
function jsonProductosMaquinarias(maquinariasproyectos,idsproductos) {
  var repIdProductos = [];//almacena las veces que se repite un idZona en productoszonasdemandas

  var i = 0;
  while (i<idsproductos.length) {
    var aux = 0;
    for (var j = 0; j < maquinariasproyectos.length; j++) {
      if (idsproductos[i].Producto_idProducto == maquinariasproyectos[j].Producto_idProducto) {
        aux = aux +1;
      }
    }
    repIdProductos.push(aux);
    i++;
  }

//console.log(repIdProductos);


var maquinariaProd = []
var k = 0;

while (k < idsproductos.length) {
//  for (var i = 0; i < productoszonasdemandasdes.length; i++) {
  //  if (idsproductos[k].Producto_idProducto == productoszonasdemandasdes[i].Producto_idProducto) {
      var json = {
        "idProducto":idsproductos[k].Producto_idProducto,
        "color":idsproductos[k].color,
        "maquinas":[]
      }
    maquinariaProd.push(json);
    //}
  //}
  k++;
}
//console.log(maquinariaProd);


var aux2 = 0;
for (var j = 0; j < repIdProductos.length; j++) {
  for (var k = 0; k < (repIdProductos[j]); k++) {
    var json = {
      "idMaquinaria":maquinariasproyectos[aux2].Maquinaria_idMaquinaria,
      "cantidadProd":((maquinariasproyectos[aux2].cantidadProd)*(maquinariasproyectos[aux2].Cantidad))
    }
    maquinariaProd[j]['maquinas'].push(json);
   aux2 = aux2 + 1;
  }
}

return maquinariaProd;

}

module.exports = router;
