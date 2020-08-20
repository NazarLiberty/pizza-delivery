
const initState = {
    pizzas: [],
    cartPizzas: [],
    filterPizzas: [],
    pizzasSettingsMemory: [],
    cartPizzasKind: [],
    cartCount: 0,
    total: 0,
    filter: "all",
    sort: "popularity",
    sortActive: false,
    mobileMenuActive: false,
    mobileFilterActive: false,
    loader: true,
    error: null,
}

const changeThicknessType = (state, id, type) => {
    return state.filterPizzas.map((pizza) => {
        if (pizza.id === id) {
            const { size } = pizza.settings
            const { markup, price } = pizza
            const newId = `${pizza.initialId + type + size}`
            return {
                ...pizza,
                totalPrice: price + markup[type] + markup[size],
                settings: { type: type, size: size },
                id: newId
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
            const newId = `${pizza.initialId + type + size}`
            return {
                ...pizza,
                totalPrice: price + markup[type] + markup[size],
                settings: { type: type, size: size },
                id: newId
            }
        }
        return pizza
    })
}

const filterItems = (listToFilter, filter) => {
    const uniquePizzaId = listToFilter.map((item) => {
        let { id, settings: { type, size } } = item
        let newId = `${id + type + size}`
        return {
            ...item,
            id: newId,
            initialId: id,
        }
    })
    if (filter === 'all') return uniquePizzaId
    return uniquePizzaId.filter((pizza) => pizza.class.includes(filter))
}

const sortItems = (listToSort, sortType) => {
    if (sortType === 'cost') return listToSort.sort((a, b) => a.price > b.price ? 1 : -1);
    if (sortType === 'popularity') return listToSort.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    if (sortType === 'alphabet') return listToSort.sort((a, b) => a.name > b.name ? 1 : -1);
    return listToSort
}

const createCartPizza = (state, pizzaId) => {

    let selectedPizza = state.pizzasSettingsMemory.find(({ id }) => id === pizzaId)
    if (!selectedPizza) selectedPizza = state.filterPizzas.find(({ id }) => id === pizzaId)

    return {
        name: selectedPizza.name,
        total: selectedPizza.totalPrice,
        settings: selectedPizza.settings,
        img: selectedPizza.img,
        count: 1,
        id: selectedPizza.id,
    }
}
const isPizzaCartedChecker = (state, newCartedPizza) => {
    const { id, settings: { type, size } } = newCartedPizza

    return state.cartPizzas
        .find((pizza) => pizza.id === id
            && pizza.settings.type === type
            && pizza.settings.size === size)
}

const increaseCartPizza = (state, cartedPizzaId, newPizza) => {
    const newCartCount = state.cartCount + 1
    const newTotal = state.total + newPizza.total
    const updatedList = state.cartPizzas.map((pizza) => {
        if (pizza.id === cartedPizzaId) return (
            {
                ...pizza,
                count: ++pizza.count,
                total: newPizza.total + pizza.total
            }
        )
        return pizza
    })

    return {
        ...state,
        cartPizzas: updatedList,
        total: newTotal,
        cartCount: newCartCount,
        cartPizzasKind: [
            ...state.cartPizzasKind,
            newPizza.name
        ]
    }
}

const decreaseCartPizza = (state, cartedPizzaId, newPizza) => {
    const newCartCount = state.cartCount - 1
    const newTotal = state.total - newPizza.total

    const updatedList = state.cartPizzas
        .map((pizza) => {
            if (pizza.id === cartedPizzaId) {
                return {
                    ...pizza,
                    count: --pizza.count,
                    total: pizza.total - newPizza.total
                }
            }
            return pizza
        })
    const newPizzaKindList = state.cartPizzasKind.map(e => e)
    const indexOfPizzaKind = state.cartPizzasKind.lastIndexOf(newPizza.name)
    if (indexOfPizzaKind > -1) newPizzaKindList.splice(indexOfPizzaKind, 1)

    return {
        ...state,
        cartPizzas: updatedList,
        cartCount: newCartCount,
        total: newTotal,
        cartPizzasKind: newPizzaKindList
    }
}

const deletePizza = (state, deletedPizza, deletedPizzaId) => {
    const newList = state.cartPizzas.filter(({ id }) => id !== deletedPizzaId)
    const newPizzaKindList = state.cartPizzasKind.map(e => e)
    const indexOfPizzaKind = state.cartPizzasKind.indexOf(deletedPizza.name)
    if (indexOfPizzaKind > -1) newPizzaKindList.splice(indexOfPizzaKind, deletedPizza.count)

    return {
        ...state,
        cartPizzas: newList,
        total: state.total - deletedPizza.total,
        cartCount: state.cartCount - deletedPizza.count,
        cartPizzasKind: newPizzaKindList,
    }
}
const reducer = (state = initState, action) => {

    switch (action.type) {

        case 'FETCH_PIZZAS_REQUEST':
            return {
                ...state,
                loader: true,
            }
        case 'FETCH_PIZZAS_SUCCES':
            const pizzas = action.payload
            const filterPizzasList = filterItems(pizzas, state.filter)
            const sortedAndFilteredList = sortItems(filterPizzasList, state.sort)

            return {
                ...state,
                pizzas: pizzas,
                filterPizzas: sortedAndFilteredList,
                loader: false,
            }
        case 'FETCH_PIZZAS_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case 'TYPE_PIZZA_CHOOSE':
            const { id: pizzaIdType } = action.payload
            const { type } = action.payload
            const updatedTypeList = changeThicknessType(state, pizzaIdType, type)

            return {
                ...state,
                filterPizzas: updatedTypeList,
            }
        case 'SIZE_PIZZA_CHOOSE':
            const { id: pizzaIdSize } = action.payload
            const { size } = action.payload
            const updatedSizeList = changeSizeSettings(state, pizzaIdSize, size)
            return {
                ...state,
                filterPizzas: updatedSizeList,
            }

        case 'FILTER_CHANGE':
            const pizzaClass = action.payload
            let listToFilter = state.pizzas
            const filteredList = filterItems(listToFilter, pizzaClass)
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
            const isPizzaCarted = isPizzaCartedChecker(state, newCartedPizza)
            const newPizzaSettings = state.filterPizzas.find(({ id }) => id === actionAddPizzaId)

            if (isPizzaCarted) return increaseCartPizza(state, actionAddPizzaId, newCartedPizza)

            else {
                const newCartCount = state.cartCount + 1
                const newTotal = state.total + newCartedPizza.total
                return {
                    ...state,
                    cartCount: newCartCount,
                    total: newTotal,
                    cartPizzas: [
                        ...state.cartPizzas,
                        newCartedPizza,
                    ],
                    cartPizzasKind: [
                        ...state.cartPizzasKind,
                        newCartedPizza.name
                    ],
                    pizzasSettingsMemory: [
                        ...state.pizzasSettingsMemory,
                        newPizzaSettings
                    ]
                }
            }
        case 'CART_PIZZA_INCREASE':
            const increasePizzaId = action.payload

            const newPizza = createCartPizza(state, increasePizzaId)
            return increaseCartPizza(state, increasePizzaId, newPizza)

        case 'CART_PIZZA_DECREASE': {
            const decreasePizzaId = action.payload
            const newPizza = createCartPizza(state, decreasePizzaId)
            const decreasedPizza = state.cartPizzas.find(({ id }) => id === decreasePizzaId)

            if (decreasedPizza.count <= 1) return deletePizza(state, decreasedPizza, decreasePizzaId)
            return decreaseCartPizza(state, decreasePizzaId, newPizza)
        }

        case 'CART_PIZZA_DELETE': {
            const deletedPizzaId = action.payload;
            const deletedPizza = state.cartPizzas.find(({ id }) => id === deletedPizzaId)

            return deletePizza(state, deletedPizza, deletedPizzaId)
        }

        case 'CART_CLEAR': {
            return {
                ...state,
                cartCount: 0,
                total: 0,
                cartPizzasKind: [],
                pizzasSettingsMemory: [],
                cartPizzas: [],
            }
        }
        default: return state
    }
}

export default reducer