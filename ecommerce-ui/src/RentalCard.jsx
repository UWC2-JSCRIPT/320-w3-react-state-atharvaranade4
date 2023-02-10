import React from "react";
import RentalImage from './RentalImage';
import RentalBody from './RentalDetails';
import './App.css'

function RentalCard ({ bnb }){        
    return (
        <div className="bnb-container">
            <RentalImage
            image={bnb.image}
            />
            <div className="bnb-body-container">
            <RentalBody
            locationCity={bnb.location.city}
            locationCountry={bnb.location.country}
            paymentCost={bnb.payment.cost}
            />
            <div className="reserve-btn-container">
                <button type="button" className="reserve-list-btn">Reserve</button>
            </div>
            </div>
        </div>
    )
}

export default RentalCard