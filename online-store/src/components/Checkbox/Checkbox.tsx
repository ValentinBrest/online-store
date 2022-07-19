import React from 'react';
import cl from './Checkbox.module.css'
import { CheckboxProps } from './Checkbox.props';
import cn from 'classnames';

const Checkbox = ({ id, img, quantity, color, isPopular, onClick, checked }: CheckboxProps): JSX.Element => {
    return (
        <>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                className={cn(cl.custom__radio, cl.custom__color_radio)}
                onClick={onClick}
            />
            <label
                htmlFor={id}
                className={cn(cl.label, {
                    [cl.label__white]: color == 'white',
                    [cl.label__yellow]: color == 'yellow',
                    [cl.label__red]: color == 'red',
                    [cl.label__grey]: isPopular == 'isPopular',
                })}
            >
                {quantity ? <span>{quantity}</span> : <img src={img} alt="color" />}
            </label>
        </>
    );
};

export default Checkbox;