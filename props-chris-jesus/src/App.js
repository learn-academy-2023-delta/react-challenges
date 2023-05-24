
import './App.css';
import RollDice from './components/RollDice';
import Box from './components/Box.js';
import React, { useState } from 'react';
const App = () => {

  var randomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }
  // const [numberResult, setNumberResult] = useState(randomNumber)
  const [numberResult, setNumberResult] = useState(randomNumber)


  return (
    <>
    <Box rollValue={randomNumber()}/>
    </>
  )
}


export default App;
