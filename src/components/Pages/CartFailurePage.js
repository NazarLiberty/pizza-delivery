import React from 'react'

import CartFailure from '../CartFailure/CartFailure'
import Header from '../Header/Header'

const CartFailurePage = ({ logout }) => {
    return (
        <>
            <Header simpleHeader />
            <CartFailure logout={logout} />
        </>
    )
}

export default CartFailurePage