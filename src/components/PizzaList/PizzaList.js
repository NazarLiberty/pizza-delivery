import React, { useEffect } from 'react'
import './PizzaList.scss'
import { connect } from 'react-redux'

import PizzaItem from '../PizzaItem/PizzaItem'
import PizzaService from '../../pizza-service'
import { fetchPizzas, fetchError } from '../../actions'


const pizzaService = new PizzaService()

const renderPizzas = (pizzas) => {
    return pizzas.map((pizza) => {
        return <PizzaItem
            name={pizza.name}
            price={pizza.totalPrice}
            img={pizza.img}
            key={pizza.id}
            id={pizza.id}
            thickness={pizza.settings.type}
            size={pizza.settings.size}
        />
    })
}
const PizzaList = ({ pizzas, pizzasLoaded, filter, fetchError }) => {

    switch (filter) {
        case 'all': filter = 'Всі'; break;
        case 'meat': filter = "М'ясні"; break;
        case 'vegetable': filter = 'Овочеві'; break;
        case 'spicy': filter = 'Гострі'; break;
        default:
            break;
    }

    useEffect(() => {

        pizzaService.getPizzas()
            .then((data) => pizzasLoaded(data))
            .catch((err) => fetchError(err))

    }, [])
    return <main className="pizza-list__container">
        <section className="pizza-list__header">
            {filter} піцци
        </section>
        <section className="pizza-list">
            {renderPizzas(pizzas)}

        </section>
    </main>
}


const mapDispatchToProps = (dispatch) => {
    return {
        pizzasLoaded: (data) => dispatch(fetchPizzas(data)),
        fetchError: (err) => dispatch(fetchError(err)),

    }
}
const mapStateToProps = (state) => {
    return {
        pizzas: state.filterPizzas,
        filter: state.filter
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PizzaList)