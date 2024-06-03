import React, {isValidElement} from 'react';
import {Button} from '../src/components/button/index'; // Assuming Button is a default export

function App() {

  console.log("isValidElement", isValidElement(<p/>))


  return (
    <div className="App">
      <h1>REACT+TYPESCRIPT</h1>
      <Button onClick={() => console.log("reusable handleClick")}>Click</Button>
    </div>
  );
}

export default App;
