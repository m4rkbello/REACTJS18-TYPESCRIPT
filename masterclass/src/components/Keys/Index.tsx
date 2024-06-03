import React, { useState } from "react";

export const Keys = () => {
    const [fruits, setFruits] = useState([
        "SAGING",
        "KAMOTE"
    ]);

    const inputs= fruits.map((value, index) => {
        return(
            <div key={index}>
                <span >{value}</span>
                <input  key={index}/>
            </div>
        )
    });

    const handleClick = () => {
        setFruits(["", ...fruits])
    }


    return (
        <div>
            {inputs}
            <button onClick={handleClick}>
                Add Manga
            </button>
        </div>
    )


};