const e = require('express');
const usuario = require('../models/usuarios.model');
const { validationResult } = require('express-validator');


//GET 
const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuario.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//GET by nombre
const getUsuarioByEmail = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nombre } = req.params;
        const usuarioEncontrado = await usuario.getUsuarioByEmail(nombre);
        if (usuarioEncontrado) {
            res.status(200).json(usuarioEncontrado);
        } else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//POST

const createUsuario = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const nuevoUsuario = req.body;
        const usuarioCreado = await usuario.createUsuario(nuevoUsuario);
        res.status(201).json(usuarioCreado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PUT 

const updateUsuarioByEmail = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email } = req.params;
        const nuevoUsuario = req.body;
        const usuarioActualizado = await usuario.updateUsuarioByEmail(email, nuevoUsuario);
        if (usuarioActualizado) {
            res.status(200).json(usuarioActualizado);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//DELETE 

const deleteUsuarioByEmail = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email } = req.params;
        const result = await usuario.deleteUsuarioByEmail(email);
        if (result > 0) {
            res.status(200).json({ message: 'usuario eliminado' });
        } else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioByEmail,
    createUsuario,
    updateUsuarioByEmail,
    deleteUsuarioByEmail
};