import React, { useEffect } from 'react';
import {
    fromLessQuant, fromMoreQuant, fromOldYear,
    fromYoungYear, sortFromA,
    sortFromZ
} from '../../utils/filterBy';
import Checkbox from '../Checkbox/Checkbox';
import FilterByRanges from '../FilterByRanges/FilterByRanges';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import {
    filterCameras,
    filterColor,
    filterPopular, filterProducer
} from '../../layout/Filters/filtersType';
import cl from './FilterByValues.module.css';
import { CollectedKeys, FilterByValuesProps } from './FilterByValues.props';
import { Product } from '../../interfaces/product.interface';

const FilterByValues = ({ setProducts, date, setState, state, getSort }: FilterByValuesProps): JSX.Element=> {
    const allFilterClickListener = (name: string, filterProp: string) => {
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
        const collectedTrueKeys: CollectedKeys = {
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
            if (numberOfCameras[numberOfCamerasKey])
                collectedTrueKeys.numberOfCameras.push(numberOfCamerasKey);
        }
        for (let colorKey in color) {
            if (color[colorKey]) collectedTrueKeys.color.push(colorKey);
        }
        for (let popularKey in popular) {
            if (popular[popularKey]) collectedTrueKeys.popular.push(popularKey);
        }
        return collectedTrueKeys;
    };

    const multiPropsFilter = (products: Product[], filters: CollectedKeys) => {
        const filterKeys: string[] = Object.keys(filters);
        const res = products.filter((product) => {
            return filterKeys.every((key) => {
                if (!filters[key].length) return true;
                if (Array.isArray(product[key])) {
                    return product[key].some((keyEle: any) => filters[key].includes(keyEle));
                }
                return filters[key].includes(product[key]);
            });
        });
        setProducts(res);
        return res;
    };

    const enterText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            filters: {
                ...prevState.filters,
                search: {
                    inputTerm: e.target.value.toLowerCase(),
                },
            },
        }));
    };

    const changeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        getSort(e.target.value);
        setState((prevState) => ({
            filters: {
                ...prevState.filters,
                sort: {
                    sortBy: e.target.value,
                },
            },
        }));
    };

    const sortProducts = (value: string, arrSort: Product[]) => {
        switch (value) {
            case 'A':
                return [...sortFromA(arrSort)];
            case 'Я':
                return [...sortFromZ(arrSort)];
            case 'yearIncr':
                return [...fromOldYear(arrSort)];
            case 'yearDecr':
                return [...fromYoungYear(arrSort)];
            case 'quanIncr':
                return [...fromLessQuant(arrSort)];
            case 'quanDecr':
                return [...fromMoreQuant(arrSort)];
            default:
                return arrSort;
        }
    };

    const changeRange = (arr: Product[]) => {
        return arr.filter(
            (item) => {
                if (
                    Array.isArray(state.filters.range.quantityInStock) &&
                    Array.isArray(state.filters.range.yearOfRelease)
                ) {
                    return (
                        item.quantity >= state.filters.range.quantityInStock[0] &&
                        item.quantity <= state.filters.range.quantityInStock[1] &&
                        item.yearOfRelease >= state.filters.range.yearOfRelease[0] &&
                        item.yearOfRelease <= state.filters.range.yearOfRelease[1]
                    );
                }
            }
        );
    };

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
        searchProducts();
        localStorage.setItem('state', JSON.stringify({ state }));
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
                                checked={state.filters.producer[filterProducer[i].id]}
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
                                checked={state.filters.numberOfCameras[filterCameras[i].id]}
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
                                checked={state.filters.color[filterColor[i].id]}
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
                            checked={state.filters.popular.isPopular}
                            onClick={() =>
                                allFilterClickListener(filterPopular[0].isPopular, 'popular')
                            }
                        />
                    }
                </div>
            </div>
            <Search enterText={enterText} dafaultValue={state.filters.search.inputTerm} />
            <Sort changeSort={changeSort} />
            <FilterByRanges setState={setState} />
        </div>
    );
};

export default FilterByValues;