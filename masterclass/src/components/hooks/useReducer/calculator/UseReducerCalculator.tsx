import React, {Reducer, useReducer} from "react";
import { AddUserReducer } from "./add/AddUseReducer";
import { SubtractUseReducer } from "./subtract/SubtractUseReducer";
import { DevideUseReducer } from "./devide/DevideUseReducer";
import { MultiplyUseReducer } from "./multiply/MultiplyUseReducer";


export interface IAction {
    type: "ADD" | "SUBTRACT" | "MULTIPLY" | "DEVIDE";
    number: number;
}

const reducer: Reducer<number, IAction> = (state, action) => {
    switch(action.type) {
        case "ADD":
            return state + action.number;
        case "SUBTRACT":
            return state - action.number;
        case "MULTIPLY":
            return state * action.number;
        case "DEVIDE":
            return state / action.number;
        default: 
            return state;
    }

}



export const UseReducerCalculator = () => {
    const [counter, dispatch] = useReducer(reducer, 1);

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