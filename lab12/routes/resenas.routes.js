const express = require('express');
const router = express.Router();
const resenasController = require('../controllers/resenas.controller');

router.get('/una-ruta', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'el-archivo.html'));
});

router.get('/escriberesena', resenasController.get_escriberesena);
router.post('/escriberesena', resenasController.post_escriberesena);
router.get('/consultaresena', resenasController.get_resena);

module.exports = router;