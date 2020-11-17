import React from 'react';

import { Sidebar } from '../../components';
import { LightersList } from '../../components';

const Store = () => {
    return (
        <main className='store'>
            <Sidebar/>
            <LightersList/>
        </main>
    );
};

export default Store;