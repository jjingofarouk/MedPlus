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

// Export actions
export const { setRole, clearRole } = rbacSlice.actions;

// Export the reducer
export default rbacSlice.reducer;
