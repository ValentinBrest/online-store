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

const FilterByValues = ({ products, setProducts, date }) => {
    const [curProducts, setCurProducts] = useState(products);

    const [popular, setPopular] = useState(false);
    const [colors, setColors] = useState([]);
    const [cameras, setCameras] = useState([]);
    const [producers, setProducers] = useState([]);

    const chooseProducer = (name) => {
        if (producers.includes(name)) {
            let index = producers.findIndex((prod) => prod === name);
            let allProducers = [...producers];
            allProducers.splice(index, 1);
            setProducers(allProducers);
            if (allProducers.length) {
                setProducts(
                    curProducts.filter((item) => item && allProducers.includes(item.producer))
                );
            } else {
                setProducts(curProducts);
            }
        } else {
            setProducers((prevState) => [...prevState, name]);
            setCurProducts(products);
            setProducts(
                curProducts.filter(
                    (item) => item.producer === name || producers.includes(item.producer)
                )
            );
        }
    };

    const chooseCameras = (q) => {
        if (cameras.includes(q)) {
            let index = cameras.findIndex((camera) => camera === q);
            let allCameras = [...cameras];
            allCameras.splice(index, 1);
            setCameras(allCameras);
            if (allCameras.length) {
                setProducts(
                    curProducts.filter((item) => item && allCameras.includes(item.numberOfCameras))
                );
            } else {
                setProducts(curProducts);
            }
        } else {
            setCameras((prevState) => [...prevState, q]);
            setProducts(
                curProducts.filter(
                    (item) => item.numberOfCameras === q || cameras.includes(item.numberOfCameras)
                )
            );
        }
    }

    const chooseColor = (id) => {
        if (colors.includes(id)) {
            let index = colors.findIndex(color => color === id);
            let allColor = [...colors]
            allColor.splice(index, 1);
            setColors(allColor);
            if (allColor.length) {
                setProducts(curProducts.filter((item) => item && allColor.includes(item.color)));
            } else {
                setProducts(curProducts);
            }
        } else {
            setColors((prevState) => [...prevState, id]);
            setProducts(
                curProducts.filter((item) => item.color === id || colors.includes(item.color))
            );
        }
    }

    const onlyPopular = () => {
        
        if (!popular) {
            setProducts( products.filter((item) => item.isPopular))
            setCurProducts(products)
            setPopular(true)
        } else {
            setCurProducts(products);
            setProducts(curProducts);
            setPopular(false);
        }
    }   
    
    useEffect(() => console.log(curProducts), [curProducts]);

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
                                onClick={() => chooseProducer(filterProducer[i].id)}
                            />
                        );
                    })}
                </div>
                <div className={cl.cameras}>
                    <span>Количество камер:</span>
                    {filterProducer.map((_, i) => {
                        return (
                            <Checkbox
                                key={filterCameras[i].id}
                                id={filterCameras[i].id}
                                quantity={filterCameras[i].quantity}
                                onClick={() => chooseCameras(filterCameras[i].quantity)}
                            />
                        );
                    })}
                </div>
                <div className={cl.color}>
                    <span>Цвет:</span>
                    {filterProducer.map((_, i) => {
                        return (
                            <Checkbox
                                key={filterColor[i].id}
                                id={filterColor[i].id}
                                color={filterColor[i].color}
                                onClick={() => chooseColor(filterColor[i].id)}
                            />
                        );
                    })}
                </div>
                <div className={cl.popular}>
                    <span>Только популярные:</span>
                    {
                        <Checkbox
                            id={filterPopular[0].id}
                            color={filterPopular[0].id}
                            onClick={() => onlyPopular()}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default FilterByValues;