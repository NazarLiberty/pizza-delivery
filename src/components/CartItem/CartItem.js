import React from 'react'
import './CartItem.scss'

const CartItem = ({
    name, total,
    img, id,
    settings, count }) => {
    return (
        <div className="cart-item">
            <div className="cart-item__info-block">
                <img src={img} className="cart-item__img" />
                <div className="cart-item__info">
                    <p className="cart-page__text">{name}</p>
                    <p className="cart-page__text cart-page__text--small_gray">
                        {`${settings.type},${settings.size}`}
                    </p>
                </div>
            </div>
            <div className="cart-item__counter-block">
                <i class="fas fa-minus-circle cart-item__counter-icon"></i>
                <p className="cart-page__text cart-item__count">{count}</p>
                <i class="fas fa-plus-circle cart-item__counter-icon"></i>
            </div>
            <div className="cart-item__price">
                <p className="cart-page__text">{total} ₴</p>
            </div>
            <div className="cart-item__close">
                <i class="far fa-times-circle cart-item__close-icon"></i>
            </div>
        </div>
    )
}

export default CartItem