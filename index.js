const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;
const cors =  require('cors');

app.use(cors());

//Importar middlewares
const error404 = require("./middlewares/error404");

// Importar Rutas API
const rutasRazas = require('./routes/razas.routes');
const rutasServicios = require('./routes/servicios.routes');
const rutasUsuarios = require('./routes/usuarios.routes');

app.use(express.json()); // Habilito recepción de JSON en servidor

app.use(express.static('public')); // Habilito la carpeta public para archivos estáticos

//Rutas API
app.use('/api/razas', rutasRazas);
app.use('/api/servicios', rutasServicios);
app.use('/api/usuarios', rutasUsuarios);

//Invocar middleware
app.use(error404); //Middleware para manejo de 404


const server = app.listen(port, () => { // Servidor está escuchando en este puerto variable port
    console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;