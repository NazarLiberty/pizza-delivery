import React from 'react'
import './CartItem.scss'

const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="cart-item__info-block">
                <img src="./cheeze.png" className="cart-item__img" />
                <div className="cart-item__info">
                    <p className="cart-page__text">Cheeze Pizza</p>
                    <p className="cart-page__text cart-page__text--small_gray">
                        Fat, small
                    </p>
                </div>
            </div>
            <div className="cart-item__counter-block">
                <i class="fas fa-minus-circle cart-item__counter-icon"></i>
                <p className="cart-page__text cart-item__count">2</p>
                <i class="fas fa-plus-circle cart-item__counter-icon"></i>
            </div>
            <div className="cart-item__price">
                <p className="cart-page__text">777 $ </p>
            </div>
            <div className="cart-item__close">
                <i class="far fa-times-circle cart-item__close-icon"></i>
            </div>
        </div>
    )
}

export default CartItem