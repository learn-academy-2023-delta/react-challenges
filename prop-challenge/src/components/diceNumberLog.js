import React from "react";

// As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.

// 1. Create a function name diceNumberLog
// 2. within it with will have the parameter props that calls upon currentroll.
// 3. the log might contain an array and will have to use a built in method .push to obtain the next log of numbers. 
// 4. 

const DiceNumberLog = (props) => {
    const boxStyle = {
        width: '100px',
        height: '100px',
        border: '5px solid black'
    }

    return (
        <div className="card">
        <h1>
        {props.currentRoll}
        </h1>

        {/* <ul>
            <li>{props.numLog}</li>
            <li>{props.numLog}</li>

            </ul> */}


        </div>
    )



}
export default DiceNumberLog;