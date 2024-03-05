const express = require('express');
const router = express.Router();

const controllerUsuarios= require('../controllers/usuarios.controller')

router.get('/login',controllerUsuarios.get_login);

router.get('/login',controllerUsuarios.post_login);

module.exports=router;