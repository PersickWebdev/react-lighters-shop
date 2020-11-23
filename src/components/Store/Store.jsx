import React from 'react';
import classNames from 'classnames';
import { useSelector } from "react-redux";

import { Sidebar } from '../../components';
import { LightersList } from '../../components';

const Store = () => {
    const theme = useSelector((state) => state.lighters.theme);

    return (
        <main className={classNames('store', {
            'store--light': theme
        })}>
            <Sidebar/>
            <LightersList/>
        </main>
    );
};

export default Store;