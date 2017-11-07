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

  Promise.join(dashboard.getProductosZonaDemandaDesarrollados(numeroPeriodo,idUsuario,idProyecto),
  dashboard.getDistinctIdProductoDesarrollados(numeroPeriodo,idUsuario,idProyecto),function(productoszonasdemandasdes,idsproductos) {
      return jsonProductosZonasDemandasDesarollados(productoszonasdemandasdes,idsproductos);
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

//PRODUCTOS EN DESARROLLO

function jsonProductosEnDesarrollo(productosendes, idszonasendes,zonas, productosendesenzona) {
  var repIdProductosEnDes = [];//almacena las veces que se repite un idZona en productosdes

  var i = 0;
  while (i<idszonasendes.length) {
    var aux = 0;
    for (var j = 0; j < productosendes.length; j++) {
      if (idszonasendes[i].Zona_idZonas == productosendes[j].Zona_idZonas) {
        aux = aux +1;
      }
    }
    repIdProductosEnDes.push(aux);
    i++;
  }

//console.log(repIdProductosDes);

var productosEnDes = []
var k = 0;

while (k < idszonasendes.length) {
  for (var i = 0; i < zonas.length; i++) {
    if (idszonasendes[k].Zona_idZonas == zonas[i].idZona) {
      var json = {
        "idZona":idszonasendes[k].Zona_idZonas,
        "nombreZona":zonas[i].nombreZona,
        "productosEnDes":[]
      }
    productosEnDes.push(json);
    }
  }
  k++;
}
//console.log(productosDes);

var aux2 = 0;
for (var j = 0; j < repIdProductosEnDes.length; j++) {
  for (var k = 0; k < (repIdProductosEnDes[j]); k++) {
    var json = {
      "idProducto":productosendesenzona[aux2].Producto_idProducto,
      "ultimoPeriodoDes":productosendesenzona[aux2].ultimoPeriodoDes
    }
    productosEnDes[j]['productosEnDes'].push(json);
   aux2 = aux2 + 1;
  }
}
//console.log(productosDes);
  return productosEnDes;
}

function jsonProductosZonasDemandasDesarollados(productoszonasdemandasdes,idsproductos) {
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

console.log(repIdZonasDes);
return console.log("ok");
}

module.exports = router;
