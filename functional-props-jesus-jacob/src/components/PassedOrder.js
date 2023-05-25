import React from 'react'

const PassedOrder = (props) => {
    // console.log(props);
    // console.log(props.order);
  return (
    <>
    <h1>{(props.total*1.0625).toFixed(2)}</h1>
    <ol>
        {props.order.map((value, index) => {
            return <li key = {index}> {value.name} </li>
        })}

    </ol>
    
    
    </>
  )
}

export default PassedOrder