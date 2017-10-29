const express = require('express');
const router = express.Router();
const zona = require('../models/zona');
const demanda = require('../models/demanda');
const Promise = require("bluebird");

//Prueba de merge con servidor-alfredo

router.post('/register', (req, res, next) => {

  Promise.resolve()
  .then(function () {
    var nombreZona = req.body.nombreZona;
    return zona.addZona(nombreZona)
  })
  .then(function () {
    return zona.getZonas();
  })
  .then(function (zonaList) {
    var tam = zonaList.length;
    var ultimoIdZona = zonaList[tam -1].idZona;
    //console.log("ultimoIdZona: "+ultimoIdZona);
    /*
    var tiempoDes = req.body.tiempoDes;//productozona
    var costoDes = req.body.costoDes;//productozona
    var idsProducto = req.body.productos;
    */
    var productos = req.body.productos;

     zona.addProductoZona(ultimoIdZona,productos);
     zona.addDemanda(ultimoIdZona,productos);
     return console.log("ok");
  })
  // Promise.join(zona.getZonaProducto(),zona.filterIdZonaFromProductoZona(),
  //  zona.filterZonasByDistinctProductoZona(),function(zonaproducto, idZonaFilter,zona) {
  //     return jsonProductos(zonaproducto,idZonaFilter,zona);
  //    })
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

router.post('/registerProducto', (req, res, next) => {
  Promise.resolve()
  .then(function () {
    var json = req.body;
    zona.agregarProducto(json);
  })
  .then(function () {
    var dema = {
      numPeriodo:0,
      cantidad:0,
      Zona_idZonas:req.body.Zona_idZona,
      Producto_idProducto:req.body.Producto_idProducto
    }
    zona.addDemandaIndividual(dema);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success: false, msg:"Operacion fallida"});
  });
});

router.get('/', (req, res, next) => {
  Promise.join(zona.getZonaProducto(),zona.filterIdZonaFromProductoZona(),
   zona.filterZonasByDistinctProductoZona(),function(zonaproducto, idZonaFilter,zona) {
      return jsonProductos(zonaproducto,idZonaFilter,zona);
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

router.post('/modifynombrezona/:idZona', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idZona = req.params.idZona;
      var json = req.body;
      return zona.updateNombreZona(idZona,json);
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

router.post('/modifyproductozona/', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idZona = req.body.idZona;
      var idProducto = req.body.idProducto;
      var costoDes = req.body.costoDes;
      var tiempoDes = req.body.tiempoDes;
      return zona.updateProductoZona(idZona,idProducto,costoDes,tiempoDes);
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

router.get('/delete/:idZona', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idZona = req.params.idZona
      return zona.deleteZona(idZona);
  })
  .then(function () {
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

router.post('/deleteProducto/', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idZona = req.body.idZona;
      var idProducto = req.body.idProducto;
      return zona.deleteZonaProducto(idZona,idProducto);
  })
  .then(function () {
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

router.get('/productoperiodozona/:idZona', (req, res, next) => {
  Promise.resolve().then(function () {
    var idZona = req.params.idZona;
    return zona.productoPeriodoZona(idZona);
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

function toArrayZona(rowsZonas) {
  var zonaList = [];

  for(var i = 0; i < rowsZonas.length; i++){

    var zona = {
      "idZona": rowsZonas[i].idZona,
      "nombreZona":  rowsZonas[i].nombreZona,
      "tiempoDes": rowsZonas[i].tiempoDes,
      "costoDes": rowsZonas[i].costoDes
      }
      zonaList.push(zona);
  }
  return zonaList;
}

// function getJSONZona(nombreZona, tiempoDes, costoDes) {
//   //recibimos datos
//   var data = {
//       "nombreZona": nombreZona,
//       "tiempoDes":tiempoDes,
//       "costoDes":costoDes,
//    };
//    return data;
// }

function jsonProductos(zonaproducto,idZonaFilter,zona) {
  var repIdZona = [];
  var i = 0;
  while (i < idZonaFilter.length) {
    var aux = 0;
    for (var j = 0; j < zonaproducto.length; j++) {
      if (idZonaFilter[i].Zona_idZona==zonaproducto[j].Zona_idZona) {
        aux = aux + 1;
      }
    }
    repIdZona.push(aux);
    i++;
  }

  var productozonaArray = [];
  for (var i = 0; i < zona.length; i++) {
      var jsonzona = {
        "idZona":zona[i].idZona,
        "nombreZona":zona[i].nombreZona,
        "productos": []
      }
      productozonaArray.push(jsonzona);
    }

var aux2 = 0;
for (var j = 0; j < repIdZona.length; j++) {
  for (var k = 0; k < (repIdZona[j]); k++) {
    var datosProductos = {

      "costoDes":zonaproducto[aux2].costoDes,
      "Producto_idProducto":zonaproducto[aux2].Producto_idProducto,
      "tiempoDes":zonaproducto[aux2].tiempoDes
    }
    productozonaArray[j]['productos'].push(datosProductos);
   aux2 = aux2 + 1;
  }
}
return productozonaArray;
}

module.exports = router;
