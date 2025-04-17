import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// PrivateRoute Component
const PrivateRoutes = ({ redirectPath = '/login' }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // or use context/state

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }

  // If authenticated, render the child routes (outlet)
  return <Outlet />;
};

export default PrivateRoutes;
