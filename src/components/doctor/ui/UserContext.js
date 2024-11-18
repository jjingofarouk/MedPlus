// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);

    const updateUserRole = (role) => {
        setUserRole(role);
    };

    return (
        <UserContext.Provider value={{ userRole, updateUserRole }}>
            {children}
        </UserContext.Provider>
    );
};
