const express = require('express');
const router = express.Router();
const maquinaria = require('../models/maquinaria');

router.post('/register', (req, res, next) => {
  Promise.resolve().then(function () {
    //validamos si existe un error en el request (req)
      //recibimos datos
      var nombreMaq = req.body.nombreMaq;
      var costo = req.body.costo;
      var cantidadProd = req.body.cantidadProd;
      var depAcum = req.body.depAcum;
      var Producto_idProducto = req.body.Producto_idProducto;

      return getJSONMaq(nombreMaq,costo,cantidadProd,depAcum, Producto_idProducto);
  })
  .then(function (newMaq) {
      return maquinaria.addMaquinaria(newMaq);
  }).then(function(){
    //res.json({success: true, msg:"Operacion exitosa"});
    return maquinaria.getMaquinarias();
  }).
  then( function (rows) {
    return toArrayMaquinaria(rows);
  }).
  then( function (MaquinariasList) {
    res.json({success: true, datos:MaquinariasList, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("Log error: " + err);
    res.json({success: true, msg:"Operacion incompleta"});
  });
});

router.post('/modify/:idMaquinaria', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var nombreMaq = req.body.nombreMaq;
      var costo = req.body.costo;
      var cantidadProd = req.body.cantidadProd;
      var depAcum = req.body.depAcum;
      var Producto_idProducto = req.body.Producto_idProducto;

      return getJSONMaq(nombreMaq,costo,cantidadProd,depAcum, Producto_idProducto);
  })
  .then(function (data) {
      var idMaquinaria = req.params.idMaquinaria;
      return maquinaria.updateMaquinaria(data,idMaquinaria);
  }).then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
  res.json({success: true, msg:"Operacion incompleta"});
  });
});

router.get('/delete/:idMaquinaria', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idMaquinaria = req.params.idMaquinaria
      return maquinaria.deleteMaquinaria(idMaquinaria);
  })
  .then(function () {
      res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success: true, msg:"Operacion incompleta"});
  });
});

router.get('/', (req, res, next) => {
  Promise.resolve().then(function () {
    return maquinaria.getMaquinarias();
  })
    .then(function (rows) {
      return toArrayMaquinaria(rows);
    })
    .then(function (maquinariaList){
        res.json(maquinariaList);
    })
    .catch(function (err) {
      console.error("got error: " + err);
      res.json({success: true, msg:"Operacion incompleta"});
    });
});

router.get('/maquinariaspc/:idProyecto', (req,res,next) => {
  Promise.resolve().then(function(){
    var idP = req.params.idProyecto;
    return maquinaria.getMaquinariasParaComprar(idP);
  }).then(function (rows){
    res.json({success:true,datos:rows,msg:"Funciona"});
  }).catch(function(err) {
    console.log(err);
    res.json({success:false,msg:"No sirve"});
  });
});

function toArrayMaquinaria(rows) {
  var maquinariaList = [];

  for(var i = 0; i < rows.length; i++){

    var maquinaria = {
        'idMaquinaria':rows[i].idMaquinaria,
        'nombreMaq':rows[i].nombreMaq,
        'costo':rows[i].costo,
        'cantidadProd':rows[i].cantidadProd,
        'Producto_idProducto':rows[i].Producto_idProducto,
        'depAcum':rows[i].depAcum
      }
      maquinariaList.push(maquinaria);
  }
  //console.log(maqSelectList);
  return maquinariaList;
}

function getJSONMaq(nombreMaq,costo,cantidadProd,depAcum, Producto_idProducto) {
  //recibimos datos
  var data = {
      "nombreMaq": nombreMaq,
      "costo":costo,
      "cantidadProd":cantidadProd,
      "depAcum":depAcum,
      "Producto_idProducto":Producto_idProducto
   };
   return data;
}

module.exports = router;
