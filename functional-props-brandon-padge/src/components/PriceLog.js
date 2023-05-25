import React from "react";

 const PriceLog = (props) => {
    
     return (
         <>
                <h1>Your Total is: ${props.totalPrice}</h1>
         </> 
     )
 }



//pseudo code:
// create useState with foodPrice, setPrice
// create something that logs the food price of each object in the array.
// create something that adds the food prices together.
// new array? use addUp: function()? return this.price + this.price etc.
// Object destructuring? 
    // let { smoothie1 } = breakfast.drink.smoothies?
    // let {price 1 } = menu[i].price ?
// grabbing price from object key value pairs, add them together, return a new array with the values from key value pairs. 
// maybe new button to push the values into a new array to add up.

 export default PriceLog;