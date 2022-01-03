import { createSlice } from '@reduxjs/toolkit';

/** Define a slice, its name, data and reducers. */
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        visible: true,
    },
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        toggle: (state) => {
            state.visible = !state.visible;
        },
    },
});

/** Export the action creators to use them when dispatching actions. */
export const counterActions = counterSlice.actions;

export default counterSlice;
