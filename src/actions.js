const fetchPizzas = (pizzas) => {
    return {
        type: 'FETCH_PIZZAS_SUCCES',
        payload: pizzas
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

const choosePizzaType = (id, type, name) => {
    return {
        type: 'TYPE_PIZZA_CHOOSE',
        payload: {
            id,
            type,
            name,
        }
    }
}

const choosePizzaSize = (id, size, name) => {
    return {
        type: 'SIZE_PIZZA_CHOOSE',
        payload: {
            id,
            size,
            name
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
const decreasePizza = (id) => {
    return {
        type: 'CART_PIZZA_DECREASE',
        payload: id
    }
}

const deletePizza = (id) => {
    return {
        type: 'CART_PIZZA_DELETE',
        payload: id,
    }
}
const clearCart = () => {
    return {
        type: 'CART_CLEAR'
    }
}
const toggleAddAnimation = (id) => {
    return {
        type: 'ANIMATION_PIZZA_TOGGLE',
        payload: id,
    }
}

const loginRequest = (name, password) => {
    return {
        type: 'LOGIN_REQUEST',
        payload: {
            name,
            password
        }
    }
}
const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}
const registerRequest = (name, email, password, confirmPassword) => {
    return {
        type: 'REGISTER_REQUEST',
        payload: {
            name,
            email,
            password,
            confirmPassword,
        }
    }
}
const warningModalRemove = () => {
    return {
        type: 'WARNING_MODAL_REMOVE'
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
    decreasePizza,
    deletePizza,
    clearCart,
    toggleAddAnimation,
    loginRequest,
    logout,
    registerRequest,
    warningModalRemove,
}