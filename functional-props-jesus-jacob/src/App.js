import React from 'react';
import './App.css';
import MenuItem from './components/MenuItem'

const App = () => {
  const menuItems = [{id:1, name:"Steak", price: 50}, {id:2, name:"Chicken", price: 20}, {id:3, name:"Fish", price: 25}, {id:4, name:"Tofu", price: 15}]
  return (
  <>
  <h1>{menuItems.map((value, index) => {
    <MenuItem name = {value.name} price = {value.price} key = {value.id} />
  })}</h1>
  <h1>Hello</h1>
  
  
  
  </>
  )
}

export default App;
