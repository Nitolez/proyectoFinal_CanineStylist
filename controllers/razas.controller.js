const raza = require('../models/razas.model');
const { validationResult } = require('express-validator');


//GET Razas
const getAllRazas = async (req, res) => {
    try {
        const razas = await raza.getAllRazas();
        res.status(200).json(razas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//GET Raza by nombre
const getRazaByNombre = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const razaEncontrada = await raza.getRazaByNombre(nombre);
        if (razaEncontrada) {
            res.status(200).json(razaEncontrada);
        } else {
            res.status(404).json({ error: 'Raza no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//POST Raza

const createRaza = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const nuevaRaza = req.body;
        const razaCreada = await raza.createRaza(nuevaRaza);
        res.status(201).json(razaCreada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PUT Raza

const updateRazaByNombre = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const nuevaRaza = req.body;
        const razaActualizada = await raza.updateRazaByNombre(nombre, nuevaRaza);
        if (razaActualizada) {
            res.status(200).json(razaActualizada);
        } else {
            res.status(404).json({ error: 'Raza no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//DELETE Raza

const deleteRazaByNombre = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const result = await raza.deleteRazaByNombre(nombre);
        if (result > 0) {
            res.status(200).json({ message: 'Raza eliminada' });
        } else {
            res.status(404).json({ error: 'Raza no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllRazas,
    getRazaByNombre,
    createRaza,
    updateRazaByNombre,
    deleteRazaByNombre
};