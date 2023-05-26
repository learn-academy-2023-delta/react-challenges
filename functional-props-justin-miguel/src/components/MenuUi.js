import React from "react"


const MenuUi = (props) => {

return (


    <>
     <p>menu1. item: {props.menu1.item}</p>
      {props.menu1.price && <p>Buy It!</p>}
      <button onClick={() => props.clickMe(props.index)}>Buy Item</button>
    
    </>
)
}

export default MenuUi