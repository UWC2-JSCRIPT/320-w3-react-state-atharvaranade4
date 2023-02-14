import React from 'react';
import PropTypes from 'prop-types';
import RentalCard from './RentalCard';

function ShoppingCart({bnbCart, manageCart }){ //bnbCart is local variable, will be overwritten in app.js
    let total = 0;
    let ShoppingCartItems = bnbCart.map((item, index) =>
    <div className='rental-card-container' key={index}>
        <RentalCard
            bnb={item}
            manageCart={manageCart}
            action="Remove from Cart"
            />
    </div>
    )
    // console.log(bnbCart)
    for(let i of bnbCart) {
        total = total + i.payment.cost
        // console.log(i)
    }    
    // for(let i of bnbCart) {
    //     title = i.payment.description;
    //     console.log(i)
    // }    
    return (
        <>
            <p>Shopping Cart:</p>
            <div>
                {ShoppingCartItems}
            </div>
            <p>Total cost: ${total}</p>
        </>
    )
}

export default ShoppingCart

ShoppingCart.propTypes = {
    bnbCart: PropTypes.array.isRequired,
    manageCart: PropTypes.func.isRequired,
}