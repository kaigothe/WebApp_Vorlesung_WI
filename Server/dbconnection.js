var mysql = require('mysql');
var connection = mysql.createPool({
    host: "localhost",
    user: "dataBaseUser",
    password: "1234567890",
    database: "WebApp" 
});
module.exports = connection;