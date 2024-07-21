/**
 * @file manage404.js
 * @description Middleware para manejar rutas no encontradas (404) en la aplicación.
 */

/**
 * @function manage404
 * @description Middleware que maneja las solicitudes a rutas no existentes, devolviendo un mensaje y una imagen de error 404.
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @param {Function} next Función para pasar al siguiente middleware
 */
const manage404 = (req, res, next) => {
  res.status(404).json({
    msj: "404 not found",
    img: "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
  });
};

module.exports = manage404;
