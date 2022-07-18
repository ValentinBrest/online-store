import React from 'react';
import Slider from '@mui/material/Slider';
import cl from './RangeSlider.module.css'



const RangeSlider = ({ min, max, rangeBy, getRange }) => {
    const [value, setValue] = React.useState([min, max]);
    const handleChange = (event, newValue) => {
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
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
            <div className={cl.valueRight}>{value[1]}</div>
        </div>
    );
};

export default RangeSlider;