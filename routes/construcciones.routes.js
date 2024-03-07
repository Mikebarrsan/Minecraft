const express = require('express');
const router = express.Router();
const construccionesController = require('../controllers/construcciones.controller');

router.get('/una-ruta', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'el-archivo.html'));
});

router.get('/construir', construccionesController.get_construir);
router.post('/construir', construccionesController.post_construir);
router.get('/', construccionesController.get_root);

module.exports = router;