import React from 'react'
import './CartFailure.scss'

const CartFailure = ({ logout }) => {

    let title = 'Корзина пуста 😕'
    let subtitle = 'Схоже, що ви ще не вибрали жодної піци. Для того, щоб вибрати піцу, поверністья на головну сторінку'
    if (logout) {
        title = "Ви не ввійшли у свій аккаунт 😕"
        subtitle = 'Схоже, що ви не авторизувались, для того, щоб увійти, натисність кнопку вгорі'
    }

    return <div className="cart-failure">
        <h2 className="cart-failure__title">
            {title}
        </h2>
        <p className="cart-failure__sub-title">
            {subtitle}
        </p>
        <img src="empty-cart.png" className="cart-failure__img" />
        <button className="cart-failure__back">Повернутися назад</button>
    </div>
}

export default CartFailure