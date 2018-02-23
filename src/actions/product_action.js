import axios from 'axios';
import { handleRequest } from '../utils/handleRequest';
import { setAuthToken } from '../utils/setAuthToken';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const LIST_PRODUCT = 'LIST_PRODUCT';

const SEARCH_PRODUCT_URL = process.env.API_ROUTE + 'products/search/query';
const PRODUCT_LIST_URL = process.env.API_ROUTE + 'products';

export const SearchProductAction = (query) => dispatch => {
    var data = {
        params: { "product[title]": query },
        headers: setAuthToken()
    };
    if (query !== '') {
        const request = axios.get(SEARCH_PRODUCT_URL, data);
        handleRequest(dispatch, request, SEARCH_PRODUCT);
    } else {
        return dispatch({type:SEARCH_PRODUCT, payload: {products:[]}});
    }
}

export const productListAction = (params) => dispatch => {
    var data = {
        params: params,
        headers: setAuthToken()
    };
        const request = axios.get(PRODUCT_LIST_URL, data);
        handleRequest(dispatch, request, LIST_PRODUCT);
    
}