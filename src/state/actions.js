// types
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
}

// actions
export const setSearchTerm = searchTerm => {
    return {
        type: actionTypes.SET_SEARCH_TERM,
        payload: searchTerm
    }
}
