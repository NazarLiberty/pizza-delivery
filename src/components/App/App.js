import React from 'react';
import './App.scss';
import MainPage from '../Pages/MainPage'
import CartPage from '../Pages/CartPage'
import CartFailurePage from '../Pages/CartFailurePage';
import LoginPage from '../Pages/LoginPage'

import { Route } from 'react-router-dom'

const App = () => {
  return <div className="wrapper">
    <Route path="/" component={MainPage} exact />
    <Route path="/cart" component={CartPage} exact />
    <Route path="/cart-empty" component={CartFailurePage} exact />
    <Route path="/cart-login" render={() => <CartFailurePage logout />} exact />
    <Route path="/login" component={LoginPage} exact />
  </div>
}

export default App