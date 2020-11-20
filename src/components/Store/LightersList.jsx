import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addItemToCart, fetchItems} from "../../redux/actionCreators";
import { Lighter } from '../../components';

const LightersList = () => {
    const dispatch = useDispatch();
    const lighters = useSelector((state) => state.lighters.lighters);
    const isFiltered = useSelector((state) => state.lighters.isFiltered);
    const filteredLighters = useSelector((state) => state.lighters.filteredLighters);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const addToCartHandler = (itemObject) => {
        dispatch(addItemToCart(itemObject));
    }

    const lightersElements = isFiltered ? filteredLighters.map(lighter => <Lighter key={lighter.id}
                                                                                   {...lighter}
                                                                                   addToCartHandler={addToCartHandler}/>)
                                        : lighters.map(lighter => <Lighter key={lighter.id}
                                                                           {...lighter}
                                                                           addToCartHandler={addToCartHandler}/>)

    return (
        <div className='lightersList'>
            {lightersElements}
        </div>
    );
};

export default LightersList;