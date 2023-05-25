import React, {useState} from 'react'
import Box from './Box.js'

// var addBox = () => {
//   let boxArr = []
//    return boxArr.push(<Box/>)
//  }

const Button = () => {
  var addBox = []
  const [boxNum, setBoxNum] = useState([])
  const handleClick = () => {
    setBoxNum(addBox.push(<Box/>))
  }

  return(
    <>
    <button onClick={handleClick}>Button!</button>
    {addBox}
    </>
  )
}

export default Button