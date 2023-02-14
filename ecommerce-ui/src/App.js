import './App.css';
import RentalCard from './RentalCard'
import ShoppingCart from './ShoppingCart';
import bnbData from './_data/bnbs.json';
import { useState } from "react";

function App() {
  //declare states
  let [cartBnbs, setCart] = useState([]);
  
  //Add to cart
  const AddToCart = function(bnbTitle){
    // console.log(bnbTitle)
    let unitToAdd = bnbData.find(unit => unit.title === bnbTitle) //find items to add
    // console.log(unitToAdd)
    let alreadyExist = cartBnbs.some(item => item.title === unitToAdd.title)
    if(alreadyExist) {
      alert('The item is already in the cart.')
      return
    }
    setCart(prevState => [...prevState, unitToAdd])
  }

  //remove from cart
  const removeFromCart = function(bnbTitle){
    let removeArr = cartBnbs.filter(unit => unit.title !== bnbTitle)
    setCart(removeArr)
  }
  
  const VacationRental = bnbData.map((item, index) => {
    return (
      <div className='rental-card-container' key={index}>
        <RentalCard
          bnb={item}
          manageCart={AddToCart}
          // delagate the managecart function to AddToCart
          action="Add to Cart"
          />
      </div>
    )
  });
  
  return(
    <div className="main-container">
      <div className='your-rentals-container'>
        {VacationRental}
      </div>
      <div className="reserve-container">
        <ShoppingCart
        key={cartBnbs.title}
        bnbCart={cartBnbs} 
        manageCart={(bnbTitle) => removeFromCart(bnbTitle)}
        />
      </div>
    </div>
  
  )
}

export default App;