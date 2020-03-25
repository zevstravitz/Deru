import React from "react";

import Block from "./components/Block";
import AppBar from "./components/AppBar";

import TexBlock from "./components/Block/TexBlock";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Block></Block>
      <TexBlock id={uuidv4()}></TexBlock>
    </div>
  );
}

export default App;
