import React, { useReducer } from "react";
import { ChildIndex } from "./ChildIndex";

// Define the action type
type Action = number;

// Define the reducer function
const reducer = (state: number, action: Action): number => {
    console.log("REDUCER TRIGGERED!");
    return state + action;
};

const initializer = (dataSaIndex: number) => {
    console.log("INITIALIZER")
    
    return dataSaIndex + 1;
}

export const UseReducerIndexData = () => {
    // Use useReducer hook with the reducer and initial state
    const [dataSaIndex, dispatch] = useReducer(reducer, 5, initializer);

    const handleAdd = () => {
        dispatch(1);
    };

    console.log("USE REDUCER INDEX");

    return (
        <div>
            <h1>INDEX DATA {dataSaIndex}</h1>
            <button onClick={handleAdd}>INCREMENT</button>
            <ChildIndex />
        </div>
    );
};
