import { configureStore } from '@reduxjs/toolkit';
import customizeReducer from '../slices/customizeSlice'
const store = configureStore({
    reducer: {
       customize : customizeReducer     
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;