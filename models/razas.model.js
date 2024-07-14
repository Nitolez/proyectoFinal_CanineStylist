const { Pool } = require('pg');
const pool = require('../config/db.js');
const queries = require('../queries/razas.queries');

//GET Raza models

const getRazaByNombre = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
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

const getAllRazas = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
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

//POST Raza

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

//PUT Raza
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

//DELETE Raza
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
POST
{
    "nombre": "Labrador",
    "descripcion": "Un perro amigable y enérgico",
    "precio": "1000"
}

PUT

URL Example: PUT http://localhost3000/api/razas/1
{
    "nombre": "Labrador Retriever",
    "descripcion": "Un perro muy amigable y enérgico",
    "precio": "1200"
}

DELETE

URL Example: DELETE http://localhost3000/api/razas/1

*/