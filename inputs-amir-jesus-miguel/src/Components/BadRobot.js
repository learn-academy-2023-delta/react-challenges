import React from "react";

const BadRobot =  (props) => {

    const textInput = (userInput) => {
        let array = userInput.split("")
        console.log(array)
        return userInput.split("")
    }
    
    
    
    
        return(
    

    <>
    <h2>BadRobot</h2>
    <p>
    {textInput(props.text)}
    </p>
    </>
)
}

export default BadRobot