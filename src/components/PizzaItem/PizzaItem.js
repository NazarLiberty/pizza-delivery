import React from 'react'
import './PizzaItem.scss'

const PizzaItem = ({ name,
    logged,
    price, img,
    thicknessSettingsRender,
    sizeSettingsRender, onCartPizza,
    id, renderCount,
    pizzaItemImage,
    pizzaImageClass }) => {

    return <section className="pizza-item__container">
        <div className="pizza-item__image-block">
            <img src={img} className="pizza-item__image-static" alt="pizza" />
            <img src={img} className={pizzaImageClass} ref={pizzaItemImage} alt="pizza for animation" />
        </div>
        <div className="pizza-item__title">
            <p className="pizza-item__text">{name}</p>
        </div>
        <div className="pizza-settings__container pizza-item__text pizza-item__text--settings">
            {thicknessSettingsRender}
            {sizeSettingsRender}

        </div>
        <div className="pizza-item__order">
            <p className="pizza-item__price pizza-item__text pizza-item__text--price">{price} ₴</p>
            <button onClick={() => onCartPizza(id, logged)}
                className="pizza-item__order-button">
                <img src="./plus.png" className="pizza-item__plus" alt="plus" />
                <p className="pizza-item__order-text">
                    Добавити
                </p>
                {renderCount}
            </button>
        </div>
    </section>
}

export default PizzaItem