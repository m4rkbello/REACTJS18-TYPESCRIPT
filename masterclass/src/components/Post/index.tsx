import React from "react";


interface IPostProps {
    showDate: boolean;
};

export const Post: React.FC <IPostProps> = ({ showDate }) => {
    const date = new Date().toDateString();

    //gamit conditional statement sa compo
    // if(showDate){
    //     return (
    //         <div>
    //             <span>MY POST</span>
    //             <p>{date}</p>
    //         </div>
    //     )
    // }

    // conditional rendering gamit AND
    return (
        <div>
               <span>MY POST</span>
               {showDate && <p>{date}</p> }
        </div>
    )

    const renderComp = [<span style={{ fontSize: '50px',  textAlign: 'center'}}> PATOTOYA</span>];

    // if(showDate){
    //     renderComp.push(<p>{date}</p>)
    // }

    // return (

    //     <React.Fragment>
    //         {renderComp}
    //     </React.Fragment>
    // )

};