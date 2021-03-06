import React, { useRef } from 'react'
import './PizzaItem.scss'
import PizzaItem from './PizzaItem'

import { connect } from 'react-redux'
import { choosePizzaType, choosePizzaSize, addPizzaToCart, toggleAddAnimation } from '../../actions'
import { Link } from 'react-router-dom'


const PizzaItemContainer = ({
    logged,
    name, id,
    totalPrice, img,
    settings: { type: thickness = 'thin',
        size = 'small' },
    onChooseType,
    onChooseSize,
    onCartPizza,
    cartPizzasNameList,
    animation }) => {

    const pizzaItemImage = useRef(null)

    const getPizzaCount = (cartPizzasNameList, pizzaName) => {
        const currentPizzasCount = cartPizzasNameList.filter((name) => name === pizzaName)
        if (currentPizzasCount.length > 0) return currentPizzasCount.length
        return null
    }

    const addToCartButtonState = (id, renderCount) => {
        if (logged) return (
            <button onClick={() => onCartPizza(id)}
                className="pizza-item__order-button">
                <img src="./plus.png" className="pizza-item__plus" alt="plus" />
                <p className="pizza-item__order-text">
                    Добавити
                </p>
                {renderCount}
            </button>
        )
        else return (
            <Link to="/cart-login">
                <button className="pizza-item__order-button">
                    <img src="./plus.png" className="pizza-item__plus" alt="plus" />
                    <p className="pizza-item__order-text">
                        Добавити
                </p>
                    {renderCount}
                </button>
            </Link>
        )
    }

    const thicknessSettings = (thickness) => {
        let thinClass = "pizza-settings__thickness"
        let classicClass = "pizza-settings__thickness"

        if (thickness === 'classic') classicClass += ' pizza-settings__thickness--active'
        if (thickness === 'thin') thinClass += ' pizza-settings__thickness--active'
        return (
            <>
                <div className={thinClass} onClick={() => onChooseType(id, 'thin', name)}>тонка</div>
                <div className={classicClass} onClick={() => onChooseType(id, 'classic', name)}>стандартна</div>
            </>
        )
    }
    const sizeSettings = (size) => {

        let smallPizzaClass = 'pizza-settings__size';
        let mediumPizzaClass = 'pizza-settings__size';
        let largePizzaClass = 'pizza-settings__size';

        if (size === 'small') smallPizzaClass += ' pizza-settings__size--active'
        if (size === 'medium') mediumPizzaClass += ' pizza-settings__size--active'
        if (size === 'large') largePizzaClass += ' pizza-settings__size--active'

        return (
            <>
                <div className={smallPizzaClass} onClick={() => onChooseSize(id, 'small', name)}>26 см.</div>
                <div className={mediumPizzaClass} onClick={() => onChooseSize(id, 'medium', name)}>30 см.</div>
                <div className={largePizzaClass} onClick={() => onChooseSize(id, 'large', name)}>40 см.</div>
            </>
        )
    }

    const count = getPizzaCount(cartPizzasNameList, name)
    const renderCount = count > 0 ?
        <p className="pizza-item__order-count">{count}</p> : null

    const pizzaImageClass = animation ?
        'pizza-item__image pizza-item__image--animated' : 'pizza-item__image'

    return <PizzaItem name={name}
        addToCartButtonState={addToCartButtonState}
        price={totalPrice}
        img={img}
        thicknessSettingsRender={thicknessSettings(thickness)}
        sizeSettingsRender={sizeSettings(size)}
        onCartPizza={onCartPizza}
        id={id}
        renderCount={renderCount}
        pizzaItemImage={pizzaItemImage}
        pizzaImageClass={pizzaImageClass}
    />
}


const mapStateToProps = ({
    shoppingCart:
    { cartPizzasKind: cartPizzasNameList },
    loginPage:
    { logged }
}) => {
    return {
        cartPizzasNameList,
        logged
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChooseType: (id, type, name) => dispatch(choosePizzaType(id, type, name)),
        onChooseSize: (id, size, name) => dispatch(choosePizzaSize(id, size, name)),
        onCartPizza: (id) => {
            dispatch(toggleAddAnimation(id))
            dispatch(addPizzaToCart(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PizzaItemContainer)