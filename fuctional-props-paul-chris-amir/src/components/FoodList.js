import React from "react";
import App from "../App.js";

const FoodList = (props) => {
    return (
        <>
            <p>{props.item.name} {props.item.price}</p>
            <button onClick={() => props.addToOrder(index)}>Order</button>
        </>
    )
}

export default FoodList