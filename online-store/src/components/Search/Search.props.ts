import { DetailedHTMLProps, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

export interface SearchProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    enterText: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dafaultValue: string;
}
