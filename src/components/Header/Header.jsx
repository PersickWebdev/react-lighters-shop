import React from 'react';

import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/cart.png';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logoBox'>
                <img className='header__logo' src={logo} alt='logo-picture'/>
            </div>
            <h1 className='header__name'>
                Exclusive Lighters
            </h1>
            <div className='header__rightBox'>
                <button className='button'>
                    Dark Theme
                </button>
                <div className='cart'>
                    <NavLink className='cart__link button' to='/cart' activeClassName='button--active'>
                        <div className='cart__iconBox'>
                            <img className='cart__icon' src={cartIcon} alt="cartIcon"/>
                        </div>
                        <div className='cart__data'>
                            <p className='cart__quantity'>5</p>
                            <p className='cart__amount'>500$</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;