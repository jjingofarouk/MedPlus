// rbacSlice.js
import { createSlice } from "@reduxjs/toolkit";

const rbacSlice = createSlice({
  name: "rbac",
  initialState: {
    role: null,
    permissions: [],
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload.role;
      state.permissions = action.payload.permissions; // Set permissions based on role
    },
    clearRole: (state) => {
      state.role = null;
      state.permissions = [];
    },
  },
});

export const { setRole, clearRole } = rbacSlice.actions;
export default rbacSlice.reducer;
