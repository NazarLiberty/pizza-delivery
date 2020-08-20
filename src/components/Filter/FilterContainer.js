import React from 'react'
import './Filter.scss'
import { connect } from 'react-redux'
import Filter from './Filter'
import {
    changeFilter, changeSort,
    toggleSortWindow,
    toggleFilterWindow
} from '../../actions'


const FilterContainer = ({ filter, sort,
    onFilter, onSort,
    sortActive, onToggleSort,
    onToggleFilter, mobileFilterActive }) => {
    let currentSort = sort

    switch (currentSort) {
        case 'popularity': currentSort = 'популярністю'; break;
        case 'cost': currentSort = 'ціною'; break;
        case 'alphabet': currentSort = 'алфавітом'; break;
        default:
            break;
    }

    const filterList = [
        { type: 'all', label: "Всі" },
        { type: 'meat', label: "М'ясні" },
        { type: 'vegetable', label: "Овочеві" },
        { type: 'spicy', label: 'Гострі' }
    ]
    const sortList = [
        { type: 'popularity', label: "Популярністю" },
        { type: 'cost', label: 'Ціною' },
        { type: 'alphabet', label: "Алфавітом" }
    ]

    const sortListRendered = sortList.map((item, idx) => {
        if (sort === item.type) return (
            <li key={idx}
                className="sort__item sort__item--active"
                onClick={() => onSort(item.type)}>
                {item.label}
            </li>
        )
        return <li key={idx}
            className="sort__item"
            onClick={() => onSort(item.type)}>
            {item.label}
        </li>
    });

    const filterListRendered = filterList.map((item, idx) => {
        if (item.type === filter) return (
            <li key={idx}
                onClick={() => onFilter(item.type)}
                className="filter-list__item filter-list__item--active">
                {item.label}
            </li>
        )

        return (
            <li key={idx}
                onClick={() => onFilter(item.type)}
                className="filter-list__item">
                {item.label}
            </li>
        )
    })

    const mobileFilterClass = mobileFilterActive ?
        'filter-container filter-container--active' : 'filter-container'
    const sortListClass = sortActive ?
        'sort__list sort__list--active' : 'sort__list'
    const arrowClass = sortActive ?
        'sort__arrow-disabled' : 'sort__arrow-active'



    return <Filter filterList={filterListRendered}
        sortList={sortListRendered}
        currentSort={currentSort}
        onSort={onSort}
        onToggleSort={onToggleSort}
        arrowClass={arrowClass}
        sortListClass={sortListClass}
        onToggleFilter={onToggleFilter}
        mobileFilterClass={mobileFilterClass} />
}

const mapStateToProps = ({ pizzaList: { filter, sort, sortActive, mobileFilterActive } }) => {
    return { filter, sort, sortActive, mobileFilterActive }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: (filterKey) => dispatch(changeFilter(filterKey)),
        onSort: (sortType) => dispatch(changeSort(sortType)),
        onToggleSort: () => dispatch(toggleSortWindow()),
        onToggleFilter: () => dispatch(toggleFilterWindow())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer) 