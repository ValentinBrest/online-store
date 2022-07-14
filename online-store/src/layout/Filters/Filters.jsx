import React from 'react';
import Button from '../../components/Button/Button';
import FilterByRanges from '../../components/FilterByRanges/FilterByRanges';
import FilterByValues from '../../components/FilterByValues/FilterByValues';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';
import cl  from './Filters.module.css';

const Filters = ({ setProducts, date, products}) => {
    return (
        <div className={cl.filters}>
            <Button className={cl.button}>Сброс фильтров</Button>
            <Button className={cl.button}>Сброс настроек</Button>
            <FilterByValues products={products} />
            <FilterByRanges />
            <Search setProducts={setProducts} date={date} />
            <Sort setProducts={setProducts} date={date} />
        </div>
    );
};

export default Filters;