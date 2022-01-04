import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const calculateClosestFibonacci = (n, x = 0, y = 1) =>
    y < n ? calculateClosestFibonacci(n, y, x + y) : y - n > n - x ? x : y;

const ClosestFibonacci = () => {
    const counter = useSelector((state) => state.counter);
    const [closestFibonacci, setClosestFibonacci] = useState(0);

    useEffect(() => {
        setClosestFibonacci(() => calculateClosestFibonacci(counter.value));
    }, [counter.value]);

    return <p>The closest Fibonacci number: {closestFibonacci}</p>;
};

export default ClosestFibonacci;
