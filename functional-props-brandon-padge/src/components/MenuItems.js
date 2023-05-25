import React from "react";

const MenuItem = (props) => {
    return (
        <>
        <div>
        <p className="menuItems">
            
           
            {props.item.name}
            <p>{props.item.price}</p>
            {props.item.ordered &&
            <p>Ordered</p>}
            <button onClick={() => {props.orderItem(props.index)}}>
                Click Here To Order</button>
              
                  
        </p>
        
        
        
        
        
        
        </div>
        </>
    )
    
}

export default MenuItem;