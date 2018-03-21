const express = require('express');
const router = express.Router();
const config = require('../config/db');
const demanda = require('../models/demanda');
const Promise = require("bluebird");

const db = require('../config/db');
const querySql = db.querySql;
const getSqlConnection = db.getSqlConnection;

//Arreglos que generan el json
var repIdZonas = [];//almacena las veces que se repite un idZona en productozonasindes
var zonaArray = [];
var repPeriodos = [];
var periodosArray = [];

// function productoZonaPrueba(idProducto) {
//     var query = "select * from productozona where Producto_idProducto = "+idProducto+" ";
//       return new Promise(function(resolve,reject) {
//            querySql(query,function(err,rows) {
//               if (err){
//                   return reject( err );
//               }else {
//                 resolve(rows);
//               }
//           })
//       });
//     }
//
// function cerrarConexion() {
//   return new Promise(function(resolve,reject){
//       return getSqlConnection(function(err) {
//           if (err)
//               return reject( err );
//           resolve();
//       });
//   });
// }
//
// router.post('/prueba', (req, res, next) => {
//   var idProducto = req.body.Producto_idProducto;
//   var aux;
//   productoZonaPrueba(idProducto)
//   .then(function (rows) {
//     res.json({success: true, rows, msg:"Operacion exitosa"});
//   })
//   .catch(function (err) {
//     console.error("got error: " + err);
//     if (err instanceof Error) {
//       res.status(400).send("Error general");
//       console.log(err);
//     } else {
//       res.status(200).json({ "code": 1000, "message": err });
//     }
//   })
//   .finally(function() {
//     return getSqlConnection();
//   });
// });

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

    var numPeriodo = rows.length+1;
    var cantidad = req.body.cantidad;
    var idZona = req.body.idZona;
    var idProducto = req.body.idProducto;
//    console.log("numPeriodo: ",numPeriodo);
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
    var numPeriodo = rows.length;
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
  //Guardamos las consultas
  var arrayProductoZonaDemanda = [];
  var arrayIdZonas = [];
  var arrayZonas = [];
  var arrayFilter = [];
  var arrayIdProductoEnZona = [];


  Promise.join(
    demanda.getProductoZonaDemanda(),
    demanda.getIdZonasFromProductoZonaDemanda(),
    demanda.getZonas(),
    demanda.filterIdZonaIdProducto(),
    demanda.idProductoEnZona(),
    function(productozonademanda,idzonas,zonas,filter,idproductoenzona) {

      arrayProductoZonaDemanda = productozonademanda;
      arrayIdZonas = idzonas;
      arrayZonas = zonas;
      arrayFilter = filter;
      arrayIdProductoEnZona = idproductoenzona;

      repIdZonas = repeticionesIdZona(arrayIdZonas,arrayFilter);
      repPeriodos = repeticionesPeriodo(arrayFilter,arrayProductoZonaDemanda);
     })
     .then(function () {
       return jsonZona(zonaArray,arrayIdZonas,arrayZonas);
     })
    //  .delay(500).then(function() {
    //   console.log("another 500 ms passed") ;
    // })
    .delay(500).then(function (zonaArray) {
      console.log("another 500 ms passed");
      return jsonProducto(zonaArray,repIdZonas,arrayIdProductoEnZona);

    })
    .delay(500).then(function (zonaArray) {
      console.log("another 500 ms passed");
      return jsonPeriodo(repIdZonas,repPeriodos,zonaArray,arrayProductoZonaDemanda);
    })
    .then(function (zonaArray) {
//      console.log("rows::: "+JSON.stringify(rows, null, 1));
        res.json({success: true, datos:zonaArray, msg:"Operacion exitosa"});
    })
    .catch(function (err) {
      console.error("got error: " + err);
      if (err instanceof Error) {
        res.status(400).send("Error general");
        console.log(err);
      } else {
        res.status(200).json({ "code": 1000, "message": err });
      }
    })
    .finally(function() {
      console.log("repIdZonas.length: "+repIdZonas.length);
      console.log("repPeriodos.length: "+repPeriodos.length);
      console.log("periodosArray.length: "+periodosArray.length);
      console.log("zonaArray.length: "+zonaArray.length);
      repIdZonas.length=0;
      repPeriodos.length=0;
      periodosArray.length=0;
      zonaArray.length=0;
      console.log("repIdZonas.length: "+repIdZonas.length);
      console.log("repPeriodos.length: "+repPeriodos.length);
      console.log("periodosArray.length: "+periodosArray.length);
      console.log("zonaArray.length: "+zonaArray.length);
    });
  });

function repeticionesIdZona(idzonas,filter) {
  //Repeticiones idZonas en demanda
  var arrayRepIdZonas = [];
  var i = 0;
  while (i<idzonas.length) {
    var aux = 0;
    for (var j = 0; j < filter.length; j++) {
      if (idzonas[i].Zona_idZonas == filter[j].Zona_idZonas) {
        aux = aux +1;
      }
    }
    arrayRepIdZonas.push(aux);
    i++;
  }
  console.log("repeticionesIdZona: "+arrayRepIdZonas);
  return arrayRepIdZonas;
}

function jsonZona(zonaArray,idzonas,zonas) {
  //ZONA
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
console.log("jsonZona::: "+JSON.stringify(zonaArray, null, 1));
  return zonaArray;
}

function jsonProducto(zonaArray,repIdZonas,idproductoenzona) {
  //PRODUCTOS
  var aux2 = 0;
  for (var j = 0; j < repIdZonas.length; j++) {
    for (var k = 0; k < (repIdZonas[j]); k++) {
      var producto = {
        "idProducto":idproductoenzona[aux2].Producto_idProducto,
        "color":idproductoenzona[aux2].color,
        "periodos":[]
      }
      console.log("Perro",idproductoenzona[aux2].Producto_idProducto);
      zonaArray[j]['productos'].push(producto);
    //  zonaArray[j]['productos'][k]['periodos'].push('a');
     aux2 = aux2 + 1;
    }
  }
console.log("jsonProducto::: "+JSON.stringify(zonaArray, null, 1));
  return zonaArray;
}

function repeticionesPeriodo(filter,productozonademanda) {
  //Repeticiones Periodo
  var arrayRepPeriodos = [];
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
      arrayRepPeriodos.push(aux3);
      m++;
    }
    console.log("repeticionesPeriodo: "+arrayRepPeriodos);
    return arrayRepPeriodos;
}

function jsonPeriodo(repIdZonas,repPeriodos,zonaArray,productozonademanda) {
  //PERIODO
  var aux5 = 0;//aux5 cuenta hasta 3
  var aux6 = 0;//aux6 cuenta hasta 4

  //Cada índice representa la cantidad de productos por zona
  for (var j = 0; j < repIdZonas.length; j++) {//numero de idZona en el json: 2
    //Iteramos los productos que tiene cada zona
    for (var k = 0; k < (repIdZonas[j]); k++) {//numero de idProductos dentro de productos: 1,2. El de arriba es su tam
      //Cada índice guarda la cantidad de productos demandados en todos los periodos financieros
      //e.i. la cantidad total individual de productos x,y,z,etc. en zonas A,B,C que hay por periodo financiero 1,2,...,n
      for (var l = 0; l < repPeriodos[aux5]; l++) {//1,2,1. aux5 sirve para barrer el arreglo de repeticiones de periodos
        if (zonaArray[j].idZona == productozonademanda[aux6].Zona_idZonas &&
            zonaArray[j]['productos'][k].idProducto == productozonademanda[aux6].Producto_idProducto) {
             // var json = {
             //   "numPeriodo":productozonademanda[aux6].numPeriodo,
             //   "cantidad":productozonademanda[aux6].cantidad
             // }
            //zonaArray[j]['productos'][k]['periodos'].push(periodosArray[aux6]);
            zonaArray[j]['productos'][k]['periodos'].push({"numPeriodo":productozonademanda[aux6].numPeriodo,
            "cantidad":productozonademanda[aux6].cantidad});
          }
        aux6=aux6+1;
      }
      aux5 = aux5 + 1;
    }
  }
  console.log("jsonPeriodo::: "+JSON.stringify(zonaArray, null, 1));
  return zonaArray;
}

module.exports = router;
