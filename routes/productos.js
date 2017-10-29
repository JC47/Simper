const express = require('express');
const router = express.Router();
const producto = require('../models/producto');

router.post('/register', (req, res, next) => {
  Promise.resolve().then(function () {
      var newProd = req.body;
      return producto.addProducto(newProd);
  }).then(function(){
    return producto.getProductos();
  }).
  then( function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/modify/:id', (req, res, next) => {
  Promise.resolve().then( function (){
      var newProd = req.body;
      var id = req.params.id;
      return producto.updateProducto(newProd, id);
  }).then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    res.json({success: false, msg:"Registo incompleto"});
  });
});

router.get('/delete/:id', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var id = req.params.id;
      return producto.deleteProducto(id);
  })
  .then(function () {
      res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success: false, msg:"Borrado incompleto"});
  });
});

router.get('/', (req, res, next) => {
  Promise.resolve().then(function () {
    return producto.getProductos();
  })
    .then(function (rows) {
      res.json({datos:rows});
    })
    .catch(function (err) {
      res.json({msg:"Algo salió mal"});
    });
});

router.get('/:id', (req, res, next) => {
  Promise.resolve().then(function () {
    return producto.getProductoById(req.params.id);
  })
    .then(function (rows) {
      res.json({datos:rows});
    })
    .catch(function (err) {
      res.json({msg:"Algo salió mal"});
    });
});



function toArrayProductos(rows) {
    var productosList = [];

    for (var i = 0; i < rows.length; i++) {
      var producto = {
            'idProducto':rows[i].idProducto,
            'nombreProd':rows[i].nombreProd,
            'costoDes':rows[i].costoDes,
            'tiempoDes':rows[i].tiempoDes,
            'costoProd':rows[i].costoProd,
            'costosFijosFabri':rows[i].costosFijosFabri,
            'costosVarFabri':rows[i].costosVarFabri,
            'costoVarUniDist':rows[i].costoVarUniDist,
            'gastosFijosAdmon':rows[i].gastosFijosAdmon,
            'costosMPPorUniProd':rows[i].costosMPPorUniProd,
            'uniMP':rows[i].uniMP,
            'costoUni':rows[i].costoUni
          }
        productosList.push(producto);
    }
  //}
  return productosList;
}

function getJSONProducto(nombreProd,costoDes,tiempoDes,costoProd,costosFijosFabri,costosVarFabri,costoVarUniDist,gastosFijosAdmon,costosMPPorUniProd,uniMP,costoUni) {
  //recibimos datos
  var data = {
    "nombreProd": nombreProd,
    "costoDes": costoDes,
    "tiempoDes": tiempoDes,
    "costoProd": costoProd,
    "costosFijosFabri": costosFijosFabri,
    "costosVarFabri": costosVarFabri,
    "costoVarUniDist": costoVarUniDist,
    "gastosFijosAdmon": gastosFijosAdmon,
    "costosMPPorUniProd": costosMPPorUniProd,
    "uniMP": uniMP,
    "costoUni": costoUni

   };
   return data;
}

module.exports = router;
