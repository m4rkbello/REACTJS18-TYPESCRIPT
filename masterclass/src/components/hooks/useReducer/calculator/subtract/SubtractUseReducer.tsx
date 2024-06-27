import React from "react";
import { Dispatch } from "react";
import { IAction } from "../UseReducerCalculator";


interface Props {
    dispatch: Dispatch<IAction>;
}

export const SubtractUseReducer: React.FC<Props> = ({ dispatch }) => {
    return (
        <div>
            <h1>SUBTRACT USE REDUCER!</h1>
        </div>
    )
}