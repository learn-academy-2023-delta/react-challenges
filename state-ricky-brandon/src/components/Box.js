import React, { useState } from "react"
// import './Box.css';

const Box = () => {
    const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']


    const [randomColor, setColor] = useState(colors[0])

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * colors.length)
        setColor(colors[randomIndex])
        
    }

    const boxStyle = {
        randomColor,
        width: '200px',
        height: '200px',
        border: '5px solid black'
    }
    
    return (
        <button style={{backgroundColor: randomColor }} onClick={handleClick}><div style={boxStyle}><h2>{randomColor}</h2>
        </div>
        </button>
    ) 
}

export default Box