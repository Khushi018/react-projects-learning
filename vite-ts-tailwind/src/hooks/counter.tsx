import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);


    const inc = () => {
        setCount(count  +1);
    }  
    const dec = () => {
        setCount(count  -1);
    } 
    const reset = () => {
        setCount(0);
    } 
return (
    <div>
        <h1>{count}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
)
}