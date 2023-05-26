import React from "react";

function GoodRobot (props) {
    const robotOutput = (userInput) => {
        return `I hear saying ${userInput}. Is that correct?`
      }
    return (
        <>
        <h2>Good Robot</h2>
        <h3>Waiting for my text</h3>
        <p>{robotOutput(props.sentence)}</p>
        </>


    )

}

export default GoodRobot