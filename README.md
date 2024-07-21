
# Canine Stylist - "¡Porque tu mejor amigo merece lucir increíble! 🐾✨"

<a href="https://proyectofinal-caninestylist.onrender.com/" target="_blank"> <img src="./client/public/tituloLogo.png"/></a> 

Bienvenido al repositorio de la aplicación de gestión de una peluquería canina. Esta aplicación permite la gestión de clientes, servicios y razas de perros, además de la autenticación y autorización de usuarios. Está construida utilizando React para el frontend y Express para el backend, con una base de datos SQL para almacenar la información.

## Descripción del Proyecto
Esta aplicación está diseñada para facilitar la gestión de una peluquería canina. Permite a los administradores gestionar los datos de clientes, razas de perros y servicios ofrecidos. Los usuarios pueden registrarse, iniciar sesión y ver su perfil, así como explorar los servicios y precios de los cortes de pelo según la raza de su perro.
## Funcionalidades Principales

- **Gestión de Clientes:** Los administradores pueden crear, leer, actualizar y eliminar información de los clientes.
  
- **Autenticación y autorización de usuarios:** Implementa un sistema de registro y login para los usuarios, permitiendo que los clientes gestionen su información personal.

- **Gestión de Razas:** Los administradores pueden crear, leer, actualizar y eliminar razas de perros.
  
- **Información sobre razas:** Se proporciona información detallada sobre diferentes razas de perros, incluyendo nombre, tamaño y características especiales.

- **Gestión de Servicios:** Los administradores pueden crear, leer, actualizar y eliminar servicios ofrecidos por la peluquería.

- **Tipos de corte disponibles:** Se detallan los diferentes tipos de corte (stripping, corte a máquina, corte a tijera).

- **Detalles del servicio:** Incluye descripción del servicio y la duración estimada.

## Estructura de la Base de Datos

### Usuarios

- `id_usuario` (PK, INT, AUTO_INCREMENT)
- `nombre` (VARCHAR(100))
- `email` (VARCHAR(100), UNIQUE)
- `contraseña` (VARCHAR(100))
- `telefono` (VARCHAR(20))
- `direccion` (VARCHAR(200))
- `tipo_usuario` (ENUM('cliente', 'admin'))
- `puntos_descuento` (INT)

### Servicios

- `id_servicio` (PK, INT, AUTO_INCREMENT)
- `nombre` (VARCHAR(100))
- `descripcion` (TEXT)

### Razas

- `id_raza` (PK, INT, AUTO_INCREMENT)
- `nombre` (VARCHAR(100))
- `descripcion` (TEXT)
- `precio` (DECIMAL(10, 2))

## Configuración del Entorno de Desarrollo

### Prerrequisitos

- Node.js
- npm
- PostgreSQL

### Instalación

1. Clona el repositorio
2. Instala las dependencias del backend y frontend:
```bash 
npm install
cd client
npm install
```
3. Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade las variables necesarias para la configuración de la base de datos y otros parámetros.

4. Inicia el servidor:
```bash
npm run dev
cd client
npm run dev
```
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en funcionamiento.


## Estructura del Proyecto
### Backend (Express)
- Controllers: Contiene la lógica de las rutas.
- Models: Define la estructura de los datos y la lógica de interacción con la base de datos.
- Routes: Define los endpoints de la API.
- Middlewares: Maneja la autenticación y otros procesos intermedios.
- Config: Configuración de la base de datos y otras variables de entorno.

### Frontend (React)
- Components: Componentes reutilizables de la UI.
- Public: Imágenes y usables para la app.
- Styles: Archivos SASS para los estilos de la aplicación.

## Support

Este proyecto está abierto a contribuciones. Si deseas mejorar la aplicación, realiza un fork del repositorio, haz tus cambios y envía un pull request. Asegúrate de seguir las buenas prácticas de desarrollo y prueba tus cambios antes de enviarlos.

Para consultas, envia un email antonioglezt98@gmail.com.

## Creado por 
Antonio González Torres en el bootcamp de Desarrollo Web en The Bridge.