import React from "react";

interface IButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    //optional = ?
    type?: "primary" | "default";
}

export const Button: React.FC <IButtonProps> =
 ({children, onClick, type}) => {
    //FUCNTION
    const handleClickBtn = () => {
        console.log("CLICKED!");
    };

    const className = type === "primary" ? "btn-primary" : "";

    return(
    <React.Fragment>
        <button 
            // style={{ 
            //    height: '20px',
            //  }} 
            className={className}
            onClick={onClick}>{children}
        </button>
    </React.Fragment>
    );
};

