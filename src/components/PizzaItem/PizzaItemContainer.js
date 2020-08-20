import React, { useEffect } from 'react'
import './PizzaItem.scss'
import PizzaItem from './PizzaItem'

import { connect } from 'react-redux'
import { choosePizzaType, choosePizzaSize, addPizzaToCart } from '../../actions'


const PizzaItemContainer = ({ name, id,
    price, img, thickness = 'thin',
    size = 'small', onChooseType,
    onChooseSize, onCartPizza,
    cartPizzasNameList }) => {


    const getPizzaCount = (cartPizzasNameList, pizzaName) => {
        const currentPizzasCount = cartPizzasNameList.filter((name) => name === pizzaName)
        if (currentPizzasCount.length > 0) return currentPizzasCount.length
        return null
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

    return <PizzaItem name={name}
        price={price}
        img={img}
        thicknessSettingsRender={thicknessSettings(thickness)}
        sizeSettingsRender={sizeSettings(size)}
        onCartPizza={onCartPizza}
        id={id}
        renderCount={renderCount}
    />
}


const mapStateToProps = ({ shoppingCart: { cartPizzasKind: cartPizzasNameList } }) => {
    return { cartPizzasNameList }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChooseType: (id, type, name) => dispatch(choosePizzaType(id, type, name)),
        onChooseSize: (id, size, name) => dispatch(choosePizzaSize(id, size, name)),
        onCartPizza: (id) => {
            dispatch(addPizzaToCart(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PizzaItemContainer)