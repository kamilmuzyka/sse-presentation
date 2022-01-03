import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice';

/** Define the main Redux store and connect slices. */
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export default store;
