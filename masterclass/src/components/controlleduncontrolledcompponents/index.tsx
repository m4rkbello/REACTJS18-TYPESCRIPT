import React, { useState } from "react";

export const ControlledUncontrolledComponents = () => {

    const datas = ["MARK", "EVAN", "MARKO", "CHARLES","JOSHUA"];

    const [input, setInput] = useState("");

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            setInput(e.currentTarget.value);
    };
    
    return (
        <div>
            <h1>CONTROLLED AND UNCONTROLLED COMPONENT!</h1>
            Search: <input onChange={handleInputChange} value={input} />
            <ul>
                {datas.filter(data => data.includes(input)).map(data => 
                    (<li key={data}>{data}</li>)
                )}
            </ul>
            <button onClick={() => setInput(input+1)} >ADD</button>

        </div>
    )
}