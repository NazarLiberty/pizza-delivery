import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { toggleMenuWindow } from '../../actions'

const HeaderContainer = ({ onToggleMenu, mobileMenuActive }) => {
    let mobileMenuClass = mobileMenuActive ?
        'header__buttons-block header__buttons-block--active' : 'header__buttons-block'


    return <Header
        onToggleMenu={onToggleMenu}
        mobileMenuClass={mobileMenuClass} />
}

const Header = ({ onToggleMenu, mobileMenuClass }) => {
    return <header className="header">
        <div className="header__burger"
            onClick={() => onToggleMenu()}>
            XXX
        </div>
        <section className="header__logo-block">
            <img src="./logo.svg" className="header__logo" />
            <section className="header__text-block">
                <h1 className="header__title">Pizza Delivery</h1>
                <p className="header__subtitle">Найсмачніша піцца у нашому вимірі</p>
            </section>
        </section>

        <section className={mobileMenuClass}>
            <section className="header__close" onClick={() => onToggleMenu()}> X </section>
            <section className="header__login">Увійти</section>
            <div className="cart">
                <div className="cart__price">200$</div>
                <div className="cart__line"></div>
                <div className="cart__count"><i className="fas fa-cart-plus cart__icon"></i>102</div>
            </div>
        </section>
    </header>
}

const mapStateToProps = ({ mobileMenuActive }) => {
    return { mobileMenuActive }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggleMenu: () => dispatch(toggleMenuWindow())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)