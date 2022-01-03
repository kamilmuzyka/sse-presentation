import React, { useState } from 'react';
import ClosestFibonacci from './closest-fibonacci';

/** ███████╗████████╗ █████╗ ████████╗███████╗
    ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
    ███████╗   ██║   ███████║   ██║   █████╗
    ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝
    ███████║   ██║   ██║  ██║   ██║   ███████╗
    ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝ */

const Counter = () => {
    /** Define the local state. */
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    /** Define methods that directly modify the state. */
    const increment = () => {
        setValue((previous) => previous + 1);
    };

    const decrement = () => {
        setValue((previous) => previous - 1);
    };

    const toggle = () => {
        setVisible((previous) => !previous);
    };

    return (
        <>
            <h1>Counter</h1>
            <p>{visible ? value : null}</p>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={toggle}>Toggle</button>
            </div>
            <ClosestFibonacci number={value}></ClosestFibonacci>
        </>
    );
};

export default Counter;
