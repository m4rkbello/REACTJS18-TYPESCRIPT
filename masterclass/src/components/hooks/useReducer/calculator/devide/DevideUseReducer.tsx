import React from "react";

import { Dispatch } from "react";
import { IAction } from "../UseReducerCalculator";


interface Props {
    dispatch: Dispatch<IAction>;
}

export const DevideUseReducer: React.FC<Props> = ({ dispatch }) => {

    return (
        <div>
            <h1>DEVIDE USE REDUCER HOOK!</h1>
        </div>
    )
};