import React from "react";



const MenuItem = (props) => {
// console.log(props)
    return (
        <>
        <p> {props.name}Price: {props.price}</p>
        <button onClick = {() => props.addToCart(props.index)}>Add the item to Cart</button>
        
        
        </>
    )
}

export default MenuItem