import React from 'react'
import './PizzaItem.scss'
import { connect } from 'react-redux'
import { choosePizzaType, choosePizzaSize } from '../../actions'



const PizzaItemContainer = ({ name, id,
    price, img, thickness = 'thin',
    size = 'small', onChooseType,
    onChooseSize }) => {


    const thicknessSettings = (thickness) => {
        let thinClass = "pizza-settings__thickness pizza-settings__thickness--active"
        let classicClass = "pizza-settings__thickness"
        if (thickness === 'classic') {
            classicClass += ' pizza-settings__thickness--active'
            thinClass = " pizza-settings__thickness"
        }
        return (
            <>
                <div className={thinClass} onClick={() => onChooseType(id, 'thin')}>тонка</div>
                <div className={classicClass} onClick={() => onChooseType(id, 'classic')}>класична</div>
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
                <div className={smallPizzaClass} onClick={() => onChooseSize(id, 'small')}>26 см.</div>
                <div className={mediumPizzaClass} onClick={() => onChooseSize(id, 'medium')}>30 см.</div>
                <div className={largePizzaClass} onClick={() => onChooseSize(id, 'large')}>40 см.</div>
            </>
        )
    }


    return <PizzaItem name={name}
        price={price}
        img={img}
        thicknessSettingsRender={thicknessSettings(thickness)}
        sizeSettingsRender={sizeSettings(size)}
    />
}


const PizzaItem = ({ name, price,
    img, thicknessSettingsRender,
    sizeSettingsRender }) => {

    return <section className="pizza-item__container">
        <div className="pizza-item__image-block">
            <img src={img} className="pizza-item__image" />
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
            <button className="pizza-item__order-button">
                <img src="./plus.png" className="pizza-item__plus" />
                <p className="pizza-item__order-text"> Добавити </p>
                <p className="pizza-item__order-count">0</p>
            </button>
        </div>
    </section>
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChooseType: (id, type) => dispatch(choosePizzaType(id, type)),
        onChooseSize: (id, size) => dispatch(choosePizzaSize(id, size))
    }
}
export default connect(null, mapDispatchToProps)(PizzaItemContainer)