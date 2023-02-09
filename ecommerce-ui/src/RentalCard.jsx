import React from "react";
import RentalImage from './RentalImage';
import RentalBody from './RentalDetails'

function RentalCard ({ bnb }){        
    return (
        <div className={`bnb`}>
            <RentalImage
            image={bnb.image}
            />
            <RentalBody
            locationCity={bnb.location.city}
            locationCountry={bnb.location.country}
            paymentCost={bnb.payment.cost}
            />
        </div>
    )
}

export default RentalCard