import React from 'react'
import './Filter.scss'

const Filter = ({ filterList, sortList,
    currentSort, onToggleSort,
    arrowClass, sortListClass,
    onToggleFilter, mobileFilterClass }) => {

    return <>
        <section className="filter__mobile-trigger"
            onClick={onToggleFilter}>
            Настройки пошуку
    </section>
        <section className={mobileFilterClass} >

            <ul className="filter__filter-list">
                {filterList}
            </ul>
            <section className="filter__sort " onClick={onToggleSort}>
                <img src="./sort-arrow.svg" className={arrowClass} />
                <p className="filter__sort-text">
                    Сортувати за:
                <span className="filter__sort-type" > {currentSort}</span></p>
                <ul className={sortListClass}>
                    {sortList}
                </ul>
            </section>
        </section>
    </>
}



export default Filter