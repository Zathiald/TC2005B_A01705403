const express = require('express');
const router = express.Router();
const extrasController = require('../controllers/extra.controller');

router.get('/sorpresa',extrasController.get_sorpresa);

router.get('/info',extrasController.get_info);

router.get('/emulador',extrasController.get_emulador);

module.exports = router;
