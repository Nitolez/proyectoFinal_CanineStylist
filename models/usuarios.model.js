const { Pool } = require('pg');
const pool = require('../config/db.js');
const queries = require('../queries/usuarios.queries.js');

//GET 

const getUsuarioByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getUsuarioByEmail, [email]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const getAllUsuarios = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
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

//POST 

const createUsuario = async (usuario) => {
    const { nombre, email, password, telefono, direccion } = usuario;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUsuario, [nombre, email, password, telefono, direccion]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

//PUT 

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



//DELETE 
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
POST http://localhost3000/api/usuarios
{
    "nombre": "Paquita",
    "email": "paquita@gmail.com",
    "password": "12345",
    "telefono": "629109283",
    "direccion": "Calle de la piruleta, 5"
}

PUT

URL Example: PUT http://localhost3000/api/usuarios/paquita@gmail.com
{
    "nombre": "Paquita Salas",
    "password": "123456",
    "telefono": "1111111",
    "direccion": "Calle de la pipa, 9",
    "puntos_descuento": "2"
}

DELETE

URL Example: DELETE http://localhost3000/api/usuarios/paquita@gmail.com

*/