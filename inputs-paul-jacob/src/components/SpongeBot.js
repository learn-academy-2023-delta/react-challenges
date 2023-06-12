import React from "react";

const SpongeBot = (props) => {
    const spongeWords = (string) => {
        let spongeString = "" 
        for ( let i = 0; i < string.length; i++) {
            if (i % 2 === 1) {
                spongeString += string[i].toUpperCase() 
            } else {
                spongeString += string[i].toLowerCase()
            }
        }
        return spongeString
    }
    return (
        <>
            <h1>
                i HeArD yOu SaY: {spongeWords(props.spongeBotValue)}
            </h1>
        </>
    )
}







export default SpongeBot