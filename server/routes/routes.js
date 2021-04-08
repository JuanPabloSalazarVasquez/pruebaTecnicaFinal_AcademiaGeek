//Se importan módulos necesarios
const {Router} = require('express');
const router = Router();
const{ 
    getMain,
    getAllArticles,
    getAllOrders,
    getOrderCount
} = require('./controller');


// Se realiza la creación de cada una de las rutas para las peticiones
router.get('/',getMain);
router.get('/getAllArticles',getAllArticles);
router.get('/getAllOrders',getAllOrders);
router.get('/getOrderCount',getOrderCount);

module.exports = router;