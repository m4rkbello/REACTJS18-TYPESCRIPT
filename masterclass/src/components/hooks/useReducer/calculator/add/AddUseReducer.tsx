import React from "react";
import { Dispatch } from "react";
import { IAction } from "../UseReducerCalculator"; // Adjust the import path accordingly

interface Props {
    dispatch: Dispatch<IAction>;
}

export const AddUseReducer: React.FC<Props> = ({ dispatch }) => {
    return (
        <div>
            <h1>ADD USE REDUCER</h1>
            <button onClick={() => dispatch({ type: "ADD", number: 1 })}>Add 1</button>
        </div>
    )
}
