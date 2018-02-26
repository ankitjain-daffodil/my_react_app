import React, { Component } from 'react';

var changeCase = require('change-case');

class ProductFilter extends Component {
    constructor(props) {
        super(props);
    }

    prepareFilterData(filter_category) {
        switch (filter_category) {
            case 'rating':
                return (
                    <div id="panel-filter-category" className="accordion-body collapse in">
                        <div className="panel-body">
                            <ul>
                                {this.props.filter.map((value, index) => (
                                    <li key={index}>
                                    <input type="checkbox" name={this.props.category} value={value['key']} onChange={this.props.action} />
                                        <div className="product-ratings">
                                            <div className="ratings-box">
                                                <div className="rating" style={{ width: value['key'] * 20 + '%' }}></div>
                                            </div>
                                        </div>
                                        
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                    </div>
                )
            default:
                return (
                    <div id="panel-filter-category" className="accordion-body collapse in">
                        <div className="panel-body">
                            <ul>
                                {this.props.filter.map((value, index) => (
                                    <li key={index}><input type="checkbox" name={this.props.category} value={value['key']} onChange={this.props.action} />{value['key']}({value['doc_count']})<br /></li>
                                )
                                )}
                            </ul>
                        </div>
                    </div>
                )
        }
    }
    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle" data-toggle="collapse" href="#panel-filter-category">
                                {changeCase.titleCase(this.props.category)}
                            </a>
                        </h4>
                    </div>
                    {this.prepareFilterData(this.props.category)}
                </div>
            </div>
        )
    }
}

export default ProductFilter;