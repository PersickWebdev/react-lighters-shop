import {FILTER_ITEMS, SET_ITEMS, SHOW_ALL_ITEMS} from "./actionTypes";

const initialState = {
    lighters: [],
    filteredLighters: [],
    isFiltered: false
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
        default:
            return state;
    }
}

export default storeReducer;