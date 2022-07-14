import React from 'react';
import cl from './Checkbox.module.css'

const Checkbox = ({id, img, quantity, color}) => {
    const whatColor =
        color == 'white'
            ? cl.label__white
            : color == 'yellow'
            ? cl.label__yellow
            : color == 'red'
            ? cl.label__red
            : color == 'grey'
            ? cl.label__grey
            : '';
	return (
        <>
            <input
                type="checkbox"
                id={id}
                className={`${cl.custom__radio} ${cl.custom__color_radio}`}
            />
            <label htmlFor={id} className={`${whatColor} ${cl.label}`}>
                {quantity ? <span>{quantity}</span> : <img src={img} alt="" />}
            </label>
        </>
    );
};

export default Checkbox;