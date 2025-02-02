import React, { isValidElement } from "react";

import { Button } from "../src/components/button/index"; //Component and Props
import { Keys } from "./components/Keys/Index"; //Style and Class, List and Keys
import { Post } from "./components/Post/index";
//USE STATE HOOK!
import { ParentComponent } from "./components/ParentComponent";
import { UseStateHook } from "./components/hooks/usestate";
import { Fruits } from "./components/hooks/usestate/Fruits";
import { ControlledUncontrolledComponents } from "./components/controlleduncontrolledcompponents";

//USE REDUCER HOOK!
import { UseReducerIndexData } from "./components/hooks/useReducer";
import { DataArrays } from "./components/hooks/useReducer/Datas";
import { UseReducerCalculator } from "./components/hooks/useReducer/calculator/UseReducerCalculator";



function App() {
  console.log("isValidElement", isValidElement(<p />));
  //LIST AND KEYS
  // const inputs = [
  //   <div key={1}>
  //       <input />
  //   </div>,

  //   <div key={2}>
  //       <input />
  //   </div>
  // ]

  return (
    <div className="App">
      <h1>REACT18+TYPESCRIPT</h1>
      <hr />
      <div>
        LIST AND KEYS
        <Keys />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      
      <div style={{ fontSize: "30px" }}>
        CONDITIONAL AND RENDERING <br />
        <Post showDate={true} />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      

      <Button
        type="primary"
        onClick={() => console.log("Reusable handleClick")}
      >
        Click
      </Button>

      <br />
      <br />
      <hr />
      <br />
      <br />
      
      <div>
        <ParentComponent counter={5} />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      
      <center>
        <h1>USE STATE</h1>
        <div>
          <UseStateHook />
        </div>
      </center>
      <br />
      <br />
      <hr />
      <br />
      <br />
      
      <Fruits />
      <br />
      <br />
      <hr />
      <br />
      <br />
      
      <ControlledUncontrolledComponents />
      <hr />
      <center>
        <h1>useReducer Hook</h1>
        <div>
        <UseReducerIndexData />
        </div>
      </center>
      <br />
      <br />
      <hr />
      <br />
      <br />
      
      <center>
        <h1>useReducer Hook + redux approach!</h1>
        <div>
        <DataArrays />
        </div>
      </center>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <center>
        <UseReducerCalculator />
      </center>


      

    </div>
  );
}

export default App;
