const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const pool = require('./config/db.js');

const allowedOrigins = [
  'https://caninestylist.onrender.com',
  'https://proyectofinal-caninestylist.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(express.json());
app.use(express.static('public'));

const error404 = require("./middlewares/error404");

const rutasRazas = require('./routes/razas.routes');
const rutasServicios = require('./routes/servicios.routes');
const rutasUsuarios = require('./routes/usuarios.routes');

app.use('/api/razas', rutasRazas);
app.use('/api/servicios', rutasServicios);
app.use('/api/usuarios', rutasUsuarios);

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

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userType');
  res.json({ success: true });
});

app.use(error404);

const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = server;
