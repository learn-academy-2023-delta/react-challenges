import React, { useState } from 'react';
import './App.css';
import GoodBot from './components/GoodBot';
import BadBot from './components/BadBot';
import SpongeBot from './components/SpongeBot';




const App = () => {

  const [userText, setUserText] = useState("")

  const handleChange = (e) => { 
    setUserText(e.target.value);

  }

  return (
    <>
      <h1>
        Say something! <input type="text" onChange={handleChange}/>
      </h1>
      <GoodBot goodBotValue={userText}/>
      <BadBot badBotValue={userText}/>
      <SpongeBot spongeBotValue={userText}/>
    </>
  )
}



export default App;
