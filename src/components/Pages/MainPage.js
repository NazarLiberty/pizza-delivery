import React from 'react'
import Header from '../Header/Header'
import Filter from '../Filter/FilterContainer'
import PizzaList from '../PizzaList/PizzaList'

const MainPage = () => {
    return <>
        <Header />
        <Filter />
        <PizzaList />
    </>
}
export default MainPage