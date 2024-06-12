import React from "react";


interface Idata {
    name: string,
    quantity: number,
}


export const DataArrays = () => {

    const DataArrays: Idata[] = [{
        name: "MARK BELLO",
        quantity: 10041999,
    }];

    console.log("DATAARRAYS RENDER!")


    return (
        <div>
            <h1>
            USE REDUCER ADVANCE + REDUX PATTTERN!
            </h1>
            <ul>
                {DataArrays.map(data =>{
                    return(
                        <li key={data.name}>
                            {data.name} + {data.quantity}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};