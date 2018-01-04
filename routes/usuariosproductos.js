const express = require('express');
const router = express.Router();
const config = require('../config/db');
const usuarioProducto = require('../models/usuarioproducto');
const Promise = require("bluebird");

//nombre: usuariosproductosn
//todos los productos que no estén usuarioProducto pero que estén en producto get



router.post('/register/', (req, res, next) => {
  Promise.resolve().then(function () {
      var dato = req.body;
      return usuarioProducto.addUsuarioProducto(dato);
  })
  .then( function () {
      return usuarioProducto.getUsuarioProductoByIdUsuario(req.body.idUsuario);
  })
  .then(function(rows){
    res.json({success: true, msg:"Operacion exitosa",datos:rows});
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
//este es el que se va a modificar
router.get('/n/:idUsuario', (req, res, next) => {
  Promise.resolve().then( function () {
    return usuarioProducto.getUsuarioProductoByIdUsuario(req.params.idUsuario);
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
    var idProducto = req.body.idProducto;

    return usuarioProducto.deleteUsuarioProducto(idUsuario,idAdministrador,idProducto);
  })
  .then(function(rows){
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
