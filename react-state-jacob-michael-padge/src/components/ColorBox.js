import React, { useState } from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
let currentColor = "white";
let startColor = "white";




const ColorBox = () => {

const [color , stateColor] = useState("white");

const changeColor = () => {
    currentColor = colors[Math.floor( Math.random()*7)]
    stateColor(currentColor)
    console.log(currentColor);
    console.log(startColor);
   
}
    return <>
    <table style={{
        border: '2px solid black', 
        height: "150px",
        width: "150px"
        }}
        ><tbody><tr><td onClick={changeColor} style = 
        {{textAlign: 'center',
         verticalAlign: 'middle', 
         backgroundColor: currentColor 
         }}
         >{currentColor}</td></tr></tbody></table>
    
    </>
}



export default ColorBox