const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const extrasController = require('../controllers/extra.controller');

router.get('/sorpresa', isAuth,extrasController.get_sorpresa);

router.get('/info', isAuth, extrasController.get_info);

router.get('/emulador',isAuth,extrasController.get_emulador);

module.exports = router;
