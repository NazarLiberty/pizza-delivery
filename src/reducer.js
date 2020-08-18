const initState = {
    pizzas: [],
    cartPizzas: [],
    filterPizzas: [],
    cartCount: 0,
    total: 0,
    filter: "all",
    sort: "popularity",
    sortActive: false,
    mobileMenuActive: false,
    mobileFilterActive: false,
    error: null,
}

const changeThicknessType = (state, id, type) => {
    return state.filterPizzas.map((pizza) => {
        if (pizza.id === id) {
            const { size } = pizza.settings
            const { markup, price } = pizza
            return {
                ...pizza,
                totalPrice: price + markup[type] + markup[size],
                settings: { type: type, size: size }
            }
        }
        return pizza
    })
}

const changeSizeSettings = (state, id, size) => {
    return state.filterPizzas.map((pizza) => {
        if (pizza.id === id) {
            const { type } = pizza.settings
            const { markup, price } = pizza
            return {
                ...pizza,
                totalPrice: price + markup[type] + markup[size],
                settings: { type: type, size: size }
            }
        }
        return pizza
    })
}

const filterItems = (listToFilter, filter) => {
    return listToFilter.filter((pizza) => pizza.class === filter)
}

const sortItems = (listToSort, sortType) => {
    if (sortType === 'cost') return listToSort.sort((a, b) => a.price > b.price ? 1 : -1);
    if (sortType === 'popularity') return listToSort.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    if (sortType === 'alphabet') return listToSort.sort((a, b) => a.name > b.name ? 1 : -1);
    return listToSort
}

const createCartPizza = (state, pizzaId) => {
    const selectedPizza = state.filterPizzas.find(({ id }) => id === pizzaId)
    return {
        name: selectedPizza.name,
        total: selectedPizza.totalPrice,
        settings: selectedPizza.settings,
        img: selectedPizza.img,
        count: 1,
        id: selectedPizza.id,
    }
}

const increaseCartPizza = (state, newCartedPizza, actionAddPizzaId) => {
    return state.cartPizzas.map((pizza) => {
        if (pizza.id === actionAddPizzaId) return (
            {
                ...pizza,
                count: ++pizza.count,
                total: newCartedPizza.total + pizza.total
            }
        )
        return pizza
    })
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PIZZAS_SUCCES':
            return {
                ...state,
                pizzas: action.payload,
                filterPizzas: action.payload
            }
        case 'FETCH_PIZZAS_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case 'TYPE_PIZZA_CHOOSE':
            const { id: pizzaIdType } = action.payload
            const { type } = action.payload
            const updatedType = changeThicknessType(state, pizzaIdType, type)
            return {
                ...state,
                filterPizzas: updatedType
            }
        case 'SIZE_PIZZA_CHOOSE':
            const { id: pizzaIdSize } = action.payload
            const { size } = action.payload
            const updatedSize = changeSizeSettings(state, pizzaIdSize, size)
            return {
                ...state,
                filterPizzas: updatedSize
            }
        case 'FILTER_CHANGE':
            const pizzaClass = action.payload
            let listToFilter = state.pizzas
            let filteredList = listToFilter
            if (pizzaClass !== 'all') filteredList = filterItems(listToFilter, pizzaClass)
            return {
                ...state,
                filter: pizzaClass,
                filterPizzas: filteredList
            }
        case 'SORT_CHANGE':
            const sortType = action.payload;
            const listToSort = state.filterPizzas.map((e) => e)
            const sortedItems = sortItems(listToSort, sortType)
            return {
                ...state,
                sort: sortType,
                filterPizzas: sortedItems
            }
        case 'SORT_TOGGLE':
            return {
                ...state,
                sortActive: !state.sortActive
            }
        case 'MOBILE_MENU_TOGGLE':
            return {
                ...state,
                mobileMenuActive: !state.mobileMenuActive
            }
        case 'MOBILE_FILTER_TOGGLE':
            return {
                ...state,
                sortActive: false,
                mobileFilterActive: !state.mobileFilterActive
            }
        case 'CART_PIZZA_ADD':
            const actionAddPizzaId = action.payload
            const newCartedPizza = createCartPizza(state, actionAddPizzaId)
            const isPizzaCarted = state.cartPizzas.find((pizza) => pizza.id === actionAddPizzaId)
            let updatedCart = newCartedPizza
            if (isPizzaCarted) updatedCart = increaseCartPizza(state, newCartedPizza, actionAddPizzaId)

            const newCartCount = state.cartCount + 1
            const newTotal = state.total + newCartedPizza.total

            return {
                ...state,
                cartCount: newCartCount,
                total: newTotal,
                cartPizzas: [
                    ...state.cartPizzas,
                    updatedCart,
                ],
            }

        default: return state
    }
}

export default reducer