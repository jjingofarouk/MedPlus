// ChronicsContext.js
import React, { createContext, useState } from 'react';

const ChronicsContext = createContext();

export const ChronicsProvider = ({ children }) => {
    const [conditions, setConditions] = useState([]);

    return (
        <ChronicsContext.Provider value={{ conditions, setConditions }}>
            {children}
        </ChronicsContext.Provider>
    );
};

export default ChronicsContext;
