const INITIAL_STATE = {
    search_products: [],
    search_text: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
        return Object.assign({}, state, {
            search_products: action.payload
          })
        default:
            return state;
    }
}