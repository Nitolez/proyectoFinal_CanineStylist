const express = require('express');
const usuariosController = require("../controllers/usuarios.controller");
const router = express.Router();

router.get('/', usuariosController.getAllUsuarios);
router.get('/:email', usuariosController.getUsuarioByEmail);
router.post('/',usuariosController.createUsuario);
router.put('/:email', usuariosController.updateUsuarioByEmail);
router.delete('/:email', usuariosController.deleteUsuarioByEmail);

module.exports = router;