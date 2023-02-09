import './App.css';
import RentalCard from './RentalCard'
import bnb from './_data/bnbs.json'

function App() {
  const VacationRental = bnb.map((bnb, index) => {
    return (
      <div className='rental-card-container' key={index}>
        <RentalCard
          bnb={bnb}
        />
      </div>
    )
  });
  
  return(
    <div className="App">
      <div className='your-articles-container'>
        {VacationRental}
      </div>
    </div>
  )
}

export default App;