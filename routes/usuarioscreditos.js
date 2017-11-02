const express = require('express');
const router = express.Router();
const config = require('../config/db');
const usuarioCredito = require('../models/usuariocredito');
const Promise = require("bluebird");

router.post('/register/', (req, res, next) => {
  Promise.resolve().then(function () {
      var dato = req.body;
      return usuarioCredito.addUsuarioCredito(dato);
  })
  .then( function () {
      return usuarioCredito.getUsuarioCreditoByIdUsuario(req.body.idUsuario);
  })
  .then(function(rows){
    res.json({success: true, msg:"Operacion exitosa",datos:rows});
  })
  .catch(function (err) {
    console.error("Log error: " + err);
    res.json({success:false, msg:"Fallo"});
  });
});

router.get('/:idUsuario', (req, res, next) => {
  Promise.resolve().then( function () {
    return usuarioCredito.getUsuarioCreditoByIdUsuario(req.params.idUsuario);
  }).then( function (rows) {
    res.json({success: true, msg:"Operacion exitosa", datos:rows});
  }).catch( function (err) {
    console.log(err);
    res.json({success:false, msg:"Fallo"});
  })
});

router.post('/delete/', (req, res, next) => {
  Promise.resolve()
  .then(function () {
    var idUsuario = req.body.idUsuario;
    var idAdministrador = req.body.idAdministrador;
    var idCredito = req.body.idCredito;

    return usuarioCredito.deleteUsuarioCredito(idUsuario,idAdministrador,idCredito);
  })
  .then(function(rows){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("Log error: " + err);
    res.json({success:false, msg:"Fallo"});
  });
});


module.exports = router;
