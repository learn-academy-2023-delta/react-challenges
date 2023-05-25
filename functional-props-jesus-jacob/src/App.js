import React, {useState} from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Order from './components/Order';
import PassedOrder from './components/PassedOrder';
import Pictures from './components/Pictures'

const App = () => {
  const menuItems = [
  {name:"Steak", price: 50}, 
  {name:"Chicken", price: 20}, 
  {name:"Fish", price: 25}, 
  {name:"Tofu", price: 15}
  ]
  const [cart, setCart] = useState([])
  const [totalOfCart, setTotal] = useState(0)
  const [pastOrders, setPastOrders] = useState([])
  const [lastChoice, setLastChoice] = useState(0)



  const addToCart = (index) => {
    setCart([...cart, menuItems[index]])

    setLastChoice(index)
    setTotal(totalOfCart+menuItems[index].price)
  }
  
  class pastOrder{
    constructor(pastOrderItems, orderTotal){
    this.pastOrderItems =  pastOrderItems;
    this.orderTotal = orderTotal
    }
  }
const checkOut = () => {
  
  
  let newPastOrder = new pastOrder(cart, totalOfCart)
  console.log("New Passed Order" ,newPastOrder);
  let baseArray = []
  baseArray.push(newPastOrder)
  console.log("base Array", baseArray[0]);
  setPastOrders([...pastOrders, baseArray[0]])
  console.log("Passed Orders array: ", pastOrders);
  setCart([])
  setTotal(0)
  
}



  return (
  <>
  <ul>{menuItems.map((value, index) => {
   return <li key = {index}><MenuItem index = {index} addToCart = {addToCart} name = {value.name} price = {value.price} /></li>
  })}</ul>
  <h1 className = "pics"><Pictures index = {lastChoice} /></h1>
  

  <h1> Cart   Total: {(totalOfCart*1.0625).toFixed(2)}</h1>
 <button onClick = {checkOut}>Checkout!</button>
  <ol>{cart.map((value, index) => {
    return <li key = {index}><Order name = {value.name} price = {value.price} /> </li>
    
  })}</ol>

<ul className = "past">{pastOrders.length>0 && pastOrders.map((value, index) => {
   return <li key = {index}><PassedOrder total = {value.orderTotal} order = {value.pastOrderItems} /></li>
  })}</ul>
  
 
  
  
  </>
  )
}

export default App;
