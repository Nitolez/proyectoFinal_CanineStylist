/**
 * @author Antonio González Torres
 * @exports manage404
 * @namespace Models
 */
/**
 * @namespace Models
 * @description Modelos para manejar las consultas a la base de datos relacionadas con las razas.
 * @requires pg
 * @requires ../config/db.js
 * @requires ../queries/razas.queries
 */

const { Pool } = require('pg');
const pool = require('../config/db.js');
const queries = require('../queries/razas.queries');

/**
 * @function getRazaByNombre
 * @description Obtiene una raza por su nombre.
 * @memberof Models
 * @param {string} nombre Nombre de la raza a buscar
 * @returns {Object} Raza encontrada
 * @throws {Error} Error en la consulta a la base de datos
 */
const getRazaByNombre = async (nombre) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getRazaByNombre, [nombre]);
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
 * @function getAllRazas
 * @description Obtiene todas las razas de la base de datos.
 * @memberof Models
 * @returns {Array} Lista de todas las razas
 * @throws {Error} Error en la consulta a la base de datos
 */
const getAllRazas = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllRazas);
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
 * @function createRaza
 * @description Crea una nueva raza en la base de datos.
 * @memberof Models
 * @param {Object} raza Objeto con los datos de la nueva raza
 * @returns {Object} Raza creada
 * @throws {Error} Error en la consulta a la base de datos
 */
const createRaza = async (raza) => {
    const { nombre, descripcion, precio } = raza;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createRaza, [nombre, descripcion, precio]);
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
 * @function updateRazaByNombre
 * @description Actualiza una raza en la base de datos por su nombre.
 * @memberof Models
 * @param {string} nombreActual Nombre actual de la raza a actualizar
 * @param {Object} nuevaRaza Objeto con los nuevos datos de la raza
 * @returns {Object} Raza actualizada
 * @throws {Error} Error en la consulta a la base de datos
 */
const updateRazaByNombre = async (nombreActual, nuevaRaza) => {
    const { nombre, descripcion, precio } = nuevaRaza;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateRazaByNombre, [nombre, descripcion, precio, nombreActual]);
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
 * @function deleteRazaByNombre
 * @description Elimina una raza de la base de datos por su nombre.
 * @memberof Models
 * @param {string} nombre Nombre de la raza a eliminar
 * @returns {number} Número de filas afectadas
 * @throws {Error} Error en la consulta a la base de datos
 */
const deleteRazaByNombre = async (nombre) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteRazaByNombre, [nombre]);
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
    getRazaByNombre,
    getAllRazas,
    createRaza,
    updateRazaByNombre,
    deleteRazaByNombre
};

/* EJEMPLOS DE USO 
POST http://localhost:3000/api/razas
{
    "nombre": "Labrador",
    "descripcion": "Un perro amigable y enérgico",
    "precio": "1000"
}

PUT

URL Example: PUT http://localhost:3000/api/razas/Labrador
{
    "nombre": "Labrador Retriever",
    "descripcion": "Un perro muy amigable y enérgico",
    "precio": "1200"
}

DELETE

URL Example: DELETE http://localhost:3000/api/razas/Labrador
*/
