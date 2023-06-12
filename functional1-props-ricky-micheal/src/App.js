import Menu from './components/Menu';
import React, { useState } from 'react';


function App() {
  
  const [total, setTotal] = useState(0)
  const [merch, setMerch] = useState([])
  const [foods, setFoods] = useState([

    {item: "Acai Bowl", price: 8, ordered: false},
    {item: "Shrimp Bowl", price: 15, ordered: false},
    {item: "Salad Bowl", price: 9, ordered: false}
  ])
  
  const addToCart = (selectedFood) => {
    foods[selectedFood].ordered = true 
    setFoods([...foods])

    let myTotal = 0
    foods.map((value, index) => {
      if(value.ordered){
        myTotal += value.price 
      }
    })
    setTotal(myTotal)

    merch.concat(selectedFood.price)
    setMerch(...merch)
  }

  





  return (
    <>
    <h1>Food Menu</h1>

    {foods.map((food, index)=>{
      return (
      <>
        <Menu
          food={food}
          key={index}
          addToCart={addToCart}
          index={index} 
        />
      </>
      )
    })}
    <h2>Total: ${(total* 1.07).toFixed(2)}</h2>
    <h2>{merch}</h2>
    </>
  )
}

export default App;
