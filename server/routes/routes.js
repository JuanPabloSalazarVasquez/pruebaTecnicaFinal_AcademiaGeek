//Se importan módulos necesarios
const {Router} = require('express');
const router = Router();
const {isAuth,isRole} = require('./middlewares');
const{ 
    getMain,
    isRolePage,
    registerBaskets,
    getClient
} = require('./controller');


// Se realiza la creación de cada una de las rutas para las peticiones
router.get('/',getMain);
router.post('/registerBaskets',registerBaskets);
router.get('/getClient',getClient);
router.post('/routeComprobation',isAuth,isRolePage);

module.exports = router;