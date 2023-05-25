import React from "react";
import FoodList from "./FoodList.js";

const FoodOrder = (props) => {
    return (
        <>
            
        <h1 id="order-title">Your Order</h1>
                {/* <p>{props.FoodOrder}</p> */}
            <div class="orderList">
                <ul><strong>
                    {props.order.slice(1,9).map(log => {
                        return(<li>{log}</li>)
                    })}  </strong>
                </ul>
            </div>
        </>
        ) 
}








export default FoodOrder
