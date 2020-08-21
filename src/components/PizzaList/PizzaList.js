import React, { useEffect } from 'react'
import './PizzaList.scss'
import { connect } from 'react-redux'

import Loader from '../Loader/Loader'
import PizzaItem from '../PizzaItem/PizzaItemContainer'
import PizzaService from '../../pizza-service'
import { fetchPizzas, fetchError, fetchRequest } from '../../actions'


const pizzaService = new PizzaService()

const renderPizzas = (pizzas) => {
    return pizzas.map((pizza) => {
        return <PizzaItem key={pizza.id}
            {...pizza}
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

    useEffect(() => {
        fetchRequest()
        pizzaService.getPizzas()
            .then((data) => pizzasLoaded(data))
            .catch((err) => fetchError(err))
    }, [filter, sort, fetchRequest, pizzasLoaded, fetchError])

    switch (filter) {
        case 'all': filter = 'Всі'; break;
        case 'meat': filter = "М'ясні"; break;
        case 'vegetable': filter = 'Овочеві'; break;
        case 'spicy': filter = 'Гострі'; break;
        default:
            break;
    }
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