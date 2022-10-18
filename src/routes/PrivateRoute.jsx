/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-400" />;
  }

  if (user && user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
