import { SET_ITEMS } from "./actionTypes";
import axios from 'axios';

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