import React, { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        // Fetch role from localStorage
        const storedRole = localStorage.getItem('role');
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);

    const handleLogin = (newRole) => {
        localStorage.setItem('role', newRole);
        setRole(newRole);
    };

    return (
        <RoleContext.Provider value={{ role, setRole, handleLogin }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);
