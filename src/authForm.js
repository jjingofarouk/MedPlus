import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userRole: null,
    loading: false,
    error: null,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.userRole = action.payload.userRole; // Store user role
      state.loading = false;
      state.error = null;
    },
    logout(state) {
      state.token = null;
      state.userRole = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Export actions
export const { login, logout, setLoading, setError } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
