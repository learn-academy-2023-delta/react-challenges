import React from "react";

const BadBot = (props) => {
    const badBotText = (string) => {
        let badText = ""
        for ( let i = 0; i < string.length; i++) {
            if (i % 3 === 0) {
                badText += "B"
            } else if (i % 3 === 1) {
                badText += "L"
            } else {
                badText += "A"
            }
        }
        return badText
    }

    return (
        <>
            <h1>
                I heard you say: {badBotText(props.badBotValue)}
            </h1>
        </>
    )
}







export default BadBot