import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicers/auth';

export default configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: process.env.REACT_APP_ENV === 'development'
});
