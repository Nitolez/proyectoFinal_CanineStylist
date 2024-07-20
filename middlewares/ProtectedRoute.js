import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children, userType }) => {
  const [cookies] = useCookies(['userType']);

  if (cookies.userType !== userType) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
