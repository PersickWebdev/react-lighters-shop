import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink className='nav__link button'
                     activeClassName='button--active'
                     to='/home'>
                Home
            </NavLink>
            <NavLink className='nav__link button'
                     activeClassName='button--active'
                     to='/store'>
                Store
            </NavLink>
            <NavLink className='nav__link button'
                     activeClassName='button--active'
                     to='/about'>
                About
            </NavLink>
            <NavLink className='nav__link button'
                     activeClassName='button--active'
                     to='/contacts'>
                Contacts
            </NavLink>
        </nav>
    );
};

export default Nav;