import React, { isValidElement } from "react";
import { Button } from "../src/components/button/index"; // Assuming Button is a default export
import { Keys } from "./components/Keys/Index";

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
