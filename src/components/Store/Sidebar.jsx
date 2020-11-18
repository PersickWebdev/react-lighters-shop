import React from 'react';
import {filterItems, showAllItems} from "../../redux/actionCreators";
import {useDispatch} from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch();

    const brands = [
        'All items',
        'Zippo',
        'S.T. Dupont',
        'BIC',
        'Clipper'
    ]

    const filterOnClick = (item) => {
        if (item === 'All items') {
            dispatch(showAllItems());
        } else {
            dispatch(filterItems(item));
        }
    }

    return (
        <aside className='sidebar'>
            <ul className='sidebar__brandsList'>
                {brands.map((item, index) => {
                    return (
                        <li className='sidebar__brandItem'
                            key={`${item}_${index}`}
                            onClick={() => filterOnClick(item)}>{item}</li>)}
                    )
                }
            </ul>
        </aside>
    );
};

export default Sidebar;
