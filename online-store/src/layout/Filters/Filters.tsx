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
    const [r1Value, setR1Value] = React.useState<number[]>([1, 12]);
    const [r2Value, setR2Value] = React.useState<number[]>([2000, 2022]);

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
        setR1Value([1, 12])
        setR2Value([2000, 2022]);
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
                r1Value={r1Value}
                r2Value={r2Value}
                setR1Value={setR1Value}
                setR2Value={setR2Value}
            />
        </div>
    );
};

export default Filters;