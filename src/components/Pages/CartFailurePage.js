import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import CartFailure from '../CartFailure/CartFailure'
import Header from '../Header/Header'

const CartFailurePage = ({ logout, cartIsEmpty, }) => {

    if (!cartIsEmpty) return <Redirect to='/' />


    return (
        <>
            <Header simpleHeader />
            <CartFailure logout={logout} />
        </>
    )
}

const mapStateToProps = ({ login, shoppingCart: { cartPizzas } }) => {
    return {
        login,
        cartIsEmpty: cartPizzas.length === 0
    }
}

export default connect(mapStateToProps)(CartFailurePage)