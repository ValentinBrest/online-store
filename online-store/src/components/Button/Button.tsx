import cl from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import React from 'react';

const Button = ({ children, className, onClick, ...props }: ButtonProps): JSX.Element => {
    return (
        <button 
			className={cn(cl.button, className)} 
			onClick={onClick} 
			{...props}
		>
            {children}
        </button>
    );
};

export default Button;