import React from 'react';
import './App.scss';
import Header from '../Header/Header'
import Filter from '../Filter/Filter'

const App = () => {
  return <div className="wrapper">
    <Header />
    <Filter />
  </div>
}

export default App