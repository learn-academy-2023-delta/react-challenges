
import React, { useState } from "react"
import Dice from "./Components/Dice"
import Rolls from "./Components/Rolls"
import './App.css';
import Dice1 from "./assets/1-dice.png"
import Dice2 from "./assets/2-dice.png"
import Dice3 from "./assets/3-dice.png"
import Dice4 from "./assets/4-dice.png"
import Dice5 from "./assets/5-dice.png"
import Dice6 from "./assets/6-dice.png"

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1)
  const [diceRolls, setDiceRolls] = useState([])
  const dicePics = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
  
  const rollDice = () =>{
    var newDiceRoll = Math.floor(Math.random()*6) + 1
    setDiceNumber(newDiceRoll)
    diceRollCounter(newDiceRoll)

}
const diceRollCounter = (newDiceRoll) => {
  setDiceRolls(diceRolls.concat(newDiceRoll))
  console.log(diceRolls);

}
  
  return (
    <>
    <div className ="Board">
    <Dice rollDice ={rollDice} diceNumber= {dicePics[diceNumber-1]}/>
    <Rolls diceRolls = {diceRolls}/>
    </div>
    </>
  ) 
    
  
}




