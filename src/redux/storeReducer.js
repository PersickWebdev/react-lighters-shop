import {
    SET_ITEMS,
    SHOW_ALL_ITEMS,
    FILTER_ITEMS,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    DECREASE_BY_ONE,
    INCREASE_BY_ONE,
    TOGGLE_THEME,
} from "./actionTypes";
import { calculateTotalAmount } from '../utils/utilFunctions';
import { calculateTotalPrice } from '../utils/utilFunctions';

const initialState = {
    lighters: [],
    filteredLighters: [],
    cartItems: {},
    isFiltered: false,
    totalCount: 0,
    totalPrice: 0,
    theme: false
}

const storeReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case SET_ITEMS :
            return {
                ...state,
                lighters: action.payload
            }
        case FILTER_ITEMS :
            return {
                ...state,
                filteredLighters: state.lighters.filter(item => item.brand === action.payload),
                isFiltered: true
            }
        case SHOW_ALL_ITEMS :
            return {
                ...state,
                isFiltered: false
            }
        case ADD_ITEM_TO_CART :
            const newItems = {
                ...state.cartItems,
                [action.payload.id]: !state.cartItems[action.payload.id]
                    ? [action.payload]
                    : [...state.cartItems[action.payload.id], action.payload]
            };

            return {
                ...state,
                cartItems: newItems,
                totalCount: calculateTotalAmount(newItems),
                totalPrice: calculateTotalPrice(newItems)
            }
        case REMOVE_ITEM_FROM_CART :
            const items = {}
            for (let key in state.cartItems) {
                if (Number(key) !== action.payload) {
                    items[key] = state.cartItems[key]
                }
            }

            return {
                ...state,
                cartItems: items,
                totalCount: calculateTotalAmount(items),
                totalPrice: calculateTotalPrice(items)
            }
        case DECREASE_BY_ONE :
            const itemsObject = {
                ...state.cartItems
            }
            for (let array in itemsObject) {
                if (Number(array) === action.payload) {
                    if (itemsObject[array].length > 1) {
                        itemsObject[array].pop();
                    }
                }
            }
            return {
                ...state,
                cartItems: itemsObject,
                totalCount: calculateTotalAmount(itemsObject),
                totalPrice: calculateTotalPrice(itemsObject)
            }
        case INCREASE_BY_ONE :
            const newItemsObject = {
                ...state.cartItems
            }
            for (let array in newItemsObject) {
                if (Number(array) === action.payload) {
                    newItemsObject[array].push(newItemsObject[array][0]);
                }
            }
            return {
                ...state,
                cartItems: newItemsObject,
                totalCount: calculateTotalAmount(newItemsObject),
                totalPrice: calculateTotalPrice(newItemsObject)
            }
        case TOGGLE_THEME :
            return {
                ...state,
                theme: !state.theme
            }
        default:
            return state;
    }
}

export default storeReducer;