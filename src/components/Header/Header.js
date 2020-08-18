import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { toggleMenuWindow } from '../../actions'

const HeaderContainer = ({ onToggleMenu,
    mobileMenuActive,
    total, cartCount
}) => {
    let mobileMenuClass = mobileMenuActive ?
        'header__buttons-block header__buttons-block--active' : 'header__buttons-block'

    return <Header
        onToggleMenu={onToggleMenu}
        mobileMenuClass={mobileMenuClass}
        total={total}
        cartCount={cartCount} />
}

const Header = ({ onToggleMenu,
    mobileMenuClass, cartCount,
    total,
}) => {
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
                <div className="cart__price">{total}₴</div>
                <div className="cart__line"></div>
                <div className="cart__count">
                    <i class="fas fa-shopping-cart cart__icon"></i>
                    {cartCount}
                </div>
            </div>
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