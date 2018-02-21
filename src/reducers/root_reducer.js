import { combineReducers } from 'redux';
import ProductReducer from './product_reducer'
const RootReducer = combineReducers({
    productReducer:ProductReducer
});

export default RootReducer;
