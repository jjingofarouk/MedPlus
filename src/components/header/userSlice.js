import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    email: '',
    user_type: '', // user_type will store the role (e.g., 'patient', 'doctor', 'hospital')
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.user_type = action.payload.user_type; // Set the user role
        },
        clearUser: (state) => {
            state.id = null;
            state.email = '';
            state.user_type = '';
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
