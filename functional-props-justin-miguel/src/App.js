import { useState } from "react"
import MenuUi from "./components/MenuUi"
import PriceUI from "./components/PriceUI"


const App = () => {
    const [menu,setMenu] = useState([
      {item: "Pizza Slice", price: "7.99" , bought: false  },
      {item: "Bacon Hot Dog", price: "5.99", bought: false  },
      {item: "Carne Asada Nachos", price: "10.99", bought: false   },
      {item: "Chicken Wings 12 pcs", price: "8.99", bought: false   },
      {item: "Mac & Cheese Bowl", price: "4.99", bought: false   },
      {item: "Corn Dog", price: "2.99", bought: false   },
      {item: "Spicy Popcorn 16 oz", price: "3.99", bought: false  }
])



const clickMe = (buttonStuff) => {
  menu[buttonStuff].bought = true
  setMenu([...menu])
 
}

return (
 <>
    <h1>Today's Menu</h1>
     {menu.map((menu1, index) => {
         
   return <MenuUi
   menu1 ={menu1} 
   index = {index}
   key = {index}
   clickMe = {clickMe}
   /> 
})}
      
  </>

)

}

export default App