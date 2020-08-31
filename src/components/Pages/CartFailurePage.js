import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import CartFailure from '../CartFailure/CartFailure'
import Header from '../Header/Header'

const CartFailurePage = ({ logout, cartIsEmpty, }) => {



    return (
        <>
            <Header simpleHeader />
            <CartFailure logout={logout} />
        </>
    )
}

const mapStateToProps = ({ shoppingCart: { cartPizzas } }) => {
    return {
        cartIsEmpty: cartPizzas.length === 0
    }
}

export default connect(mapStateToProps)(CartFailurePage)