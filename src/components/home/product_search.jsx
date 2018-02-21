import React, { Component } from 'react';


class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchProducts: [],
            searchText: ''
        }
        this.getSearchedProducts = this.getSearchedProducts.bind(this);
    }

    getSearchedProducts() {
        this.setState({searchText: this.searchTextInput.value})
    }

    render() {
        return (
            <div className="header-search-wrapper">
                <input
                    type="text" 
                    className="form-control" 
                    name="q" 
                    id="q" 
                    placeholder="Product Search..." 
                    ref={(input) => { this.searchTextInput = input; }} 
                    onChange={this.getSearchedProducts}
                    />
                <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
            </div>
        )
    }

}

export default ProductSearch;