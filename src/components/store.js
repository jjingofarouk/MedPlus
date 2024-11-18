import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import rbacReducer from "./rbacSlice";
import userReducer from './userSlice'; // Adjust the path as necessary


const store = configureStore({
  reducer: {
    auth: authReducer,
    rbac: rbacReducer,
    user: userReducer,

  },
});

export default store;
