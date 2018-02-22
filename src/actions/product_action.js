import axios from 'axios';
import { handleRequest } from '../utils/handleRequest';
import { setAuthToken } from '../utils/setAuthToken';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

const SEARCH_PRODUCT_URL = process.env.API_ROUTE + 'products/search/query';

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