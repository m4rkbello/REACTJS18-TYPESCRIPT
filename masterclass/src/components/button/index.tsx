import React from "react";


interface IButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}


export const Button: React.FC <IButtonProps> = ({children, onClick}) => {

    //FUCNTION
    const handleClickBtn = () => {
        console.log("CLICKED!");
    };

    return(
    <React.Fragment>
        <button onClick={onClick}>{children}</button>
    </React.Fragment>
    );
};

