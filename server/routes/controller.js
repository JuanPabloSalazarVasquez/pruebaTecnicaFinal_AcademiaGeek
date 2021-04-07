const createToken = require('./services')
require('dotenv').config({ path: '../.env' });
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const {
    generateDate,
    generateHour
} = require('../functions/functions')

module.exports = {
    getMain: (req, res) => {
        res.send('<h1>Bienvenido a la API</h1>');
    },
    /*
    Validador de rutas respecto el rol
    Nos permite comprobar si el rol del usuario enviado por el token y 
    el enviado desde el cliente son iguales o no, si son iguales procedemos a enviar al cliente que el 
    acceso fue correcto de lo contrario enviamos el acceso denegado*/
    isRolePage: (req, res) => {
        console.log(req.body.typeUser)
        User.find({ _id: req.user.id }, (err, user) => {
            if (err) return res.status(500).send({ message: err })
            if (!user) return res.status(404).send({ message: 'No existe el id' })

            for (let i = 0; i < req.body.typeUser.length; i++) {
                if (req.body.typeUser[i] === user[0].typeUser) return res.status(200).send({ message: "Acceso permitido" });
            }
            return res.status(201).send({ message: 'Acceso denegado' });
        })
    },
    registerBaskets: (req, res) => {
        try {
            const { name, type, description } = req.body;
            Baskets.findOne({ name: name }, async function (err, baskets) {
                if (err) {
                    res.status(500).json({ state: 0, message: err });
                } else {
                    if (!baskets) {
                        let code = parseInt(fs.readFileSync(path.join(__dirname, '../config/createCode.txt')), 10) + 1;
                        fs.writeFileSync(path.join(__dirname, '../config/createCode.txt'), code + "");
                        let newBaskets;
                        if (type === "Empresa") newBaskets = new Baskets({ name, code, type, description });
                        else newBaskets = new Baskets({ name, code, type, description });

                        await newBaskets.save((err, resulset) => {
                            if (err) {
                                res.status(225).json({ message: err.message })
                                console.log(err.message)
                            } else {
                                res.status(201).json({ message: newBaskets });
                            }
                        });
                    } else {
                        res.status(200).json({ message: "Baskets exist" });
                    }
                }
            })
        } catch (e) {
            res.status(500).json({ state: 0, message: e })
        }
    },

    getClient: async (req, res) => {
        const clients = await User.find({ $or: [{ typeUser: 'cliente' }, { typeUser: 'clienteProveedor' }] });
        let namesClients = [];
        for (let i = 0; i < clients.length; i++) {
            namesClients.push(clients[i].name);
        }
        res.json(namesClients);
    }


}

