import React from 'react';
import Slider from '@mui/material/Slider';
import cl from './RangeSlider.module.css'
import { RangeSliderProps } from './RangeSlider.props';



const RangeSlider = ({ min, max, rangeBy, getRange, rValue, setRValue }:RangeSliderProps): JSX.Element => {
    const handleChange = (event: Event, newValue: number | number[]): void => {
        setRValue(newValue as number[]);
        getRange(rangeBy, newValue);
    };

    return (
        <div className={cl.range}>
            <div className={cl.valueLeft}>{rValue[0]}</div>
            <Slider
                min={min}
                max={max}
                value={rValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
            <div className={cl.valueRight}>{rValue[1]}</div>
        </div>
    );
};

export default RangeSlider;