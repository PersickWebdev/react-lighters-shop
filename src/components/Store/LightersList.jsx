import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/actionCreators";
import { Lighter } from '../../components';

const LightersList = () => {
    const dispatch = useDispatch();
    const lighters = useSelector((state) => state.lighters.lighters);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const lightersElements = lighters.map(lighter => <Lighter key={lighter.id} {...lighter}/>)

    return (
        <div className='lightersList'>
            {lightersElements}
        </div>
    );
};

export default LightersList;