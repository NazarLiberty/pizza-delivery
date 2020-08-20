import React from 'react'

import CartList from '../CartList/CartList'
import Header from '../Header/Header'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'

const CartPage = ({ emptyCart }) => {

    if (emptyCart) return <Redirect to="/cart-empty" />

    return (
        <>
            <Header simpleHeader />
            <CartList />
        </>
    )
}

const mapStateToProps = ({ shoppingCart: { cartPizzas } }) => {
    return {
        emptyCart: cartPizzas.length === 0
    }
}

export default connect(mapStateToProps)(CartPage)