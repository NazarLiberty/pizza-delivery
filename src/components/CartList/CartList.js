import React from 'react'
import './CartList.scss'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const CartList = ({ cartPizzas }) => {

    return <section className="cart-page">
        <section className="cart-page__header">
            <div className="cart-page__title">
                <i class="fas fa-shopping-cart cart-page__cart-icon"></i>
                <p className="cart-page__text cart-page__text--title">Корзина</p>
            </div>
            <div className="cart-page__clear">
                <span className="cart-page__clear-underscore"></span>
                <i class="far fa-trash-alt cart-page__trash-icon"></i>
                <p className="cart-page__text cart-page__text--small_gray">
                    Очистити корзину
                </p>
            </div>
        </section>
        <section className="cart-page__cart-list">


            {cartPizzas.map((pizza) => {
                return <CartItem {...pizza} key={pizza.id} />
            })}

        </section>
        <section className="cart-page__info-block">
            <div className="cart-page__text-block">
                <span className="cart-page__text cart-page__text--thin">Всього піц: </span>
                <span className="cart-page__text">3 шт</span>
            </div>
            <div className="cart-page__text-block">
                <span className="cart-page__text cart-page__text--thin">Сума заказу: </span>
                <span className="cart-page__text cart-page__text--orange">777 $</span>
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

const mapStateToProps = ({ cartPizzas }) => {
    return { cartPizzas }
}

export default connect(mapStateToProps)(CartList)