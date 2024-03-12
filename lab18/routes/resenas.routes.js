const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canWrite = require('../util/can-write');
const resenasController = require('../controllers/resenas.controller');

router.get('/escriberesena', isAuth, canWrite, resenasController.get_escriberesena);
router.post('/escriberesena', isAuth, canWrite, resenasController.post_escriberesena);
router.get('/consultaresena', isAuth, canView, resenasController.get_resena);

module.exports = router;