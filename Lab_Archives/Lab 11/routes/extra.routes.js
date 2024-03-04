const express = require('express');
const router = express.Router();
const extrasController = require('../controllers/extra.controller');

router.get('/sorpresa',extrasController.get_sorpresa);

router.get('/info',extrasController.get_info);

module.exports = router;
