import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductCard from './product_card';


class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    _showLoadMore(can_local_more) {
        if (can_local_more) {
            return (
                <div className="toolbar-bottom">
                    <div className="toolbar">
                        <button onClick={this.props.loadMore} className="btn btn-primary">
                            Load More Products
                        </button>
                    </div>
                </div>
            )
        }
    }

    render() {
        const { product_filters } = this.props
        return (
            <div className="col-md-9 col-md-push-3">
                <ul className="products-grid columns4">

                    {this.props.products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}


                </ul>
                {this._showLoadMore(this.props.canFetchMore) }
            </div>
        )
    }
}

export default ProductList;