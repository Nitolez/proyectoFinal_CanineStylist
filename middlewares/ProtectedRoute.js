/**
 * @file ProtectedRoute.jsx
 * @description Middleware de React para proteger rutas basadas en el tipo de usuario.
 * @requires react
 * @requires react-router-dom
 * @requires react-cookie
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

/**
 * @function ProtectedRoute
 * @description Componente de orden superior que protege rutas específicas según el tipo de usuario.
 * @param {Object} props Propiedades del componente
 * @param {React.ReactNode} props.children Componentes hijos que serán renderizados si el usuario tiene acceso permitido
 * @param {string} props.userType Tipo de usuario requerido para acceder a la ruta
 * @returns {React.ReactNode} Los componentes hijos si el usuario tiene el tipo de acceso correcto, de lo contrario, redirige a la página de login
 */
const ProtectedRoute = ({ children, userType }) => {
  const [cookies] = useCookies(['userType']);

  if (cookies.userType !== userType) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
