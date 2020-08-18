import React from 'react'
import './CartList.scss'
import CartItem from '../CartItem/CartItem'


const Cart = () => {
    return <section className="cart-page">
        <section className="cart-page__header">
            <div className="cart-page__title">
                <i class="fas fa-shopping-cart cart-page__cart-icon"></i>
                <p className="cart-page__text cart-page__text--title">Корзина!</p>
            </div>
            <div className="cart-page__clear">
                <i class="far fa-trash-alt cart-page__trash-icon"></i>
                <p className="cart-page__text cart-page__text--small_gray">
                    Очистити корзину
                </p>
            </div>
        </section>
        <section className="cart-page__cart-list">

            <CartItem />
            <CartItem />
            <CartItem />


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
            <button className="cart-page__nav-button">
                <span className="cart-page__text cart-page__text--small_gray">
                    Повернутись назад
                </span>
            </button>
            <button className="cart-page__nav-button cart-page__nav-button--order">
                Оплатити
            </button>
        </section>
    </section>
}

export default Cart