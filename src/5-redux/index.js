import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './slice';
import ClosestFibonacci from './closest-fibonacci';

/** ██████╗ ███████╗██████╗ ██╗   ██╗██╗  ██╗
    ██╔══██╗██╔════╝██╔══██╗██║   ██║╚██╗██╔╝
    ██████╔╝█████╗  ██║  ██║██║   ██║ ╚███╔╝
    ██╔══██╗██╔══╝  ██║  ██║██║   ██║ ██╔██╗
    ██║  ██║███████╗██████╔╝╚██████╔╝██╔╝ ██╗
    ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝ */

const Counter = () => {
    /** Use data stored in the counter slice. */
    const counter = useSelector((state) => state.counter);
    /** Define a dispatch function to dispatch actions and modify slices. */
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter</h1>
            <p>{counter.visible ? counter.value : null}</p>
            <div>
                {/* Before, we created action objects ourselves, e.g. { type: 'increment' }. */}
                <button onClick={() => dispatch(counterActions.increment())}>
                    {/** Action creators produce objects for us, e.g. { action: AUTO_GENERATED_ID }. */}
                    {/* This way, we don't use strings but functions - less chance of errors. */}
                    Increment
                </button>
                <button onClick={() => dispatch(counterActions.decrement())}>
                    Decrement
                </button>
                <button onClick={() => dispatch(counterActions.toggle())}>
                    Toggle
                </button>
            </div>
            <ClosestFibonacci></ClosestFibonacci>
        </>
    );
};

export default Counter;
