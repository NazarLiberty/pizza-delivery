import updatePizzaList from './pizza-list'
import updateShoppingCart from './shopping-cart'

const initState = {
    mobileMenuActive: false,
    shoppingCart: {
        cartPizzas: [],
        cartCount: 0,
        total: 0,
        cartPizzasKind: [],
    },
    pizzaList: {
        pizzas: [],
        filterPizzas: [],
        filter: "all",
        sort: "popularity",
        sortActive: false,
        mobileFilterActive: false,
        loader: true,
        error: null,
    }
}




const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'MOBILE_MENU_TOGGLE':
            return {
                ...state,
                mobileMenuActive: !state.mobileMenuActive
            }
        default:
            return {
                ...state,
                pizzaList: updatePizzaList(state, action),
                shoppingCart: updateShoppingCart(state, action)
            }
    }
}

export default reducer

