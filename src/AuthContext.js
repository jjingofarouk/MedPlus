import React, { createContext, useContext, useState } from 'react';

// Create AuthContext with a default value
const AuthContext = createContext({
  isAuthenticated: false,
  profile: null,
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState(null); // Assuming profile will hold user info

  const logout = () => {
    setIsAuthenticated(false);
    setProfile(null);
    setUserRole(null); // Optionally reset the user role on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, profile, logout, userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
