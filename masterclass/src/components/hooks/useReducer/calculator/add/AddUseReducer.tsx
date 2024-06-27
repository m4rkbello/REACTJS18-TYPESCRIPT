import React from "react";
import { Dispatch } from "react";
import { IAction } from "../UseReducerCalculator";

interface Props {
    dispatch: Dispatch<IAction>;
}

export const AddUseReducer: React.FC<Props> = ({ dispatch }) => {
    return (
        <div>
            <h1>ADD USE REDUCER</h1>
            <button onClick={() => dispatch({ type: "ADD", number: 1 })}>ADD</button>
        </div>
    )
}
