import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { toggleMenuWindow, logout } from '../../actions'
import { Link } from 'react-router-dom'

const HeaderContainer = ({
    simpleHeader,
    onToggleMenu,
    mobileMenuActive,
    total, cartCount,
    name, logged,
    onLogout,
}) => {
    let mobileMenuClass = mobileMenuActive ?
        'header__buttons-block header__buttons-block--active' : 'header__buttons-block'

    const cartButtonRender = simpleHeader ?
        null : (
            <div className="cart" onClick={() => onToggleMenu()}>
                <div className="cart__price">{total}₴</div>
                <div className="cart__line"></div>
                <div className="cart__count">
                    <i className="fas fa-shopping-cart cart__icon"></i>
                    {cartCount}
                </div>
            </div>
        )

    const loginButton = logged ?

        <div className="header__welcome">
            <p>Ласкаво просимо - </p>
            <p className=" header__welcome header__welcome--nick">
                {name}!
            </p>
            <p className="header__logout" onClick={() => onLogout()}>
                Вийти
            </p>
        </div>
        :
        <Link to="/login">
            <section onClick={() => onToggleMenu()}
                className="header__login">
                Увійти
                </section>
        </Link>


    return <Header
        onToggleMenu={onToggleMenu}
        mobileMenuClass={mobileMenuClass}
        cartButtonRender={cartButtonRender}
        loginButton={loginButton}
    />
}

const Header = ({
    cartButtonRender,
    onToggleMenu,
    mobileMenuClass,
    loginButton
}) => {
    return <header className="header">
        <div className="header__burger"
            onClick={() => onToggleMenu()}>
            <i className="fab fa-elementor"></i>
        </div>


        <section className="header__logo-block">
            <img src="./logo.svg" className="header__logo" alt="logo" />
            <Link to="/">
                <section className="header__text-block">
                    <h1 className="header__title">Pizza Delivery</h1>
                    <p className="header__subtitle">Найсмачніша піцца у нашому вимірі</p>
                </section>
            </Link>
        </section>


        <section className={mobileMenuClass}>
            <section className="header__close" onClick={() => onToggleMenu()}>
                X
            </section>

            {loginButton}

            <Link to="/cart">
                {cartButtonRender}
            </Link>

        </section>
    </header>
}

const mapStateToProps = ({
    shoppingCart:
    { total, cartCount },
    mobileMenuActive,
    loginPage:
    { name, logged } }) => {
    return {
        mobileMenuActive,
        total,
        cartCount,
        name,
        logged
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggleMenu: () => dispatch(toggleMenuWindow()),
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)