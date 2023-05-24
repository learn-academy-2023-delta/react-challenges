import './App.css';
import Box from './components/Box.js';
import HistoryField from './components/HistoryField';
import React, { useState } from 'react';
import HistoryList from './components/HistoryList';

const App = () => {
//make an empty array
//function to push each random number into empty array
//map over array to show on the screen
  var historyArray = []
  //creats a random number
  var randomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }

  const arrayPusher = (array) => {
    return array.push(randomNumber())
  }


  const [numberResult, setNumberResult] = useState(randomNumber)
  
  //function to pass the random number generated, to onClick
  var useNumber = () => {
    arrayPusher(historyArray)
    console.log(historyArray);
    return setNumberResult(randomNumber())
  }

  return (
    <>
    <div style={{display: "flex"}}>
      <Box onClick={useNumber} rollValue={numberResult}/>
      <HistoryField rollValue={numberResult} numArray={historyArray}/>
      {/* {historyArray.map((value, index) => <HistoryList value='newNum' />) } */}
      {historyArray.map(value => {return <HistoryList item={historyArray} />})}
    </div>
    </>
  )
}


export default App;
