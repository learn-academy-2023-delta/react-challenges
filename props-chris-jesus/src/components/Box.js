import React from 'react'

const Box = (props) => {

  return (
    <>
    <div className='box'>

      <div className='clickBox'>Roll: {props.rollValue}</div>
      <button onClick={props.onClick} >Roll Dice</button>
    </div>
    
    </>
  )
}

export default Box