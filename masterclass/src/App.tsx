import React, { isValidElement } from "react";

import { Button } from "../src/components/button/index"; //Component and Props
import { Keys } from "./components/Keys/Index"; //Style and Class, List and Keys
import { Post } from "./components/Post/index";
import { ParentComponent } from "./components/ParentComponent";
import { UseStateHook } from "./components/hooks/usestate";

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
      <hr />
      <hr />
      <div style={{ fontSize: "30px" }}>
        CONDITIONAL AND RENDERING <br />
        <Post showDate={true} />
      </div>
      <hr />

      <Button
        type="primary"
        onClick={() => console.log("Reusable handleClick")}
      >
        Click
      </Button>

      <hr />
      <div>
        <ParentComponent counter={5} />
      </div>
      <hr />
      <center>
        <h1>USE STATE</h1>
        <div>
          <UseStateHook />
        </div>
      </center>
      <br />
      <br />
    </div>
  );
}

export default App;
