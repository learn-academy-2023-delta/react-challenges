import React from 'react'
import HistoryList from './HistoryList'


const HistoryField = (props) => {

  return (
    <>
    <div className='historyBox'>
      <div className='insideHistoryBox'>History {props.rollValue} </div>   
    </div>
    
    </>
  )
}

export default HistoryField