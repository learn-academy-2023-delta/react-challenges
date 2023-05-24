
import './App.css';
import Box from './components/Box.js';
import React, { useState } from 'react';
const App = () => {

  var randomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }
  const [numberResult, setNumberResult] = useState(randomNumber)
  var useNumber = () => {
    return setNumberResult(randomNumber())
  }

  return (
    <>
    <Box onClick={useNumber} rollValue={randomNumber()}/>
    </>
  )
}


export default App;
