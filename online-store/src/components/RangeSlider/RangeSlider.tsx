import React from 'react';
import Slider from '@mui/material/Slider';
import cl from './RangeSlider.module.css'
import { RangeSliderProps } from './RangeSlider.props';



const RangeSlider = ({ min, max, rangeBy, getRange }:RangeSliderProps): JSX.Element => {
    const [value, setValue] = React.useState([min, max]);
    const handleChange = (event: Event, newValue: number[]):void => {
        setValue(newValue);
        getRange(rangeBy, newValue[0], newValue[1]);
    };

    return (
        <div className={cl.range}>
            <div className={cl.valueLeft}>{value[0]}</div>
            <Slider
                min={min}
                max={max}
                value={value}
                // onChange={handleChange}
                valueLabelDisplay="auto"
            />
            <div className={cl.valueRight}>{value[1]}</div>
        </div>
    );
};

export default RangeSlider;