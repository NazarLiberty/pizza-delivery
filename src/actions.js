const fetchPizzas = (pizzas) => {
    return {
        type: 'FETCH_PIZZAS_SUCCES',
        payload: pizzas,
    }
}
const fetchError = (err) => {
    return {
        type: 'FETCH_PIZZAS_FAILURE',
        payload: err
    }
}
const fetchRequest = () => {
    return {
        type: 'FETCH_PIZZAS_REQUEST'
    }
}

const choosePizzaType = (id, type) => {
    return {
        type: 'TYPE_PIZZA_CHOOSE',
        payload: {
            id,
            type
        }
    }
}

const choosePizzaSize = (id, size) => {
    return {
        type: 'SIZE_PIZZA_CHOOSE',
        payload: {
            id,
            size
        }
    }
}

const changeFilter = (filter) => {
    return {
        type: 'FILTER_CHANGE',
        payload: filter,
    }
}
const changeSort = (sortType) => {
    return {
        type: 'SORT_CHANGE',
        payload: sortType,
    }
}
const toggleSortWindow = () => {
    return {
        type: 'SORT_TOGGLE'
    }
}
const toggleMenuWindow = () => {
    return {
        type: 'MOBILE_MENU_TOGGLE'
    }
}
const toggleFilterWindow = () => {
    return {
        type: 'MOBILE_FILTER_TOGGLE'
    }
}
const addPizzaToCart = (id) => {
    return {
        type: 'CART_PIZZA_ADD',
        payload: id
    }
}
const increasePizza = (id) => {
    return {
        type: 'CART_PIZZA_INCREASE',
        payload: id
    }
}
export {
    fetchRequest,
    fetchPizzas,
    fetchError,
    choosePizzaType,
    choosePizzaSize,
    changeFilter,
    changeSort,
    toggleSortWindow,
    toggleMenuWindow,
    toggleFilterWindow,
    addPizzaToCart,
    increasePizza,
}