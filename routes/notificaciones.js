const express = require('express');
const router = express.Router();
const notificacion = require('../models/notificacion');

router.post('/register/:id', (req, res, next) => {
  Promise.resolve().then(function () {

      var nombreNoti = req.body.nombreNoti;
      var descripcion = req.body.descripcion;
      var Balance_idBalance = req.body.Balance_idBalance;
      var Balance_Proyectos_idProyecto = req.body.Balance_Proyectos_idProyecto;

      return getJSONNotificacion(nombreNoti, descripcion, Balance_idBalance, Balance_Proyectos_idProyecto);
  })
  .then(function (newNotificacion) {
      return notificacion.addNotificacion(newNotificacion);
  }).then(function(){
    return notificacion.getNotificaciones(req.params.id);
  }).
  then( function (rows) {
    return toArrayNotificacion(rows);
  }).
  then( function (notificacionList) {
    res.json({success: true, datos:notificacionList, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.get('/delete/:id', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      return notificacion.deleteNotificaciones(req.params.id);
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

router.get('/:id', (req, res, next) => {
  Promise.resolve().then(function () {
    return notificacion.getNotificaciones(req.params.id);
  })
    .then(function (rows) {
      return toArrayNotificacion(rows);
    })
    .then(function (notificacionList){
        res.json(notificacionList);
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

function toArrayNotificacion(rows) {
  var notificacionList = [];

  for(var i = 0; i < rows.length; i++){

    var notificacion = {
      "idNotificacion":rows[i].idNotificacion,
      "nombreNoti":rows[i].nombreNoti,
      "descripcion":rows[i].descripcion,
      "Balance_idBalance":rows[i].Balance_idBalance,
      "Balance_Proyectos_idProyecto":rows[i].Balance_Proyectos_idProyecto
      }
      notificacionList.push(notificacion);
  }

  return notificacionList;
}

function getJSONNotificacion(nombreNoti, descripcion, Balance_idBalance, Balance_Proyectos_idProyecto) {
  //recibimos datos
  var notificacion = {
    "nombreNoti":nombreNoti,
    "descripcion":descripcion,
    "Balance_idBalance":Balance_idBalance,
    "Balance_Proyectos_idProyecto":Balance_Proyectos_idProyecto
    }
   return notificacion;
}

module.exports = router;
