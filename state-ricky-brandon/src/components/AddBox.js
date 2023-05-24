import React, { useState } from 'react'
import Box from './Box'

const AddBox = () => { // Create function to add boxes to the screen
    const [count, setCount] = useState([])
// a react hook is stating an array 
    const plusOneBox = () => {
    // On click for the button and box
        const newBox = {
            id: count.length + 1,
            color: 'white'
        } // 
        setCount(prevBoxes => [...prevBoxes, newBox])
    }

    return (
        <>
        <button onClick={plusOneBox}>Add Box</button>
        {count.map(box => (
            <Box key={box.id} color={box.color}/>
        ))}
        </>
    )
}
export default AddBox