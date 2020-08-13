import {combineReducers} from "redux";

const defaultState = {
    isDark: false
}

function commonReducer(state = defaultState, action) {
    switch (action.type) {
        case "themeChange":
            return {
                ...state,
                isDark: action.data
            }
        default:
            return state;
    }
}

export default combineReducers({
    common: commonReducer
});
