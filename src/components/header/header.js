import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import cn from 'classnames';
import ProductSearch from '../home/product_search';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 57, 'stickySetTop': '-57px', 'stickyChangeLogo': true}">
                <div className="header-body">
                    <div className="header-container container">
                        <div className="header-row">
                            <div className="header-column">
                                <div className="header-logo">
                                    <Link to='/'>
                                        <img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" data-sticky-top="33" src="/assets/img/icons/rootery_logo.svg" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-column">
                                <div className='header-search'>
                                    <ProductSearch />
                                </div>
                            </div>
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-search hidden-xs">

                                    </div>
                                    <nav className="header-nav-top">
                                        <ul className="nav nav-pills">
                                            <li className="hidden-xs">
                                                <a href="about-us.html"><i className="fa fa-angle-right"></i> About Us</a>
                                            </li>
                                            <li className="hidden-xs">
                                                <a href="contact-us.html"><i className="fa fa-angle-right"></i> Contact Us</a>
                                            </li>
                                            <li>
                                                <span className="ws-nowrap"><i className="fa fa-phone"></i> (123) 456-789</span>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-row">
                                    <div className="header-nav">
                                        <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                                            <i className="fa fa-bars"></i>
                                        </button>
                                        {/* <ul class="header-social-icons social-icons hidden-xs">
                                            <li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                            <li class="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                                            <li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                                        </ul> */}
                                        <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                                            <nav>
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li className="dropdown active">
                                                        <Link to='/' className='dropdown-toggle'>
                                                            Products
                                                         </Link>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <Link to='/' className='dropdown'>All</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/' className='dropdown'>Concentrates</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/' className='dropdown'>Prerolls</Link>

                                                            </li>
                                                            <li>
                                                                <Link to='/' className='dropdown'>Flowers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/' className='dropdown'>Topicals</Link>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <Link to='/' className='dropdown'>
                                                            Hardwares
														</Link>
                                                    </li>
                                                    <li className="dropdown">
                                                        <Link to='/' className='dropdown'>
                                                            Brands
														</Link>
                                                    </li>
                                                    <li className="dropdown">
                                                        <Link to='/' className='dropdown'>
                                                            Events
														</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default withRouter(Header);