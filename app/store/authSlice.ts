import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isAuthenticated: false
    },
    reducers: {
        login(state, action) {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
        },
        signup(state, action) {
            state.token = action.payload;
            state.isAuthenticated = false;
        }
    }
})

export const {login, logout, signup} = authSlice.actions;
export default authSlice.reducer;