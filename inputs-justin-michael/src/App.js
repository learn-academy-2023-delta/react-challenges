import logo from './logo.svg';
import './App.css';
import BadRobot from './Components/BadRobot';
import GoodRobot from './Components/GoodRobbot';
import KanyeBot from './Components/KanyeBot';
import { useState } from 'react';


function App() {
  const [sentence, setSentence] = useState("")
  const handleChange = (e) => {
   setSentence(e.target.value)
  }
  console.log(sentence)
  return (
    <>
    <h1>Listening Bots</h1>
    <input type ="text" value={sentence} onChange={handleChange}type = "text"/>
    <br/>
    <BadRobot value ={sentence}/>
    <br/>
    <GoodRobot value ={sentence}/>
    <br />
    <KanyeBot value ={sentence}/>
    </>
  );
}

export default App;
