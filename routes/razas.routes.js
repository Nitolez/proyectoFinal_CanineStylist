const express = require('express');
const razasController = require("../controllers/razas.controller");
const router = express.Router();

router.get('/', razasController.getAllRazas);
router.get('/:nombre', razasController.getRazaByNombre);
router.post('/',razasController.createRaza);
router.put('/:nombre', razasController.updateRazaByNombre);
router.delete('/:nombre', razasController.deleteRazaByNombre);

module.exports = router;