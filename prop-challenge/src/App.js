import React, { useState } from "react";
import "./App.css"
import Box from "./components/Box";
import DiceNumberLog from "./components/diceNumberLog";


function App() {
  const diceNums = [1, 2, 3, 4, 5, 6]
  const [currentRoll, setCurrentRoll] = useState(0)

  const rollNext = () => {
    let nextRoll = Math.floor(Math.random() * diceNums.length)
    setCurrentRoll(diceNums[nextRoll])
  }

  //  const numLog = () => {
  //   diceNums.map((value) => {
  //   if(rollNext === value) {
  //   return <
  //}
  //   
  // })
  //  }
 

  return (
    <>
    <h1>Dice Roll</h1>




    <div className="cards">
      <Box 
      currentRoll={currentRoll} //Variable to display.
      rollNext={rollNext} //rollNext is our function.
      />
     
  
      <DiceNumberLog 
      currentRoll={currentRoll}
      // numLog={numLog}
      />

    </div>
    </>
  );
}

export default App;
