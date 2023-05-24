
import React, { useState } from "react"
import Dice from "./Components/Dice"
import Rolls from "./Components/Rolls"
import './App.css';

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1)
  
  const rollDice = () =>{
    setDiceNumber(Math.floor(Math.random()*6) + 1)

}
  
  return (
    <>
    <Dice rollDice ={rollDice} diceNumberasdf= {diceNumber}/>
    <Rolls />
    </>
  ) 
    
  
}




