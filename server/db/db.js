const mysql = require('mysql');
require('dotenv').config({path: '../.env'});

const connection = mysql.createConnection({
  user: "uoqsqtdnuhbpud1o",
  password: "noXzpDlbYYAZvF4fB91A",
  host: "bj0muvtqiabv5m0orj6i-mysql.services.clever-cloud.com",
  database: "bj0muvtqiabv5m0orj6i",
  /*max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000*/
}).then(() => console.log(`Base de datos conectada :)`))
.catch(error => console.error(error));;

connection.connect();

module.exports = { connection };
