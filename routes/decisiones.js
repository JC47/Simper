const express = require('express');
const router = express.Router();
const config = require('../config/db');
const decision = require('../models/decision');
const Promise = require("bluebird");

router.post('/getVentas/', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(
    decision.getAuxiliarCuenta(idProyecto,numeroPeriodo),
    decision.getAllNumeroBalanceAuxiliarCuenta(idProyecto,numeroPeriodo),
    function(auxcuenta,numeroperiodoauxcuenta) {

      return jsonDecisionesVentas(auxcuenta,numeroperiodoauxcuenta);
    })
  .then( function (data) {
    res.json({success: true, datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/getMaquinarias/', (req,res,next) => {

  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(
    decision.getMaquinariaProyecto(idProyecto,numeroPeriodo),
    decision.getAllNumeroPeriodoMaquinariaProyecto(idProyecto,numeroPeriodo),
    decision.getNumeroPeriodoBalance(idProyecto,numeroPeriodo),
    function(maquinariaproyecto,numeroperiodomaquinariaproyecto,numeroperiodobalance) {

      return jsonDecisionesMaquinaria(maquinariaproyecto,numeroperiodomaquinariaproyecto,numeroperiodobalance);
    })
  .then( function (data) {
    res.json({success: true, datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/getDesarrollosP/', (req,res,next) => {

  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(
    decision.getDesarrolladosProyectoProducto(idProyecto,numeroPeriodo),
    decision.getNumeroPeriodoProyectoProducto(idProyecto,numeroPeriodo),
    decision.getNumeroPeriodoBalance(idProyecto,numeroPeriodo),
    function(desproyectoproducto,numeroperiodoproyectoproducto,numeroperiodobalance) {

      return jsonDecisionesDesarrolladosP(desproyectoproducto,numeroperiodoproyectoproducto,numeroperiodobalance);
    })
  .then( function (data) {
    res.json({success: true, datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/getDesarrollosZ/', (req,res,next) => {

  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(
    decision.getDesarrolladosProductoZonaProyecto(idProyecto,numeroPeriodo),
    decision.getNumeroPeriodoProductoZonaProyecto(idProyecto,numeroPeriodo),
    decision.getNumeroPeriodoBalance(idProyecto,numeroPeriodo),
    function(desproductozonaproyecto,numeroperiodoproductozonaproyecto,numeroperiodobalance) {
      return jsonDecisionesDesarrolladosZ(desproductozonaproyecto,numeroperiodoproductozonaproyecto,numeroperiodobalance);
    })
  .then( function (data) {
    res.json({success: true, datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/getCreditos/', (req,res,next) => {

  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(
    decision.getCreditoBalance(idProyecto,numeroPeriodo),
    decision.getNumeroPeriodoCreditoBalance(idProyecto),
    function(creditobalance,numeroperiodocreditobalance) {
      return jsonCreditoBalance(creditobalance,numeroperiodocreditobalance);
    })
  .then( function (data) {
    res.json({success: true, datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

function jsonDecisionesVentas(auxcuenta,numeroperiodoauxcuenta) {
var arrayRepNumeroPeriodo = [];
var i=0;
  while (i<numeroperiodoauxcuenta.length) {
    var aux = 0;
    for (var j = 0; j < auxcuenta.length; j++) {
      if (numeroperiodoauxcuenta[i].Balance_numeroPeriodo == auxcuenta[j].Balance_numeroPeriodo/* && auxcuenta[i].Zona_idZonas == numeroperiodoauxcuenta[j].Zona_idZonas*/) {
        aux = aux +1;
      }
    }
    arrayRepNumeroPeriodo.push(aux);
    i++;
  }
  console.log("arrayRepNumeroPeriodo:",arrayRepNumeroPeriodo);

  var arrayDecisiones = [];
  var k = 0;

  while (k < numeroperiodoauxcuenta.length) {
    //for (var i = 0; i < zonas.length; i++) {
//      if (idszonasindes[k].Zona_idZonas == zonas[i].idZona) {
        var json = {
          "numeroPeriodo":numeroperiodoauxcuenta[k].Balance_numeroPeriodo,
          "ventas":[]
        }
      arrayDecisiones.push(json);
    //  }
    //}
    k++;
  }

  var aux2 = 0;
  for (var j = 0; j < arrayRepNumeroPeriodo.length; j++) {
    for (var k = 0; k < (arrayRepNumeroPeriodo[j]); k++) {
      var json = {
        "idProducto":auxcuenta[aux2].Producto_idProducto,
        "unidadesVendidas":auxcuenta[aux2].unidadesVendidas,
        "unidadesAlmacenadas":auxcuenta[aux2].unidadesAlmacenadas
      }
      arrayDecisiones[j]['ventas'].push(json);
     aux2 = aux2 + 1;
    }
  }

  //console.log(JSON.stringify(arrayDecisiones));
return arrayDecisiones;
}

function jsonDecisionesMaquinaria(maquinariaproyecto,numeroperiodomaquinariaproyecto,numeroperiodobalance) {
console.log("numeroperiodobalance:: ",numeroperiodobalance);
  var arrayRepNumeroPeriodo = [];
  var i=0;
    while (i<numeroperiodobalance.length) {
      var aux = 0;
      for (var j = 0; j < maquinariaproyecto.length; j++) {
        if (numeroperiodobalance[i].numeroPeriodo == maquinariaproyecto[j].Balance_numeroPeriodo/* && auxcuenta[i].Zona_idZonas == numeroperiodoauxcuenta[j].Zona_idZonas*/) {
          aux = aux +1;
        }
      }
      arrayRepNumeroPeriodo.push(aux);
      i++;
    }
    console.log("arrayRepNumeroPeriodo:",arrayRepNumeroPeriodo);

    var arrayDecisionesMaquinaria = [];
    var k = 0;

    while (k < numeroperiodobalance.length) {
      //for (var i = 0; i < zonas.length; i++) {
  //      if (idszonasindes[k].Zona_idZonas == zonas[i].idZona) {
          var json = {
            "numeroPeriodo":numeroperiodobalance[k].numeroPeriodo,
            "maquinarias":[]
          }
        arrayDecisionesMaquinaria.push(json);
      //  }
      //}
      k++;
    }

    var aux2 = 0;
    for (var j = 0; j < numeroperiodobalance.length; j++) {
      // if(arrayRepNumeroPeriodo[j]==0){
      //   var json = {
      //     "idMaquinaria":0,
      //     "Cantidad":0
      //   }
      //   arrayDecisionesMaquinaria[j]['maquinarias'].push(json);
      // }
      for (var k = 0; k < (arrayRepNumeroPeriodo[j]); k++) {
          var json = {
            "idMaquinaria":maquinariaproyecto[aux2].Maquinaria_idMaquinaria,
            "Cantidad":maquinariaproyecto[aux2].Cantidad
          }
          arrayDecisionesMaquinaria[j]['maquinarias'].push(json);
       aux2 = aux2 + 1;
      }
    }

  console.log(JSON.stringify(arrayDecisionesMaquinaria));
  return arrayDecisionesMaquinaria;
  // return console.log("ok");
}

function jsonDecisionesDesarrolladosP(desproyectoproducto,numeroperiodoproyectoproducto,numeroperiodobalance) {
  var arrayRepNumeroPeriodo = [];
  var i=0;
    while (i<numeroperiodobalance.length) {
      var aux = 0;
      for (var j = 0; j < desproyectoproducto.length; j++) {
        if (numeroperiodobalance[i].numeroPeriodo == desproyectoproducto[j].numeroPeriodo/* && auxcuenta[i].Zona_idZonas == numeroperiodoauxcuenta[j].Zona_idZonas*/) {
          aux = aux +1;
        }
      }
      arrayRepNumeroPeriodo.push(aux);
      i++;
    }
    console.log("arrayRepNumeroPeriodo:",arrayRepNumeroPeriodo);

    var arrayDecisionesDesarrollados = [];
    var k = 0;

    while (k < numeroperiodobalance.length) {
      //for (var i = 0; i < zonas.length; i++) {
  //      if (idszonasindes[k].Zona_idZonas == zonas[i].idZona) {
          var json = {
            "numeroPeriodo":numeroperiodobalance[k].numeroPeriodo,
            "productos":[]
          }
        arrayDecisionesDesarrollados.push(json);
      //  }
      //}
      k++;
    }

    var aux2 = 0;
    for (var j = 0; j < arrayRepNumeroPeriodo.length; j++) {
      for (var k = 0; k < (arrayRepNumeroPeriodo[j]); k++) {
        var json = {
          "idProducto":desproyectoproducto[aux2].Productos_idProducto,
        }
        arrayDecisionesDesarrollados[j]['productos'].push(json);
       aux2 = aux2 + 1;
      }
    }
  return arrayDecisionesDesarrollados;
}

function jsonDecisionesDesarrolladosZ(desproductozonaproyecto,numeroperiodoproductozonaproyecto,numeroperiodobalance) {
  var arrayRepNumeroPeriodo = [];
  var i=0;
    while (i<numeroperiodobalance.length) {
      var aux = 0;
      for (var j = 0; j < desproductozonaproyecto.length; j++) {
        if (numeroperiodobalance[i].numeroPeriodo == desproductozonaproyecto[j].numeroPeriodo/* && auxcuenta[i].Zona_idZonas == numeroperiodoauxcuenta[j].Zona_idZonas*/) {
          aux = aux +1;
        }
      }
      arrayRepNumeroPeriodo.push(aux);
      i++;
    }
    console.log("arrayRepNumeroPeriodo:",arrayRepNumeroPeriodo);

    var arrayDecisionesDesarrollados = [];
    var k = 0;

    while (k < numeroperiodobalance.length) {
      //for (var i = 0; i < zonas.length; i++) {
  //      if (idszonasindes[k].Zona_idZonas == zonas[i].idZona) {
          var json = {
            "numeroPeriodo":numeroperiodobalance[k].numeroPeriodo,
            "productos":[]
          }
        arrayDecisionesDesarrollados.push(json);
      //  }
      //}
      k++;
    }

    var aux2 = 0;
    for (var j = 0; j < arrayRepNumeroPeriodo.length; j++) {
      for (var k = 0; k < (arrayRepNumeroPeriodo[j]); k++) {
        var json = {
          "idZona":desproductozonaproyecto[aux2].Zona_idZonas,
          "idProducto":desproductozonaproyecto[aux2].Producto_idProducto
        }
        arrayDecisionesDesarrollados[j]['productos'].push(json);
       aux2 = aux2 + 1;
      }
    }
  return arrayDecisionesDesarrollados;
}

function jsonCreditoBalance(creditobalance,numeroperiodocreditobalance) {
  var arrayRepNumeroPeriodo = [];
  var i=0;
    while (i<numeroperiodocreditobalance.length) {
      var aux = 0;
      for (var j = 0; j < creditobalance.length; j++) {
        if (numeroperiodocreditobalance[i].numeroPeriodo == creditobalance[j].numeroPeriodo/* && auxcuenta[i].Zona_idZonas == numeroperiodoauxcuenta[j].Zona_idZonas*/) {
          aux = aux +1;
        }
      }
      arrayRepNumeroPeriodo.push(aux);
      i++;
    }
    console.log("arrayRepNumeroPeriodo:",arrayRepNumeroPeriodo);

    var arrayDecisionesCreditos = [];
    var k = 0;

  //   while (k < numeroperiodocreditobalance.length) {
  //     //for (var i = 0; i < zonas.length; i++) {
  // //      if (idszonasindes[k].Zona_idZonas == zonas[i].idZona) {
  //         var json = {
  //           "numeroPeriodo":numeroperiodocreditobalance[k].numeroPeriodo,
  //           "nombreCredito":creditobalance[k].nombreCredito,
  //           "monto":creditobalance[k].monto
  //         }
  //       arrayDecisionesCreditos.push(json);
  //     //  }
  //     //}
  //     k++;
  //   }

    var aux2 = 0;
    for (var j = 0; j < arrayRepNumeroPeriodo.length; j++) {
      for (var k = 0; k < (arrayRepNumeroPeriodo[j]); k++) {
        var json = {
          "numeroPeriodo": creditobalance[aux2].numeroPeriodo,
          "nombreCredito":creditobalance[aux2].nombreCredito,
          "monto":creditobalance[aux2].monto
        }
          arrayDecisionesCreditos.push(json);
        //arrayDecisionesCreditos[j]['productos'].push(json);
       aux2 = aux2 + 1;
      }
    }
  return arrayDecisionesCreditos;
}

module.exports = router;
