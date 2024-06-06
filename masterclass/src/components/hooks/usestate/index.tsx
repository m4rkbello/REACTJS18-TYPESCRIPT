import React, { useState } from "react";

const calculateCounter = () => {
    console.log(calculateCounter);
    return 1000;
}

export const UseStateHook = () => {
    //useState
    const [counter, setCounter] = useState(calculateCounter);
    const handleAdd = () =>{
        // setCounter(counter + 1);
        // setCounter((counter) => counter+1);
        // setCounter((counter) => counter+1);
    };

return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleAdd}>Increment</button>
    </div>
)

}