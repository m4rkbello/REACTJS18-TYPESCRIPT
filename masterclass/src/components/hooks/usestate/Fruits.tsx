import React, { useState } from "react";


export const Fruits = () => {
    const [fruits, setFruits] = useState([
        "saging", "kapayas", "santol"
    ])

    //function para mag add ug fruits
    const handleAddFruit = () => {
        setFruits([...fruits, "MANGGA"]);
    }

    console.log("ADD PRUTAS!");

    return (
        <div> 
            <h1>ADD DATA USING SPREAD OPERATORS, ARRAYS AND USESTATE! PRUTAS LIST!</h1>
            <button onClick={handleAddFruit}>Add</button>
            <ul>
                {fruits.map(fruit => 
                    (<li key={fruit}>{fruit}</li>)
                )}
            </ul>
        </div>
    )
};