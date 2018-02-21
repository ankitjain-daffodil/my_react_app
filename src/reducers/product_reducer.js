const INITIAL_STATE = {
    search_products: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
            return {...state,
                search_products: action.payload};
        default:
            return state;
    }
}