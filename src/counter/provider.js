import React, { useReducer, createContext } from 'react';

/** Create a new Context object. */
export const Context = createContext();

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, value: state.value + 1 };
        case 'decrement':
            return { ...state, value: state.value - 1 };
        case 'toggle':
            return { ...state, visible: !state.visible };
        default:
            throw new Error();
    }
};

/** Retrieve component's children (a default prop that stores all the elements
 * contained by the component). */
const CounterContextProvider = ({ children }) => {
    const [counter, dispatch] = useReducer(counterReducer, {
        value: 0,
        visible: true,
    });

    /** Return a Context Provider component that gives access to the local data
     * to all of its children. */
    return (
        <Context.Provider value={{ counter, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default CounterContextProvider;
