import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id: string;
    img?: string;
    quantity: number;
    color: string;
    isPopular: string;
}
