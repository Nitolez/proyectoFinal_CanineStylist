const express = require('express');
const serviciosController = require("../controllers/servicios.controller");
const router = express.Router();

router.get('/', serviciosController.getAllServicios);
router.get('/:nombre', serviciosController.getServicioByNombre);
router.post('/',serviciosController.createServicio);
router.put('/:nombre', serviciosController.updateServicioByNombre);
router.delete('/:nombre', serviciosController.deleteServicioByNombre);

module.exports = router;