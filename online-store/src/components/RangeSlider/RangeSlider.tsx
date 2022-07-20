import React from 'react';
import Slider from '@mui/material/Slider';
import cl from './RangeSlider.module.css'
import { RangeSliderProps } from './RangeSlider.props';



const RangeSlider = ({ min, max, rangeBy, getRange }:RangeSliderProps): JSX.Element => {
    const [value, setValue] = React.useState<number[]>([min, max]);
    const handleChange = (event: Event, newValue: number | number[]): void => {
        setValue(newValue as number[]);
        getRange(rangeBy, newValue);
    };

    return (
        <div className={cl.range}>
            <div className={cl.valueLeft}>{value[0]}</div>
            <Slider
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
            <div className={cl.valueRight}>{value[1]}</div>
        </div>
    );
};

export default RangeSlider;