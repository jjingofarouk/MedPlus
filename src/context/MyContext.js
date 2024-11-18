import React, { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({
    counter: 0,
    role: "patient", // Default role, can be updated
  });

  // Define functions to update state
  const incrementCounter = () => {
    setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };

  const decrementCounter = () => {
    setState((prevState) => ({
      ...prevState,
      counter: prevState.counter - 1,
    }));
  };

  const updateRole = (newRole) => {
    setState((prevState) => ({
      ...prevState,
      role: newRole,
    }));
  };

  return (
    <MyContext.Provider value={{ state, incrementCounter, decrementCounter, updateRole }}>
      {children}
    </MyContext.Provider>
  );
};
