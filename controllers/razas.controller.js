/**
 * @author Antonio González Torres
 * @exports manage404
 * @namespace Controllers
 */
/**
 * @namespace Controllers
 * @description Controladores para manejar las rutas web relacionadas con las razas.
 * @requires ../models/razas.model
 * @requires express-validator
 */

const raza = require('../models/razas.model');
const { validationResult } = require('express-validator');

/**
 * @function getAllRazas
 * @description Obtiene todas las razas de la base de datos.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
const getAllRazas = async (req, res) => {
    try {
        const razas = await raza.getAllRazas();
        res.status(200).json(razas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * @function getRazaByNombre
 * @description Obtiene una raza por su nombre.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
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

/**
 * @function createRaza
 * @description Crea una nueva raza en la base de datos.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
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

/**
 * @function updateRazaByNombre
 * @description Actualiza una raza en la base de datos por su nombre.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
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

/**
 * @function deleteRazaByNombre
 * @description Elimina una raza de la base de datos por su nombre.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
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
