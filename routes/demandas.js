const express = require('express');
const router = express.Router();
const config = require('../config/db');
const demanda = require('../models/demanda');
const Promise = require("bluebird");

const zonaArray = [];
const repIdZonas = [];//almacena las veces que se repite un idZona en productozonasindes
const repPeriodos = [];
const periodosArray = [];

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
  Promise.join(
    demanda.getProductoZonaDemanda(),
    demanda.getIdZonasFromProductoZonaDemanda(),
    demanda.getZonas(),
    demanda.filterIdZonaIdProducto(),
    demanda.idProductoEnZona(),
    function(productozonademanda,idzonas,zonas,filter,idproductoenzona) {
      return jsonProductoZonaDemanda(productozonademanda,idzonas,zonas,filter,idproductoenzona);
     })
  .then(function (rows) {
      res.json({success: true, datos:rows, msg:"Operacion exitosa"});
      repIdZonas.length=0;
      repPeriodos.length=0;
      periodosArray.length=0;
      zonaArray.length=0;
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

// for(var i=0; i<productozonademanda.length; i++){
//   console.log(productozonademanda[i]);
// }
//console.log("idproductoenzona: ",idproductoenzona);
//productos insercion
var aux2 = 0;
for (var j = 0; j < repIdZonas.length; j++) {
  for (var k = 0; k < (repIdZonas[j]); k++) {
    var producto = {
      "idProducto":idproductoenzona[aux2].Producto_idProducto,
      "color":idproductoenzona[aux2].color,
      "periodos":[]
    }
    zonaArray[j]['productos'].push(producto);
  //  zonaArray[j]['productos'][k]['periodos'].push('a');
   aux2 = aux2 + 1;
  }
}


//creamos periodos
var m = 0;


  while (m < filter.length) {
    var aux3 = 0;
    for (var n = 0; n < productozonademanda.length; n++) {
      if (filter[m].Zona_idZonas == productozonademanda[n].Zona_idZonas &&
         filter[m].Producto_idProducto == productozonademanda[n].Producto_idProducto) {
          aux3 = aux3 + 1;
        // var json = {
        //   "numPeriodo":productozonademanda[n].numPeriodo,
        //   "cantidad":productozonademanda[n].cantidad
        // }
        // periodosArray.push(json);
      }
    }
    repPeriodos.push(aux3);
    m++;
  }

// console.log(repPeriodos);
//
//
// for (var i = 0; i < periodosArray.length; i++) {
//     console.log(periodosArray[i]);
// }

var aux5 = 0;//aux5 cuenta hasta 3
var aux6 = 0;//aux6 cuenta hasta 4

// console.log("repIdZonas: "+repIdZonas);
//
// console.log("repPeriodos: ",repPeriodos);
// console.log("zonaArray: ",zonaArray);

//Cada índice representa la cantidad de productos por zona
for (var j = 0; j < repIdZonas.length; j++) {//numero de idZona en el json: 2
  //Iteramos los productos que tiene cada zona
  for (var k = 0; k < (repIdZonas[j]); k++) {//numero de idProductos dentro de productos: 1,2. El de arriba es su tam
    //Cada índice guarda la cantidad de productos demandados en todos los periodos financieros
    //e.i. la cantidad total individual de productos x,y,z,etc. en zonas A,B,C que hay por periodo financiero 1,2,...,n
    //E.G.
    /*
    numPeriodo | Producto_idProducto | Zona_idZona |
+------------+----------+--------------+------------
|          1 |                   4 |          84 |
|          2 |                   4 |          84 |
|          3 |                   4 |          84 |
|          4 |                   4 |          84 |
|          5 |                   4 |          84 |
|          6 |                   4 |          84 |
|          7 |                   4 |          84 |
|          8 |                   4 |          84 |

    */
    for (var l = 0; l < repPeriodos[aux5]; l++) {//1,2,1. aux5 sirve para barrer el arreglo de repeticiones de periodos
/*
hacemos un for con 1,2,1
que barra:
  0,
  0,1
  0
con: 1,2,1
*/
//zonaArray[j].idZona
//console.log("zonaArray[j].idZona: ",zonaArray[j].idZona);
//console.log("zonaArray[j]['productos'][k].idProducto: ",zonaArray[j]['productos'][k].idProducto);


//productozonademanda[j].Zona_idZonas
//console.log("productozonademanda[l].Zona_idZonas: ",productozonademanda[aux6].Zona_idZonas);
//console.log("productozonademanda[l].Producto_idProducto: ",productozonademanda[aux6].Producto_idProducto);

//Validación que asegura que lo que ya está en el arreglo es exactamente lo mismo que lo que está
//en el query productozonademanda. Asegurando que los datos correspondan a los valores que se desean

 if (zonaArray[j].idZona == productozonademanda[aux6].Zona_idZonas &&
 zonaArray[j]['productos'][k].idProducto == productozonademanda[aux6].Producto_idProducto) {

   var json = {
     "numPeriodo":productozonademanda[aux6].numPeriodo,
     "cantidad":productozonademanda[aux6].cantidad
   }

//zonaArray[j]['productos'][k]['periodos'].push(periodosArray[aux6]);
zonaArray[j]['productos'][k]['periodos'].push(json);

 }

      aux6=aux6+1;
    }
      aux5 = aux5 + 1;
  }
}

return zonaArray;
}



module.exports = router;
