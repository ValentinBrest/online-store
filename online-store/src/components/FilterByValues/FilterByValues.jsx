import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import cl from './FilterByValues.module.css';
import {
    filterProducer,
    filterCameras,
    filterColor,
    filterPopular,
} from './../../layout/Filters/filtersType';

const FilterByValues = ({ products }) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
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
                            />
                        );
                    })}
                </div>
                <div className={cl.popular}>
                    <span>Только популярные:</span>
                    {<Checkbox id={filterPopular[0].id} color={filterPopular[0].id} />}
                </div>
            </div>
        </div>
    );
};

export default FilterByValues;