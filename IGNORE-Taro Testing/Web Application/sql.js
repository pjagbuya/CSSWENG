const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "master",
    password: "master",
    database: "Luzon"
});

function query(query){
    return new Promise((resolve, reject) => {
        connection.query(query, function (err, result, fields) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        }) //sql.query
    }) //promise
} //function

function query(query, data){
    return new Promise((resolve, reject) => {
        connection.query(query, data, function (err, result, fields) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        }) //sql.query
    }) //promise
} //function

module.exports = {
    connection,
    query
}