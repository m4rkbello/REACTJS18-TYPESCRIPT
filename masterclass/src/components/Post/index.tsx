import React from "react";


interface IPostProps {
    showDate: boolean;
};

export const Post: React.FC <IPostProps> = ({showDate}) => {
    const date = new Date().toDateString();
    if(showDate){
        return (
            <div>
                <span>MY POST</span>
                <p>{date}</p>
            </div>
        )
    }

    return (
        <div>
            <span>MY POST</span>
        </div>
    )

};