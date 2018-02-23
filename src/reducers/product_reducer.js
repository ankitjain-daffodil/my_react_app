const INITIAL_STATE = {
    search_products: [],
    products_list: [],
    can_fetch_more: true,
    limit_start: 0,
    limit_size: 20,
    filters: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
        return Object.assign({}, state, {
            search_products: action.payload.products
          })
        case 'LIST_PRODUCT':
        return Object.assign({}, state, {
            products_list: action.payload.products,
            can_fetch_more: action.payload.can_fetch_more,
            filters: action.payload.filters,
          })
        default:
            return state;
    }
}