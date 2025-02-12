import { configureStore } from '@reduxjs/toolkit';
import customizeReducer from '../slices/customizeSlice'
import shopReducer from '../slices/shopSlice'

const store = configureStore({
    reducer: {
       customize : customizeReducer,
       shop:  shopReducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;