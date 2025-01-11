const mysql = require('mysql2');
const config = require('./app');

const dbConnection = mysql.createConnection(config.db);

module.exports = dbConnection;