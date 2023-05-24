import React, { useState } from 'react'






const Box = () => {
  const [color, setColor] = useState("white") ;
  const colorPallet = ["red", "yellow", "magenta", "blue"];
  const colorPicker = Math.floor(Math.random() * colorPallet.length);
  const handleClick = () => {
    setColor(colorPallet[colorPicker]) ;
  }
  
  return (
    <>
      <table style={{ height: "50px",
        width: "50px", 
        border: "1px solid",
        margin: "20px"}}>
        <tbody >
          <tr>
              {/* {color} */}
          <td style={{backgroundColor: color}} onClick={handleClick}>
              {color}
          </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Box