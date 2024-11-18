// src/hooks/useUser.js
import { useContext } from "react";

const useUser = () => {
  const { user, setUser } = useContext;

  // You can also return any user-related functions
  const updateUser = (newUserData) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  return { user, updateUser };
};

export default useUser;
