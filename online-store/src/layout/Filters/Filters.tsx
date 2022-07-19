import React from 'react';
import Button from '../../components/Button/Button';
import FilterByValues from '../../components/FilterByValues/FilterByValues';
import cl from './Filters.module.css';
import { useState } from 'react';
import { FilterProps } from './Filter.props';

const Filters = ({ setProducts, date }: FilterProps): JSX.Element => {
    const defaultState = {
        filters: {
            sort: {
                sortBy: '',
            },
            search: {
                inputTerm: '',
            },
            range: {
                quantityInStock: [1, 12],
                yearOfRelease: [2000, 2022],
            },
            producer: {
                Apple: false,
                Samsung: false,
                Xiaomi: false,
            },
            numberOfCameras: {
                1: false,
                2: false,
                3: false,
            },
            color: {
                white: false,
                yellow: false,
                red: false,
            },
            popular: {
                isPopular: false,
            },
        },
    };
    // @ts-ignore
    const localState = JSON.parse(localStorage.getItem('state'))?.state;
    const [state, setState] = useState(localState || defaultState);
    const [sort, setSort] = useState<string>('');

    const getSort = (value: string) => {
        setSort(value);
    };

    const resetFilters = () => {
        setState({
            filters: {
                ...defaultState.filters,
                sort: { sortBy: sort },
            },
        });
    };

    const resetSettings = () => {
        delete localStorage.state;
    };

    return (
        <div className={cl.filters}>
            <Button className={cl.button} onClick={() => resetFilters()}>
                Сброс фильтров
            </Button>
            <Button className={cl.button} onClick={() => resetSettings()}>
                Сброс настроек
            </Button>
            <FilterByValues
                setProducts={setProducts}
                date={date}
                state={state}
                setState={setState}
                getSort={getSort}
            />
        </div>
    );
};

export default Filters;