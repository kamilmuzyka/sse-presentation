import React, { useReducer } from 'react';
import ClosestFibonacci from './closest-fibonacci';

/** ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗
    ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗
    ██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝
    ██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗
    ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║
    ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝ */

/** Define a reducer function that directly modifies the state, based on the
 * provided action. */
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

const Counter = () => {
    /** Define a local reducer with an initial state. */
    const [counter, dispatch] = useReducer(counterReducer, {
        value: 0,
        visible: true,
    });

    return (
        <>
            <h1>Counter</h1>
            <p>{counter.visible ? counter.value : null}</p>
            <div>
                <button onClick={() => dispatch({ type: 'increment' })}>
                    Increment
                </button>
                <button onClick={() => dispatch({ type: 'decrement' })}>
                    Decrement
                </button>
                <button onClick={() => dispatch({ type: 'toggle' })}>
                    Toggle
                </button>
            </div>
            <ClosestFibonacci number={counter.value}></ClosestFibonacci>
        </>
    );
};

export default Counter;
