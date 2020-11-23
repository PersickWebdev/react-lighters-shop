import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const Footer = () => {
    const theme = useSelector((state) => state.lighters.theme);
    return (
        <footer className={classNames('footer', {
            'footer--light': theme
        })}>
            <div className='footer__linkBoxSide'>
                <div className='footer__linkBox'>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                </div>
                <div className='footer__linkBox'>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                </div>
            </div>
            <div className='footer__linkBoxSide'>
                <div className='footer__linkBox'>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                </div>
                <div className='footer__linkBox'>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                    <a className='footer__link' href="#">Link to somewhere</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;