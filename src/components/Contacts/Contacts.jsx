import React from 'react';
import classNames from 'classnames';
import {useSelector} from "react-redux";

const Contacts = () => {
    const theme = useSelector((state) => state.lighters.theme);

    return (
        <main className={classNames('contacts', {
            'contacts--light': theme
        })}>
            <h2 className='title'>Our Contacts:</h2>
            <p className='paragraph'>Telephone number: 000 00 00 000</p>
            <p className='paragraph'>Telephone number: 000 00 00 000</p>
            <p className='paragraph'>Telegramm: @lighters_shop</p>
            <p className='paragraph'>Instagramm: @lighters_shop_official</p>
            <p className='paragraph'>Email: lighters_shop_official@gmail.com</p>
        </main>
    );
};

export default Contacts;