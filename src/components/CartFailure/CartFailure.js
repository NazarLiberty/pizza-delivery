import React from 'react'
import './CartFailure.scss'

const CartFailure = () => {
    return <div className="cart-failure">
        <h2 className="cart-failure__title">
            Корзина пуста 😕
        </h2>
        <p className="cart-failure__sub-title">
            Схоже, що ви ще не вибрали жодної піци. Для того, щоб вибрати піцу, поверністья на головну сторінку
        </p>
        <img src="empty-cart.png" className="cart-failure__img" />
        <button className="cart-failure__back">Повернутися назад</button>
    </div>
}

export default CartFailure