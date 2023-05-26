import React from "react";

const UglyRobot =  (props) => {

    const textInput = (userInput) => {
        return userInput
    }
    
    
    
    
        return(
    

    <>
    <h2>UglyRobot</h2>
    <p>
    {textInput(props.text)}
    </p>
    </>
)
}

export default UglyRobot