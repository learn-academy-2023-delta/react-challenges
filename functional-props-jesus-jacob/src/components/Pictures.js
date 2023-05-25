import React from 'react'

const Pictures = (props) => {
    const picArray = ["https://st4.depositphotos.com/1020804/26859/i/1600/depositphotos_268595710-free-stock-photo-medium-rare-ribeye-steak-with.jpg",  'https://upload.wikimedia.org/wikipedia/commons/5/57/Chickens_in_market.jpg', 'https://cc0.photo/wp-content/uploads/2017/08/Gilled-fish-before-smoker-scaled.jpg', 'https://www.thespruceeats.com/thmb/ke11tyx7TMVhLf7E1Gp_6A5sW9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tofu-landscape_annotated-7e94b7a2cf104d2cba22c8cf6ad7e970.jpg']
  return (
    <img src = { picArray[props.index]} alt = "pics of food"/>
  )
}

export default Pictures