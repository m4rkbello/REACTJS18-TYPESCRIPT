import React, {isValidElement} from 'react';
import {Button} from '../src/components/button/index'; // Assuming Button is a default export

function App() {

  console.log("isValidElement", isValidElement(<p/>))

  return (
    <div className="App">
      <h1>REACT18+TYPESCRIPT</h1>
      <Button type="primary" onClick={() => console.log("Reusable handleClick")}>Click</Button>
    </div>
  );
}

export default App;
