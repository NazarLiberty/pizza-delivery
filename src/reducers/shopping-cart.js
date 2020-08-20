const createCartPizza = (state, pizzaId) => {
    const { pizzaList: { filterPizzas } } = state
    const selectedPizza = filterPizzas.find(({ id }) => id === pizzaId)

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
    const { cartPizzas } = state.shoppingCart
    return cartPizzas
        .find((pizza) => pizza.id === id
            && pizza.settings.type === type
            && pizza.settings.size === size)
}

const increaseCartPizza = (state, cartedPizzaId, pizzaItem) => {
    const { shoppingCart: { cartCount, total, cartPizzas } } = state
    const newCartCount = cartCount + 1
    const pizzaPricePerPiece = pizzaItem.total / pizzaItem.count
    const newTotal = total + pizzaPricePerPiece

    const updatedList = cartPizzas.map((pizza) => {
        if (pizza.id === cartedPizzaId) return (
            {
                ...pizza,
                count: ++pizza.count,
                total: pizzaPricePerPiece + pizza.total
            }
        )
        return pizza
    })

    return {
        ...state.shoppingCart,
        cartPizzas: updatedList,
        total: newTotal,
        cartCount: newCartCount,
        cartPizzasKind: [
            ...state.shoppingCart.cartPizzasKind,
            pizzaItem.name
        ]
    }
}

const decreaseCartPizza = (state, cartedPizzaId, pizzaItem) => {
    const { shoppingCart: { cartCount, total, cartPizzas, cartPizzasKind } } = state

    const newCartCount = cartCount - 1
    const pizzaPricePerPiece = pizzaItem.total / pizzaItem.count
    const newTotal = total - pizzaPricePerPiece

    const updatedList = cartPizzas
        .map((pizza) => {
            if (pizza.id === cartedPizzaId) {
                return {
                    ...pizza,
                    count: --pizza.count,
                    total: pizza.total - pizzaPricePerPiece
                }
            }
            return pizza
        })
    const newPizzaKindList = cartPizzasKind.map(e => e)
    const indexOfPizzaKind = cartPizzasKind.lastIndexOf(pizzaItem.name)
    if (indexOfPizzaKind > -1) newPizzaKindList.splice(indexOfPizzaKind, 1)

    return {
        ...state.shoppingCart,
        cartPizzas: updatedList,
        cartCount: newCartCount,
        total: newTotal,
        cartPizzasKind: newPizzaKindList
    }
}

const deletePizza = (state, deletedPizza, deletedPizzaId) => {
    const { shoppingCart: { cartCount, total, cartPizzas, cartPizzasKind } } = state

    const newList = cartPizzas.filter(({ id }) => id !== deletedPizzaId)
    const newPizzaKindList = cartPizzasKind.map(e => e)
    const indexOfPizzaKind = cartPizzasKind.indexOf(deletedPizza.name)
    if (indexOfPizzaKind > -1) newPizzaKindList.splice(indexOfPizzaKind, deletedPizza.count)

    return {
        ...state.shoppingCart,
        cartPizzas: newList,
        total: total - deletedPizza.total,
        cartCount: cartCount - deletedPizza.count,
        cartPizzasKind: newPizzaKindList,
    }
}


const updateShoppingCart = (state, action) => {


    switch (action.type) {

        case 'CART_PIZZA_ADD':
            const actionAddPizzaId = action.payload
            const newCartedPizza = createCartPizza(state, actionAddPizzaId)
            const isPizzaCarted = isPizzaCartedChecker(state, newCartedPizza)

            if (isPizzaCarted) return increaseCartPizza(state, actionAddPizzaId, newCartedPizza)

            else {
                const newCartCount = state.shoppingCart.cartCount + 1
                const newTotal = state.shoppingCart.total + newCartedPizza.total
                return {
                    ...state.shoppingCart,
                    cartCount: newCartCount,
                    total: newTotal,
                    cartPizzas: [
                        ...state.shoppingCart.cartPizzas,
                        newCartedPizza,
                    ],
                    cartPizzasKind: [
                        ...state.shoppingCart.cartPizzasKind,
                        newCartedPizza.name
                    ],
                }
            }

        case 'CART_PIZZA_INCREASE':
            const { cartPizzas } = state.shoppingCart

            const increaseId = action.payload
            const pizzaToInc = cartPizzas.find(({ id }) => id === increaseId)

            return increaseCartPizza(state, increaseId, pizzaToInc)

        case 'CART_PIZZA_DECREASE': {
            const { cartPizzas } = state.shoppingCart

            const decreasePizzaId = action.payload
            const pizzaToDec = cartPizzas.find(({ id }) => id === decreasePizzaId)

            if (pizzaToDec.count <= 1) return deletePizza(state, pizzaToDec, decreasePizzaId)
            return decreaseCartPizza(state, decreasePizzaId, pizzaToDec)
        }

        case 'CART_PIZZA_DELETE': {
            const { cartPizzas } = state.shoppingCart

            const deletedPizzaId = action.payload;
            const deletedPizza = cartPizzas.find(({ id }) => id === deletedPizzaId)

            return deletePizza(state, deletedPizza, deletedPizzaId)
        }

        case 'CART_CLEAR': {
            return {
                ...state.shoppingCart,
                cartCount: 0,
                total: 0,
                cartPizzasKind: [],
                cartPizzas: [],
            }
        }
        default: return state.shoppingCart
    }
}

export default updateShoppingCart