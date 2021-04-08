const mysql = require('mysql');
require('dotenv').config({ path: '../.env' });

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
  max: 10,
  idleTimeoutMillis: 600000,
  connectionTimeoutMillis: 2000
});

module.exports = { connection };
