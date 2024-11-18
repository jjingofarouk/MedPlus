import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authForm"; // Import the authentication reducer
import rbacReducer from "./rbacSlice"; // Import the role-based access control reducer

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Manage authentication state
    rbac: rbacReducer, // Manage role-based access control state
  },
});

// Export the configured store for use in the application
export default store;
