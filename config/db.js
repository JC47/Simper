var mysql = require('mysql');
var Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


// var pool = mysql.createPool({
//     host: 'shx14.guebs.net',
//     user: 'wwwwcome_basesim',
//     password: 'CaletteEsquivelMelo',
//     database: 'wwwwcome_basesimv1'
// });

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basesimv1'
});

///Zm8:C.2y6gQ:f2

function getSqlConnection() {
    return pool.getConnectionAsync().disposer(function (connection) {
        console.log("Realizando la conexión")
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
