import React, {useState} from "react";
import FoodList from "./components/FoodList.js";
import FoodOrder from "./components/FoodOrder.js";
import  "./App.css"

const App = () => {
  const [menu, setMenu] = useState([
    {name: "sushi", ordered: false, price: "7.99"},
    {name: "tempura", ordered: false, price: "11.99"},
    {name: "ramen", ordered: false, price: "12.99"},
    {name: "sashimi", ordered: false, price: "13.99"},
    {name: "udon", ordered: false, price: "10.99"},
  ])
  const [order, setOrder] = useState([])

  const addToOrder = (food) => {
     setOrder([food, ...order])
  }
  return (
  <>
    <div className="page">
      <div className="menu">
        <h1>Japanese Cuisine</h1>
        {menu.map((item, index) => {
          return (
            <FoodList item={item} index={index} key={index} addToOrder={addToOrder}/>
          )
        })}
        </div>
        <div className="order">
          <FoodOrder order={order}/>
        </div>

      </div>
  </>
  )
}

export default App
