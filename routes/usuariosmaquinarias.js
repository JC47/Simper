const express = require('express');
const router = express.Router();
const config = require('../config/db');
const usuarioMaquinaria = require('../models/usuariomaquinaria');
const Promise = require("bluebird");

//INSERTA en usuariomaquinaria si no existe el registro o AUMENTA cantidad si ya existe
router.post('/register/', (req, res, next) => {

  Promise.resolve().then(function () {
    var idUsuario = req.body.idUsuario;
    return usuarioMaquinaria.getUsuarioMaquinariaByIdUsuario(idUsuario);
  })
  .then(function (usuariomaquinaria) {
      var dato = req.body;
/*
      console.log("usuariomaquinaria: ",usuariomaquinaria);
      console.log("dato: ",dato);*/
      var cantidad = checkCantidad(usuariomaquinaria,dato);

      return cantidad;
  })
  .then(function (cantidad) {
    var dato = req.body;
    var idUsuario = req.body.idUsuario;
    var idAdministrador = req.body.Administrador_idAdministrador;
    var idMaquinaria = req.body.idMaquinaria;
    var idProducto = req.body.Producto_idProducto;

      if (cantidad==0) {
        return usuarioMaquinaria.addUsuarioMaquinaria(dato);
      }else {
        return usuarioMaquinaria.updateUsuarioMaquinaria(idUsuario,idAdministrador,idProducto,idMaquinaria,cantidad);
      }
  })
  .then(function () {
    var idUsuario = req.body.idUsuario;
    return usuarioMaquinaria.getUsuarioMaquinariaByIdUsuario(idUsuario);
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


//RESTA cantidad si existe en usuariomaquinaria o elimina si cantidad = 1

router.post('/vuelta/', (req, res, next) => {

  var idUsuario = req.body.idUsuario;
  var idAdministrador = req.body.Administrador_idAdministrador;
  var idMaquinaria = req.body.idMaquinaria;
  var idProducto = req.body.Producto_idProducto;

  Promise.resolve().then(function () {
    return usuarioMaquinaria.getUsuarioMaquinaria(idUsuario,idAdministrador,idProducto,idMaquinaria);
  })
  .then(function (rows) {
      var cantidad = rows[0].cantidad;

      if (cantidad == 1) {
        return usuarioMaquinaria.deleteUsuarioMaquinaria(idUsuario,idAdministrador,idProducto,idMaquinaria);
      }else {
        cantidad = cantidad - 1;
        return usuarioMaquinaria.updateUsuarioMaquinaria(idUsuario,idAdministrador,idProducto,idMaquinaria,cantidad);
      }
  }).then(function () {
        return usuarioMaquinaria.getUsuarioMaquinariaByIdUsuario(idUsuario);
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

router.get('/:idUsuario',(req, res, next) => {
  Promise.resolve().then( function () {
    return usuarioMaquinaria.getUsuarioMaquinariaByIdUsuario(req.params.idUsuario);
  }).then( function (rows) {
    res.json({success:true, datos:rows, msg:"Operacion exitosa"});
  }).catch( function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion fallida"});
  });
});

router.post('/modify/', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idUsuario = req.body.idUsuario;
      var idAdministrador = req.body.idAdministrador;
      var idProducto = req.body.idProducto;
      var idMaquinaria = req.body.idMaquinaria;
      var cantidad = req.body.cantidad;
      return usuarioMaquinaria.updateUsuarioMaquinaria(idUsuario,idAdministrador,idProducto,idMaquinaria,cantidad);
  })
  .then(function () {
    var idUsuario = req.body.idUsuario;
    return usuarioMaquinaria.getUsuarioMaquinariaByIdUsuario(idUsuario);
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

router.post('/delete/', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idUsuario = req.body.idUsuario;
      var idAdministrador = req.body.Administrador_idAdministrador;
      var idProducto = req.body.Producto_idProducto;
      var idMaquinaria = req.body.idMaquinaria;
      return usuarioMaquinaria.deleteUsuarioMaquinaria(idUsuario,idAdministrador,idProducto,idMaquinaria);
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

function checkCantidad(usuariomaquinaria,dato) {
    var cantidad = 0;
    for (var i = 0; i < usuariomaquinaria.length; i++) {
      if (usuariomaquinaria[i].idMaquinaria == dato.idMaquinaria &&
          usuariomaquinaria[i].Producto_idProducto == dato.Producto_idProducto &&
          usuariomaquinaria[i].idUsuario == dato.idUsuario &&
          usuariomaquinaria[i].Administrador_idAdministrador == dato.Administrador_idAdministrador ) {

          cantidad = aumentaCantidad(usuariomaquinaria[i].cantidad);
      }
    }
  return cantidad;
}

function aumentaCantidad(cantidad) {
    cantidad = cantidad + 1;
    return cantidad;
}

module.exports = router;
