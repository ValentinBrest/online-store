import React from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';
import cl from './FilterByRanges.module.css';


const FilterByRanges = () => {
    return (
        <div className={cl.filter}>
            <div className={cl.title}>Фильты по диапазону</div>
            <div className={cl.filter__wrap}>
                <RangeSlider min={1} max={12}/>
                <RangeSlider min={2000} max={2022}/>
            </div>
        </div>
    );
    
};

export default FilterByRanges;