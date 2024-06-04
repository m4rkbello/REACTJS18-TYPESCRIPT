import React from "react";
import { ChildComponent } from "./ChildComponent";

export interface IParentComponentProps {
    counter: number;
}

export const  ParentComponent: React.FC<IParentComponentProps> = ({counter}) => {
    console.log("MY COMPONENT RENDER!");

    return(
        <div>
            <h1>
            MY COMPONENT!
            </h1>
            <p>COUNTER: {counter}</p>
            {counter <= 5 && <ChildComponent />}
        </div>
    )
}