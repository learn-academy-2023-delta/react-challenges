import React, { useState } from 'react'
import Robots from './components/Robots'

const App = () => {
  const [robotTranslator, setRobotTranslator] = useState("")
  const handleChange = (e) => {
    console.log(e.target)
    setRobotTranslator(e.target.value)
  }


  return(
    <>
      <h1>Welcome to Chris and Brandon's Robot Translator</h1>
      <input type="text" onChange={handleChange} value={robotTranslator}/>
      <Robots robotTranslator={robotTranslator}/>
    </>
  )
}

export default App