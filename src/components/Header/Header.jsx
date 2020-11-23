import React from 'react';


import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/images/cart.png';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actionCreators';

const Header = () => {
    const dispatch = useDispatch();
    const { totalCount, totalPrice, theme } = useSelector((state) => state.lighters);

    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    }

    return (
        <header className={classNames('header', {
            'header--light': theme
        })}>
            <div className='header__logoBox'>
                <img className='header__logo' src={logo} alt='logo-picture'/>
            </div>
            <h1 className='header__name'>
                Exclusive Lighters
            </h1>
            <div className='header__rightBox'>
                <button className='button' onClick={toggleThemeHandler}>
                    Switch Theme
                </button>
                <div className='cart'>
                    <NavLink className='cart__link button' to='/cart' activeClassName='button--active'>
                        <div className='cart__iconBox'>
                            <img className='cart__icon' src={cartIcon} alt="cartIcon"/>
                        </div>
                        <div className='cart__data'>
                            <p className='cart__quantity'>{totalCount}</p>
                            <p className='cart__amount'>$ {totalPrice}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;