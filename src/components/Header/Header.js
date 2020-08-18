import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { toggleMenuWindow } from '../../actions'
import { Link } from 'react-router-dom'

const HeaderContainer = ({
    simpleHeader,
    onToggleMenu,
    mobileMenuActive,
    total, cartCount
}) => {

    let mobileMenuClass = mobileMenuActive ?
        'header__buttons-block header__buttons-block--active' : 'header__buttons-block'

    const cartButtonRender = simpleHeader ?
        null : (
            <div className="cart">
                <div className="cart__price">{total}₴</div>
                <div className="cart__line"></div>
                <div className="cart__count">
                    <i className="fas fa-shopping-cart cart__icon"></i>
                    {cartCount}
                </div>
            </div>
        )

    return <Header
        onToggleMenu={onToggleMenu}
        mobileMenuClass={mobileMenuClass}
        cartButtonRender={cartButtonRender}
    />
}

const Header = ({
    cartButtonRender,
    onToggleMenu,
    mobileMenuClass,
}) => {
    return <header className="header">
        <div className="header__burger"
            onClick={() => onToggleMenu()}>
            XXX
        </div>


        <section className="header__logo-block">
            <img src="./logo.svg" className="header__logo" />
            <Link to="/">
                <section className="header__text-block">
                    <h1 className="header__title">Pizza Delivery</h1>
                    <p className="header__subtitle">Найсмачніша піцца у нашому вимірі</p>
                </section>
            </Link>
        </section>


        <section className={mobileMenuClass}>
            <section className="header__close" onClick={() => onToggleMenu()}> X </section>
            <section className="header__login">Увійти</section>

            <Link to="/cart">
                {cartButtonRender}
            </Link>

        </section>
    </header>
}

const mapStateToProps = ({ mobileMenuActive, total, cartCount }) => {
    return { mobileMenuActive, total, cartCount }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggleMenu: () => dispatch(toggleMenuWindow())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)