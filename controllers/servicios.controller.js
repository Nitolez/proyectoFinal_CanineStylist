/**
 * @author Antonio González Torres
 * @exports manage404
 * @namespace Controllers
 */
/**
 * @namespace Controllers
 * @description Controladores para manejar las rutas web relacionadas con los servicios.
 * @requires ../models/servicios.model
 * @requires express-validator
 */

const servicio = require('../models/servicios.model');
const { validationResult } = require('express-validator');

/**
 * @function getAllServicios
 * @description Obtiene todos los servicios de la base de datos.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
const getAllServicios = async (req, res) => {
    try {
        const servicios = await servicio.getAllServicios();
        res.status(200).json(servicios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * @function getServicioByNombre
 * @description Obtiene un servicio por su nombre.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
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
            res.status(404).json({ error: 'Servicio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * @function createServicio
 * @description Crea un nuevo servicio en la base de datos.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
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

/**
 * @function updateServicioByNombre
 * @description Actualiza un servicio en la base de datos por su nombre.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
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
            res.status(404).json({ error: 'Servicio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * @function deleteServicioByNombre
 * @description Elimina un servicio de la base de datos por su nombre.
 * @memberof Controllers
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @async
 * @throws {Error} Error en la consulta a la base de datos
 */
const deleteServicioByNombre = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const result = await servicio.deleteServicioByNombre(nombre);
        if (result > 0) {
            res.status(200).json({ message: 'Servicio eliminado' });
        } else {
            res.status(404).json({ error: 'Servicio no encontrado' });
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
