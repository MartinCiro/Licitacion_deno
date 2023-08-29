const { Router } = require('express');

// api handlers
const { validarUserApi, crearUserApi, delUserApi, updateUserApi, obtenerProductosApi} = require('../api/clientes.api');

const router = Router();

/**
 *  {
 *     body: {
 *          user: string, 
 *          pass: string,
 *      },
 *      
 *  }
 */
router.post('/createUser', crearUserApi);
router.post('/validate', validarUserApi);
router.delete('/deleteUser', delUserApi);
router.post('/updateUser', updateUserApi);
router.get('/productos', obtenerProductosApi);
module.exports = router;


