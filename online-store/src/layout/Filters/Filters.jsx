import React from 'react';
import Button from '../../components/Button/Button';
import FilterByValues from '../../components/FilterByValues/FilterByValues';
import cl from './Filters.module.css';

const Filters = ({ setProducts, date}) => {
    return (
        <div className={cl.filters}>
            <Button className={cl.button}>Сброс фильтров</Button>
            <Button className={cl.button}>Сброс настроек</Button>
            <FilterByValues  setProducts={setProducts} date={date} />
        </div>
    );
};

export default Filters;