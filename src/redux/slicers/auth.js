import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    user: {
        id: '',
        name: '',
        surname: '',
        patronymic: '',
        is_super: false
    }
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        persist: (state, action) => action.payload,
        setToken: (state, action) => action.payload,
        signOut: () => initialState
    }
});

export const { setToken, persist, signOut } = auth.actions;

export default auth.reducer;
