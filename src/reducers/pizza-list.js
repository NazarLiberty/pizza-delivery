const changeThicknessType = (state, id, type) => {
    const { pizzaList: { filterPizzas } } = state
    return filterPizzas.map((pizza) => {
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
    const { pizzaList: { filterPizzas } } = state
    return filterPizzas.map((pizza) => {
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




const updatePizzaList = (state, action) => {

    switch (action.type) {

        case 'FETCH_PIZZAS_REQUEST':
            return {
                ...state.pizzaList,
                loader: true,
            }
        case 'FETCH_PIZZAS_SUCCES':
            const pizzas = action.payload
            const { sort, filter } = state.pizzaList
            const filterPizzasList = filterItems(pizzas, filter)
            const sortedAndFilteredList = sortItems(filterPizzasList, sort)

            return {
                ...state.pizzaList,
                pizzas: pizzas,
                filterPizzas: sortedAndFilteredList,
                loader: false,
            }
        case 'FETCH_PIZZAS_FAILURE':
            return {
                ...state.pizzaList,
                error: action.payload
            }
        case 'TYPE_PIZZA_CHOOSE':
            const { id: pizzaIdType } = action.payload
            const { type } = action.payload
            const updatedTypeList = changeThicknessType(state, pizzaIdType, type)

            return {
                ...state.pizzaList,
                filterPizzas: updatedTypeList,
            }
        case 'SIZE_PIZZA_CHOOSE':
            const { id: pizzaIdSize } = action.payload
            const { size } = action.payload
            const updatedSizeList = changeSizeSettings(state, pizzaIdSize, size)
            return {
                ...state.pizzaList,
                filterPizzas: updatedSizeList,
            }

        case 'FILTER_CHANGE':
            const pizzaClass = action.payload
            let listToFilter = state.pizzaList.pizzas
            const filteredList = filterItems(listToFilter, pizzaClass)
            return {
                ...state.pizzaList,
                filter: pizzaClass,
                filterPizzas: filteredList
            }
        case 'SORT_CHANGE':
            const sortType = action.payload;
            const listToSort = state.pizzaList.filterPizzas.map((e) => e)
            const sortedItems = sortItems(listToSort, sortType)
            return {
                ...state.pizzaList,
                sort: sortType,
                filterPizzas: sortedItems
            }
        case 'SORT_TOGGLE':
            const { sortActive } = state.pizzaList
            return {
                ...state.pizzaList,
                sortActive: !sortActive
            }
        case 'MOBILE_FILTER_TOGGLE':
            const { mobileFilterActive } = state.pizzaList
            return {
                ...state.pizzaList,
                sortActive: false,
                mobileFilterActive: !mobileFilterActive
            }

        default: return state.pizzaList
    }
}

export default updatePizzaList