import React from 'react';
import cl from './Header.module.css'
import { HeaderProps } from './Header.props';

const Header = ({ quantityProducts }: HeaderProps): JSX.Element => {
    return (
        <div className={cl.header}>
            <div className="container">
                <div className={cl.header__wrap}>
                    <h1 className={cl.header__logo}>
                        <a href="#">Online Shop</a>
                    </h1>
                    <div className={cl.header__kart}>
                        <img src="./assets/cart.svg" alt="" />
                        <div className={cl.header__count}>{quantityProducts}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;