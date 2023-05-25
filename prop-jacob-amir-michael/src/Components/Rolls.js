import React, { useState } from "react"

const Rolls = (props) => {
    return (

    <>
    <h1 className = "Dice Rolls" ><ol>{props.diceRolls.map(value => <li>{value}</li>)}
    </ol></h1>
    </>
    )
}

export default Rolls;