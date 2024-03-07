const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

router.get('/', mainController.get_home);
router.get('/amor', mainController.get_amor);
router.get('/tiempo', mainController.get_tiempo);
router.get('/vida', mainController.get_vida);
router.get('/poemaamor', mainController.get_poemaamor);


module.exports = router;