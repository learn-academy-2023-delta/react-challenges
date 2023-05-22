import React from "react";
import Box from "./components/box.js";
import boxColor from "./components/box-color.js";

const App = () => {
  return(
    <>
    <h1>Hello World!</h1>
      <div style={{margin: "25px", display: "flex"}}>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    
    </>
  )
}

export default App;
