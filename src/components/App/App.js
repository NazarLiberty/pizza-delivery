import React from 'react';
import './App.scss';
import Header from '../Header/Header'
import Filter from '../Filter/FilterContainer'
import PizzaList from '../PizzaList/PizzaList';

const App = () => {
  return <div className="wrapper">
    <Header />
    <Filter />
    <PizzaList>

    </PizzaList>
  </div>
}

export default App