import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ProductCard from './product_card'
class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
            </div>
        )
    }
}

export default ProductList;