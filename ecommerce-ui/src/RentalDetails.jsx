import React from 'react';
import PropTypes from 'prop-types';

function RentalDetails({ locationCity, locationCountry, paymentCost }){

    return (
        <div className='rental-details-container'>
            <div className='rental-location-details'>
                <p>{ locationCity }, { locationCountry }</p>
            </div>  
            <div className='rental-payment-details'>
                <span>Cost: ${ paymentCost }</span>
            </div>  
        </div>
    )
}

export default RentalDetails

RentalDetails.propTypes = {
    locationCity: PropTypes.string.isRequired,
    locationCountry: PropTypes.string.isRequired,
    paymentCost: PropTypes.number.isRequired,
}