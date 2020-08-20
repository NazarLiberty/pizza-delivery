import React, { useEffect } from 'react'
import './PizzaList.scss'
import { connect } from 'react-redux'

import Loader from '../Loader/Loader'
import PizzaItem from '../PizzaItem/PizzaItem'
import PizzaService from '../../pizza-service'
import { fetchPizzas, fetchError, fetchRequest, toggleMenuWindow } from '../../actions'


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
            initialId={pizza.initialId}
        />
    })
}
const PizzaList = ({ pizzas,
    sort,
    fetchRequest,
    pizzasLoaded,
    filter,
    fetchError,
    loader, }) => {
    console.log(pizzas)
    switch (filter) {
        case 'all': filter = 'Всі'; break;
        case 'meat': filter = "М'ясні"; break;
        case 'vegetable': filter = 'Овочеві'; break;
        case 'spicy': filter = 'Гострі'; break;
        default:
            break;
    }

    useEffect(() => {
        fetchRequest()
        pizzaService.getPizzas()
            .then((data) => pizzasLoaded(data))
            .catch((err) => fetchError(err))
    }, [filter, sort])

    if (loader) return <Loader />

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
        fetchRequest: () => dispatch(fetchRequest()),

    }
}
const mapStateToProps = ({ pizzaList: { filterPizzas: pizzas, filter, loader, sort } }) => {
    return {
        pizzas, filter, loader, sort
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PizzaList)