import React, { useState } from 'react'
import MenuItem from './components/MenuItems'
import "./App.css"
import PriceLog from './components/PriceLog'

const App = () => {

  const [menu, setMenu] = useState([
    {name: "Bulgogi", price: 12.99, ordered: false},
    {name: "Kimchi Tritip", price: 16.99, ordered: false},
    {name: "Garlic Pork Belly", price: 9.99, ordered: false},
    {name: "Wagyu Beef", price: 24.99, ordered: false},
    {name: "Tonkatsu", price: 6.99, ordered: false},
    {name: "Gochujang Mac and Cheese", price: 5.99, ordered: false},
    {name: "Fried Rice", price: 2.99, ordered: false},
    {name: "Ssambap", price: 2.99, ordered: false},
  
  ])

  const [totalPrice, setTotalPrice] = useState(0);

  const orderItem = (selectedItem) => {
    const updatedMenu = [...menu]
    updatedMenu[selectedItem].ordered = true
    setMenu(updatedMenu)

    const orderedItems = updatedMenu.filter((item) => item.ordered)
    const newTotalPrice = orderedItems.reduce(
      (value, item) => value + item.price,
      0
    )
    setTotalPrice(newTotalPrice.toFixed(2));
  }


  // const orderItem = (selectedItem) => {
  //   //console.log(selectedItem)
  //   menu[selectedItem].ordered = true
  //   setMenu([...menu])
  // } REFACTOR THIS



  return (
    <>
    <div className="box">
    <h1>BPQ Food Truck</h1>
    <h2 className="menu">BPQ Menu</h2>
    <PriceLog 
    totalPrice={totalPrice}
    />
      {menu.map((itemObject, index) => {
        return (
          <MenuItem
          item={itemObject}
          index={index}
          orderItem={orderItem}
          key={index}
          />
        )       
      })}
    <PriceLog 
    totalPrice={totalPrice}
    />
    
    </div>
    </>
  )
}

export default App;
