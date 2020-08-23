import { actionTypes } from './actions'

export const initialState = {
    searchTerm: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state;
    }
};

export default reducer;