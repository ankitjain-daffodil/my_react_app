import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { connect } from "react-redux";
import {SearchProductAction} from '../../actions/product_action'
class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_products: [],
            search_text: ''
        }
        this.getSearchedProducts = this.getSearchedProducts.bind(this);
    }

    getSearchedProducts(e) {
        this.setState({ search_text: e.target.value });
        this.props.searchProducts(e.target.value);
    }

    render() {
        return (
            <div className="header-search-wrapper">

                <Autocomplete
                    getItemValue={(item, i) => item.title}
                    items={this.props.search_products}
                    renderItem={(item, isHighlighted) =>
                        <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.title}
                        </div>
                    }
                    onChange={this.getSearchedProducts}
                    value={this.state.search_text}
                    inputProps={{
                        placeholder: "Search products...",
                        className: "form-control",
                    }}
                />
                <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        searchProducts: (query) => dispatch(SearchProductAction(query))
    };
};

const mapStateToProps = state => {
    return { search_products: state.productReducer.search_products };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductSearch);