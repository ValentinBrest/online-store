import React from 'react';
import cl from './Button.module.css'

const Button = ({children, className, onClick}) => {
	return <button className={`${cl.button} ${className}`} onClick={onClick}>{children}</button>;
};

export default Button;