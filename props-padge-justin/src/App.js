import React, { useState } from 'react';
import './App.css';
import dice1 from './assets/1-dice.png'
import dice2 from './assets/2-dice.png'
import dice3 from './assets/3-dice.png'
import dice4 from './assets/4-dice.png'
import dice5 from './assets/5-dice.png'
import dice6 from './assets/6-dice.png'

const App = () => {
  const [roll, setRoll] = useState(null)
  const [pastRolls, setPastRolls] = useState([])

  const rollDice = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1
    setRoll(newRoll)
    setPastRolls([...pastRolls, newRoll])
  }

return (
  <div className = "title">
    <h1>Dice Roller</h1>
    <div>
      <div className = "dice-button" onClick={rollDice}> 
      {roll ? <img src = { roll === 1 ? dice1 : roll === 2 ? dice2 : roll === 3 ? dice3 : roll === 4 ? dice4 : roll === 5 ? dice5 : roll === 6 ? dice6 :  ''} alt={'dice ${roll}.png'} /> : <b>CLICK ME!!!</b>
      } 
      </div>
    </div>
    <div className='dice-container'>
      <div className="box">
        <h2>Current Roll: {roll}</h2>
     </div>
      <div className="box">
      <h3>Past Rolls:</h3>
        <ul>
          {pastRolls.map((roll, index) => (
            <li key = {index}>{roll}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)
}

export default App;
