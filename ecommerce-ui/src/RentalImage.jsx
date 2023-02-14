import React from 'react';
import PropTypes from 'prop-types';

function RentalImage({ image, altDescription, imgCrop }){
    return (
        <div className='rental-image-container'>
            <img className={`rental-image-${imgCrop}`} src={image} alt={altDescription}/>
        </div>
    )
}

export default RentalImage

RentalImage.propTypes = {
    image: PropTypes.string.isRequired,
    altDescription: PropTypes.string.isRequired,
    imgCrop: PropTypes.string.isRequired
}