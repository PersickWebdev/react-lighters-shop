import axios from 'axios';
import {SET_ITEMS, SHOW_ALL_ITEMS} from "./actionTypes";
import { FILTER_ITEMS } from "./actionTypes";

export const fetchItems = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/lighters')
    dispatch(setItems(response.data));
}

export const setItems = (items) => {
    return {
        type: SET_ITEMS,
        payload: items
    };
};

export const filterItems = (brand) => {
    return {
        type: FILTER_ITEMS,
        payload: brand
    };
};

export const showAllItems = () => {
    return {
        type: SHOW_ALL_ITEMS
    };
};