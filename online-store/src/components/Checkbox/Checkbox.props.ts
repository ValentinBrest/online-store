import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id: string;
    checked: boolean;
    img?: string;
    quantity?: string;
    color?: string;
    isPopular?: string;
}
