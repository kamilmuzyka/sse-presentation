import React, { useState, useEffect } from 'react';

const calculateClosestFibonacci = (n, x = 0, y = 1) =>
    y < n ? calculateClosestFibonacci(n, y, x + y) : y - n > n - x ? x : y;

/** Retrieve the prop named number. */
const ClosestFibonacci = ({ number }) => {
    const [closestFibonacci, setClosestFibonacci] = useState(0);

    useEffect(() => {
        setClosestFibonacci(() => calculateClosestFibonacci(number));
    }, [number]);

    return <p>The closest Fibonacci number: {closestFibonacci}</p>;
};

export default ClosestFibonacci;
