import React from 'react';
import './App.scss';
import MainPage from '../Pages/MainPage'
import CartPage from '../Pages/CartPage'
import CartFailurePage from '../Pages/CartFailurePage';

import { Route } from 'react-router-dom'

const App = () => {
  return <div className="wrapper">
    <Route path="/" component={MainPage} exact />
    <Route path="/cart" component={CartPage} exact />
    <Route path="/cart-failure" component={CartFailurePage} exact />
  </div>
}

export default App