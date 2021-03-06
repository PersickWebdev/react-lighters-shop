import axios from 'axios';
import {
    SET_ITEMS,
    SHOW_ALL_ITEMS,
    FILTER_ITEMS,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    DECREASE_BY_ONE,
    INCREASE_BY_ONE, TOGGLE_THEME
} from "./actionTypes";

// Store:
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

// Cart:
export const addItemToCart = (itemObject) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: itemObject
    };
};

export const removeItemFromCart = (itemId) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: itemId
    };
};

export const decreaseByOne = (itemId) => {
    return {
        type: DECREASE_BY_ONE,
        payload: itemId
    };
};

export const increaseByOne = (itemId) => {
    return {
        type: INCREASE_BY_ONE,
        payload: itemId
    };
};

// Theme:
export const toggleTheme = () => {
    return {
        type: TOGGLE_THEME,
    };
};