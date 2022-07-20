import React from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';
import cl from './FilterByRanges.module.css';
import { FilterByRangesProps } from './FilterByRanges.props';


const FilterByRanges = ({ setState }: FilterByRangesProps): JSX.Element => {
    const getRange = (rangeBy: string, newValue: number[] | number) => {
        if (rangeBy === 'quantity') {
            setState((prevState) => ({
                filters: {
                    ...prevState.filters,
                    range: {
                        ...prevState.filters.range,
                        quantityInStock: newValue,
                    },
                },
            }));
        } else if (rangeBy === 'year') {
            setState((prevState) => ({
                filters: {
                    ...prevState.filters,
                    range: {
                        ...prevState.filters.range,
                        yearOfRelease: newValue,
                    },
                },
            }));
        }
    };
    return (
        <div className={cl.filter}>
            <div className={cl.title}>Фильты по диапазону</div>
            <div className={cl.filter__wrap}>
                <div className={cl.subtitle}>Количество на складе:</div>
                <RangeSlider min={1} max={12} getRange={getRange} rangeBy={'quantity'} />
                <div className={cl.subtitle}>Год выхода на рынок:</div>
                <RangeSlider min={2000} max={2022} getRange={getRange} rangeBy={'year'} />
            </div>
        </div>
    );
};

export default FilterByRanges;