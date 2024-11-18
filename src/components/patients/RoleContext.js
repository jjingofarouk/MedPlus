// RoleContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const RoleContext = createContext();

// Create the provider component
export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState(null); // Changed to 'role' for consistency

    const value = {
        role,         // Expose 'role' instead of 'userRole'
        setRole,      // Keep 'setRole' as it is for consistency
    };

    return (
        <RoleContext.Provider value={value}>
            {children}
        </RoleContext.Provider>
    );
};

// Custom hook to use the RoleContext
export const useRole = () => {
    const context = useContext(RoleContext);
    if (context === undefined) {
        throw new Error('useRole must be used within a RoleProvider');
    }
    return context;
};
