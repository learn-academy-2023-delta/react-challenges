import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox"
import React, { useState } from "react";


function App() {
  const [components, setComponents] = useState([])

  const addBox = () => {
    setComponents(components.concat(<ColorBox />))
    console.log(components);
  }
  const removeBox = () => {
    let len = components.length -1
    setComponents(components.filter((value, index) => index <(components.length -1) ))
    console.log(components);
    
  }
  

  return (
    
  <div>
    <ul style={{ listStyle: 'none' }}>
    {components.map((value, index) => <li key = {value + index}>{value}</li>)}
    </ul>
    <button onClick = {addBox}>Add a Box</button>
    <button onClick = {removeBox}>Remove a box</button>
  </div>
  
  );
}

export default App;
