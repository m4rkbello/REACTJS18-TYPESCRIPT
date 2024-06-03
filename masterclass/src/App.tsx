import React, { isValidElement } from "react";

import { Button } from "../src/components/button/index"; //Component and Props
import { Keys } from "./components/Keys/Index"; //Style and Class, List and Keys
import { Post } from "./components/Post/index";



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

      <div>
        LIST AND KEYS
        <Keys />
      </div>
      <div>
          CONDITIONAL AND RENDERING 
          <Post />
        </div>
      <Button
        type="primary"
        onClick={() => console.log("Reusable handleClick")}
      >

 
        Click
      </Button>


    </div>
  );
}

export default App;
