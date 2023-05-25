import React from "react";



const MenuItem = (props) => {
console.log(props)
    return (
        <>
        <p key = {props.id}> {props.name}Price: {props.price}</p>
        <h1>Hello</h1>
        
        </>
    )
}

export default MenuItem