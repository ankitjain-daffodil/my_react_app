import React, { Component } from 'react';
import { connect } from "react-redux";

import { productListAction, filterProductListAction } from '../../actions/product_action';
import ProductList from './product_list';
import ProductFilter from './product_filter';


class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.onFilterChange = this.onFilterChange.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        var category = this.props.match.params.category;
        this.setState({ category: category })
        var filters = {
            categories: [category],
            kind: 'cannabis',
            limit_start: this.props.limit_start,
            limit_size: this.props.limit_size
        };
        this.setState({ filters: filters });
        this.props.getProductList(filters);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category === '' && this.props.match.params.category !== '') {
            var category = this.props.match.params.category;
            this.setState({ category: category })
            var filters = {
                categories: [category],
                kind: 'cannabis',
                limit_start: 0,
                limit_size: this.props.limit_size
            };
            this.setState({ filters: filters });
            this.props.filterProductList(filters);
        }

        if (prevProps.match.params.category !== this.props.match.params.category) {
            var category = this.props.match.params.category;
            this.setState({ category: category })
            var filters = {
                categories: [category],
                kind: 'cannabis',
                limit_start: this.props.limit_start,
                limit_size: this.props.limit_size
            };
            this.setState({ filters: filters });
            this.props.filterProductList(filters);
        }
    }

    onFilterChange(e) {
        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            var prevSelectedFilter = this.state.filters[e.target.name]
            if (prevSelectedFilter === undefined) {
                prevSelectedFilter = [e.target.value];
            } else {
                prevSelectedFilter.push(e.target.value);
            }
        } else {
            var prevSelectedFilter = this.state.filters[e.target.name];
            var index = prevSelectedFilter.indexOf(e.target.value);
            prevSelectedFilter.splice(index, 1);
        }
        var filters = this.state.filters;
        filters[e.target.name] = prevSelectedFilter;
        filters.limit_size = 28;
        filters.limit_start = 0;
        this.setState({ filters: filters });
        this.props.filterProductList(this.state.filters);
    }

    loadMore() {
        var filters = this.state.filters;
        filters.limit_start = filters.limit_size + filters.limit_start;
        this.setState({ filters: filters });
        this.props.getProductList(this.state.filters);
    }

    render() {

        return (
            <div>
                <section className="page-header mb-lg">

                    <div className="container">
                        <ul className="breadcrumb">
                            <li>Product</li>
                            <li>Category</li>
                            <li className="active">{this.state.category}</li>
                        </ul>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <ProductList products={this.props.products_list} loadMore={this.loadMore} canFetchMore={this.props.can_fetch_more} />
                        <aside className="col-md-3 col-md-pull-9 sidebar shop-sidebar">
                            {
                                Object.keys(this.props.products_filter).map(key =>
                                    <ProductFilter
                                        key={key}
                                        filter={this.props.products_filter[key]}
                                        category={key}
                                        action={this.onFilterChange}
                                    />
                                )
                            }
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products_list: state.productReducer.products_list,
        limit_size: state.productReducer.limit_size,
        limit_start: state.productReducer.limit_start,
        products_filter: state.productReducer.filters,
        can_fetch_more: state.productReducer.can_fetch_more,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductList: (params) => { dispatch(productListAction(params)) },
        filterProductList: (params) => { dispatch(filterProductListAction(params)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);