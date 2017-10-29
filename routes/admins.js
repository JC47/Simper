const express = require('express');
const router = express.Router();
const config = require('../config/db');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res, next) => {
  Promise.resolve().then(function () {
    //validamos si existe un error en el request (req)
      //recibimos datos
      var nombreAdmin = req.body.nombreAdmin
      var apPat = req.body.apPat
      var apMat = req.body.apMat
      var contra = req.body.contra
      var user = req.body.user

      return getJSONAdmin(nombreAdmin,apPat,apMat,contra,user);
  })
  .then(function (newAdmin) {
      return Admin.addAdmin(newAdmin);
  }).then(function(){
    //res.json({success: true, msg:"Operacion exitosa"});
    return Admin.getAdministradores();
  }).
  then( function (rows) {
    return toArrayAdministradores(rows);
  }).
  then( function (AdministradoresList) {
    res.json({success: true, datos:AdministradoresList, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    res.json({success: false, msg:"Operacion denegada"});
  });
});

//Logeo
router.post('/authenticate', (req, res, next) => {
Promise.resolve().then(function () {

  const username = req.body.username;
  return Admin.getAdminByUserName(username);

}).then(function (rows){
    return toJsonAdmin(rows);
})
.then( function(administrador) {
    const pass = req.body.password;
    if(pass == administrador.contra){
      const token = jwt.sign(administrador, config.secret, {
        expiresIn: 604800
      });

      res.json({
        success: true,
        token: 'JWT ' + token,
        admin: {
          id: administrador.idAdministrador,
          name: administrador.user
        }
      });
    }
    else{
      return res.json({success: false, msg:'Contraseña Inconrrecta'});
    }
  }).catch(function (err) {
  return res.json({success: false, msg:'Usuario No Encontrado'});
});
});


//Prfile
router.get('/profile', passport.authenticate('jwt', {session:false}) , (req, res, next) => {
  res.json({admin:req.user});
});

function getJSONAdmin(nombreAdmin,apPat,apMat,contra,user) {
  //recibimos datos
  var data = {
      nombreAdmin: nombreAdmin,
      apPat:apPat,
      apMat:apMat,
      contra:contra,
      user:user
   };
   return data;
}

router.post('/modify/:id', (req, res, next) => {
  Promise.resolve().then( function (){
    var nombreAdmin = req.body.nombreAdmin
    var apPat = req.body.apPat
    var apMat = req.body.apMat
    var contra = req.body.contra
    var user = req.body.user

    return getJSONAdmin(nombreAdmin,apPat,apMat,contra,user);
  })
  .then(function (updateAdmin) {
      var id = req.params.id;
      return Admin.updateAdministrador(updateAdmin, id);
  }).then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success: false, msg:"Registo incompleto"});
  });
});

router.get('/delete/:id', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var id = req.params.id;
      return Admin.deleteAdministrador(id);
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
    return Admin.getAdministradores();
  })
    .then(function (rows) {
      return toArrayAdministradores(rows);
    })
    .then(function (AdministradoresList){
        res.json(AdministradoresList);
    })
    .catch(function (err) {
      console.error("got error: " + err);
      res.json({success:false, msg:"Operacion incompleta"});
    });
});

router.get('/:id', (req, res, next) => {
  Promise.resolve().then(function () {
    return Admin.getAdminById(req.params.id);
  })
    .then(function (rows) {
      return toJsonAdmin(rows);
    })
    .then(function (administrador){
        res.json(administrador);
    })
    .catch(function (err) {
      console.error("got error: " + err);
      res.json({success:false, msg:"Operacion incompleta"});
    });
});


function toJsonAdmin(rows){
    var administrador = {
      'idAdministrador': rows[0].idAdministrador,
      'nombreAdmin': rows[0].nombreAdmin,
      'apPat': rows[0].apPat,
      'apMat': rows[0].apMat,
      'contra': rows[0].contra,
      'user': rows[0].user
    }
  return administrador;
}

function toArrayAdministradores(rows){
  var AdministradoresList = [];
  for(var i=0; i < rows.length; i++){
    var administrador = {
      'idAdministrador': rows[i].idAdministrador,
      'nombreAdmin': rows[i].nombreAdmin,
      'apPat': rows[i].apPat,
      'apMat': rows[i].apMat,
      'contra': rows[i].contra,
      'user': rows[i].user
    }
    AdministradoresList.push(administrador);
  }
  return AdministradoresList;
}

module.exports = router;
