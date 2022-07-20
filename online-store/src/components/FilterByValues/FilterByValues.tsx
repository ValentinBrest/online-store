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
import { State } from '../../interfaces/state.interface';

const myState: State = {
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
type ObjectFilter = keyof typeof myState.filters;
type ObjectName = keyof typeof myState.filters.name;

const FilterByValues = ({ setProducts, date, setState, state, getSort, r1Value, r2Value, setR1Value, setR2Value}: FilterByValuesProps): JSX.Element=> {
        const allFilterClickListener = (name: ObjectName, filterProp: ObjectFilter) => {
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
                if (Array.isArray(product[key as keyof Product] )) {
                    // @ts-ignore
                    return product[key as keyof Product].some((keyEle: string) =>
                        filters[key].includes(keyEle)
                    );
                }
                return filters[key].includes(product[key as keyof Product].toString());
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
                    {filterProducer.map((element) => {
                        return (
                            <Checkbox
                                key={element.id}
                                id={element.id}
                                img={element.img}
                                checked={state.filters.producer[element.id]}
                                onClick={() =>
                                    allFilterClickListener(element.id as ObjectName, 'producer')
                                }
                            />
                        );
                    })}
                </div>
                <div className={cl.cameras}>
                    <span>Количество камер:</span>
                    {filterCameras.map((element) => {
                        return (
                            <Checkbox
                                key={element.id}
                                id={element.id}
                                quantity={element.numberOfCameras}
                                checked={state.filters.numberOfCameras[element.id]}
                                onClick={() =>
                                    allFilterClickListener(
                                        element.numberOfCameras as ObjectName,
                                        'numberOfCameras'
                                    )
                                }
                            />
                        );
                    })}
                </div>
                <div className={cl.color}>
                    <span>Цвет:</span>
                    {filterColor.map((element) => {
                        return (
                            <Checkbox
                                key={element.id}
                                id={element.id}
                                color={element.color}
                                checked={state.filters.color[element.id]}
                                onClick={() =>
                                    allFilterClickListener(element.color as ObjectName, 'color')
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
                                allFilterClickListener(
                                    filterPopular[0].isPopular as ObjectName,
                                    'popular'
                                )
                            }
                        />
                    }
                </div>
            </div>
            <Search enterText={enterText} dafaultValue={state.filters.search.inputTerm} />
            <Sort changeSort={changeSort} />
            <FilterByRanges
                setState={setState}
                r1Value={r1Value}
                r2Value={r2Value}
                setR1Value={setR1Value}
                setR2Value={setR2Value}
            />
        </div>
    );
};

export default FilterByValues;