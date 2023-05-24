import React from "react";



const Box = (props) => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        border: '10px solid black'
    }
    return (
        <button 
        onClick = {props.rollNext}
        style = {boxStyle}
        >
                {props.currentRoll}
        </button>
     )

}
// on line 13 the onClick needs a function to operate.
// on line 15 current roll which is in our useState on App.js to show our current role.

export default Box;