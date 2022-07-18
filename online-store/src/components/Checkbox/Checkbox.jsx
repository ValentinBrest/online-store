import React from 'react';
import cl from './Checkbox.module.css'

const Checkbox = ({id, img, quantity, color, isPopular, onClick, checked}) => {
    const whatColor =
        color == 'white'
            ? cl.label__white
            : color == 'yellow'
            ? cl.label__yellow
            : color == 'red'
            ? cl.label__red
            : isPopular == 'isPopular'
            ? cl.label__grey
            : '';
	return (
        <>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                className={`${cl.custom__radio} ${cl.custom__color_radio}`}
            />
            <label htmlFor={id} className={`${whatColor} ${cl.label}`} onClick={onClick}>
                {quantity ? <span>{quantity}</span> : <img src={img} alt="" />}
            </label>
        </>
    );
};

export default Checkbox;