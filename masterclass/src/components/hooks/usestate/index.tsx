import React, { useState } from "react";

const calculateCounter = () => {
    console.log(calculateCounter);
    return 1000;
}

export const UseStateHook = () => {
    //useState
    const [counter, setCounter] = useState(calculateCounter);
    const handleAdd = () =>{

        //ANG RESULT IS +1
        // setCounter(counter + 1);

        //ANG RESULT IS +2 
        setCounter((counter) => counter+500);
        setCounter((counter) => counter+500);
    };

return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleAdd}>Increment</button>
    </div>
)

}