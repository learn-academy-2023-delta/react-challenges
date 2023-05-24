import React, {useState} from 'react'

const Color = () => {

  const [color, setcolor] = useState(0)
  const handleClick = () => setcolor(color + 1)  
  return(
    <>
    onClick={handleClick}

    </>
  )
}


export default Color