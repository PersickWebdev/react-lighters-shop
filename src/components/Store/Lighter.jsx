import React from 'react';

const Lighter = ({ id, url, model, country, color, fuel, ignition, material, price }) => {
    return (
        <div className='lighter'>
            <h3 className='lighter__title'>
                {model}
            </h3>

            <div className='lighter__imageBox'>
                <img className='lighter__image' src={url} alt=""/>
            </div>

            <div className='lighter__descriptionBox'>
                <p className='lighter__option'>
                    <span>Country:</span><span>{country}</span>
                </p>
                <p className='lighter__option'>
                    <span>Color:</span><span>{color}</span>
                </p>
                <p className='lighter__option'>
                    <span>Fuel:</span><span>{fuel}</span>
                </p>
                <p className='lighter__option'>
                    <span>Ignition:</span><span>{ignition}</span>
                </p>
                <p className='lighter__option'>
                    <span>Material:</span><span>{material}</span>
                </p>
            </div>

            <div className='lighter__bottomBox'>
                <p className='lighter__price'>
                    <span>$ {price}</span>
                </p>
                <button className='button'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Lighter;