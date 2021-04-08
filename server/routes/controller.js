/*const createToken = require('./services')*/
require('dotenv').config({ path: '../.env' });
const { connection } = require('../db/db');
const {
    generateDate,
    generateHour
} = require('../functions/functions')

module.exports = {
    getMain: (req, res) => {
        res.send('<h1>Bienvenido a la API</h1>');
    },

    getAllArticles: async (req, res) => {
        connection.query('SELECT * FROM `articulos`', (error, result) => {
            if (error) throw error;
            if (result.length > 0) {
                res.json(result);
            } else {
                res.sendStatus(500);
            }
        })
    },

    getAllOrders: async (req, res) => {
        connection.query('SELECT * FROM `ordenes`', (error, result) => {
            if (error) throw error;
            if (result.length > 0) {
                res.json(result);
            } else {
                res.sendStatus(500);
            }
        })
    },

    getOrderCount: async (req, res) => {
        connection.query('SELECT COUNT(numero_orden) AS numeroDeOrdenes FROM `ordenes`', (error, result) => {
            if (error) throw error;
            if (result.length > 0) {
                res.json(result);
            } else {
                res.sendStatus(500);
            }
        })
    },

    

}
