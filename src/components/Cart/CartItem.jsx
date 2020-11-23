import React from 'react';

const CartItem = ({
    id,
    url,
    model,
    price,
    removeFromCartHandler,
    cartItems
                  }) => {
    return (
        <div className='cartItem'>
            <div className='cartItem__imageBox'>
                <img className='cartItem__img' src={url} alt='item-picture'/>
            </div>
            <p className='cartItem__name'>
                {model}
            </p>
            <div className='cartItem__quantityBox'>
                <button className='button button--cart'>
                    &#45;
                </button>
                <p className='cartItem__quantity'>
                    {cartItems[id].length}
                </p>
                <button className='button button--cart'>
                    &#43;
                </button>
            </div>
            <p className='cartItem__price'>
                $ {cartItems[id].reduce((sum, item) => sum + item.price, 0)}
            </p>
            <div className='cartItem__buttonBox'>
                <button className='button button--delete button--cart'
                        onClick={() => removeFromCartHandler(id)}>
                    &times;
                </button>
            </div>

        </div>
    );
}

export default CartItem;