const express = require('express');
const router = express.Router();
const prestamo = require('../models/prestamo');
const array = [];

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
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

router.post('/addcreditobalance', (req, res, next) => {
var idCredito = req.body.idCredito;
var idProyecto = req.body.idProyecto;
var numeroPeriodo = req.body.numeroPeriodo;
var credito = req.body.credito;//= 20000000;// el usuario pedirá el crédito

Promise.resolve()
.then(function () {
  var json = {
    "credito_idCredito":idCredito,
    "Proyectos_idProyecto":idProyecto,
    "numeroPeriodo":numeroPeriodo,
    "credito":credito
  }
  return json;
})
.then(function (json) {
  return prestamo.addCreditoBalance(json);
})
.then(function () {
  if (idCredito == 1) {//3MS
    console.log("ENTRA1");
    var capital = 0;//inicializado con cero para cumplir la primera condición
    var tir1 = 0.125096364968739;//TIR es constante
    var cond1 = 1;//Pago anticipado
    var cond2 = 0.42;//% Pagos durante el préstamo
    var interes;
    var pago;
    var saldo;
    var pagoCapital;
    var jsonAmortizacion = amortizacionRegular(capital,credito,tir1,cond1,cond2);
    return prestamo.addAmortizacion(numeroPeriodo,idProyecto,jsonAmortizacion);
    array.length=0;
  }
  if (idCredito == 2) {//MC
    console.log("ENTRA2");
    var capital = 0;//inicializado con cero para cumplir la primera condición
    //var credito = 15500000;// el usuario pedirá el crédito
    var tir2 = 0.162591906795926;//TIR es constante
    var cond1 = 0.8;//Pago anticipado
    var cond2 = 0.5;//% Pagos durante el préstamo
    var interes;
    var pago;
    var saldo;
    var pagoCapital;
    var jsonAmortizacion = amortizacionRegular(capital,credito,tir2,cond1,cond2);
    console.log("numeroPeriodo: "+numeroPeriodo);
    console.log("idProyecto: "+idProyecto);
    for (var i = 0; i < jsonAmortizacion.length; i++) {
      console.log("jsonAmortizacion[i]: "+jsonAmortizacion[i].pagoCapital);
    }
    return prestamo.addAmortizacion(numeroPeriodo,idProyecto,jsonAmortizacion);
    array.length=0;
  }
  if (idCredito == 3) {//MCLP
    var capital = 0;//inicializado con cero para cumplir la primera condición
    //var credito = 47000000;// el usuario pedirá el crédito
    var tir3 = 0.164026870104938;//TIR es constante
    var cond1 = 0.8;//Pago anticipado
    var cond2 = 0.5;//% Pagos durante el préstamo
    var cond3 = 0.27//% Pagos durante el préstamo
    var interes;
    var pago;
    var saldo;
    var pagoCapital;
    var jsonAmortizacion = amortizacionIrregular(capital,credito,tir3,cond1,cond2,cond3);
    return prestamo.addAmortizacion(numeroPeriodo,idProyecto,jsonAmortizacion);
    array.length=0;
  }
  if (idCredito == 4) {//MSCP
    var capital = 0;//inicializado con cero para cumplir la primera condición
    //var credito = 3100000;// el usuario pedirá el crédito
    var tir4 = 0.176470588235294;//TIR es constante
    var cond1 = 0.85;//Pago anticipado
    var cond2 = 1;//% Pagos durante el préstamo
    var interes;
    var pago;
    var saldo;
    var pagoCapital;
    var jsonAmortizacion = amortizacionRegular(capital,credito,tir4,cond1,cond2);
    return prestamo.addAmortizacion(numeroPeriodo,idProyecto,jsonAmortizacion);
    array.length=0;
  }
//  return console.log("hola");
})
.then(function(){
  res.json({success: true, msg:"Operacion exitosa"});
  array.length=0;
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

router.post('/deletecreditobalance', (req, res, next) => {
  var idCredito = req.body.idCredito;
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve()
  .then(function () {
      return prestamo.deleteCreditoBalance(idCredito,idProyecto,numeroPeriodo);
  })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
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

router.post('/credito3MS', (req, res, next) => {
  var credito = req.body.credito;
  var capital = 0;//inicializado con cero para cumplir la primera condición
  //= 20000000;// el usuario pedirá el crédito
  var tir1 = 0.125096364968739;//TIR es constante
  var cond1 = 1;//Pago anticipado
  var cond2 = 0.42;//% Pagos durante el préstamo
  var interes;
  var pago;
  var saldo;
  var pagoCapital;
  Promise.resolve()
  .then(function () {
      return amortizacionRegular(capital,credito,tir1,cond1,cond2);
  })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
    array.length=0;
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

router.post('/creditoMC', (req, res, next) => {
  var capital = 0;//inicializado con cero para cumplir la primera condición
  //var credito = 15500000;// el usuario pedirá el crédito
  var credito = req.body.credito;
  var tir2 = 0.162591906795926;//TIR es constante
  var cond1 = 0.8;//Pago anticipado
  var cond2 = 0.5;//% Pagos durante el préstamo
  var interes;
  var pago;
  var saldo;
  var pagoCapital;
  Promise.resolve()
  .then(function () {
    return amortizacionRegular(capital,credito,tir2,cond1,cond2);
  })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
    array.length=0;
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

router.get('/creditoMSCP', (req, res, next) => {
  var capital = 0;//inicializado con cero para cumplir la primera condición
  //var credito = 3100000;// el usuario pedirá el crédito
  var credito = req.body.credito;
  var tir3 = 0.176470588235294;//TIR es constante
  var cond1 = 0.85;//Pago anticipado
  var cond2 = 1;//% Pagos durante el préstamo
  var interes;
  var pago;
  var saldo;
  var pagoCapital;
  Promise.resolve()
  .then(function () {
        return amortizacionRegular(capital,credito,tir3,cond1,cond2);
  })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
    array.length=0;
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

router.get('/creditoMCLP', (req, res, next) => {
  var capital = 0;//inicializado con cero para cumplir la primera condición
  //var credito = 47000000;// el usuario pedirá el crédito
  var credito = req.body.credito;
  var tir3 = 0.164026870104938;//TIR es constante
  var cond1 = 0.8;//Pago anticipado
  var cond2 = 0.5;//% Pagos durante el préstamo
  var cond3 = 0.27//% Pagos durante el préstamo
  var interes;
  var pago;
  var saldo;
  var pagoCapital;
  Promise.resolve()
  .then(function () {
        return amortizacionIrregular(capital,credito,tir3,cond1,cond2,cond3);
  })
  .then(function(data){
    res.json({success: true, datos: data, msg:"Operacion exitosa"});
    array.length=0;
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

//CREDITOS

//3MS, MC, MSCP
function amortizacionRegular(capital,credito,tir,cond1,cond2) {

if (capital==0){
  capital = credito*cond1;
}
pago = Math.round(credito*cond2);
var capital2 = Math.round(capital);

interes = (capital*tir);
var interes2 = Math.round(interes);

saldo = (capital + interes - pago);
var saldo2 = saldo.toFixed(2);
saldo2 = Math.round(saldo);

pagoCapital = pago - interes;
var pagoCapital2 = Math.round(pagoCapital);

/*
console.log("capital: "+capital);
console.log("interes: "+interes);
console.log("pago: "+pago);
console.log("saldo: "+saldo);
console.log("pagoCapital: "+pagoCapital);
*/
var json = {
  "capital":capital2,
  "interes":interes2,
  "pago":pago,
  "saldo":saldo2,
  "pagoCapital":pagoCapital2
};

toJSON(json)

while (saldo>0) {
  capital = saldo;
  amortizacionRegular(capital,credito,tir,cond1,cond2);
}
return array;
}

function toJSON(json) {
  return array.push(json);
}

//MCLP
function amortizacionIrregular(capital,credito,tir,cond1,cond2,cond3) {
  if (capital==0){
    capital = credito*cond1;
    pago = Math.round(credito*cond2);
  }else {
    pago = Math.round(credito*cond3);
  }

  var capital2 = Math.round(capital);

  interes = (capital*tir);
  var interes2 = Math.round(interes);

  saldo = (capital + interes - pago);
  var saldo2 = saldo.toFixed(2);
  saldo2 = Math.round(saldo);

  pagoCapital = pago - interes;
  var pagoCapital2 = Math.round(pagoCapital);
/*
console.log("capital: "+capital);
console.log("interes: "+interes);
console.log("pago: "+pago);
console.log("saldo: "+saldo);
console.log("pagoCapital: "+pagoCapital);*/

  var json = {
    "capital":capital2,
    "interes":interes2,
    "pago":pago,
    "saldo":saldo2,
    "pagoCapital":pagoCapital2
  };

  toJSON(json)

  while (saldo>0) {
    capital = saldo;
    amortizacionIrregular(capital,credito,tir,cond1,cond2,cond3);
  }
  return array;
}

module.exports = router;
