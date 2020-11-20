import {
    SET_ITEMS,
    SHOW_ALL_ITEMS,
    FILTER_ITEMS,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
} from "./actionTypes";

const initialState = {
    lighters: [],
    filteredLighters: [],
    cartItems: {},
    isFiltered: false,
    totalCount: 0,
    totalPrice: 0
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
                cartItems: newItems
            }
        case REMOVE_ITEM_FROM_CART :
            const items = {}
            for (let key in state.cartItems) {
                if (Number(key) !== action.payload) {
                    items[key] = state.cartItems[key]
                }
            }
            console.log(items)
            return {
                ...state,
                cartItems: items
            }
        default:
            return state;
    }
}

export default storeReducer;