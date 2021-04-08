const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config({path: '../.env'});
require('./db/db');

//Rutas
const routes = require('./routes/routes');
//Fin Rutas

//Middlewares
app.use(morgan('dev'));
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', routes);
//Fin middlewares


app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log(`Server running on port:${app.get("port")}`);
});

module.exports = app;