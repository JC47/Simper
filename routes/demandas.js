const express = require('express');
const router = express.Router();
const config = require('../config/db');
const demanda = require('../models/demanda');
const Promise = require("bluebird");

router.post('/register', (req, res, next) => {
  Promise.resolve()
  .then(function () {
       var idZona = req.body.idZona;
       var idProducto = req.body.idProducto;
       var periodos = req.body.periodos;
      return demanda.addZonaProducto(periodos,idZona,idProducto);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
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

router.post('/registerdemanda', (req, res, next) => {

  Promise.resolve()
  .then(function () {
    var idZona = req.body.idZona;
    var idProducto = req.body.idProducto;
    return demanda.getDemandaZona(idZona,idProducto);

  }).then(function (rows) {

    var numPeriodo = rows.length;
    var cantidad = req.body.cantidad;
    var idZona = req.body.idZona;
    var idProducto = req.body.idProducto;

    return demanda.addDemandaIndividual(numPeriodo,cantidad,idZona,idProducto);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
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

router.post('/modify', (req, res, next) => {
  Promise.resolve()
  .then(function () {

    var numPeriodo = req.body.numPeriodo;
    var cantidad = req.body.cantidad;
    var idZona = req.body.idZona;
    var idProducto = req.body.idProducto;

    return demanda.updateDemandaIndividual(numPeriodo,cantidad,idZona,idProducto);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
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

router.post('/delete', (req, res, next) => {
  Promise.resolve()
  .then(function () {
    var idProducto = req.body.idProducto;
    var idZona = req.body.idZona;
    return demanda.getDemandaZona(idZona,idProducto);
  })
  .then(function(rows){
    var numPeriodo = rows.length - 1;
    var idZona = req.body.idZona;
    var idProducto = req.body.idProducto;

    return demanda.deleteDemandaIndividual(numPeriodo,idZona,idProducto);

  }).then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
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

router.post('/getdemanda', (req, res, next) => {
  Promise.resolve()
  .then(function () {

    var numPeriodo = req.body.numPeriodo;
    var idZona = req.body.idZona;
    var idProducto = req.body.idProducto;

      return demanda.getDemandaById(numPeriodo,idZona,idProducto);
  })
  .then(function(rows){
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

router.get('/grafica', (req, res, next) => {
  Promise.join(demanda.getProductoZonaDemanda(),demanda.getIdZonasFromProductoZonaDemanda(),
  demanda.getZonas(),demanda.filterIdZonaIdProducto(),demanda.idProductoEnZona(), function(productozonademanda,idzonas,zonas,filter,idproductoenzona) {
      return jsonProductoZonaDemanda(productozonademanda,idzonas,zonas,filter,idproductoenzona);
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

function jsonProductoZonaDemanda(productozonademanda,idzonas,zonas,filter,idproductoenzona) {

  var repIdZonas = [];//almacena las veces que se repite un idZona en productozonasindes

  var i = 0;
  while (i<idzonas.length) {
    var aux = 0;
    for (var j = 0; j < filter.length; j++) {
      if (idzonas[i].Zona_idZonas == filter[j].Zona_idZonas) {
        aux = aux +1;
      }
    }
    repIdZonas.push(aux);
    i++;
  }
//console.log("repIdZonas: "+repIdZonas);

var zonaArray = []
var k = 0;

while (k < idzonas.length) {
  for (var i = 0; i < zonas.length; i++) {
    if (idzonas[k].Zona_idZonas == zonas[i].idZona) {
      var json = {
        "idZona":idzonas[k].Zona_idZonas,
        "nombreZona":zonas[i].nombreZona,
        "productos":[]
      }
    zonaArray.push(json);
    }
  }
  k++;
}
//console.log(zonaArray);

for(var i=0; i<productozonademanda.length; i++){
  console.log(productozonademanda[i]);
}

//productos insercion
var aux2 = 0;
for (var j = 0; j < repIdZonas.length; j++) {
  for (var k = 0; k < (repIdZonas[j]); k++) {
    var producto = {
      "idProducto":idproductoenzona[aux2].Producto_idProducto,
      "periodos":[]
    }
    zonaArray[j]['productos'].push(producto);
  //  zonaArray[j]['productos'][k]['periodos'].push('a');
   aux2 = aux2 + 1;
  }
}


//creamos periodos
var l = 0;
var repPeriodos = [];
 var periodosArray = [];

  while (l < filter.length) {
    var aux3 = 0;
    for (var j = 0; j < productozonademanda.length; j++) {
      if (filter[l].Zona_idZonas == productozonademanda[j].Zona_idZonas &&
         filter[l].Producto_idProducto == productozonademanda[j].Producto_idProducto) {
          aux3 = aux3 + 1;
        var json = {
          "numPeriodo":productozonademanda[j].numPeriodo,
          "cantidad":productozonademanda[j].cantidad
        }
        periodosArray.push(json);
      }
    }
    repPeriodos.push(aux3);
    l++;
  }

// console.log(repPeriodos);
//
//
// for (var i = 0; i < periodosArray.length; i++) {
//     console.log(periodosArray[i]);
// }


/*
//NO BORRAR
var aux4 = 0;
var repeticiones = [];
for (var i = 0; i < repPeriodos.length; i++) {
  var auxArray = [];
    for (var j = 0; j < (repPeriodos[i]); j++) {
    auxArray.push(periodosArray[aux4]);
      aux4 = aux4 + 1;
    }
    repeticiones.push(auxArray);
}
*/



//
// console.log("repeticiones.length: "+repeticiones.length);
//
// for (var i = 0; i < repeticiones.length; i++) {
//   console.log(repeticiones[i]);
// }

/*
//NO BORRAR
var aux5 = 0;
for (var j = 0; j < repIdZonas.length; j++) {
  for (var k = 0; k < (repIdZonas[j]); k++) {

    zonaArray[j]['productos'][k]['periodos'].push(repeticiones[aux5]);
aux5 = aux5 + 1;
  }
}
*/
var aux5 = 0;//aux5 cuenta hasta 3
var aux6 = 0;//aux6 cuenta hasta 4

for (var j = 0; j < repIdZonas.length; j++) {//numero de idZona en el json: 2
  for (var k = 0; k < (repIdZonas[j]); k++) {//numero de idProductos dentro de productos: 1,2. El de arriba es su tam
    for (var l = 0; l < repPeriodos[aux5]; l++) {//1,2,1. aux5 sirve para barrer el arreglo de repeticiones de periodos
/*
hacemos un for con 1,2,1
que barra:
  0,
  0,1
  0
con: 1,2,1
*/
      zonaArray[j]['productos'][k]['periodos'].push(periodosArray[aux6]);
      aux6=aux6+1;
    }
      aux5 = aux5 + 1;
  }
}

return zonaArray;
}



module.exports = router;
