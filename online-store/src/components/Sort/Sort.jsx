import React from 'react';
import cl from './Sort.module.css';
import {
    sortFromA,
    sortFromZ, 
	fromMoreQuant,
    fromLessQuant,
    fromOldYear,
    fromYoungYear,
} from '../../utils/filterBy.js';

const Sort = ({ setProducts, date}) => {
    const handleChange = (event) => {
		switch (event.target.value) {
            case 'A':
                setProducts([...sortFromA(date)]);
                break;
            case 'Я':
                setProducts([...sortFromZ(date)]);
                break;
            case 'yearIncr':
                setProducts([...fromOldYear(date)]);
                break;
            case 'yearDecr':
                setProducts([...fromYoungYear(date)]);
                break;
            case 'quanIncr':
                setProducts([...fromLessQuant(date)]);
                break;
            case 'quanDecr':
                setProducts([...fromMoreQuant(date)]);
                break;
        }
    }

    return (
        <div className={cl.sort}>
            <div className={cl.title}>Сортировка</div>
            <label for="select"></label>
            <select name="sort" id="select" onChange={handleChange}>
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