import React from 'react';
import classNames from 'classnames';

import { CartItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseByOne, increaseByOne, removeItemFromCart } from "../../redux/actionCreators";

const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems, theme } = useSelector((state) => state.lighters);

    const removeFromCartHandler = (itemId) => {
        dispatch(removeItemFromCart(itemId))
    }

    const cartElements = [];
    for (let array in cartItems) {
        cartItems[array].forEach(item => {
            for (let obj of cartElements) {
                if (item.id === obj.id) return;
            }
            cartElements.push(item);
        })
    }

    const decreaseByOneHandler = (id) => {
        dispatch(decreaseByOne(id));
    }

    const increaseByOneHandler = (id) => {
        dispatch(increaseByOne(id));
    }

    return (
        <div className={classNames('cart__container', {
            'cart__container--light': theme
        })}>
            {cartElements.length
                ? cartElements.map(item => <CartItem key={item.id}
                                                     {...item}
                                                     cartItems={cartItems}
                                                     decreaseByOneHandler={decreaseByOneHandler}
                                                     increaseByOneHandler={increaseByOneHandler}
                                                     removeFromCartHandler={removeFromCartHandler}/>)
                : <span className='cart__message'>No items ...</span>}
        </div>
    );
};

export default Cart;