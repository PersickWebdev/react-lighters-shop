import React from 'react';

import { CartItem } from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from "../../redux/actionCreators";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.lighters.cartItems);
    console.log(cartItems);

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

    return (
        <div className='cart__container'>
            {cartElements.length
                ? cartElements.map(item => <CartItem key={item.id}
                                                     {...item}
                                                     cartItems={cartItems}
                                                     removeFromCartHandler={removeFromCartHandler}/>)
                : <span className='cart__message'>No items ...</span>}
        </div>
    );
};

export default Cart;