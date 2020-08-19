
const initState = {
    pizzas: [],
    cartPizzas: [],
    filterPizzas: [],
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
    if (filter === 'all') return listToFilter
    return listToFilter.filter((pizza) => pizza.class.includes(filter))
}

const sortItems = (listToSort, sortType) => {
    if (sortType === 'cost') return listToSort.sort((a, b) => a.price > b.price ? 1 : -1);
    if (sortType === 'popularity') return listToSort.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    if (sortType === 'alphabet') return listToSort.sort((a, b) => a.name > b.name ? 1 : -1);
    return listToSort
}

const createCartPizza = (state, pizzaId) => {
    const selectedPizza = state.filterPizzas.find(({ id }) => id === pizzaId)
    const { settings: { type, size }, id } = selectedPizza

    return {
        name: selectedPizza.name,
        total: selectedPizza.totalPrice,
        settings: selectedPizza.settings,
        img: selectedPizza.img,
        count: 1,
        id: `${id}${type}${size}`,
        initId: id,
    }
}
const isPizzaCartedChecker = (state, newCartedPizza) => {
    const { id, settings: { type, size } } = newCartedPizza

    return state.cartPizzas
        .find((pizza) => pizza.id === id
            && pizza.settings.type === type
            && pizza.settings.size === size)
}

const increaseCartPizza = (state, newCartedPizza) => {
    const newCartCount = state.cartCount + 1
    const newTotal = state.total + newCartedPizza.total

    const updatedList = state.cartPizzas.map((pizza) => {
        if (pizza.id === newCartedPizza.id) return (
            {
                ...pizza,
                count: ++pizza.count,
                total: newCartedPizza.total + pizza.total
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
            newCartedPizza.initId
        ]
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

            if (isPizzaCarted) return increaseCartPizza(state, newCartedPizza)

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
                        newCartedPizza.initId
                    ]
                }
            }
        case 'CART_PIZZA_INCREASE':
            console.log(action.payload)
        default: return state
    }
}

export default reducer