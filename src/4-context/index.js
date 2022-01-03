import React, { useContext } from 'react';
import ClosestFibonacci from './closest-fibonacci';
import { Context } from './provider';

/**  ██████╗ ██████╗ ███╗   ██╗████████╗███████╗██╗  ██╗████████╗
    ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝
    ██║     ██║   ██║██╔██╗ ██║   ██║   █████╗   ╚███╔╝    ██║
    ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══╝   ██╔██╗    ██║
    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ███████╗██╔╝ ██╗   ██║
     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝ */

const Counter = () => {
    /** Request the Context data from a given Context. */
    const { counter, dispatch } = useContext(Context);

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
