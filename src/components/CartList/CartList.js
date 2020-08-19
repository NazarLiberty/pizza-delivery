import React from 'react'
import './CartList.scss'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const CartList = ({ cartPizzas, total, cartCount }) => {

    const renderCartPizzas = (cartPizzas) => {
        return cartPizzas.map((pizza) => {
            return <CartItem {...pizza} key={pizza.id} />
        })
    }

    return <section className="cart-page">
        <section className="cart-page__header">
            <div className="cart-page__title">
                <i className="fas fa-shopping-cart cart-page__cart-icon"></i>
                <p className="cart-page__text cart-page__text--title">Корзина</p>
            </div>
            <div className="cart-page__clear">
                <span className="cart-page__clear-underscore"></span>
                <i className="far fa-trash-alt cart-page__trash-icon"></i>
                <p className="cart-page__text cart-page__text--small_gray">
                    Очистити корзину
                </p>
            </div>
        </section>
        <section className="cart-page__cart-list">

            {renderCartPizzas(cartPizzas)}

        </section>
        <section className="cart-page__info-block">
            <div className="cart-page__text-block">
                <span className="cart-page__text cart-page__text--thin">Всього піц: </span>
                <span className="cart-page__text">{cartCount} шт</span>
            </div>
            <div className="cart-page__text-block">
                <span className="cart-page__text cart-page__text--thin">Сума заказу: </span>
                <span className="cart-page__text cart-page__text--orange">{total} ₴</span>
            </div>
        </section>
        <section className="cart-page__buttons-block">
            <Link to="/">
                <button className="cart-page__nav-button">
                    <span className="cart-page__text cart-page__text--small_gray">
                        Повернутись назад
                    </span>
                </button>
            </Link>
            <button className="cart-page__nav-button cart-page__nav-button--order">
                Оплатити
            </button>
        </section>
    </section>
}

const mapStateToProps = ({ cartPizzas, total, cartCount }) => {
    return { cartPizzas, total, cartCount }
}

export default connect(mapStateToProps)(CartList)