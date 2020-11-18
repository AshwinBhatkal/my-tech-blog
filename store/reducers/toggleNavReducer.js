import types from "../actionTypes";
import initialState from "../initialState";

const toggleNavReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_NAV:
            return { ...state, navOpen: action?.navOpen };
        default:
            return state;
    }
};

export default toggleNavReducer;
