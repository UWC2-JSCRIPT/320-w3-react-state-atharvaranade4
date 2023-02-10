import './App.css';
import RentalCard from './RentalCard'
import bnb from './_data/bnbs.json'

function App() {
  const VacationRental = bnb.map((rentals, index) => {
    return (
      <div className='rental-card-container' key={index}>
        <RentalCard
          bnb={rentals}
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
        <p>Your reservations:</p>
        <p>Total cost: </p>
          <button type="button" className="checkout-btn">Checkout</button>
      </div>
    </div>
  )
}

export default App;