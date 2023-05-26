import logo from './logo.svg';
import './App.css';
import GoodRobot from './Components/GoodRobot';
import BadRobot from './Components/BadRobot';
import UglyRobot from './Components/UglyRobot';
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState ("")

  const handleChange = (e) => {
    setText(e.target.value)
  }
console.log(text)
  
  
  
  
  
  
  
  return (
  <>
<h1>landing page</h1>
<input type="text"
onChange={handleChange}
value={text}
/>
<GoodRobot text={text}/>
<BadRobot text={text}/>
<UglyRobot text={text}/>
  </>  
  )
}

export default App;
