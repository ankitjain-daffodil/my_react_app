import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return (

            <li key={product.id}>
                <div className="product">
                    <figure className="product-image-area">
                        <Link to={"/products/" + product.slug} className='product-image'>
                            <img src={product.product_images_urls[0]} alt={product.title} />
                            <img src={product.product_images_urls[0]} alt={product.title} className="product-hover-image"/>
                        </Link>
                    </figure>
                    <div className="product-details-area">
                        <h2 className="product-name">
                            <Link to={"/products/" + product.slug} className='product-name'>
                                {product.title}
                            </Link>
                        </h2>
                        <div className="product-ratings">
                            <div className="ratings-box">
                                <div className="rating" style={{width: product.avg_rating*20+'%'}}><h2>{product.avg_rating}</h2></div>
                            </div>
                        </div>
                        <div class="product-price-box">
                           <span class="product-price">$89.00</span>
                        </div>


                    </div>
                </div>
            </li>
        )
    }
}

export default ProductCard;