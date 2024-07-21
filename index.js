/**
 * @file app.js
 * @description Configuración y arranque del servidor Express.
 * @requires express
 * @requires cors
 * @requires express-session
 * @requires cookie-parser
 * @requires body-parser
 * @requires bcrypt
 * @requires pg
 * @requires ./config/db.js
 */

const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000; // Puerto del servidor backend
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const pool = require('./config/db.js');

/**
 * Configuración de CORS para permitir solicitudes desde el frontend.
 */
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Configuración de la sesión.
 */
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(express.json()); 
app.use(express.static('public'));

// Middlewares
const error404 = require("./middlewares/error404");

// Importar Rutas API
const rutasRazas = require('./routes/razas.routes');
const rutasServicios = require('./routes/servicios.routes');
const rutasUsuarios = require('./routes/usuarios.routes');

// Rutas API
app.use('/api/razas', rutasRazas);
app.use('/api/servicios', rutasServicios);
app.use('/api/usuarios', rutasUsuarios);

/**
 * @route POST /login
 * @description Ruta para el inicio de sesión de usuarios.
 * @param {string} email Email del usuario
 * @param {string} password Contraseña del usuario
 * @returns {Object} Respuesta con el tipo de usuario si el inicio de sesión es exitoso
 */
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userQuery = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    const user = userQuery.rows[0];
    if (!user) {
      console.log('User not found');
      return res.json({ success: false, message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Password does not match');
      return res.json({ success: false, message: 'Invalid email or password' });
    }

    req.session.user = user;
    res.cookie('userType', user.tipo_usuario, { httpOnly: true });
    res.json({ success: true, userType: user.tipo_usuario });

  } catch (err) {
    console.error('Error during login process:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * @route POST /logout
 * @description Ruta para cerrar la sesión del usuario.
 * @returns {Object} Respuesta indicando el éxito del cierre de sesión
 */
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userType');
  res.json({ success: true });
});

// Invocar middleware
app.use(error404); // Middleware para manejo de 404

/**
 * Inicia el servidor y escucha en el puerto especificado.
 */
const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;
