import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
    id: null,
    email: '',
    user_type: '', // user_type will store the role (e.g., 'patient', 'doctor', 'hospital')
};

// Creating the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { id, email, user_type } = action.payload;
            state.id = id ?? null; // Use nullish coalescing for better handling
            state.email = email ?? ''; // Set email from payload or empty string
            state.user_type = user_type ?? ''; // Set user_type from payload or empty string
        },
        clearUser: (state) => {
            state.id = null;
            state.email = '';
            state.user_type = '';
        },
    },
});

// Exporting the action creators for use in components
export const { setUser, clearUser } = userSlice.actions;

// Exporting the reducer to be used in the store
export default userSlice.reducer;
