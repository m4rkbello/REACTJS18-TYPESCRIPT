import React from "react";
import { AddUserReducer } from "./add/AddUseReducer";
import { SubtractUseReducer } from "./subtract/SubtractUseReducer";
import { DevideUseReducer } from "./devide/DevideUseReducer";
import { MultiplyUseReducer } from "./multiply/MultiplyUseReducer";








export const UseReducerCalculator = () => {
    return (
        <div>
            <h1>CALCULATOR USING useREDUCER!</h1>
            <AddUserReducer />
            <SubtractUseReducer />
            <DevideUseReducer />
            <MultiplyUseReducer />
        </div>
    )
};