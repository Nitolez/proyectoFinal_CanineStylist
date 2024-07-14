const { Pool } = require('pg');
const pool = require('../config/db.js');
const queries = require('../queries/servicios.queries');

//GET Raza models

const getServicioByNombre = async (nombre) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
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

const getAllServicios = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
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

//POST Raza

const createServicio = async (raza) => {
    const { nombre, descripcion } = raza;
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

//PUT Raza
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

//DELETE Raza
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
POST http://localhost3000/api/servicios
{
    "nombre": "Corte de pelo",
    "descripcion": "Nuestro equipo de expertos estilistas caninos se encargará de darle a tu mascota un corte de pelo adaptado a su raza y necesidades. Utilizamos técnicas profesionales y productos de alta calidad para garantizar un resultado impecable."
}

PUT

URL Example: PUT http://localhost3000/api/servicios/Corte de pelo
{
    "nombre": "Corte de pelo a tijera",
    "descripcion": "Nuestro equipo de expertos estilistas caninos se encargará de darle a tu mascota un corte de pelo adaptado a su raza y necesidades. Utilizamos técnicas profesionales y productos de alta calidad para garantizar un resultado impecable."
}

DELETE

URL Example: DELETE http://localhost3000/api/servicios/Corte de pelo

*/