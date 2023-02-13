import React from "react";
import PropTypes from 'prop-types';
import RentalImage from './RentalImage';
import RentalBody from './RentalDetails';
import './App.css'

function RentalCard ({ bnb, orientation, manageCart, action }){
    return (
        <div className={`bnb-container-${orientation}`}>
            <RentalImage
            image={bnb.image}
            altDescription={bnb.title}
            />
            <div className="bnb-body-container">
                <RentalBody
                locationCity={bnb.location.city}
                locationCountry={bnb.location.country}
                paymentCost={bnb.payment.cost}
                />
                <div className="reserve-btn-container">
                    <button 
                        className="reserve-list-btn"
                        onClick={() => manageCart(bnb.title)}>{action}
                        {/* without callback, the functions loads by itself */}
                    </button>
                </div>
            </div>
        </div>
    )
}

RentalCard.propTypes = {
    bnb: PropTypes.object.isRequired,
    manageCart: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    orientation: PropTypes.string.isRequired
  }

export default RentalCard