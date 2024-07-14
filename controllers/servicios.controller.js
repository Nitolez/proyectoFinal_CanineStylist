const servicio = require('../models/servicios.model');
const { validationResult } = require('express-validator');


//GET 
const getAllServicios = async (req, res) => {
    try {
        const servicios = await servicio.getAllServicios();
        res.status(200).json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//GET by nombre
const getServicioByNombre = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const servicioEncontrado = await servicio.getServicioByNombre(nombre);
        if (servicioEncontrado) {
            res.status(200).json(servicioEncontrado);
        } else {
            res.status(404).json({ error: 'servicio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//POST

const createServicio = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const nuevoServicio = req.body;
        const servicioCreado = await servicio.createServicio(nuevoServicio);
        res.status(201).json(servicioCreado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PUT 

const updateServicioByNombre = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const nuevoServicio = req.body;
        const servicioActualizado = await servicio.updateServicioByNombre(nombre, nuevoServicio);
        if (servicioActualizado) {
            res.status(200).json(servicioActualizado);
        } else {
            res.status(404).json({ error: 'servicio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//DELETE 

const deleteServicioByNombre = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const result = await servicio.deleteServicioByNombre(nombre);
        if (result > 0) {
            res.status(200).json({ message: 'servicio eliminado' });
        } else {
            res.status(404).json({ error: 'servicio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllServicios,
    getServicioByNombre,
    createServicio,
    updateServicioByNombre,
    deleteServicioByNombre
};