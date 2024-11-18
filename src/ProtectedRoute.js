import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRole } from './RoleContext';

const ProtectedRoute = ({ children }) => { 
  const { role } = useRole();

  // Customize the authorization logic based on user roles
  // Allow access for 'patient', 'doctor', and 'hospital' roles
  const isAuthorized = ['patient', 'doctor', 'hospital'].includes(role);

  return isAuthorized ? children : <Navigate to="/login" />; 
};

export default ProtectedRoute;
