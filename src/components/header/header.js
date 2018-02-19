import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={'header'}>
                <div className="header__left">
                    <Link to="/">
                        <div className={cn('header__left-logo', 'header__left-logo_green')}>
                        </div>
                    </Link>
                </div>
            </header>
        )
    }

}

export default Header;