const express = require('express');
const router = express.Router();
const proyecto = require('../models/proyecto');

router.post('/register/:idUsuario', (req, res, next) => {
  Promise.resolve().then(function () {

    var nombreProyecto = req.body.nombreProyecto;
    var fechaCreacion = req.body.fechaCreacion;
    var Usuario_idUsuario = req.body.Usuario_idUsuario;

    return getJSONProyecto(nombreProyecto, fechaCreacion, Usuario_idUsuario);
  })
  .then(function (newProyecto) {
      return proyecto.addProyecto(newProyecto);
  }).then(function(){
    const id = req.params.idUsuario;
    return proyecto.getProyectos(id);
  }).
  then( function (rows) {
    return toArrayProyecto(rows);
  }).
  then( function (ProyectoList) {
    res.json({success: true, datos:ProyectoList, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/modify/:idProyecto', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var nombreProyecto = req.body.nombreProyecto;
      var fechaCreacion = req.body.fechaCreacion;
      var Usuario_idUsuario = req.body.Usuario_idUsuario;

      return getJSONProyecto(nombreProyecto, fechaCreacion, Usuario_idUsuario);
  })
  .then(function (data) {
      var idProyecto = req.params.idProyecto;
      return proyecto.updateProyecto(data,idProyecto);
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

router.get('/delete/:idProyecto', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idProyecto = req.params.idProyecto
      return proyecto.deleteProyecto(idProyecto);
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

router.get('/:idUsuario', (req, res, next) => {
  Promise.resolve().then(function () {
    const id = req.params.idUsuario;
    return proyecto.getProyectos(id);
  })
    .then(function (rows) {
      return toArrayProyecto(rows);
    })
    .then(function (ProyectoList){
        res.json(ProyectoList);
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

function toArrayProyecto(rows) {
  var ProyectoList = [];

  for(var i = 0; i < rows.length; i++){

    var Proyecto = {
      "idProyecto": rows[i].idProyecto,
      "nombreProyecto": rows[i].nombreProyecto,
      "fechaCreacion": rows[i].fechaCreacion,
      "Usuario_idUsuario": rows[i].Usuario_idUsuario
      }
      ProyectoList.push(Proyecto);
  }
  return ProyectoList;
}

function getJSONProyecto(nombreProyecto, fechaCreacion, Usuario_idUsuario) {
  //recibimos datos
  var data = {
      "nombreProyecto": nombreProyecto,
      "fechaCreacion": fechaCreacion,
      "Usuario_idUsuario": Usuario_idUsuario
   };
   return data;
}

module.exports = router;
