var mysql = require('mysql');
var Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// var pool = mysql.createPool({
//   host: 'shx14.guebs.net',
//   user: 'wwwwcome_basesim',
//   password: 'CaletteEsquivelMelo',
//   database: 'wwwwcome_basesimv1'
// });

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'root',
=======
    password: '',
>>>>>>> d0b2f5e959872b065aeeb1ff4d8c5f0bac56f4b6
    database: 'basesimv1'
});

//G1X9.:59XN7mA:
//ssh wwwwcome@52.16.185.51 -p 333

function getSqlConnection() {
    return pool.getConnectionAsync().disposer(function (connection) {
        console.log("Cerrando la conexión")
        connection.release();
    });
}

function querySql (query, params) {
    return Promise.using(getSqlConnection(), function (connection) {
        console.log("Se ha establecido la conexión");
        if (typeof params !== 'undefined'){
            return connection.queryAsync(query, params);

        } else {
          return connection.queryAsync(query);
        }
    });

};

module.exports = {
    getSqlConnection : getSqlConnection,
    querySql : querySql,
    secret: 'yourSecret'
};
