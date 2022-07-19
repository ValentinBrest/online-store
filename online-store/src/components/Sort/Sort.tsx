import React from 'react';
import cl from './Sort.module.css';
import { SortProps } from './Sort.props';


const Sort = ({ changeSort }:SortProps): JSX.Element => {
    return (
        <div className={cl.sort}>
            <div className={cl.title}>Сортировка</div>
            <label htmlFor="select"></label>
            <select name="sort" id="select" onChange={(e) => changeSort(e)}>
                <option value="" >По умолчанию</option>
                <option value="A">По названию, от А до Я</option>
                <option value="Я">По названию, от Я до А</option>
                <option value="yearIncr">По году, по возрастанию</option>
                <option value="yearDecr">По году, по убыванию</option>
                <option value="quanIncr">По количеству, по возрастанию</option>
                <option value="quanDecr">По количеству, по убыванию</option>
            </select>
        </div>
    );
};

export default Sort;