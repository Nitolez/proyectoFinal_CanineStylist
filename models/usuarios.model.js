/**
 * @author Antonio González Torres
 * @exports manage404
 * @namespace Models
 */
/**
 * @namespace Models
 * @description Modelos para manejar las consultas a la base de datos relacionadas con los usuarios.
 * @requires pg
 * @requires ../config/db.js
 * @requires ../queries/usuarios.queries.js
 */

const { Pool } = require('pg');
const pool = require('../config/db.js');
const queries = require('../queries/usuarios.queries.js');

/**
 * @function getUsuarioByEmail
 * @description Obtiene un usuario por su email.
 * @memberof Models
 * @param {string} email Email del usuario a buscar
 * @returns {Object} Usuario encontrado
 * @throws {Error} Error en la consulta a la base de datos
 */
const getUsuarioByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getUsuarioByEmail, [email]);
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
 * @function getAllUsuarios
 * @description Obtiene todos los usuarios de la base de datos.
 * @memberof Models
 * @returns {Array} Lista de todos los usuarios
 * @throws {Error} Error en la consulta a la base de datos
 */
const getAllUsuarios = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllUsuarios);
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
 * @function createUsuario
 * @description Crea un nuevo usuario en la base de datos.
 * @memberof Models
 * @param {Object} usuario Objeto con los datos del nuevo usuario
 * @returns {Object} Usuario creado
 * @throws {Error} Error en la consulta a la base de datos
 */
const createUsuario = async (usuario) => {
    const { nombre, email, password, telefono, direccion } = usuario;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createUsuario, [nombre, email, password, telefono, direccion]);
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
 * @function updateUsuarioByEmail
 * @description Actualiza un usuario en la base de datos por su email.
 * @memberof Models
 * @param {string} emailActual Email del usuario a actualizar
 * @param {Object} nuevoUsuario Objeto con los nuevos datos del usuario
 * @returns {Object} Usuario actualizado
 * @throws {Error} Error en la consulta a la base de datos
 */
const updateUsuarioByEmail = async (emailActual, nuevoUsuario) => {
    const { nombre, password, telefono, direccion, puntos_descuento } = nuevoUsuario;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateUsuarioByEmail, [nombre, password, telefono, direccion, puntos_descuento, emailActual]);
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
 * @function deleteUsuarioByEmail
 * @description Elimina un usuario de la base de datos por su email.
 * @memberof Models
 * @param {string} email Email del usuario a eliminar
 * @returns {number} Número de filas afectadas
 * @throws {Error} Error en la consulta a la base de datos
 */
const deleteUsuarioByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteUsuarioByEmail, [email]);
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
    getUsuarioByEmail,
    getAllUsuarios,
    createUsuario,
    updateUsuarioByEmail,
    deleteUsuarioByEmail
};

/* EJEMPLOS DE USO 
POST http://localhost:3000/api/usuarios
{
    "nombre": "Paquita",
    "email": "paquita@gmail.com",
    "password": "12345",
    "telefono": "629109283",
    "direccion": "Calle de la piruleta, 5"
}

PUT

URL Example: PUT http://localhost:3000/api/usuarios/paquita@gmail.com
{
    "nombre": "Paquita Salas",
    "password": "123456",
    "telefono": "1111111",
    "direccion": "Calle de la pipa, 9",
    "puntos_descuento": "2"
}

DELETE

URL Example: DELETE http://localhost:3000/api/usuarios/paquita@gmail.com
*/
