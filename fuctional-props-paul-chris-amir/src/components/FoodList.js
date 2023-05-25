import React from "react";
import App from "../App.js";

const FoodList = (props) => {
    return (
        <>
        <div className="price">
            <p><strong>{props.item.name}</strong></p>
            <p><strong> {props.item.price}</strong></p>
            <button onClick={() => props.addToOrder(props.item.name)}>Order</button>
        </div>
        </>
    )
}

export default FoodList