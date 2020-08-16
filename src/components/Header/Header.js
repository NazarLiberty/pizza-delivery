import React from 'react'
import './Header.scss'

const Header = () => {
    return <header className="header">
        <section className="header__logo-block">
            <img src="./logo.svg" className="header__logo" />
            <section className="header__text-block">
                <h1 className="header__title">Pizza Delivery</h1>
                <p className="header__subtitle">Most delicious pizza ever!</p>
            </section>
        </section>

        <section className="header__buttons-block">
            <section className="header__close" > X </section>
            <section className="header__login">Login</section>
            <div className="cart">
                <div className="cart__price">200$</div>
                <div className="cart__line"></div>
                <div className="cart__count"><i class="fas fa-cart-plus cart__icon"></i>102</div>
            </div>
        </section>
    </header>
}

export default Header