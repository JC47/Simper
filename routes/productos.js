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

module.exports = router;
