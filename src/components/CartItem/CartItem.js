import React from 'react'
import './CartItem.scss'
import { increasePizza } from '../../actions';
import { connect } from 'react-redux';

const CartItem = ({
    name, total,
    img, id,
    settings,
    count,
    onIncrease, }) => {


    let size = settings.size
    let type = settings.type

    switch (settings.type) {
        case 'thin': type = 'Тонке тісто'; break;
        case 'classic': type = 'Товсте тісто'; break;
        default: break;
    }
    switch (settings.size) {
        case 'small': size = '26 см.'; break;
        case 'medium': size = '30 см.'; break;
        case 'large': size = '40 см.'; break;
        default: break;
    }

    return (
        <div className="cart-item">
            <div className="cart-item__info-block">
                <img src={img} className="cart-item__img" />
                <div className="cart-item__info">
                    <p className="cart-page__text">{name}</p>
                    <p className="cart-page__text cart-page__text--small_gray">
                        {`${type}, ${size}`}
                    </p>
                </div>
            </div>
            <div className="cart-item__counter-block">
                <i
                    className="fas fa-minus-circle cart-item__counter-icon"></i>
                <p className="cart-page__text cart-item__count">{count}</p>
                <i onClick={() => onIncrease(id)}
                    className="fas fa-plus-circle cart-item__counter-icon"></i>
            </div>
            <div className="cart-item__price">
                <p className="cart-page__text">{total} ₴</p>
            </div>
            <div className="cart-item__close">
                <i className="far fa-times-circle cart-item__close-icon"></i>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(increasePizza(id))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)