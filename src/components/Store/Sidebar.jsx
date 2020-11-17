import React from 'react';

const Sidebar = () => {
    const brands = [
        'Zippo',
        'S.T. Dupond',
        'BIC',
        'Clipper'
    ]

    return (
        <aside className='sidebar'>
            <ul className='sidebar__brandsList'>
                <li className='sidebar__brandItem'>
                    All Items
                </li>
                {brands.map((item, index) => <li className='sidebar__brandItem' key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </aside>
    );
};

export default Sidebar;
