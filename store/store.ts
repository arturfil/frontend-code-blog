import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postSlice';
import accountReducer from '../features/accountSlice';

export const store = configureStore({
    reducer: {
        post: postReducer,
        account: accountReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;