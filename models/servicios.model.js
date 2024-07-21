/**
 * @author Antonio González Torres
 * @exports manage404
 * @namespace Models
 */
/**
 * @namespace Models
 * @description Modelos para manejar las consultas a la base de datos relacionadas con los servicios.
 * @requires pg
 * @requires ../config/db.js
 * @requires ../queries/servicios.queries
 */

const { Pool } = require('pg');
const pool = require('../config/db.js');
const queries = require('../queries/servicios.queries');

/**
 * @function getServicioByNombre
 * @description Obtiene un servicio por su nombre.
 * @memberof Models
 * @param {string} nombre Nombre del servicio a buscar
 * @returns {Object} Servicio encontrado
 * @throws {Error} Error en la consulta a la base de datos
 */
const getServicioByNombre = async (nombre) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getServicioByNombre, [nombre]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

/**
 * @function getAllServicios
 * @description Obtiene todos los servicios de la base de datos.
 * @memberof Models
 * @returns {Array} Lista de todos los servicios
 * @throws {Error} Error en la consulta a la base de datos
 */
const getAllServicios = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllServicios);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

/**
 * @function createServicio
 * @description Crea un nuevo servicio en la base de datos.
 * @memberof Models
 * @param {Object} servicio Objeto con los datos del nuevo servicio
 * @returns {Object} Servicio creado
 * @throws {Error} Error en la consulta a la base de datos
 */
const createServicio = async (servicio) => {
    const { nombre, descripcion } = servicio;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createServicio, [nombre, descripcion]);
        result = data.rows[0];
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

/**
 * @function updateServicioByNombre
 * @description Actualiza un servicio en la base de datos por su nombre.
 * @memberof Models
 * @param {string} nombreActual Nombre actual del servicio a actualizar
 * @param {Object} nuevoServicio Objeto con los nuevos datos del servicio
 * @returns {Object} Servicio actualizado
 * @throws {Error} Error en la consulta a la base de datos
 */
const updateServicioByNombre = async (nombreActual, nuevoServicio) => {
    const { nombre, descripcion } = nuevoServicio;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateServicioByNombre, [nombre, descripcion, nombreActual]);
        result = data.rows[0];
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

/**
 * @function deleteServicioByNombre
 * @description Elimina un servicio de la base de datos por su nombre.
 * @memberof Models
 * @param {string} nombre Nombre del servicio a eliminar
 * @returns {number} Número de filas afectadas
 * @throws {Error} Error en la consulta a la base de datos
 */
const deleteServicioByNombre = async (nombre) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteServicioByNombre, [nombre]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

module.exports = {
    getServicioByNombre,
    getAllServicios,
    createServicio,
    updateServicioByNombre,
    deleteServicioByNombre
};

/* EJEMPLOS DE USO 
POST http://localhost:3000/api/servicios
{
    "nombre": "Corte de pelo",
    "descripcion": "Nuestro equipo de expertos estilistas caninos se encargará de darle a tu mascota un corte de pelo adaptado a su raza y necesidades. Utilizamos técnicas profesionales y productos de alta calidad para garantizar un resultado impecable."
}

PUT

URL Example: PUT http://localhost:3000/api/servicios/Corte de pelo
{
    "nombre": "Corte de pelo a tijera",
    "descripcion": "Nuestro equipo de expertos estilistas caninos se encargará de darle a tu mascota un corte de pelo adaptado a su raza y necesidades. Utilizamos técnicas profesionales y productos de alta calidad para garantizar un resultado impecable."
}

DELETE

URL Example: DELETE http://localhost:3000/api/servicios/Corte de pelo
*/
