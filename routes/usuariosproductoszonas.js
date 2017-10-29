const express = require('express');
const router = express.Router();
const config = require('../config/db');
const usuarioProductoZona = require('../models/usuarioproductozona');
const Promise = require("bluebird");

router.post('/register/', (req, res, next) => {
  Promise.resolve().then(function () {
      var dato = req.body;
      return usuarioProductoZona.addUsuarioProductoZona(dato);
  })
  .then(function () {
      var idUsuario = req.body.idUsuario;
      return usuarioProductoZona.getUsuarioProductoZonaByIdUsuario(idUsuario);
  })
  .then(function(rows){
    res.json({success: true, msg:"Operacion exitosa", datos:rows});
  })
  .catch(function (err) {
    console.error("Log error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

router.get('/:idUsuario', (req, res, next) => {
  Promise.resolve().then( function () {
    return usuarioProductoZona.getUsuarioProductoZonaByIdUsuario(req.params.idUsuario);
  }).then( function (rows) {
    res.json({success: true, msg:"Operacion exitosa", datos:rows});
  }).catch( function (err) {
    console.log(err);
    res.json({success:false, msg:"No completado"});
  });
});

router.post('/delete/', (req, res, next) => {
  Promise.resolve().then(function () {
      var idUsuario = req.body.idUsuario;
      var idAdministrador = req.body.idAdministrador;
      var idProducto = req.body.idProducto;
      var idZona = req.body.idZona;
      return usuarioProductoZona.deleteUsuarioProductoZona(idUsuario,idAdministrador,idProducto,idZona);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("Log error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

module.exports = router;
