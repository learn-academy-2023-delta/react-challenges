// import React from "react"
import boxColor from "./box-color"


import React, { useState } from "react"

const Box = () => {
  var [color, setColor] = useState("white")

    var colorPick = ["green", "red", "blue", "orange"]

    var selector = Math.floor(Math.random() * colorPick.length)
  var handleClick = () => {
    setColor(color = colorPick[selector])
  }

  return (
    <>
    <table style={{width: "50px", border: "1px solid black"}}>
           <tr>
            <td style={{height: "50px", backgroundColor: color}} onClick={handleClick}>
               {color}

            </td> 
             
          </tr>
    </table>
    </>
  )
}

export default Box