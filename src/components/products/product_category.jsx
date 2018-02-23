import React, { Component } from 'react';
import { connect } from "react-redux";

import { productListAction } from '../../actions/product_action'
import ProductList from './product_list'
class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        var category = this.props.match.params.category;
        this.setState({ category: category })
        var data = {
            categories: [category],
            kind: 'cannabis',
            limit_start: this.props.limit_start,
            limit_size: this.props.limit_size
        }
        this.props.getProductList(data);
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
                        <ProductList products={this.props.products_list}/>
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
        limit_start: state.productReducer.limit_start
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductList: (params) => { dispatch(productListAction(params)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);