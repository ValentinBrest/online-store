import { DetailedHTMLProps, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

export interface SortProps
    extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    changeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
