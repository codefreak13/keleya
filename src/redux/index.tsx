import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    authSlice,
} from './reducers';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        auth: authSlice
    },
    middleware: [
        ...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
        thunkMiddleware,
    ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
