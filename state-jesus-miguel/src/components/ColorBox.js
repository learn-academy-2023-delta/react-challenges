import React,{useState} from "react"



var colorSet = ["red","orange","yellow","green","purple","blue","pink"] 

const ColorBox = () => {
    const [color, setColor] = useState('white')

const handleClick = () => {
   
    let randomIndex = Math.floor(Math.random() * colorSet.length)
    setColor(colorSet[randomIndex])
}

    const boxStyle = {
      border: 'solid', 
      width: '200px',
      height: '200px',
      backgroundColor: color
      } 
    
      return (
      <>
        
        <div style={boxStyle}> 
        <p>{color}</p>
        </div>
        <button onClick={handleClick}>Push Me</button>
       
        <div style={boxStyle}> 
        <p>{color}</p>
        </div>
        <button onClick={handleClick}>Push Me</button>
       
        <div style={boxStyle}> 
        <p>{color}</p>
        </div>
        <button onClick={handleClick}>Push Me</button>
      </>
    )
    
}

  export default ColorBox;