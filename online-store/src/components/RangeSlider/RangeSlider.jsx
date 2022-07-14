import React from 'react';
import Slider from '@mui/material/Slider';
import cl from './RangeSlider.module.css'



const RangeSlider = ({min, max}) => {
	 const [value, setValue] = React.useState([min, max]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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