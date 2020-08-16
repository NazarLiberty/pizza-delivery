import React, { useRef, useEffect } from 'react'
import './Filter.scss'

const Filter = () => {
    const sortButton = useRef(null);
    useEffect(() => {
        console.log(sortButton)
    }, [])
    return <>
        <section className="filter__mobile-trigger">
            Sort & filter
    </section>
        <section className="filter-container" >

            <ul className="filter__filter-list">
                <li className="filter-list__item">All</li>
                <li className="filter-list__item">Meat</li>
                <li className="filter-list__item">Vegitables</li>
                <li className="filter-list__item filter-list__item--active">Spicy</li>
            </ul>
            <section className="filter__sort">
                <img src="./sort-arrow.svg" /> <p className="filter__sort-text">Sort by:
            <span className="filter__sort-type"> popularity</span></p>
                <ul className="sort__list">
                    <li className="sort__item sort__item--active">popularity</li>
                    <li className="sort__item">cost</li>
                    <li className="sort__item">alphabet</li>
                </ul>
            </section>
        </section>
    </>
}

export default Filter 