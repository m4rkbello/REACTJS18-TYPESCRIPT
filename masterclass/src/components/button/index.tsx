import React from "react";

export const Button = () => {

    const handleClickBtn = () => {
        console.log("CLICKED!");
    };

    return<>
        <button onClick={handleClickBtn}>Click me</button>
    </>;
};

