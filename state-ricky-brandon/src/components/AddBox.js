import React, { useState } from 'react'
import Box from './Box'

const AddBox = () => {
    const [count, setCount] = useState([])

    // const plusOneBox = () => {
    //     const newBox = {
    //         id: count.length + 1,
    //         color: 'white'
    //     }
    // }

    return (
        <button onClick={<Box />}></button>
    )
}   

export default AddBox

// return (
//     <>
//     <button onClick={AddBox}>Add Box</button>
//     <>
//     {count.map(box => (
//         <Box key={box.id} color={box.color}/>
//     ))}
//     </>
//     </>
// )