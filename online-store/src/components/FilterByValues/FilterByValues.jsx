import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import cl from './FilterByValues.module.css';
import {
    filterProducer,
    filterCameras,
    filterColor,
    filterPopular,
} from './../../layout/Filters/filtersType';
import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import FilterByRanges from '../FilterByRanges/FilterByRanges';
import {
    sortFromA,
    sortFromZ,
    fromMoreQuant,
    fromLessQuant,
    fromOldYear,
    fromYoungYear,
} from '../../utils/filterBy.js';

const FilterByValues = ({ products, setProducts, date }) => {
    const [state, setState] = useState({
        filters: {
            sort: {
                sortBy: ''
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
    });

    const allFilterClickListener = (name, filterProp) => {
        setState((prevState) => ({
            filters: {
                ...prevState.filters,
                [filterProp]: {
                    ...prevState.filters[filterProp],
                    [name]: !prevState.filters[filterProp][name],
                },
            },
        }));
    };

    const filteredCollected = () => {
        const collectedTrueKeys = {
            producer: [],
            numberOfCameras: [],
            color: [],
            popular: [],
        };
        const { producer, numberOfCameras, color, popular } = state.filters;
        for (let producerKey in producer) {
            if (producer[producerKey]) collectedTrueKeys.producer.push(producerKey);
        }
        for (let numberOfCamerasKey in numberOfCameras) {
            if (numberOfCameras[numberOfCamerasKey]) collectedTrueKeys.numberOfCameras.push(numberOfCamerasKey);
        }
        for (let colorKey in color) {
            if (color[colorKey]) collectedTrueKeys.color.push(colorKey);
        }
        for (let popularKey in popular) {
            if (popular[popularKey]) collectedTrueKeys.popular.push(popularKey);
        }
        return collectedTrueKeys;
    };

    const multiPropsFilter = (products, filters) => {
        const filterKeys = Object.keys(filters);
        const res = products.filter((product) => {
            return filterKeys.every((key) => {
                if (!filters[key].length) return true;
                if (Array.isArray(product[key])) {
                    return product[key].some((keyEle) => filters[key].includes(keyEle));
                }
                return filters[key].includes(product[key]);
            });
        });
        setProducts(res);
        return res;
    };

    const enterText = (e) => {
        setState((prevState) => ({
            filters: {
                ...prevState.filters,
                search: {
                    inputTerm: e.target.value.toLowerCase(),
                },
            },
        }));
    }

    const changeSort = (e) => {
        setState((prevState) => ({
            filters: {
                ...prevState.filters,
                sort: {
                    sortBy: e.target.value,
                },
            },
        }));
    };

    const sortProducts = (value, arrSort) => {
            switch (value) {
                case 'A':
                    return([...sortFromA(arrSort)]);
                case 'Я':
                    return([...sortFromZ(arrSort)]);
                case 'yearIncr':
                    return([...fromOldYear(arrSort)]);
                case 'yearDecr':
                    return([...fromYoungYear(arrSort)]);
                case 'quanIncr':
                    return([...fromLessQuant(arrSort)]);
                case 'quanDecr':
                    return([...fromMoreQuant(arrSort)]);
                default:
                    return arrSort
            }
    }

    const changeRange = (arr) => {
        return arr.filter(
            (item) =>
                item.quantity >= state.filters.range.quantityInStock[0] &&
                item.quantity <= state.filters.range.quantityInStock[1] &&
                item.yearOfRelease >= state.filters.range.yearOfRelease[0] &&
                item.yearOfRelease <= state.filters.range.yearOfRelease[1]
        );
    }

    const searchProducts = () => {
        const filteredProducts = multiPropsFilter(date, filteredCollected());
        const filtredSort = sortProducts(state.filters.sort.sortBy, filteredProducts);
        const filtredRange = changeRange(filtredSort);
        setProducts(
            filtredRange.filter((product) => {
                return product.title.toLowerCase().includes(state.filters.search.inputTerm);
            })
        );
    };

    

    useEffect(() => {
        searchProducts()
        console.log(state)
    }, [state]);

    return (
        <div className={cl.filter}>
            <div className={cl.title}>Фильты по значению</div>
            <div className={cl.filter__wrap}>
                <div className={cl.producer}>
                    <span>Производитель:</span>
                    {filterProducer.map((_, i) => {
                        return (
                            <Checkbox
                                key={filterProducer[i].id}
                                id={filterProducer[i].id}
                                img={filterProducer[i].img}
                                onClick={() =>
                                    allFilterClickListener(filterProducer[i].id, 'producer')
                                }
                            />
                        );
                    })}
                </div>
                <div className={cl.cameras}>
                    <span>Количество камер:</span>
                    {filterCameras.map((_, i) => {
                        return (
                            <Checkbox
                                key={filterCameras[i].id}
                                id={filterCameras[i].id}
                                quantity={filterCameras[i].numberOfCameras}
                                onClick={() =>
                                    allFilterClickListener(
                                        filterCameras[i].numberOfCameras,
                                        'numberOfCameras'
                                    )
                                }
                            />
                        );
                    })}
                </div>
                <div className={cl.color}>
                    <span>Цвет:</span>
                    {filterColor.map((_, i) => {
                        return (
                            <Checkbox
                                key={filterColor[i].id}
                                id={filterColor[i].id}
                                color={filterColor[i].color}
                                onClick={() =>
                                    allFilterClickListener(filterColor[i].color, 'color')
                                }
                            />
                        );
                    })}
                </div>
                <div className={cl.popular}>
                    <span>Только популярные:</span>
                    {
                        <Checkbox
                            id={filterPopular[0].id}
                            isPopular={filterPopular[0].isPopular}
                            onClick={() =>
                                allFilterClickListener(filterPopular[0].isPopular, 'popular')
                            }
                        />
                    }
                </div>
            </div>
            <Search enterText={enterText} />
            <Sort changeSort={changeSort} />
            <FilterByRanges setState={setState} />
        </div>
    );
};

export default FilterByValues;