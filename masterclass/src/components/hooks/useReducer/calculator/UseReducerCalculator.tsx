import React, {Reducer, useReducer} from "react";
import { AddUseReducer } from "./add/AddUseReducer";
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
        <div style={{ border: '1px solid black', padding: 5, width: 350  }}>
            <h1>CALCULATOR USING useREDUCER!</h1>
            <AddUseReducer  dispatch={dispatch} />
            <SubtractUseReducer  dispatch={dispatch}/>
            <DevideUseReducer dispatch={dispatch} />
            <MultiplyUseReducer dispatch={dispatch} />
        </div>
    )
};