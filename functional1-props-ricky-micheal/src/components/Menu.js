import React from 'react'

const Menu = (props) => {
    
    return (
    <>
    <p> Item: {props.food.item} 
    <br></br>Cost: ${props.food.price}</p>

    {props.food.ordered && <p>Added to Cart</p>}
    <button onClick={() =>props.addToCart(props.index)}>Order food</button>
    </>
    )
}

export default Menu