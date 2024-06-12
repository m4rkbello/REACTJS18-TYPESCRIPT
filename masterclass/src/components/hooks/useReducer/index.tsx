import React, { useReducer } from "react";
import { Reducer } from "redux";
import { ChildIndex } from "./ChildIndex";


const reducer: Reducer<number, number> = (state, action) => {
    comnsole.log("reducer triggered!");
    return state + action;
}


export const UseReducerIndexData = () => {

    const handleAdd = () => {
        dispatch(1)
    }

    console.log("USE REDUCER INDEX");

    const [dataSaIndex, dispatch] = useReducer(reducer, 5);

    return (
        <div>
            <h1>INDEX DATA{dataSaIndex} </h1>
            <button>INCREMENT</button>
            <ChildIndex />
        </div>
    )
}













