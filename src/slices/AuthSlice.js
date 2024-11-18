import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async ({ username, password }, { rejectWithValue }) => {
  try {
    // Simulate API call
    const response = await fetch("your-api-url", { /* options */ });
    const data = await response.json();
    return data; // Adjust based on your API response structure
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    // Handle logout logic
    localStorage.removeItem("token");
    // Return some value if needed
    return {};
  } catch (error) {
    return rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    username: null,
    id: null,
    profile: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.username = action.payload.username;
        state.id = action.payload.id;
        state.profile = action.payload.profile;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.username = null;
        state.id = null;
        state.profile = null;
      });
  },
});

export default authSlice.reducer;
