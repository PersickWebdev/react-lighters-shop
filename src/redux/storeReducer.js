import {SET_ITEMS} from "./actionTypes";

const initialState = {
    lighters: []
}

const storeReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case SET_ITEMS :
            return {
                ...state,
                lighters: action.payload
            }
        default:
            return state;
    }
}

export default storeReducer;