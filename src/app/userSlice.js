import { createSlice, createAction } from '@reduxjs/toolkit';

export const logout = createAction('logout');

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        token: '',
        isLoggedIn: false,
    },
    reducers: {
        userAuthenticated: (state, action) => {
            return {
                ...state, ...{
                    username: action.payload.username,
                    token: action.payload.token,
                    isLoggedIn: true,
                }
            }
        },
    }
});

export const { userAuthenticated } = userSlice.actions;

export default userSlice.reducer;