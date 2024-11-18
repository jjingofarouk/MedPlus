import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRole } from './RoleContext';

const ProtectedRoute = ({ children }) => { 
  const { role } = useRole();

  // Here, you can customize the condition based on specific roles if needed.
  // For example, if you want to allow only patients and doctors:
  const isAuthorized = role === 'patient' || role === 'doctor'; 

  return isAuthorized ? children : <Navigate to="/login" />; 
};

export default ProtectedRoute;
