import React, { useReducer, useState, Reducer } from "react";

interface Idata {
    name: string;
    quantity: number;
}

interface IAddAction {
    type: "ADD_DATA";
    name: string;
    quantity: number;
}

interface IRemoveAction {
    type: "REMOVE_DATA";
    name: string;
}

const reducer: Reducer<Idata[], IAddAction | IRemoveAction> = (state, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return [
                ...state,
                { name: action.name, quantity: action.quantity }
            ];
        case "REMOVE_DATA":
            return state.filter(item => item.name !== action.name);
        default:
            return state;
    }
};

export const DataArrays = () => {
    // useState 
    const [inputName, setInputName] = useState("");
    const [inputQuantity, setInputQuantity] = useState(0);

    // useReducer
    const [dataArrays, dispatch] = useReducer(reducer, [{
        name: "MARK BELLO",
        quantity: 10041999,
    }]);

    // Handle input change for name
    const handleInputNameOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputName(e.currentTarget.value);
    };

    // Handle input change for quantity
    const handleQuantityOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputQuantity(+e.currentTarget.value);
    };

    // Function to add data
    const handleAddButtonClick = () => {
        dispatch({
            type: "ADD_DATA",
            name: inputName,
            quantity: inputQuantity,
        });
    };

    // Function to remove data
    const handleRemoveButtonClick = (name: string) => {
        dispatch({
            type: "REMOVE_DATA",
            name: name,
        });
    };

    console.log("DATAARRAYS RENDER!");

    return (
        <div>
            <h1>
                USE REDUCER ADVANCE + REDUX PATTERN!
            </h1>
            <ul>
                {dataArrays.map(item => {
                    return (
                        <li key={item.name}>
                            {item.name} + {item.quantity}
                            {" "}
                            <button onClick={() => handleRemoveButtonClick(item.name)}>REMOVE</button>
                        </li>
                    );
                })}
            </ul>
            Name: <input onChange={handleInputNameOnChange} value={inputName} type="text" /><br />
            Quantity: <input onChange={handleQuantityOnChange} value={inputQuantity} type="number" /><br />
            <button onClick={handleAddButtonClick}>Add Data</button>
        </div>
    );
};
