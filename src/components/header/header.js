import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import cn from 'classnames';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsDropdownVisible: false
        };
    }

    _hasLightBg() {
        const { location } = this.props;
        return location.pathname === '/events' ||
            location.pathname === '/' ||
            location.pathname === '/products/categories' ||
            location.pathname === '/products/edibles' ||
            location.pathname === '/products/concentrates' ||
            location.pathname === '/products/prerolls' ||
            location.pathname === '/products/flower' ||
            location.pathname === '/products/topicals' ||
            location.pathname === '/products/all' ||
            params.product_id ||
            location.pathname === '/brands' ||
            location.params.brandId ||
            location.params.eventId;
    }

    render() {
        return (
            <header className={'header'}>
                <div className="header__left">
                    <Link to="/">
                        <div className={cn('header__left-logo', 'header__left-logo_green')}></div>
                    </Link>
                    <div
                        className={cn('header__left-item', {
                            'header__left-item_dark': this._hasLightBg(),
                        })}
                    >
                        <div
                            className="header__left-item_link"
                            onMouseEnter={() => this.setState({ productsDropdownVisible: true })}
                        >
                            Products
                        </div>
                        <ul
                            className="header__left-dropdown-items"
                            style={{
                                display: this.state.productsDropdownVisible ? 'flex' : 'none',
                            }}
                            onMouseLeave={() => this.setState({ productsDropdownVisible: false })}
                        >
                            <li>
                                <Link
                                    to="/products/categories"
                                    className="header__left-dropdown_link"
                                >
                                    All
                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/category/edibles"
                                    className="header__left-dropdown_link"
                                >
                                    Edibles
                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/category/concentrates"
                                    className="header__left-dropdown_link"
                                >
                                    Concentrates
                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/category/prerolls"
                                    className="header__left-dropdown_link"
                                >
                                    Prerolls
                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/category/flower"
                                    className="header__left-dropdown_link"
                                >
                                    Flower
                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/category/topicals"
                                    className="header__left-dropdown_link"
                                >
                                    Topicals
                </Link>
                            </li>
                        </ul>
                        <Link
                            to="/hardware/all"
                            className="header__left-item_link"
                        >
                            Hardware
                        </Link>
                        <Link
                            to="/brands"
                            className="header__left-item_link"
                        >
                            Brands
            </Link>
                        <Link
                            to="/events"
                            className="header__left-item_link"
                        >
                            Events
            </Link>
                    </div>
                </div>
            </header>
        )
    }

}

export default withRouter(Header);