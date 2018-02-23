import React from 'react';
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route, IndexRoute, Switch } from "react-router-dom";

import App from './App';
import Lending from './components/static_pages/lending'
import ProductCategory from './components/products/product_category'
export default (
    <Router history={browserHistory}>
        <App>
            <Switch>
                <Route exact path={"/"} component={Lending} />
                <Route path={"/products/category/:category"} component={ProductCategory} />
            </Switch>
        </App>
    </Router>
);





