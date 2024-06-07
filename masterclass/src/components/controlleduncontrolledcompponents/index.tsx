import React, { useState } from "react";

export const ControlledUncontrolledComponents = () => {

    const datas = ["MARK", "EVAN", "MARKO", "CHARLES","JOSHUA"];

    const [input, setInput] = useState<number>(1);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput(e.target.value); // Use target instead of currentTarget
    };
    

    return (
        <div>
            <h1>CONTROLLED AND UNCONTROLLED COMPONENT!</h1>
            Search: <input onChange={handleInputChange} value={input} />
            <ul>
                {datas.map(item => 
                    (<li key={item}>{item}</li>)
                )}
            </ul>
            <button onClick={() => setInput(input+1)} >ADD</button>

        </div>
    )
}