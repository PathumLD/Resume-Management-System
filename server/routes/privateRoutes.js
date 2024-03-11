import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwtUtils from '../../utils/jwtUtils';

const PrivateRoute = ({ element: Element, userType }) => {
  const token = localStorage.getItem(`${userType}Token`);
  
  try {
    const decodedToken = token ? jwtUtils.decodeToken(token) : null;

    if (!token || !decodedToken || decodedToken.userType !== userType) {
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    // Handle token decoding error, e.g., expired token
    console.error('Token decoding error:', error);
    return <Navigate to="/login" replace />;
  }

  return <Element />;
};

export default PrivateRoute;
