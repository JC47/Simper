const express = require('express');
const router = express.Router();
const Promise = require("bluebird");
const prestamo = require('../models/prestamo');
const array = [];
//var pagoT = [];
var aux=0;
var iteraciones=0;

//MODIFICAR CON EL NUEVO OBJETO QUE SE CREARÁ PARA CADA UNA DE LAS CONSULTAS DE CREDITO
router.get('/', (req, res, next) => {
  Promise.resolve()
  .then(function () {
    return prestamo.getCredito();
  })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

router.post('/addcredito', (req, res, next) => {
  var nombreCredito = req.body.nombreCredito;
  var montoMin = req.body.montoMin;
  var montoMax = req.body.montoMax;
  var pago = req.body.pago;
  var pagoAnticipado = req.body.pagoAnticipado;
  var pagosCredito = req.body.pagosCredito;
  var t = req.body.tipo;

  Promise.resolve()
  .then(function () {
    console.log("tipo",t);
    var p = pagosCredito.length;
    var json = {
      "nombreCredito":nombreCredito,
      "montoMin":montoMin,
      "montoMax":montoMax,
      "pago":pago,
      "tipo":t,
      "pagoAnticipado":pagoAnticipado,
      "plazo":p
    }
    return prestamo.addCredito(json);
  })
  .then(function () {
    return prestamo.getLastIdCredito();
  })
  .then(function (lastIdCredito) {
    var ultimoId = JSON.stringify(lastIdCredito[0].idCredito);

    return prestamo.addPagoCredito(ultimoId,pagosCredito);
  })
  .then(function(data){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

router.get('/deletecredito/:idCredito', (req, res, next) => {
  var idCredito = req.params.idCredito;
  console.log("Perro",idCredito);

  Promise.resolve()
  .then(function () {
    return prestamo.deleteCredito(idCredito);
  })
  .then(function(data){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});
//PENDIENTE
router.post('/modifycredito', (req, res, next) => {
  var idCredito = req.body.idCredito;
  var nombreCredito = req.body.nombreCredito;
  var montoMin = req.body.montoMin;
  var montoMax = req.body.montoMax;
  var pagoAnticipado = req.body.pagoAnticipado;
  var pagosTotales = req.body.pagosTotales;

  Promise.resolve()
  .then(function () {
    console.log("tipo",t);
    var json = {
      "nombreCredito": nombreCredito,
      "montoMin": montoMin,
      "montoMax": montoMax,
      "pagoAnticipado": pagoAnticipado
    }
    return prestamo.updateCredito(json,idCredito);
  })
  .then(function () {
    return prestamo.updatePagoCredito(idCredito,pagosTotales);
  })
  .then(function (){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

router.post('/getPrestamos', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve().then(function(){
    return prestamo.getFinanciamientos(idProyecto,numeroPeriodo);
  }).then(function(rows) {
    res.json({success:true,datos:rows,msg:"Bien"});
  }).catch(function (err) {
    console.log(err);
    res.json({success:false,msg:"Mal"});
  })
});

router.post('/getPagos', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve().then(function(){
    return prestamo.getPagos(idProyecto,numeroPeriodo);
  }).then(function(pagos){
    return gPagos(pagos);
  }).then(function(rows) {
    res.json({success:true,datos:rows,msg:"Bien"});
  }).catch(function (err) {
    console.log(err);
    res.json({success:false,msg:"Mal"});
  })
});

router.post('/getIntereses', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.join(prestamo.getFinanciamientos(idProyecto,numeroPeriodo),prestamo.getPagos(idProyecto,numeroPeriodo),
              function(prestamos,pagos){
                return getIntereses(prestamos,pagos);
              }).then(function(salida){
                return res.json({success:true,msg:"Sirve",datos:salida});
              }).catch(function(err){
                return res.json({success:false,msg:"No sirve"});
              });
});

router.get('/getcredito', (req, res, next) => {

  Promise.join(prestamo.getCredito(),prestamo.distinctIdCredito(),prestamo.getPagoCredito(),
    function(credito, idscreditos, pagoscreditos) {
      return jsonCredito(credito,idscreditos,pagoscreditos);
    })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

router.post('/deleteactivo', (req, res, next) => {
  var idCredito = req.body.idCredito;
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve()
  .then(function () {
    return prestamo.deleteCreditoActivoNumP(idCredito,idProyecto,numeroPeriodo);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

router.post('/getAmortizacion', (req,res,next) => {
  var idCredito = req.body.idCredito;
  var idProyecto = req.body.idProyecto;

  Promise.resolve()
  .then(function(){
    return prestamo.getAmortizacion(idProyecto,idCredito);
  })
  .then(function(rows){
    res.json({success:true,datos:rows,msg:"Bien"});
  })
  .catch(function(err){
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

router.get('/getCreditosBalance/:idProyecto', (req,res,next) => {

  Promise.resolve().then(function(){
    return prestamo.getCreditosBalance(req.params.idProyecto);
  }).then(function(rows){
    res.json({success:true,datos:rows,msg:"Bien"});
  }).catch(function(err){
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

//valida cuentos creditos activos tiene cada proyecto. Max dos
// y cuenta descuenta los periodos faltantes para eligir un nuevo credito
router.post('/validacreditos', (req,res,next) => {
  //var idCredito = req.body.idCredito;
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  var limite;
  var arrayIdCredito = [];
  Promise.join(prestamo.getCreditosActivos(idProyecto, numeroPeriodo),prestamo.getIdCreditosActivos(idProyecto,numeroPeriodo),
   function(activos, idsactivos) {
     if (activos[0].creditosactivos<2) {
       //bloquea
       limite = 0;//limite: 0 puede escoger otro credito.
     }else if (activos[0].creditosactivos==2) {
       //bloquea
       limite = 1;//limite: 1 ya no puede escoger más
     }
     for (var i = 0; i < idsactivos.length; i++) {
       arrayIdCredito.push(idsactivos[i]);
     }
     var json = {
       "idsCredito":arrayIdCredito,
       "limite":limite
     }
      return json
    })
  .then(function(json){
    res.json({success:true, datos:json.idsCredito, limite:json.limite, msg:"Bien"});
  })
  .catch(function(err){
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

//Esta ruta se llamará para validar que cada plazo sujeto a cada crédito sea descontado en su respectivo cambio de periodo
//e.i, cada plazo del periodo se irá descontando hasta llegar a 0 cada que se cambie de periodo
router.post('/validaperiodos', (req,res,next) => {
  //el numero de periodo se lo tienen que ir dando consecutivo al momento de ir validando los periodos
  //en la regresión, ya no importa qué número de periodo le estemos pasando
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;//numero del Periodo en donde esté situado el usuario
  var arrayFaltantes = [];
  var arrayCreditosActivos = [];
  var coincidenciasCreditoActivo = [];

  Promise.join(
    prestamo.getCreditoActivoByNumeroPeriodo(idProyecto,numeroPeriodo),
    prestamo.getCreditoActivo(idProyecto),
    prestamo.getIdsCredito(idProyecto,numeroPeriodo),
    function(creditoactivonump,creditoactivo,idscreditos) {
      arrayCreditosActivos = creditoactivo;
      return jsonMaxNumeroPeriodo(creditoactivonump,idscreditos);
    })
    .then(function (creditoactivonumeroperiodo) {
        arrayFaltantes = periodosFaltantes(creditoactivonumeroperiodo);
        coincidenciasCreditoActivo = interseccionCreditoActivo(arrayFaltantes,arrayCreditosActivos);
        arrayFaltantes = eliminaDuplicados(coincidenciasCreditoActivo,arrayFaltantes);
        return prestamo.addCreditoActivoMul(arrayFaltantes);
      })
    .then(function () {
      return prestamo.getCreditoActivoRegresion(idProyecto,numeroPeriodo);
      })
    .then(function(rows){
      res.json({success:true, msg:"Bien"});
    })
  .catch(function(err){
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});
//HISTORIAL CREDITOS ACTIVOS EN TODOS LOS PERIODOS
//NO BORRAR
// router.post('/historialcreditosregresion/', (req,res,next) => {
//   var idProyecto = req.body.idProyecto;
//   var numeroPeriodo = req.body.numeroPeriodo;
//
//   Promise.join(
//     prestamo.getCreditoActivoRegresion(idProyecto,numeroPeriodo),
//     prestamo.getIdCreditoPlazo(),
//     function (creditoactivoregresion,idcreditoplazo) {
//     return jsonCreditosActivosRegresion(creditoactivoregresion,idcreditoplazo);
//   })
//   .then(function(rows){
//     res.json({success:true,datos:rows,msg:"Bien"});
//   })
//   .catch(function(err){
//     console.error("got error: " + err);
//     res.json({success:false, msg:"No sirve"});
//   });
// });

router.post('/regresioncreditos/', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.join(
    prestamo.getCreditosActivoPorPeriodo(idProyecto,numeroPeriodo),
    prestamo.getCreditosTerminados(idProyecto,numeroPeriodo),
    function(creditosactivosporperiodo,creditoterminados) {
      // var a = [{ "idCredito": 1},{"idCredito":2},{"idCredito":1}];
      // var b = [{ "idCredito": 1}];
      return diferencia(creditoterminados,creditosactivosporperiodo)
    })
  .then(function(rows){
    res.json({success:true,datos:rows,msg:"Bien"});
  })
  .catch(function(err){
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

// amortizacion y creditobalance
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.post('/amortizacioncreditobalance', (req, res, next) => {

var idCredito = req.body.idCredito;
var idProyecto = req.body.idProyecto;
var numeroPeriodo = req.body.numeroPeriodo;
var monto = req.body.monto;
var fina;
var interes;
var pago;
var saldo;
var pagoCapital;
var capital;
var pagoT = [];
var TIR;
var pagoAnticipado;
var tipo;
var pagoTotal;
var anticipo;
var limite1;
var limite2;

var limitecredito=0;

Promise.join(prestamo.getPagoAnticipado(idCredito),prestamo.getPagosCredito(idCredito),
            prestamo.getFinanEspecifico(idProyecto,numeroPeriodo,idCredito),
            prestamo.limiteCreditos1(idProyecto,numeroPeriodo),prestamo.limiteCreditos2(idProyecto,numeroPeriodo),
            function(pagoanticipado,pagoscreditos,financiamiento,limitecredito1,limitecredito2) {

     fina = financiamiento;
     tipo = pagoanticipado[0].tipo;//1,2,3
     pagoAnticipado = pagoanticipado[0].pagoAnticipado;//1 o saldo
     pagoTotal = pagoscreditos;

     //limitantes de creditos
     limite1 = limitecredito1[0].limiteCredito1;
     limite2 = limitecredito2[0].limiteCredito2;

    //Valores Iniciales para CAPITAL

      if (tipo == 2) {//Es 0 cuando no existen pagos anticipados
          capital = monto;
          anticipo = 0;
      }else {
          if(tipo == 1){
            var pagoAntPorc = (pagoAnticipado)/(100);
            capital = monto - monto*pagoAntPorc;
            anticipo = monto*((pagoAnticipado)/(100));
          }else {
            capital = monto
            anticipo = monto*((pagoAnticipado)/(100));
          }
      }
      //Valores Iniciales para porcentajes de pagos totales

      for (var i = 0; i < pagoTotal.length; i++) {
        pagoT.push(monto*((pagoTotal[i].pagosCredito)/(100)));
      }

      for (var i = 0; i < pagoT.length; i++) {
            console.log("pagoT: "+pagoT[i]);
      }
      if(financiamiento.length > 0){
        return prestamo.eliminarAmortizacion(idCredito,idProyecto);
      }
      else{
        return console.log("ok");
      }
  })

  .then(function () {
    console.log("pagoAnticipado: "+pagoAnticipado);
    for (var i = 0; i < pagoTotal.length; i++) {
      console.log("pagoTotal: "+pagoTotal[i].pagosCredito);
    }
   return porcentajesPagos(monto,pagoAnticipado,pagoTotal,tipo);
  })
  .then(function (pagosTotales) {
     for (var i = 0; i < pagosTotales.length; i++) {
     console.log("pagosTotales: "+pagosTotales[i]);
     }
    TIR = IRR(pagosTotales);
    return console.log("hola");;
  })
  .then(function () {
    console.log("TIR: "+ TIR);
    aux=0;
    return amortizacion(TIR,capital,pagoT,monto,pagoTotal);
  })
  .then(function (json) {
    return prestamo.addAmortizacion(numeroPeriodo,idProyecto,idCredito,json);
  })
  .then(function () {
    var json = {
      "credito_idCredito":idCredito,
      "Proyectos_idProyecto":idProyecto,
      "numeroPeriodo":numeroPeriodo,
      "monto":monto,
      "anticipo": anticipo
    }
//    console.log("fina: ", fina);
    if(fina.length > 0){
      console.log("updateCreditoBalance");
      console.log("json: ",json);
      return prestamo.updateCreditoBalance(json,idProyecto,numeroPeriodo,idCredito);
    }else {
        console.log("addCreditoBalance");
        return prestamo.addCreditoBalance(json);
      }
  })
  .then(function () {
    return prestamo.plazoCredito(idCredito);
  })
  .then(function (plazo) {
    console.log("plazo: ",plazo);
    console.log("plazo[0].plazocredito: ",plazo[0].plazocredito);
    var json = {
      "idCredito":idCredito,
      "idProyecto":idProyecto,
      "numeroPeriodo":numeroPeriodo,
      "plazo":plazo[0].plazocredito
    }
    return prestamo.addCreditoActivo(json);
  })
.then(function(){
  res.json({success: true,  msg:"Operacion exitosa"});
  array.length=0;
  pagoT.length=0;
  aux=0;
})
.catch(function (err) {
  console.error("got error: " + err);
  res.json({success:false, msg:"No sirve"});
  });
});

router.post('/deletecreditobalance', (req, res, next) => {
  var idCredito = req.body.idCredito;
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve()
  .then(function () {
      return prestamo.deleteCreditoBalance(idCredito,idProyecto,numeroPeriodo);
  }).then(function(){
    return prestamo.eliminarAmortizacion(idCredito,idProyecto,numeroPeriodo);
  }).then(function(){
    return prestamo.getFinanciamientos(idProyecto,numeroPeriodo);
  })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

router.post('/getActivos', (req,res,next) => {
  var idProyecto =req.body.idProyecto;
  Promise.resolve()
  .then(function () {
      return prestamo.returnActivos(idProyecto);
  }).then(function(rows){
    res.json({success:true,datos:rows,msg:"Ok"});
  }).catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.post('/veramortizacion', (req, res, next) => {

  var idCredito = req.body.idCredito;
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  var monto;
  var interes;
  var pago;
  var saldo;
  var pagoCapital;
  var capital;
  var pagoT = [];
  var TIR;
  var pagoAnticipado;
  var tipo;
  var pagoTotal;


  Promise.join(prestamo.getPagoAnticipado(idCredito),prestamo.getPagosCredito(idCredito),prestamo.getMonto(idCredito,idProyecto,numeroPeriodo),
    function(pagoanticipado, pagoscreditos, credito) {
      console.log("pagoanticipado: "+pagoanticipado.pagoAnticipado);
       pagoAnticipado = pagoanticipado[0].pagoAnticipado;
       tipo = pagoanticipado[0].tipo;//1,2,3
       pagoTotal = pagoscreditos;
       console.log("Monto",credito);
       monto = credito[0].monto;
      //Valores Iniciales para CAPITAL
      if (tipo == 2) {//Es 0 cuando no existen pagos anticipados
          capital = monto;
          anticipo = 0;
      }else {
          if(tipo == 1){
            var pagoAntPorc = (pagoAnticipado)/(100);
            capital = monto - monto*pagoAntPorc;
            anticipo = monto*((pagoAnticipado)/(100));
          }else {
            capital = monto
            anticipo = monto*((pagoAnticipado)/(100));
          }
      }
      //Valores Iniciales para porcentajes de pagos totales

      for (var i = 0; i < pagoTotal.length; i++) {
        pagoT.push(monto*((pagoTotal[i].pagosCredito)/(100)));
      }

  for (var i = 0; i < pagoT.length; i++) {
        console.log("pagoT: "+pagoT[i]);
  }
  return console.log("ok");
    })

    .then(function () {
      console.log("pagoAnticipado: "+pagoAnticipado);
  for (var i = 0; i < pagoTotal.length; i++) {
    console.log("pagoTotal: "+pagoTotal[i].pagosCredito);
  }
     return porcentajesPagos(monto,pagoAnticipado,pagoTotal,tipo);
    })
    .then(function (pagosTotales) {
       for (var i = 0; i < pagosTotales.length; i++) {
       console.log("pagosTotales: "+pagosTotales[i]);
       }
      TIR = IRR(pagosTotales);
      return console.log("hola");
    })
    .then(function () {
      console.log("TIR: "+ TIR);
      aux=0;
      return amortizacion(TIR,capital,pagoT,monto,pagoTotal);
    })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
    array.length=0;
    pagoT.length=0;
    aux=0;
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false, msg:"No sirve"});
  });
});

function IRR(CArray) {

  min = 0.0;
  max = 1.0;
  do {
    guest = (min + max) / 2;
    NPV = 0;
    for (var j=0; j<CArray.length; j++) {
          NPV += CArray[j]/Math.pow((1+guest),j);
    }
    if (NPV > 0) {
      min = guest;
    }
    else {
      max = guest;
    }
  } while(Math.abs(NPV) > 0.000001);
  return guest;
}

//pago anticipado es un número que deberá expresarse en %
//pagoTotal
function porcentajesPagos(monto,pagoAnticipado,pagoTotal,tipo) {
  var pagoT = [];

  if (tipo == 2 || tipo == 3) {//Es 1 cuando no existen pagos anticipados
      pagoT.push(-monto);
  }else {
      var pagoAntPorc = (pagoAnticipado)/(100);
      var pagoA = monto - monto*pagoAntPorc;
      pagoT.push(-pagoA);
  }

  for (var i = 0; i < pagoTotal.length; i++) {
    pagoT.push(monto*((pagoTotal[i].pagosCredito)/(100)));
  }
  return pagoT;
}

function amortizacion(TIR,capital,pagoT,monto,pagoTotal) {

for (var i = 0; i < pagoT.length; i++) {
  console.log("aux: "+aux);
  console.log( "i: "+i);
  console.log("pagoT[i]: "+pagoT[i]);
}
  var capital2 = Math.round(capital);

  interes = (capital*TIR);
  var interes2 = Math.round(interes);

  saldo = (capital + interes - pagoT[aux]);
  var saldo2 = saldo.toFixed(2);
  saldo2 = Math.round(saldo);

  pagoCapital = pagoT[aux] - interes;
  var pagoCapital2 = Math.round(pagoCapital);

  console.log("capital: "+capital);
  console.log("interes: "+interes);
  console.log("pago: "+pagoT[aux]);
  console.log("saldo: "+saldo);
  console.log("pagoCapital: "+pagoCapital);

  var json = {
    "capital":capital2,
    "interes":interes2,
    "pago":pagoT[aux],
    "saldo":saldo2,
    "pagoCapital":pagoCapital2
  };

  toJSON(json)

  if (/*pagoTotal.length>iteraciones*/saldo2>0/*capital2>saldo2*/) {
    console.log("saldo2: "+saldo2);
  iteraciones = iteraciones + 1;
  aux = aux + 1;
  capital = saldo;
  amortizacion(TIR,capital,pagoT,monto,pagoTotal);
  }
  return array;
}

function toJSON(json) {
  return array.push(json);
}

function jsonCredito(credito,idscreditos,pagoscreditos) {

  var repIdCreditos = [];//almacena las veces que se repite un idCredito en pagoCredito

  var i = 0;
  while (i<idscreditos.length) {
    var aux = 0;
    for (var j = 0; j < pagoscreditos.length; j++) {
      if (idscreditos[i].idCredito == pagoscreditos[j].idCredito) {
        aux = aux +1;
      }
    }
    repIdCreditos.push(aux);
    i++;
  }
//console.log(repIdCreditos);

  var creditosArray = []
  var k = 0;

  while (k < idscreditos.length) {
    for (var i = 0; i < credito.length; i++) {
      if (idscreditos[k].idCredito == credito[i].idCredito) {
        var json = {
          "idCredito":credito[i].idCredito,
          "nombreCredito":credito[i].nombreCredito,
          "pago":credito[i].pago,
          "plazo":credito[i].plazo,
          "montoMin":credito[i].montoMin,
          "montoMax":credito[i].montoMax,
          "pagoAnticipado":credito[i].pagoAnticipado,
          "pagosTotales":[]
        }
      creditosArray.push(json);
      }
    }
    k++;
  }

//console.log(creditosArray);

var aux2 = 0;
for (var j = 0; j < repIdCreditos.length; j++) {
  for (var k = 0; k < (repIdCreditos[j]); k++) {
    var json = {
      "idPagoCredito":pagoscreditos[aux2].idPagoCredito,
      "pagosCredito":pagoscreditos[aux2].pagosCredito
    }
    creditosArray[j]['pagosTotales'].push(json);
    aux2 = aux2 + 1;
  }
}
//console.log(creditosArray);
  return creditosArray;
}

function periodosFaltantes(creditoactivonumeroperiodo) {
//si nvoplazo == 0 borra el registro de creditoactivo
//si nvoplazo!=0 continua en creditoactivo y actualiza el valor del atributo plazo
var periodos = [];

for (var i = 0; i < creditoactivonumeroperiodo.length; i++) {//2

  if (creditoactivonumeroperiodo[i].plazo==0) {
    //si los plazos de pago llegan a cero en el periodo donde se encuentra
    // actualizamos el valor a 0. Disponible
    var json = {
      "idCredito":creditoactivonumeroperiodo[i].idCredito,
      "idProyecto":creditoactivonumeroperiodo[i].idProyecto,
      "numeroPeriodo":creditoactivonumeroperiodo[i].numeroPeriodo,
      "plazo":0//,
//      "activo":0
    }
    periodos.push(json);
  }else {
    var nvoplazo = creditoactivonumeroperiodo[i].plazo - 1
    if (nvoplazo==0) {
      var json = {
        "idCredito":creditoactivonumeroperiodo[i].idCredito,
        "idProyecto":creditoactivonumeroperiodo[i].idProyecto,
        "numeroPeriodo":creditoactivonumeroperiodo[i].numeroPeriodo + 1,
        "plazo":nvoplazo//,
        //"activo":0
      }
    }else {
      var json = {
        "idCredito":creditoactivonumeroperiodo[i].idCredito,
        "idProyecto":creditoactivonumeroperiodo[i].idProyecto,
        "numeroPeriodo":creditoactivonumeroperiodo[i].numeroPeriodo + 1,
        "plazo":nvoplazo//,
        //"activo":1
      }
    }
    console.log("json: ",json);
    periodos.push(json);
    }
  }
  return periodos;
}

function getIntereses(prestamos,pagos){
  console.log(prestamos,pagos);
  var p = [];
  var T = 0;
  for(let key in prestamos){
    T += prestamos[key].anticipo;
  }
  for(let key1 in pagos){
    if(pagos[key1].tipo != 1){
    T += pagos[key1].intereses;
    }
  }
  p.push(T);
  return p;
}

function gPagos(pagos){
  var PPagar = 0;
  for(let key in pagos){
    if(pagos[key].tipo == 1){
      PPagar += pagos[key].pagoCapital + pagos[key].intereses;
    }
    else{
    PPagar += pagos[key].pagoCapital;
    }
  }
  return PPagar;
}

function jsonMaxNumeroPeriodo(creditoactivonump,idscreditos){
  var repIdCreditoActivo = [];//almacena las veces que se repite un idProducto en zonas de la tabla productozonaproyecto join producto
  var i = 0;

  while (i<idscreditos.length) {
    var aux = 0;
    for (var j = 0; j < creditoactivonump.length; j++) {
      if (idscreditos[i].idCredito == creditoactivonump[j].idCredito) {
        aux = aux +1;
      }
    }
    repIdCreditoActivo.push(aux);
    i++;
  }

var aux = 0;
var arrayCreditoActivo = [];

for (var k = 0; k < repIdCreditoActivo.length; k++) {
  for (var l = 0; l < repIdCreditoActivo[k]; l++) {
    aux = aux + 1;
  }
      console.log("aux: ", aux);

  var json = {
    "idCredito":creditoactivonump[aux-1].idCredito,
    "idProyecto":creditoactivonump[aux-1].idProyecto,
    "numeroPeriodo":creditoactivonump[aux-1].numeroPeriodo,
    "plazo":creditoactivonump[aux-1].plazo
  }
    arrayCreditoActivo.push(json);
}

return arrayCreditoActivo;
}

function interseccionCreditoActivo(arrayFaltantes,arrayCreditosActivos) {
    var coincidenciasCreditoActivo = [];
    for (var i = 0; i < arrayFaltantes.length; i++) {
      for (var j = 0; j < arrayCreditosActivos.length; j++) {
        if ( (arrayFaltantes[i].idCredito == arrayCreditosActivos[j].idCredito) && (arrayFaltantes[i].idProyecto == arrayCreditosActivos[j].idProyecto) &&
             (arrayFaltantes[i].plazo == arrayCreditosActivos[j].plazo) && (arrayFaltantes[i].numeroPeriodo == arrayCreditosActivos[j].numeroPeriodo)) {
               var json = {
                 "idCredito":arrayFaltantes[i].idCredito,
                 "idProyecto":arrayFaltantes[i].idProyecto,
                 "numeroPeriodo":arrayFaltantes[i].numeroPeriodo,
                 "plazo":arrayFaltantes[i].plazo
               };
              coincidenciasCreditoActivo.push(json);
        }
      }
    }
    return coincidenciasCreditoActivo;
}

function eliminaDuplicados(coincidenciasCreditoActivo,arrayFaltantes) {
  for (var i = 0, len = coincidenciasCreditoActivo.length; i < len; i++) {
      for (var j = 0, len2 = arrayFaltantes.length; j < len2; j++) {
          if ((coincidenciasCreditoActivo[i].idCredito === arrayFaltantes[j].idCredito) && (coincidenciasCreditoActivo[i].idProyecto === arrayFaltantes[j].idProyecto) &&
               (coincidenciasCreditoActivo[i].plazo === arrayFaltantes[j].plazo) && (coincidenciasCreditoActivo[i].numeroPeriodo === arrayFaltantes[j].numeroPeriodo)) {
              arrayFaltantes.splice(j, 1);
              len2=arrayFaltantes.length;
          }
      }
  }
//  console.log("1 arrayFaltantes:: ",arrayFaltantes);
//  console.log("2 coincidenciasCreditoActivo:: ",coincidenciasCreditoActivo);
  return arrayFaltantes;
}

function diferencia (a1, a2) {

    var arrayAux = [], resta = [];

    for (var i = 0; i < a1.length; i++) {
        arrayAux[a1[i].idCredito] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (arrayAux[a2[i].idCredito]) {
            delete arrayAux[a2[i].idCredito];
        } else {

            arrayAux[a2[i].idCredito] = true;
            var json = {
              "idCredito":a2[i].idCredito,
              "numeroPeriodo":a2[i].numeroPeriodo
            }
            resta.push(json);
                //    console.log("a2[i].idCredito: ",a2[i].idCredito);

        }
    }
//console.log("arrayAux:: ",arrayAux);
    // for (var k in arrayAux) {
    //   var json = {
    //     "idCredito":k
    //   }
    //     resta.push(json);
    // }
    return resta;
}

// function eliminaDuplicadosCreditos(creditoterminados,creditosactivosporperiodo) {
//
//   function comparer(otherArray){
//     return function(current){
//       return otherArray.filter(function(other){
//         return other.idCredito == current.idCredito
//       }).length == 0;
//     }
//   }
//
//   var onlyInA = creditoterminados.filter(comparer(creditosactivosporperiodo));
//   var onlyInB = creditosactivosporperiodo.filter(comparer(creditoterminados));
//
//   result = onlyInA.concat(onlyInB);
//
//   console.log("result:: ",result);
//
//
//   return result;
// }

function jsonProductosSinDesarrollar(productozonasindes,idszonasindes,zonas) {

  var repIdProductosSinDes = [];//almacena las veces que se repite un idZona en productozonasindes

  var i = 0;
  while (i<idszonasindes.length) {
    var aux = 0;
    for (var j = 0; j < productozonasindes.length; j++) {
      if (idszonasindes[i].Zona_idZonas == productozonasindes[j].Zona_idZonas) {
        aux = aux +1;
      }
    }
    repIdProductosSinDes.push(aux);
    i++;
  }
//console.log(repIdProductosSinDes);
var zonaArray = []
var k = 0;

while (k < idszonasindes.length) {
  for (var i = 0; i < zonas.length; i++) {
    if (idszonasindes[k].Zona_idZonas == zonas[i].idZona) {
      var json = {
        "idZona":idszonasindes[k].Zona_idZonas,
        "nombreZona":zonas[i].nombreZona,
        "productosSinDes":[]
      }
    zonaArray.push(json);
    }
  }
  k++;
}

var aux2 = 0;
for (var j = 0; j < repIdProductosSinDes.length; j++) {
  for (var k = 0; k < (repIdProductosSinDes[j]); k++) {
    zonaArray[j]['productosSinDes'].push(productozonasindes[aux2].Producto_idProducto);
   aux2 = aux2 + 1;
  }
}

console.log(zonaArray);

  return zonaArray;
}
//NO BORRAR
//Historial de creditos activos que hay al momento de hacer la regresión
// function jsonCreditosActivosRegresion(creditoactivoregresion,idcreditoplazo) {
//
//   var arrayOrdenCreditos = [];//almacena las veces que se repite un idCreditoActivo en orden en el que se pidieron
//   var i = 0;
//   while (i<creditoactivoregresion.length) {
//     for (var j = 0; j < idcreditoplazo.length; j++) {
//       if ((creditoactivoregresion[i].idCredito == idcreditoplazo[j].idCredito) && (creditoactivoregresion[i].plazo == idcreditoplazo[j].plazo)) {
//           var json = {
//             "idCredito":creditoactivoregresion[i].idCredito
//           };
//           arrayOrdenCreditos.push(json);
//       }
//     }
//     i++;
//   }
// //return console.log("arrayOrdenCreditos:: ",arrayOrdenCreditos);
// return arrayOrdenCreditos;
// }

module.exports = router;
