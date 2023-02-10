import React from 'react';
import PropTypes from 'prop-types';

function RentalCart({ image, altDescription }){
    return (
        <>
            <p>Your reservations:</p>
            <p>Total cost: </p>
            <button type="button" className="checkout-btn">Checkout</button>
        </>
    )
}

export default RentalCart

RentalCart.propTypes = {
    image: PropTypes.string.isRequired,
    // altDescription: PropTypes.string.isRequired
}