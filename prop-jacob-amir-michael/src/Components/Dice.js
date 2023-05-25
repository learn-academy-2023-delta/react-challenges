import React, { useState } from "react"




const Dice = (props) =>{


   

    return (
        <>
        <div  className = "Dice" onClick = {props.rollDice}>
            <img className = "Image" src={props.diceNumber}/>
            
            </div>
        
        </>
        
    )
}






export default Dice;